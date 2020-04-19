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
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';
var Accordion = function (_a) {
    var allowMultipleOpen = _a.allowMultipleOpen, children = _a.children, icon = _a.icon, btnClass = _a.btnClass, contentClass = _a.contentClass;
    var _b = useState({}), accordionItems = _b[0], setAccordionItems = _b[1];
    useEffect(function () {
        var getAllSections = function () {
            var obj = {};
            children.forEach(function (child) {
                obj[child.props.title] = false;
            });
            return obj;
        };
        setAccordionItems(getAllSections());
    }, [children]);
    var closeAllSections = function () {
        Object.keys(accordionItems).forEach(function (item) {
            accordionItems[item] = false;
        });
    };
    var updateAccordionItems = function (title, isOpen) {
        var _a;
        if (!allowMultipleOpen)
            closeAllSections();
        if (isOpen === true)
            setAccordionItems(__assign(__assign({}, accordionItems), (_a = {}, _a[title] = isOpen, _a)));
    };
    return (React.createElement("ul", { className: "accordion" }, children.map(function (child, i) {
        return (React.createElement(AccordionItem, { key: i, isOpen: accordionItems[child.props.title], title: child.props.title, updateAccordionItems: updateAccordionItems, icon: icon, btnClass: btnClass, contentClass: contentClass }, child.props.children));
    })));
};
Accordion.propTypes = {
    allowMultipleOpen: PropTypes.bool,
    children: PropTypes.instanceOf(Object).isRequired,
    icon: PropTypes.string,
    btnClass: PropTypes.string,
    contentClass: PropTypes.string,
};
export default Accordion;
//# sourceMappingURL=Accordion.js.map