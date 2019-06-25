import React from 'react';
import propTypes from 'prop-types';
import Accordion from './Accordion';

class AccordionItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	handleClick = isOpen => {
		this.setState({
			isOpen: !isOpen,
		});
	};

	render() {
		const defaultStyle = {
			display: 'block',
		};

		const { title, objClass } = this.props;

		return (
			<React.Fragment>
				<button
					style={defaultStyle}
					className={objClass}
					onClick={() => {
						this.handleClick(this.state.isOpen);
					}}>
					{title}
				</button>
				{this.state.isOpen && <div>{this.props.children}</div>}
			</React.Fragment>
		);
	}
}

Accordion.defaultProps = {
	children: 'this is some test content',
	// style: defaultStyle
};

Accordion.propTypes = {
	style: propTypes.object.isRequired,
	childrent: propTypes.string.isRequired,
	title: propTypes.string,
	objClass: propTypes.string,
};

export default AccordionItem;
