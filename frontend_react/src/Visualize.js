import React from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab'
import InsertChartIcon from '@material-ui/icons/InsertChart';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { HorizontalBar } from 'react-chartjs-2'
import { json } from 'body-parser';

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
			itunesData: [],
			graphConfig: {},
			isTable: false
		};
	}

	/**
	 * Mounting Method
	 */
	componentDidMount() {
		// アップロード画面から受け取ったデータをJSON形式でStateに保持
		const jsonData = JSON.parse(this.props.location.state.itunesData);

		const labels = jsonData.map(e => {
			return e["Name"]
		})

		const data = jsonData.map(e => {
			return e["Play Count"]
		})

		const config = {
			labels: labels,
			datasets: [{
				label: 'Play-Count Sort By Song',
				data: data,
				backgroundColor: 'rgba(188,54,255,0.2)',
				borderColor: 'rgba(188,54,255,0.8)',
				borderWidth: 1,
				hoverBackgroundColor: 'rgba(188,54,255,0.4)',
				hoverBorderColor: 'rgba(188,54,255,1)',
			}]
		}

		console.log(config);

		this.setState({
			itunesData: jsonData,
			graphConfig: config
		});
	}

	/**
	 * テーブル表示とグラフ表示を切り替える
	 */
	handleMode() {
		this.setState({
			isTable: !this.state.isTable
		})
	}

	render() {
		return (
			<React.Fragment>
				<div className={this.props.classes.heroContent}>
					<Container maxWidth="sm">
						<Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
							新たな発見をシェアしましょう！
						</Typography>
						<Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
							検索条件から、色々な情報を得ることができます.
							<br />
							もしも新たな発見があったなら、それをTwitterでシェアしましょう！
						</Typography>
						<div className={this.props.classes.heroButtons}>
							<Grid container justify="center">
								<Grid item>
									<Button variant="contained" color="primary" onClick={this.handleClick} className="btn-sort-by-artist">
										アーティストのランキング
									</Button>
								</Grid>
								<Grid item>
									<Fab color="primary" aria-label="change mode" onClick={this.handleMode.bind(this)}>
										{this.state.isTable ? <InsertChartIcon /> : <FormatListNumberedIcon />}
									</Fab>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				{
					(() => {
						if (this.state.isTable) { // テーブルモード
							return (
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
													{this.state.itunesData.map((row, index) => (
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
							)
						} else { // Notテーブルモード = グラフ
							return (
								<Container maxWidth="lg">
									<HorizontalBar
										data={this.state.graphConfig}
										witdh={60}
										height={120}
									/>
								</Container>
							)
						}
					})()
				}
			</React.Fragment >
		);
	}
}

export default withStyles(styles)(Visualize);
