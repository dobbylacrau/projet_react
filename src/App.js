import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	state = {
		count: 0
	}


	increment() {
		this.setState({
			count: this.state.count + 1
		});
	}

	decrement() {
		this.setState({
			count: this.state.count - 1
		});
	}

	render() {
		const colors = [ "blue", "yellow", "magenta", "red" ]
		const style = {
			height: 150,
			backgroundColor: colors[this.state.count]
		};
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">
						{
							this.state.count
						}
					</h1>
				</header>
				<div style={style}>
					<button onClick={this.increment.bind(this)}>increment</button>
					<button onClick={this.decrement.bind(this)}>decrement</button>
				</div>
			</div>
		);
	}
}

export default App;
