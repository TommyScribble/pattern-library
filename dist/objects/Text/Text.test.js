import React from 'react';
import ReactDOM from 'react-dom';
import Text from './index';
var mount = function (component, node) { return ReactDOM.render(component, node); };
var testText = 'This is some random text';
test('renders without crashing', function () {
    var div = document.createElement('div');
    mount(React.createElement(Text, null, testText), div);
    ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=Text.test.js.map