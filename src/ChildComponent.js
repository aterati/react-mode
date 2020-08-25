import React, {Component} from 'react';


const ChildComponent = (props)=>{

return (
	<div>
		<button onClick={()=>props.modelDetails('C230')}>
			Gear up
		</button>
	</div>

)

}

export default ChildComponent;