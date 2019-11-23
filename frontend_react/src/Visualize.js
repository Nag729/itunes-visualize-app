import React from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import { Container, Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(4, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(2),
	},
	paper: {
		overflowX: 'auto',
	},
	tableWrapper: {
		minWidth: 650,
		maxHeight: 500,
	},
});

class Visualize extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: [],
		};
	}

	handleClick = () => {
		axios
			.get('http://localhost:3000/api/home', {
				headers: {
					Accept: 'Application/json',
				},
			})
			.then(res => {
				this.setState({ rows: res.data });
			})
			.catch(console.error);
	};

	render() {
		return (
			<React.Fragment>
				<div className={this.props.classes.heroContent}>
					<Container container maxWidth="sm">
						<Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
							iTunesライブラリの情報を可視化しましょう!
						</Typography>
						<Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
							iTunesからエクスポートした`.xml`ファイルをアップロードすると簡単に情報を可視化できます.
							<br />
							これまでに最も多く聴いた曲やアーティストごとのランキングを見て、音楽の好みを再発見してください.
						</Typography>
						<div className={this.props.classes.heroButtons}>
							<Grid container justify="center">
								<Grid item>
									<Button variant="contained" color="primary" onClick={this.handleClick} className="btn-search">
										Search Data
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container maxWidth="lg">
					<Paper className={this.props.classes.paper}>
						<div className={this.props.classes.tableWrapper}>
							<Table stickyHeader aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell>アーティスト</TableCell>
										<TableCell>アルバム</TableCell>
										<TableCell>曲名</TableCell>
										<TableCell>リリース年</TableCell>
										<TableCell>再生回数</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.rows.map((row, index) => (
										<TableRow key={index}>
											<TableCell>{row['Artist']}</TableCell>
											<TableCell>{row['Album']}</TableCell>
											<TableCell>{row['Name']}</TableCell>
											<TableCell>{row['Year']}</TableCell>
											<TableCell>{row['Play Count']}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</Paper>
				</Container>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Visualize);
