import React from 'react';
import propTypes from 'prop-types';

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
		const {
			btnStyle,
			title,
			btnClass,
			contentStyle,
			children,
			contentClass,
		} = this.props;

		return (
			<React.Fragment>
				<button
					style={btnStyle}
					className={btnClass}
					onClick={() => {
						this.handleClick(this.state.isOpen);
					}}>
					{title}
				</button>
				{this.state.isOpen && (
					<div className={contentClass} style={contentStyle}>
						{children}
					</div>
				)}
			</React.Fragment>
		);
	}
}

AccordionItem.defaultProps = {
	children: 'this is some test content',
	btnStyle: {
		display: 'block',
		width: '100%',
		padding: '12px',
		backgroundColor: '#E20016',
		color: 'white',
		fontSize: '11px',
		textTransform: 'uppercase',
		border: 'none',
		cursor: 'pointer',
	},
	contentStyle: {
		display: 'block',
		width: '100%',
		padding: '16px',
		backgroundColor: 'rgba(166, 0, 22, 0.4)',
		color: 'black',
	},
};

AccordionItem.propTypes = {
	btnStyle: propTypes.object,
	contentStyle: propTypes.object,
	children: propTypes.object,
	title: propTypes.string,
	btnClass: propTypes.string,
	contentClass: propTypes.string,
};

export default AccordionItem;
