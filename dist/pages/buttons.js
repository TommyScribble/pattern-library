import React from 'react';
import PageLayout from '../components/PageLayout';
import Text from '../objects/Text';
import Button from '../objects/Button';
var buttons = function (props) {
    return (React.createElement(PageLayout, null,
        React.createElement(Text, null, "This is the buttons page"),
        React.createElement(Button, { test: "button", btnClass: 'primary' }, "Primary"),
        React.createElement(Button, { test: "button", btnClass: 'secondary' }, "Seconday"),
        React.createElement(Button, { test: "button", btnClass: 'ghost' }, "Ghost"),
        React.createElement(Button, { test: "button", btnClass: 'disabled' }, "Disabled")));
};
export default buttons;
//# sourceMappingURL=buttons.js.map