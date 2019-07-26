import React from 'react';
import propTypes from 'prop-types';
import AccordionItem from './AccordionItem';

class Accordion extends React.Component {
	static defaultProps = {
		allowMultipleOpen: false,
	};

	constructor(props) {
		super(props);
		const children = this.props.children;
		Object.keys(children).forEach(title => {
			this.state = {
				sections: {
					[children[title].props.title]: false,
				},
			};
		});
	}

	handleClick = (title, isOpen) => {
		const { allowMultipleOpen } = this.props;

		const sections = { ...this.state.sections };

		if (!allowMultipleOpen) {
			Object.keys(this.state.sections).forEach(key => {
				sections[key] = false;
			});
		}

		sections[title] = isOpen;

		this.setState({ sections });
	};

	render() {
		const { children, icon } = this.props;

		return (
			<ul className="accordion">
				{children.map((child, i) => {
					return (
						<AccordionItem
							key={i}
							isOpen={this.state.sections[child.props.title]}
							allowMultipleOpen={this.props.allowMultipleOpen}
							title={child.props.title}
							handleClick={this.handleClick}
							icon={icon}
							childProps={child.props}>
							{child.props.children}
						</AccordionItem>
					);
				})}
			</ul>
		);
	}
}

Accordion.propTypes = {
	allowMultipleOpen: propTypes.bool,
	children: propTypes.instanceOf(Object).isRequired,
	icon: propTypes.string,
};

export default Accordion;
