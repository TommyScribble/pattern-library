import React from 'react';
import propTypes from 'prop-types';
var Heading = function (_a) {
    var tagNumber = _a.tagNumber, headingText = _a.headingText;
    var HeaderTag = "h" + tagNumber;
    return React.createElement(HeaderTag, null, headingText);
};
Heading.propTypes = {
    tagNumber: propTypes.number.isRequired,
    headingText: propTypes.string.isRequired,
};
export default Heading;
//# sourceMappingURL=Heading.js.map