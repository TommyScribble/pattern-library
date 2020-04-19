import React from 'react';
import PageLayout from '../components/PageLayout';
import Heading from '../objects/Heading';
import Text from '../objects/Text';
import Anchor from '../objects/Anchor';
var homepage = function (props) {
    return (React.createElement(PageLayout, null,
        React.createElement(Heading, { tagNumber: 3, headingText: 'This pattern library is currently still under construction' }),
        React.createElement(Text, null, "Navigate using the sidebar to the element you would like to use to find out more"),
        React.createElement(Text, null, "To get involved use one of the links below"),
        React.createElement(Anchor, { path: '/buttons', anchorClass: 'button', internal: true }, "Get started"),
        React.createElement(Anchor, { path: 'https://github.com/TommyScribble/pattern-library', anchorClass: 'button' }, "View Git")));
};
export default homepage;
//# sourceMappingURL=homepage.js.map