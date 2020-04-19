import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icon-library';
var AccordionItem = function (_a) {
    var title = _a.title, children = _a.children, updateAccordionItems = _a.updateAccordionItems, icon = _a.icon, btnClass = _a.btnClass, contentClass = _a.contentClass, isOpen = _a.isOpen;
    var accordionRef = useRef();
    var _b = useState(false), sectionOpen = _b[0], setSectionOpen = _b[1];
    var _c = useState('0px'), sectionHeight = _c[0], setSectionHeight = _c[1];
    useEffect(function () {
        setSectionOpen(isOpen);
    }, [isOpen]);
    useEffect(function () {
        if (accordionRef.current !== null) {
            setSectionHeight(!sectionOpen ? '0px' : accordionRef.current.scrollHeight + "px");
        }
    }, [sectionOpen]);
    var handleSectionClick = function (title, sectionOpen) {
        setSectionOpen(function () { return !sectionOpen; });
        updateAccordionItems(title, !sectionOpen);
    };
    var activeBtn = sectionOpen ? 'active' : '';
    var activeHeight = {
        maxHeight: "" + sectionHeight,
    };
    return (React.createElement("li", { className: "accordion-item" },
        React.createElement("button", { className: "accordion-item__button " + btnClass + " " + activeBtn, onClick: function () { return handleSectionClick(title, sectionOpen); } },
            title,
            icon && (React.createElement("div", { className: "icon rotate" },
                React.createElement(Icon, { iconName: icon })))),
        React.createElement("div", { ref: accordionRef, style: activeHeight, className: "accordion-item__background " + contentClass },
            React.createElement("div", { className: "content" }, children))));
};
AccordionItem.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired,
    btnClass: PropTypes.string,
    contentClass: PropTypes.string,
    icon: PropTypes.string,
    updateAccordionItems: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
export default AccordionItem;
//# sourceMappingURL=AccordionItem.js.map