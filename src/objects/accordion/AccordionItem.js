import React, { useState, useEffect, useRef } from 'react';
import propTypes from 'prop-types';
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

	return (
		<li className="accordion-item">
			<button
				className={`accordion-item__button ${btnClass} ${
					sectionOpen ? 'active' : ''
				}`}
				onClick={() => handleSectionClick(title, sectionOpen)}>
				{title}
				{icon && (
					<div className={`icon rotate`}>
						<Icon iconName={'CaretDown2'} />
					</div>
				)}
			</button>
			<div
				ref={accordionRef}
				style={{ maxHeight: `${sectionHeight}` }}
				className={`accordion-item__background ${contentClass}`}>
				<div className="content">{children}</div>
			</div>
		</li>
	);
};

AccordionItem.propTypes = {
	children: propTypes.instanceOf(Object).isRequired,
	title: propTypes.string,
	btnClass: propTypes.string,
	contentClass: propTypes.string,
	icon: propTypes.bool,
};

export default AccordionItem;
