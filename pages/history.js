import React from 'react';
import $ from 'jquery';

import Header from 'header';

export default class History extends React.Component{
	constructor(state){
		super(state);

		this.state = {
			history: [
				{
					id: 0,
					stopped: "1h 30min",
					time: "3h atrás",
					car: "Ford Ka",
					active: 1
				},
				{
					id: 1,
					stopped: "1h 30min",
					time: "3h atrás",
					car: "Ford Ka",
					active: 0
				},
				{
					id: 2,
					stopped: "1h 30min",
					time: "3h atrás",
					car: "Ford Ka",
					active: 0
				},
				{
					id: 3,
					stopped: "1h 30min",
					time: "3h atrás",
					car: "Ford Ka",
					active: 0
				},
				{
					id: 4,
					stopped: "1h 30min",
					time: "3h atrás",
					car: "Ford Ka",
					active: 0
				},
				{
					id: 5,
					stopped: "1h 30min",
					time: "3h atrás",
					car: "Ford Ka",
					active: 0
				}
			]
		}
	}

	render(){
		return(
			<div className="history">
				<Header page="Histórico"/>
				<div className="container">
					<ul>
						{
							this.state.history.map(history => (
								<li key={history.id}>
									<div className="inf">
										<span>{history.stopped}</span>
										<span>{history.time}</span>										
									</div>
									<h5>{history.car}</h5>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		);
	}
}