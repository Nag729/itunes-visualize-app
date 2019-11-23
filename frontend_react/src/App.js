import React from 'react';
// react-router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import TopPage from './TopPage';
import Visualize from './Visualize';
// このページの関連
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>React App on Flask !!</p>
				</header>
				{/* URLに応じてコンポーネント表示を切り替え */}
				<Router>
					<div>
						<Route path="/top" component={TopPage} />
						<Route path="/visual" component={Visualize} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
