import React from 'react';
import { Router } from '@reach/router';

import Homepage from './homepage';
import Buttons from './buttons';
import Accordion from './accordion';
import NotFound from './notFound';

const Routes = () => {
	return (
		<Router>
			<Homepage path="/" />
			<Buttons path="/buttons" />
			<Accordion path="/accordion" />
			<NotFound default={true} />
		</Router>
	);
};

export default Routes;
