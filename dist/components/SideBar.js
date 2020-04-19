import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../objects/Logo';
import Navigation from './Navigation';
var SideBar = function (_a) {
    var active = _a.active;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var myLogo = './scribble_logo--white.png';
    useEffect(function () {
        setIsOpen(active === 'Burger1' ? false : true);
    }, [active]);
    var openClass = isOpen === true ? 'js-open' : 'js-close';
    var versionNo = 'Version 1.0.0';
    return (React.createElement("ul", { className: "side-nav fixed " + openClass },
        React.createElement("li", { className: "logo" },
            React.createElement(Logo, { anchor: './', logo: myLogo, altText: 'Pattern Library 2019' })),
        React.createElement("li", { className: "version" }, versionNo),
        React.createElement(Navigation, null)));
};
SideBar.propTypes = {
    active: PropTypes.string || PropTypes.bool,
};
export default SideBar;
//# sourceMappingURL=SideBar.js.map