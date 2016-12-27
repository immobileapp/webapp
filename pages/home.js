import React from 'react';
import {Link} from 'react-router'

export default class Home extends React.Component{
	render(){
		return(
			<div className="home">
				<div className="top-img">
					<div className="cc-container">
						<div className="sCar">
							<h1>Ford Ka</h1>
							<img src="../footage/change-icon.png"/>
						</div>
					</div>
				</div>
				<div className="container">
					<Link className="button-main red" to="/parked">ESTACIONAR</Link>
					<div className="content">
						<p><b>Olá, senhor(a) <strong>Lewis.</strong></b><br/>Neste <b>mês</b>, você ja usou</p>
						<div className="infs">
							<div className="inf">
								<img src="../footage/watch.png"/>
								<h2>126 h</h2>
							</div>
							<div className="inf">
								<img src="../footage/coin.png"/>
								<h2>R$ 252</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}