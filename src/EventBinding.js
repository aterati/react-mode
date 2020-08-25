import React, { Component } from 'react';

class EventBinder extends Component {

	constructor() {
		super();
		this.state = {
			message: 'Hello'
		}
		this.clickHandler = this.clickHandler.bind(this) //Approach 3 described in react docs
	}

	clickHandler() {
		this.setState({
			message: 'GoodBye!!'
		})
		console.log(this);
	}

	//Approach 4: also recommended by still under beta
	newHandler = () => {
		this.setState({
			message: 'Adios!!'
		})
		console.log(this);
	}

	render() {
		return (<div>
			<h1>{this.state.message}</h1>
			{/* Approach1
					<button onClick={this.clickHandler.bind(this)}>Click me</button> 
				Approach 2
					<button onClick={() => this.clickHandler()}>Click me</button> 
			*/}
			{/* Approach3 recommended in react docs */}
			<button onClick={this.clickHandler}>Click me</button> 
			
			<button onClick={this.newHandler}>Click again</button>
		</div>
		)
	}

}


export default EventBinder;