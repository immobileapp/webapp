import React from 'react';
import {Link} from 'react-router';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Menu extends React.Component{
	render(){

		var path = this.props.location.pathname;
    	var segment = path.split('/')[1] || 'root';

		return(
			<div>
				<img className="menu-icon" src="../footage/menu-icon.png"/>
				<div id="wrapper">
					<div className="content">
						<div className="top-img"/>
						<div className="container">
							<img className="avatar" src="../footage/menu-avatar.png"/>
							<div className="stuff">
								<h3>Lewis Horton</h3>
								<ul>
									<li><div/></li>
									<li><Link to="/home">Inicio</Link></li>
									<li><Link to="/myCars">Meus Veículos</Link></li>
									<li><Link to="">Histórico</Link></li>
									<li><Link to="">Configurações</Link></li>
									<li><div/></li>
									<li><Link to="">Meu Perfil</Link></li>
									<li><Link to="">Logout</Link></li>
									<li><div/></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<ReactCSSTransitionGroup
					component="div"
					transitionName="main"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
				>
					{React.cloneElement(this.props.children, {key: segment})}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}