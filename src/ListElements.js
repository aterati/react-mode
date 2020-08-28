import React from 'react';
import Person from './Person';

function ListElements() {


	const personList = [{
		name: 'A-one',
		location: 'India',
		age: '20'
	},
	{
		name: 'A-two',
		location: 'USA',
		age: '25'
	},
	{
		name: 'A-3',
		location: 'CAD',
		age: '30'
	}];

	return (
		<div>
			{
				//** If a unique Id is available do not use index as key
				// personList.map(person => <h2>{person.name} live in {person.location} at the age of {person.age}</h2>)
				personList.map((person,index)=><Person key={index} pList={person} index={index} />)
				
			}
		</div>
	);
}

export default ListElements;