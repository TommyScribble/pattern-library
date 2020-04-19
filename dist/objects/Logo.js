import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
var Logo = function (_a) {
    var anchor = _a.anchor, logo = _a.logo, altText = _a.altText;
    return (React.createElement(Link, { to: anchor },
        React.createElement("img", { src: logo, alt: altText })));
};
Logo.propTypes = {
    anchor: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};
export default Logo;
//# sourceMappingURL=Logo.js.map