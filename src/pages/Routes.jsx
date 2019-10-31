import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import { play, exit } from '../helpers/timelines';

import homepage from './homepage';
import buttons from './buttons';
import accordion from './accordion';

class Routes extends Component {
	render() {
		return (
			<Router>
				<Route
					render={({ location }) => {
						const { pathname, key } = location;
						console.log('LOCATIONS------', location);
						return (
							<TransitionGroup component={null}>
								<Transition
									key={key}
									appear={true}
									onEnter={(node, appears) => play(pathname, node, appears)}
									onExit={(node, appears) => exit(node, appears)}
									timeout={{ enter: 750, exit: 150 }}>
									<Switch location={location}>
										<Route exact path="/" component={homepage} />
										<Route path="/buttons" component={buttons} />
										<Route path="/accordion" component={accordion} />
									</Switch>
								</Transition>
							</TransitionGroup>
						);
					}}
				/>
			</Router>
		);
	}
}

export default Routes;
