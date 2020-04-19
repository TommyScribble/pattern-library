var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
var NavLink = function (props) { return (React.createElement(Link, __assign({}, props, { getProps: function (_a) {
        var isCurrent = _a.isCurrent;
        return {
            style: {
                backgroundColor: isCurrent ? 'rgba(166, 0, 22, 0.4)' : '#E20016',
            },
        };
    } }))); };
NavLink.propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func,
};
export default NavLink;
//# sourceMappingURL=NavLink.js.map