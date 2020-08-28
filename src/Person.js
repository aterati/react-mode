import React from 'react';


function Person({pList, index}) {

	console.log(pList.name)
return <h1>{pList.name} lived at {pList.location} at the age of {pList.age}</h1>

}


export default Person;