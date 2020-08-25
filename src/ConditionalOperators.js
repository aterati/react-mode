import React, { Component } from 'react';

class ConditionalOperation extends Component {

	constructor() {
		super();
		this.state = {
			recession: false,
			car1: 'jaguar',
			car2: 'porshe',
		}
	}



	render() {

		{/* Approach #3 Element Variables
			
			let carSelection;
		if (this.state.recession) {
			carSelection = <div>I will buy {this.state.car1}</div>
		} else {
			carSelection = <div>I will buy {this.state.car1} and {this.state.car2}</div>
		} 
			
			return carSelection;
		*/}

		// Approach #4 Shock circuit operator 
		// return this.state.recession && <div>I will buy {this.state.car1}</div>;

		console.log(this.state.recession);

		// Approach #2 preferered**  ternary conditional statement
			return this.state.recession ? (<div>I will buy {this.state.car1}</div>) :
			(<div> I will buy {this.state.car1} and {this.state.car2}</div>); 


		{/*  Approach #1 General If and else statement
			
			if (this.state.recession == true) {
			return <div>I will buy {this.state.car1}</div>
		}
		else {
			return <div> I will buy {this.car1} and {this.state.car2}</div>
		} */}
	}

}

export default ConditionalOperation;