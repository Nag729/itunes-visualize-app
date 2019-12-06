import React from 'react';
import axios from './../plugins/axios';
// eslint-disable-next-line
import { css } from '@emotion/core';

import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HashLoader from 'react-spinners/HashLoader';

import './Upload.css';

const styles = theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(4, 0, 2),
	},
	heroButton: {
		marginTop: theme.spacing(4),
	},
	loading: {
		marginTop: theme.spacing(4),
	},
});

class TopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: [],
			isDisabled: true,
			isLoading: false,
			dataSortedBySong: '',
			dataSortedByArtist: '',
		};
	}

	handleChange(file) {
		this.setState({
			file: file[0],
			isDisabled: !this.state.isDisabled,
		});
	}

	handleDelete(file) {
		this.setState({
			file: [],
			isDisabled: !this.state.isDisabled,
		});
	}

	sendFile() {
		// Loadingを開始
		this.setState({
			isLoading: !this.state.isLoading,
		});

		const params = new FormData();
		params.append('file', this.state.file, 'records.xml');

		axios
			.post('/api/upload', params, {
				headers: {
					'content-type': 'multipart/form-data',
				},
			})
			.then(result => {
				if (result.data) {
					// 取得したデータをStateにセット
					this.setState({
						dataBySong: result.data.song,
						dataByArtist: result.data.artist,
						isLoading: !this.state.isLoading, // Loadingを終了
					});
					// Stateを渡して'/visualize'に遷移する
					// TODO: 状態管理をReduxに変更する
					this.props.history.push({
						pathname: '/visualize',
						state: {
							dataBySong: this.state.dataBySong,
							dataByArtist: this.state.dataByArtist,
						},
					});
				} else {
					// TODO: エラー処理をキレイにする
					alert('XMLファイルからデータが正しく取得できませんでした😢');
				}
			})
			.catch(() => {
				console.error('エラーになっちゃいました😢');
				alert('エラーになっちゃいました😢');
				this.setState({
					isLoading: !this.state.isLoading, // Loadingを終了
				});
			});
	}

	render() {
		return (
			<React.Fragment>
				<div className={this.props.classes.heroContent}>
					<Container maxWidth="md">
						<Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
							自らの音楽性を再発見しましょう!
						</Typography>
						<Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
							iTunesからエクスポートした <code>.xml</code> ファイルをアップロードすると簡単に情報を可視化できます.
							<br />
							情報のエクスポートは、 <code>iTunes>ファイル>ライブラリ>ライブラリを書き出し</code> から
							<br />
							これまでに最も多く聴いた曲やアーティストごとのランキングを見て、音楽の好みを再発見しましょう！
						</Typography>
					</Container>
				</div>
				<div>
					<Container maxWidth="md">
						<DropzoneArea
							dropzoneClass={'material-ui-dropzone'}
							dropzoneParagraphClass={'material-ui-dropzone-paragraph'}
							maxFileSize={30000000}
							acceptedFiles={['application/xml', 'text/xml']}
							dropzoneText={'iTunesからエクスポートしたxmlファイルを選択してね👋'}
							showFileNames={true}
							showPreviewsInDropzone={true}
							useChipsForPreview={true}
							previewChipProps={{ color: 'primary' }}
							filesLimit={1}
							onChange={this.handleChange.bind(this)}
							onDelete={this.handleDelete.bind(this)}
						/>
						<div className={this.props.classes.heroButton}>
							<Grid container justify="center">
								<Grid item>
									<Button
										variant="contained"
										color="primary"
										size="large"
										disabled={this.state.isDisabled}
										onClick={this.sendFile.bind(this)}
									>
										Upload Data!
									</Button>
								</Grid>
							</Grid>
						</div>
						<div className={this.props.classes.loading}>
							<Grid container justify="center">
								<Grid item>
									<HashLoader sizeUnit={'px'} size={50} color={'#123abc'} loading={this.state.isLoading} />
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(TopPage);
