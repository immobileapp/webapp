import React from 'react';
import {Link} from 'react-router';

import Header from 'header';
import cars from 'cars';

export default class NewCar extends React.Component{
	constructor(){
		super();

		this.saveNewCar = this.saveNewCar.bind(this);
	}

	saveNewCar(){
		let name = document.getElementById('name').value;
		let plaque = document.getElementById('plaque').value;
	
		let newCar = {
			id: (cars.length + 1),
			name: name,
			plaque: plaque
		}

		cars.push(newCar);
	}

	render(){
		return(
			<div>
				<Header page="Novo Veículo"/>
				<div className="content">
					<input id="name" name="name" type="text" placeholder="Nome"/>
					<input id="plaque" name="plaque" type="text" placeholder="Placa"/>
					<Link className="button-round red" to="/myCars" onClick={this.saveNewCar}/>
				</div>
			</div>
		);
	}
}