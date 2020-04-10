import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-icon-library';

type Props = {
	title: string;
	children: any;
	updateAccordionItems: (title: string, isOpen: boolean) => void;
	icon?: string;
	btnClass?: string;
	contentClass?: string;
	isOpen: boolean;
};

const AccordionItem: React.FC<Props> = ({
	title,
	children,
	updateAccordionItems,
	icon,
	btnClass,
	contentClass,
	isOpen,
}: Props) => {
	const accordionRef = useRef<HTMLElement | null>(null);

	const [sectionOpen, setSectionOpen] = useState(false);
	const [sectionHeight, setSectionHeight] = useState('0px');

	useEffect(() => {
		setSectionOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (accordionRef.current !== null) {
			setSectionHeight(
				!sectionOpen ? '0px' : `${accordionRef.current.scrollHeight}px`
			);
		}
	}, [sectionOpen]);

	const handleSectionClick = (title: string, sectionOpen: boolean): void => {
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
	title: PropTypes.string.isRequired,
	btnClass: PropTypes.string,
	contentClass: PropTypes.string,
	icon: PropTypes.string,
	updateAccordionItems: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default AccordionItem;
