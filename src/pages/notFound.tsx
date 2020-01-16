import React from 'react';
import { Link } from '@reach/router';

type Props = {
	default: boolean;
};

const NotFound: React.FC<Props> = props => {
	return (
		<>
			<h1>404</h1>
			<p>
				Sorrry the page page you are looking for is not here please go bak to
				the <Link to="/">homepage</Link>
			</p>
		</>
	);
};

export default NotFound;
