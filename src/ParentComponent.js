import React, {Component} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{


	constructor(){
		super();
		this.state={
			parentName: 'Mercedes' 
		};
		this.getModelDetails = this.getModelDetails.bind(this);
	}

	getModelDetails(childName){
		alert(`I drive  ${this.state.parentName} ${childName}`);
	}

	render(){
		return <ChildComponent modelDetails={this.getModelDetails}/>;

	}

}

export default ParentComponent;