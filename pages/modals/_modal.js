import React from 'react';

import NewCar from 'modals/newCar';
import components from 'modals/_modalTypes'

export default class Modal extends React.Component{
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