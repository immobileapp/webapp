import React from 'react';

import NewCar from 'modals/newCar';
import components from 'modals/modalTypes'

export default class Modal extends React.Component{
	// constructor(context, props){
	// 	super(context, props);

	// 	this.state = {
	// 		components: {
	// 			NewCar: NewCar
	// 		}
	// 	}
	// }

	render(){

		const Component = components[this.props.params.name];

		return(
			<div className="modal">
				<div className="container">
					<Component />
				</div>
			</div>
		);
	}
}