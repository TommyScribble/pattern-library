import React from 'react';
import { Link } from '@reach/router';
var NotFound = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "404"),
        React.createElement("p", null,
            "Sorrry the page page you are looking for is not here please go bak to the ",
            React.createElement(Link, { to: "/" }, "homepage"))));
};
export default NotFound;
//# sourceMappingURL=notFound.js.map