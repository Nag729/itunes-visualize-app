import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Grid } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

import './TopPage.css';

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
			files: [],
		};
	}

	handleChange(files) {
		this.setState({
			files: files,
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className={this.props.classes.heroContent}>
					<Container container maxWidth="md">
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
						/>
						<div className={this.props.classes.heroButton}>
							<Grid container justify="center">
								<Grid item>
									<Button variant="contained" color="primary" size="large" disabled>
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
