import React, { useState } from 'react';
import Heading from '../objects/Heading';
import SideBar from './SideBar';
import Icon from 'react-icon-library';
var Header = function () {
    var _a = useState('Burger1'), icon = _a[0], updateIcon = _a[1];
    return (React.createElement("header", null,
        React.createElement("nav", { className: "top-nav" },
            React.createElement(Heading, { tagNumber: 1, headingText: 'ReactJs UI library' }),
            React.createElement("button", { className: "burger-menu", onClick: function () { return updateIcon(icon === 'Burger1' ? 'Cross1' : 'Burger1'); } },
                React.createElement(Icon, { iconName: icon }))),
        React.createElement(SideBar, { active: icon })));
};
export default Header;
//# sourceMappingURL=Header.js.map