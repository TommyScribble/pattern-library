import React from 'react';
import propTypes from 'prop-types';
import AccordionItem from './AccordionItem';

const Accordion = props => {
	// Funtional
	/// Props being passed and deconstructed
	const {
		// allowMultipleOpen,
		children,
		icon,
	} = props;

	return (
		<ul className="accordion">
			{children.map((child, i) => {
				return (
					<AccordionItem
						key={i}
						// allowMultipleOpen={props.allowMultipleOpen}
						title={child.props.title}
						icon={icon}>
						{child.props.children}
					</AccordionItem>
				);
			})}
		</ul>
	);
};

Accordion.propTypes = {
	// allowMultipleOpen: propTypes.bool,
	children: propTypes.instanceOf(Object).isRequired,
	icon: propTypes.bool,
};

export default Accordion;
