import React from 'react';
// import { Component } from 'react';

/* function Greet(props){

	return <h1>Hello {props.name}</h1>
} */

const Greet = (props) => {

	const {name, name2, children} = props; //Destructuring the props
return (
<div>
<h1>Hello {name} and {name2}</h1>
<h2>{children}</h2>
</div>
);
};

export default Greet;

