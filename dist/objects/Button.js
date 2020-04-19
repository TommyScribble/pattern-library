import React from 'react';
import PropTypes from 'prop-types';
var Button = function (_a) {
    var type = _a.type, style = _a.style, btnClass = _a.btnClass, children = _a.children;
    return (React.createElement("button", { type: type, style: style, className: "btn " + btnClass }, children));
};
Button.defaultProps = {
    type: 'button',
    style: {
        color: 'white',
        backgroundColor: 'orange',
    },
    btnClass: 'btn-primary',
    children: 'Please give me some text',
};
Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    style: PropTypes.object,
    btnClass: PropTypes.string,
    children: PropTypes.any,
};
export default Button;
//# sourceMappingURL=Button.js.map