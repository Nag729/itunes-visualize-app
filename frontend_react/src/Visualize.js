import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import InsertChartIcon from '@material-ui/icons/InsertChart';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import TwitterIcon from '@material-ui/icons/Twitter';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { HorizontalBar } from 'react-chartjs-2';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(4, 0, 2),
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
			dataBySong: [],
			dataByArtist: [],
			songConfig: {},
			artistConfig: {},
			isSong: true,
			isTable: false,
		};
	}

	/**
	 * Mounting Method
	 */
	componentDidMount() {
		/**
		 * 曲ごとのランキング
		 */
		const dataBySong = JSON.parse(this.props.location.state.dataBySong);
		const songConfig = this.createGraphConfig(dataBySong, 'Song');

		/**
		 * アーティストごとのランキング
		 */
		const dataByArtist = JSON.parse(this.props.location.state.dataByArtist);
		const artistConfig = this.createGraphConfig(dataByArtist, 'Artist');

		this.setState({
			dataBySong: dataBySong,
			dataByArtist: dataByArtist,
			songConfig: songConfig,
			artistConfig: artistConfig,
		});
	}

	/**
	 * グラフのconfigを作って返すよ
	 */
	createGraphConfig(data, label) {
		// グラフに表示する列名
		const labels = data.map(e => {
			if (label === 'Song') {
				return e['Name'];
			} else {
				return e['Artist'];
			}
		});

		// グラフのデータ
		const count = data.map(e => {
			return e['Play Count'];
		});

		// グラフのタイトル
		let title;

		if (label === 'Song') {
			title = 'Play-Count Sort By Song';
		} else {
			title = 'Play-Count Sort By Artist';
		}

		const config = {
			labels: labels,
			datasets: [
				{
					label: title,
					data: count,
					backgroundColor: 'rgba(188,54,255,0.2)',
					borderColor: 'rgba(188,54,255,0.8)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(188,54,255,0.4)',
					hoverBorderColor: 'rgba(188,54,255,1)',
				},
			],
		};

		return config;
	}

	/**
	 * 曲ごとランキングとアーティストごとランキングを切り替える
	 */
	handleSort() {
		if (this.state.isTable) {
			this.setState({
				isTable: !this.state.isTable,
				isSong: !this.state.isSong,
			});
		} else {
			this.setState({
				isSong: !this.state.isSong,
			});
		}
	}

	/**
	 * テーブル表示とグラフ表示を切り替える
	 */
	handleMode() {
		this.setState({
			isTable: !this.state.isTable,
		});
	}

	/**
	 * Twitterでシェアする
	 */
	handleShare() {
		console.log('share');
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
									<Button
										variant="contained"
										color="primary"
										onClick={this.handleSort.bind(this)}
										startIcon={<LibraryMusicIcon />}
									>
										{this.state.isSong ? 'アーティストで並び替え' : '曲で並び替え'}
									</Button>
								</Grid>
								{/* <Grid item>
									<Fab
										color="primary"
										aria-label="change mode"
										onClick={this.handleMode.bind(this)}
										disabled={!this.state.isSong}
									>
										{this.state.isTable ? <InsertChartIcon /> : <FormatListNumberedIcon />}
									</Fab>
								</Grid> */}
							</Grid>
						</div>
					</Container>
				</div>
				{(() => {
					if (this.state.isTable) {
						// テーブルモード
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
												{this.state.dataBySong.map((row, index) => (
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
						);
					} else {
						// Notテーブルモード = グラフ
						return (
							<Container maxWidth="lg">
								<HorizontalBar
									data={this.state.isSong ? this.state.songConfig : this.state.artistConfig}
									witdh={60}
									height={120}
								/>
							</Container>
						);
					}
				})()}
				<Container maxWidth="sm">
					<div className={this.props.classes.heroButtons}>
						<Grid container justify="center">
							<Grid item>
								<Button
									variant="outlined"
									color="primary"
									startIcon={<TwitterIcon />}
									onClick={this.handleShare.bind(this)}
								>
									Twitterでシェア
								</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Visualize);
