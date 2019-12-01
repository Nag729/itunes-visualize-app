import React from 'react';
// react-router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// material-ui
import { withStyles } from '@material-ui/core/styles';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Box, CssBaseline } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Components
import Copyright from './Copyright';
import Upload from './Upload';
import Visualize from './Visualize';
// このページの関連
import GlobalStyle from './globalStyles.js';
import './App.css';

const styles = theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	icon: {
		marginRight: theme.spacing(2),
	},
});

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline></CssBaseline>
				<GlobalStyle />
				<AppBar position="relative">
					<Toolbar>
						<MusicNoteIcon className={this.props.classes.icon} />
						<Typography variant="h5" color="inherit" noWrap>
							iTunes Visualize App!
						</Typography>
					</Toolbar>
				</AppBar>
				<main>
					{/* URLに応じてコンポーネント表示を切り替え */}
					<Router>
						<div>
							<Route exact={true} path="/" component={Upload} />
							<Route exact={true} path="/visualize" component={Visualize} />
						</div>
					</Router>
					<Box mt={8}>
						<Copyright />
					</Box>
				</main>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(App);
