import React from 'react';
import Header from './Header';
var PageLayout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("main", { className: "main-content" },
            React.createElement("section", { className: "section" },
                React.createElement("div", { className: "container" }, children)))));
};
export default PageLayout;
//# sourceMappingURL=PageLayout.js.map