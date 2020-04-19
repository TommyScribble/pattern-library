import React from 'react';
import PropTypes from 'prop-types';
var Text = function (_a) {
    var children = _a.children;
    return React.createElement("p", { "data-test": "component-text" }, children);
};
Text.propTypes = {
    children: PropTypes.string.isRequired,
};
export default Text;
//# sourceMappingURL=index.js.map