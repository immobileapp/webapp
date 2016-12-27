import React from 'react';
import {Link} from 'react-router';

export default class Parked extends React.Component{
	render(){
		return(
			<div className="parked">
				<div className="cc-container">
					<span>00:00:00</span>
					<Link to="/home" className="button-main white">DEIXAR VAGA</Link>
				</div>
			</div>
		);
	}
}