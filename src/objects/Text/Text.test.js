import React from 'react';
import ReactDOM from 'react-dom';

import Text from './index';

const mount = (component, node) => ReactDOM.render(component, node);

const testText = 'This is some random text';

test('renders without crashing', () => {
	const div = document.createElement('div');
	mount(<Text>{testText}</Text>, div);
	ReactDOM.unmountComponentAtNode(div);
});
