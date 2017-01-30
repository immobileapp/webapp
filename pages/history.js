import React from 'react';
import $ from 'jquery';

import Header from 'header';
import stops from 'stops';

export default class History extends React.Component{

	getActive(){
		var posit;

		stops.map(function (stops) {
			if(stops.active == 1){
				posit = stops.id;
			}
		});

		return posit + 1;
	}

	componentDidMount(){
		var posit = this.getActive();
		var item = $('ul li:nth-child('+posit+')');
		
		$(item).addClass('active-inf');
	}

	render(){

		var list = stops.map(function (stops) {
			return(
				<li key={stops.id}>
					<div className="inf">
						<span>{stops.stopped}</span>
						<span>{stops.time}</span>										
					</div>
					<h5>{stops.car}</h5>
				</li>
			)
		});

		return(
			<div className="history">
				<Header page="Histórico"/>
				<div className="container">
					<ul>
						{list}
					</ul>
				</div>
			</div>
		);
	}
}