# for general
import os
from flask import Flask, render_template, request, jsonify, make_response
import werkzeug
from datetime import datetime
import random
import string

# for データ分析
import pandas as pd
import xml.etree.ElementTree as et

# # for AWS-S3
# import logging
# import boto3
# from botocore.exceptions import ClientError

app = Flask(__name__, static_folder="./build/static",
            template_folder="./build")

app.config['MAX_CONTENT_LENGTH'] = 30 * 1024 * 1024
app.config['UPLOAD_FOLDER'] = './uploads'

# # S3クライアントの生成
# s3_client = boto3.client(
#     's3',
#     aws_access_key_id=os.environ['AWS_ACCESS_KEY'],
#     aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
# )
# s3_bucket_name = os.environ['AWS_S3_BUCKET']

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

    # ランダム文字列の生成
    randStr = ''.join(
        [random.choice(string.ascii_letters + string.digits) for i in range(6)])

    # 保存するファイル名とパスを生成
    saveName = datetime.now().strftime("%Y%m%d_%H%M%S_") + randStr + "_" + \
        werkzeug.utils.secure_filename(fileName)
    upload_data_path = os.path.join(app.config['UPLOAD_FOLDER'], saveName)
    # 一時ファイルの保存
    file.save(upload_data_path)

    # try:
    #     s3_client.upload_file(
    #         upload_data_path, s3_bucket_name, 'uploads/' + saveName)
    # except ClientError as e:
    #     logging.error(e)

    # 取得したXMLファイルを元にパースするJSONをjsonFileにセット
    df = parseXmlToDf(upload_data_path)

    jsonSortBySong = parseDfToJson(df, 'Song')
    jsonSortByArtist = parseDfToJson(df, 'Artist')

    # 一時ファイルの削除
    os.remove(upload_data_path)

    return jsonify(song=jsonSortBySong, artist=jsonSortByArtist)


# アップロードされたXMLファイルをパースしてJSON形式で返す関数
def parseXmlToDf(upload_data_path):

    # アップロードされたファイルデータをパース
    tree = et.parse(upload_data_path)

    # 要素取得
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
def parseDfToJson(df, sortKey):

    # app.logger.debug(df.dtypes)

    if sortKey == 'Song':
        # 曲の再生数順にソート
        df = df.sort_values(by='Play Count', ascending=False)
        # app.logger.debug(df)

    elif sortKey == 'Artist':
        # アーティストごとにGROUP BYしてからソート
        df = df.groupby('Artist')[['Play Count']].sum()
        df = df.sort_values(by='Play Count', ascending=False)
        df = df.reset_index()
        # app.logger.debug(df)

    # return件数を20件に絞る
    df = df.head(20)

    # record単位のjsonに変換
    json = df.to_json(force_ascii=False, orient="records")

    return json

# 画像ファイルアップロード時に呼び出されるREST
@app.route('/api/image', methods=['POST'])
def upload_image():
    # axiosでPOSTされた画像ファイルを取得
    pic = request.files['image']
    app.logger.debug(pic)

    # S3に画像をアップロード
    fileName = pic.filename
    app.logger.debug(fileName)

    # ランダム文字列の生成
    randStr = ''.join(
        [random.choice(string.ascii_letters + string.digits) for i in range(6)])

    # 保存するファイル名とパスを生成
    saveName = datetime.now().strftime("%Y%m%d_%H%M%S_") + randStr + "_" + \
        werkzeug.utils.secure_filename(fileName)
    upload_data_path = os.path.join(app.config['UPLOAD_FOLDER'], saveName)
    # 一時ファイルの保存
    pic.save(upload_data_path)

    # try:
    #     s3_client.upload_file(
    #         upload_data_path, 'itunes-visualize-app', 'uploads/' + saveName)
    # except ClientError as e:
    #     logging.error(e)

    # bucket_location = s3_client.get_bucket_location(Bucket=s3_bucket_name)
    # public_url = "https://s3-{0}.amazonaws.com/{1}/uploads/{2}".format(
    #     bucket_location['LocationConstraint'],
    #     s3_bucket_name,
    #     saveName)
    # app.logger.debug(public_url)

    return make_response(jsonify(public_url))


# おまじない
if __name__ == "__main__":
    app.run(debug=True)
