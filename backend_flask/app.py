from flask import Flask, render_template, request, jsonify, make_response
import os

import pandas as pd
import xml.etree.ElementTree as et

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")

app.config['MAX_CONTENT_LENGTH'] = 20 * 1024 * 1024

UPLOAD_DIR = os.getenv("UPLOAD_DIR_PATH")

# xmlデータをパース
tree = et.parse(
    "/Users/shungo/Desktop/Apps/itunes-visualize-app/backend_flask/record.xml")
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

    app.logger.debug(request)
    # file = request.files['file']
    # fileName = file.fileName
    # make_response(jsonify({'result': fileName}))


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
