import React from 'react';
import {Link} from 'react-router';

import Header from 'header';

export default class MyCars extends React.Component{
	constructor(state, context){
		super(state, context);

		this.state = {
			cars: [
				{
					id: 1,
					name: 'Ford Ka',
					plaque: 'AAK-3297'
				},
				{
					id: 2,
					name: 'Honda PCX',
					plaque: 'AXJ-7654'
				}
			]
		}
	}

	render(){
		return(
			<div className="myCars">
				<Header page="Meus Veículos"/>
				<div className="container">
					<ul>
						<li><Link to="">+ Novo Veículo</Link></li>
						{
							this.state.cars.map(car => (
								<li key={car.id}>
									<div className="inf">
										<h3>{car.name}</h3><br/>
										<h4>{car.plaque}</h4>
									</div>
									<div className="icons">
										<Link to=""><img src="../footage/user-icon.png"/></Link>
										<Link to=""><img src="../footage/edit-icon.png"/></Link>
									</div>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		);
	}
}