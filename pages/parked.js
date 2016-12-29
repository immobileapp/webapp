import React from 'react';
import {Link} from 'react-router';

export default class Parked extends React.Component{
	render(){
		return(
			<div className="parked">
				<div className="cc-container">
					<h6>00:00:00</h6>
					<Link to="/home" className="button-main white">DEIXAR VAGA</Link>
				</div>
			</div>
		);
	}
}