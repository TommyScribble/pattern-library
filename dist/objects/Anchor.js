import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import NavLink from './NavLink';
var Anchor = function (_a) {
    var path = _a.path, anchorClass = _a.anchorClass, disabled = _a.disabled, internal = _a.internal, navigation = _a.navigation, children = _a.children;
    var buttonAnchor;
    var handleClick = function (e) {
        if (disabled) {
            e.preventDefault();
        }
    };
    if (internal) {
        buttonAnchor = (React.createElement(Link, { to: path, className: anchorClass, onClick: handleClick }, children));
    }
    else if (navigation) {
        buttonAnchor = (React.createElement(NavLink, { to: path, className: anchorClass, onClick: handleClick }, children));
    }
    else {
        buttonAnchor = (React.createElement("a", { href: path, className: anchorClass, onClick: handleClick }, children));
    }
    return buttonAnchor;
};
Anchor.propTypes = {
    path: PropTypes.string.isRequired,
    anchorClass: PropTypes.string,
    internal: PropTypes.bool,
    navigation: PropTypes.bool,
    children: PropTypes.any,
};
export default Anchor;
//# sourceMappingURL=Anchor.js.map