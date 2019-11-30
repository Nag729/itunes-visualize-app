import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import './Upload.css';

const styles = theme => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(4, 0, 4),
	},
	heroButton: {
		marginTop: theme.spacing(4),
	},
});

class TopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: [],
			isDisabled: true,
			itunesData: '',
		};
	}

	handleChange(file) {
		this.setState({
			file: file[0],
			isDisabled: false,
		});
	}

	sendFile() {
		const params = new FormData();
		params.append('file', this.state.file, 'records.xml');

		axios
			.post('http://localhost:3000/api/upload', params, {
				headers: {
					'content-type': 'multipart/form-data',
				},
			})
			.then(result => {
				if (result.data) {
					// 取得したデータをStateにセット
					this.setState({
						itunesData: result.data,
					});
					// Stateを渡して'/visualize'に遷移する
					// TODO: 状態管理をReduxに変更する
					this.props.history.push({
						pathname: '/visualize',
						state: { itunesData: this.state.itunesData },
					});
				} else {
					alert('XMLファイルからデータが正しく取得できませんでした😢');
				}
			})
			.catch(() => {
				console.error('errorだよ!');
			});
	}

	render() {
		return (
			<React.Fragment>
				<div className={this.props.classes.heroContent}>
					<Container maxWidth="md">
						<DropzoneArea
							dropzoneClass={'material-ui-dropzone'}
							dropzoneParagraphClass={'material-ui-dropzone-paragraph'}
							acceptedFiles={['application/xml', 'text/xml']}
							dropzoneText={'iTunesからエクスポートしたxmlファイルを選択'}
							showFileNames={true}
							showPreviewsInDropzone={true}
							useChipsForPreview={true}
							previewChipProps={{ color: 'primary' }}
							filesLimit={1}
							onChange={this.handleChange.bind(this)}
							maxFileSize={30000000}
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
					</Container>
				</div>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(TopPage);
