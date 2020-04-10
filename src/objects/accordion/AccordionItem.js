import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-icon-library';

const AccordionItem = props => {
	const {
		title,
		children,
		updateAccordionItems,
		icon,
		btnClass,
		contentClass,
		isOpen,
	} = props;

	const accordionRef = useRef(null);

	const [sectionOpen, setSectionOpen] = useState();
	const [sectionHeight, setSectionHeight] = useState('0px');

	useEffect(() => {
		setSectionOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		setSectionHeight(
			!sectionOpen ? '0px' : `${accordionRef.current.scrollHeight}px`
		);
	}, [sectionOpen]);

	const handleSectionClick = (title, sectionOpen) => {
		setSectionOpen(() => !sectionOpen);
		updateAccordionItems(title, !sectionOpen);
	};

	const activeBtn = sectionOpen ? 'active' : '';

	const activeHeight = {
		maxHeight: `${sectionHeight}`,
	}; /* stylelint-disable-line */

	return (
		<li className="accordion-item">
			<button
				className={`accordion-item__button ${btnClass} ${activeBtn}`}
				onClick={() => handleSectionClick(title, sectionOpen)}>
				{title}
				{icon && (
					<div className={`icon rotate`}>
						<Icon iconName={icon} />
					</div>
				)}
			</button>
			<div
				ref={accordionRef}
				style={activeHeight}
				className={`accordion-item__background ${contentClass}`}>
				<div className="content">{children}</div>
			</div>
		</li>
	);
};

AccordionItem.propTypes = {
	children: PropTypes.instanceOf(Object).isRequired,
	title: PropTypes.string,
	btnClass: PropTypes.string,
	contentClass: PropTypes.string,
	icon: PropTypes.bool,
	updateAccordionItems: PropTypes.func,
	isOpen: PropTypes.bool,
};

export default AccordionItem;
