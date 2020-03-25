import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import Icon from 'react-icon-library';

const AccordionItem = props => {
	const { title, contentClass, icon, btnClass } = props;

	const accordionRef = useRef(null);

	const [isOpen, setIsOpen] = useState('');
	const [sectionHeight, setSectionHeight] = useState('0px');

	const handleClick = isOpen => {
		setIsOpen(isOpen === '' ? 'active' : '');
		setSectionHeight(
			isOpen === 'active' ? '0px' : `${accordionRef.current.scrollHeight}px`
		);
	};

	const rotateIcon = () => (isOpen === 'active' ? 'rotate' : '');

	return (
		<li className="accordion-item">
			<button
				className={`accordion-item_button ${btnClass} ${isOpen}`}
				onClick={() => handleClick(isOpen)}>
				{title}
				{icon && (
					<div className={`icon ${rotateIcon()}`}>
						<Icon iconName={'CaretDown2'} />
					</div>
				)}
			</button>
			<div
				ref={accordionRef}
				style={{ maxHeight: `${sectionHeight}` }}
				className={`${contentClass} accordion-item__background`}>
				<div className="content">{props.children}</div>
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
