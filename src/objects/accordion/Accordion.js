import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './AccordionItem';

const Accordion = props => {
	const { allowMultipleOpen, children, icon, btnClass, contentClass } = props;

	const [accordionItems, setAccordionItems] = useState({});

	useEffect(() => {
		const getAllSections = () => {
			const obj = {};
			children.forEach(child => {
				obj[child.props.title] = false;
			});
			return obj;
		};
		setAccordionItems(getAllSections());
	}, [children]);

	const closeAllSections = () => {
		Object.keys(accordionItems).forEach(item => {
			accordionItems[item] = false;
		});
	};

	const updateAccordionItems = (title, isOpen) => {
		if (!allowMultipleOpen) closeAllSections();
		if (isOpen === true)
			setAccordionItems({
				...accordionItems,
				[title]: isOpen,
			});
	};

	return (
		<ul className="accordion">
			{children.map((child, i) => {
				return (
					<AccordionItem
						key={i}
						isOpen={accordionItems[child.props.title]}
						title={child.props.title}
						updateAccordionItems={updateAccordionItems}
						icon={icon}
						btnClass={btnClass}
						contentClass={contentClass}>
						{child.props.children}
					</AccordionItem>
				);
			})}
		</ul>
	);
};

Accordion.propTypes = {
	allowMultipleOpen: PropTypes.bool,
	children: PropTypes.instanceOf(Object).isRequired,
	icon: PropTypes.string,
	btnClass: PropTypes.string,
	contentClass: PropTypes.string,
};

export default Accordion;
