import React from 'react';
import Anchor from '../objects/Anchor';
import NavData from '../assets/navigationData.json';
var Navigation = function () {
    return (NavData.map(function (item, i) {
        React.createElement("li", { key: i, className: "side-nav__item" },
            React.createElement(Anchor, { navigation: true, path: item.path, anchorClass: item.anchorClass }, item.title));
    }));
};
export default Navigation;
//# sourceMappingURL=Navigation.js.map