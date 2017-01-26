import React from 'react';
import {Link} from 'react-router';

import Header from 'header';
import cars from 'cars';

export default class MyCars extends React.Component{
	render(){
		return(
			<div className="myCars">
				<Header page="Meus Veículos"/>
				<div className="container">
					<ul>
						<li><Link to={"/myCars/NewCar"}>+ Novo Veículo</Link></li>
						{
							cars.map(car => (
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
				{this.props.children}
			</div>
		);
	}
}