import React from 'react';
import { Component } from 'react';

class Welcome extends Component {


	constructor() {
		super();
		this.state = {
			caption: 'Cafe Coffee Day',
			count: 0
		};
	}

	changeText() {

		this.setState(
			{
				caption: 'Starbucks',
				count: this.state.count + 1
			}
		);
		//(prevState) => ({ location: 'Toronto', count: prevState.count + 1 })
	}

	//Use prevState when making repeatative calls.
	//(prevState) => ({ location: 'Toronto', count: prevState.count + 1 })
	/* changeText5() {
		this.changeText();
		this.changeText();
		this.changeText();
		this.changeText();
		this.changeText();
	} */

	render() {

		const { name, name2 } = this.props; //Destructuring props
		const { caption, count } = this.state;
		return (
			<div>
				{/* <h1>Welcome {this.props.name} and {this.props.name2}</h1> */}
				<h1>Welcome {name} and {name2}</h1>
				<h2>{caption}</h2>
				{/* {count} */}
				<button onClick={() => this.changeText()}>What's next</button>

			</div>);
	}
}

export default Welcome;