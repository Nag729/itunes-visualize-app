import os
from flask import Flask, render_template, request, jsonify, make_response
import werkzeug
from datetime import datetime

import pandas as pd
import xml.etree.ElementTree as et

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")

UPLOAD_FOLDER = './uploads'
app.config['MAX_CONTENT_LENGTH'] = 30 * 1024 * 1024
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


# ルートpath
# アプリ起動時にアクセスされて、Reactのトップページを表示する
@app.route('/')
def index():
    return render_template("index.html")

# ファイルアップロード時に呼び出されるREST
# 受け取ったXMLファイルをparse -> JSON化までしてクライアントに返す
@app.route('/api/upload', methods=['POST'])
def upload():

    # ファイルがない場合
    if 'file' not in request.files:
        msg = 'ファイルがありません'
        return make_response(jsonify(msg))

    # データの取り出し
    file = request.files['file']
    fileName = file.filename

    # ファイル名がない場合
    if fileName == '':
        msg = 'ファイルがありません'
        return make_response(jsonify(msg))

    # ファイルの保存
    saveName = datetime.now().strftime("%Y%m%d_%H%M%S_") + \
        werkzeug.utils.secure_filename(fileName)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], saveName))

    # 取得したXMLファイルを元にパースするJSONをjsonFileにセット
    df = parseXmlToDf(saveName)
    df.to_pickle("./pickles" + saveName + ".pkl")
    jsonFile = parseDfToJson(df)

    return jsonify(jsonFile)


# アップロードされたXMLファイルをパースしてJSON形式で返す関数
def parseXmlToDf(fileName):

    # アップロードされたファイルデータをパース
    tree = et.parse("./uploads/" + fileName)

    # 要素取得：Xpath指定
    information = tree.findall("dict/dict/dict")

    if len(information) == 0:
        msg = 'XMLファイルの形式が正しくありません'
        return msg

    song_info = []

    # information > song > elementでdict中の各要素に対して処理
    for song in information:
        song_info_dict = {}
        key = ""
        for element in song:
            if element.tag == "key":
                key = element.text
            else:
                song_info_dict[key] = element.text
        song_info.append(song_info_dict)

    # song_infoをPandasのデータフレームに変換
    df = pd.DataFrame(song_info)

    # "Play Count"をNull埋めしてint型に変換
    df = df.fillna({"Play Count": 0})
    df["Play Count"] = df["Play Count"].astype(int)

    return df


# 渡されたDataFrameをJson形式で返す
def parseDfToJson(df, bySong):

    # app.logger.debug(df.dtypes)

    # 曲の再生数順にソート
    df = df.sort_values(by='Play Count', ascending=False)

    # return件数を10件に絞る
    df = df.head(10)

    # record単位のjsonに変換
    json = df.to_json(force_ascii=False, orient="records")

    return json


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
