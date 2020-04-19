import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './AccordionItem';
//TODO: add functionlity to choose initally open section + fisisOpen eRror...
type Props = {
	allowMultipleOpen?: boolean;
	children: any;
	icon?: string;
	btnClass?: string;
	contentClass?: string;
};

type SectionShape = {
	[key: string]: boolean;
};

const Accordion: React.FC<Props> = ({
	allowMultipleOpen,
	children,
	icon,
	btnClass,
	contentClass,
}: Props) => {
	const [accordionItems, setAccordionItems] = useState<SectionShape>({});

	useEffect(() => {
		const getAllSections = () => {
			const obj: SectionShape = {};
			children.forEach((child: any) => {
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

	const updateAccordionItems = (title: string, isOpen: boolean): void => {
		if (!allowMultipleOpen) closeAllSections();
		if (isOpen === true)
			setAccordionItems({
				...accordionItems,
				[title]: isOpen,
			});
	};

	return (
		<ul className="accordion">
			{children.map((child: any, i: number) => {
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
