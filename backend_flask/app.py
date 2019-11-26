import os
from flask import Flask, render_template, request, jsonify, make_response
import werkzeug
from datetime import datetime

import pandas as pd
import xml.etree.ElementTree as et

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")

UPLOAD_FOLDER = './uploads'
app.config['MAX_CONTENT_LENGTH'] = 20 * 1024 * 1024
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# xmlデータをパース
tree = et.parse(
    "./record.xml")
root = tree.getroot()

# ルートpath
# アプリ起動時にアクセスされて、Reactのトップページを表示する
@app.route('/')
def index():
    return render_template("index.html")

# XMLファイルアップロード
# XMLファイルをパースしてクライアントにデフォルトのJSONファイルを返す
@app.route('/api/home')
def hello():
    # 要素取得：Xpath指定
    infomation = tree.findall("dict/dict/dict")
    song_info = []

    # infomation > song > elementでdict中の各要素に対して処理
    for song in infomation:
        song_info_dict = {}
        key = ""
        for element in song:
            if element.tag == "key":
                key = element.text
            else:
                song_info_dict[key] = element.text
        song_info.append(song_info_dict)

    df = pd.DataFrame(song_info)
    df = df.head(100)  # 100件に絞る
    # record単位のjsonに変換
    json = df.to_json(force_ascii=False, orient="records")

    return json


@app.route('/api/upload', methods=['POST'])
def upload():

    # ファイルがない場合
    if 'file' not in request.files:
        msg = 'ファイルがありません'
        return make_response(jsonify({'result': msg}))

    # データの取り出し
    file = request.files['file']
    fileName = file.filename

    # ファイル名がない場合
    if fileName == '':
        msg = 'ファイルがありません'
        return make_response(jsonify({'result': msg}))

    # ファイルの保存
    saveName = datetime.now().strftime("%Y%m%d_%H%M%S_") + \
        werkzeug.utils.secure_filename(fileName)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], saveName))

    return make_response(jsonify({'result': 'Upload Done!'}))


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
