import React from 'react';
import propTypes from 'prop-types';
import Icon from 'react-icon-library';

class AccordionItem extends React.Component {
	constructor(props) {
		super(props);
		this.accordionref = React.createRef();
	}

	componentDidMount() {
		this.accordion = this.accordionref.current;
		this.height = this.accordionref.current.clientHeight;
		this.accordionref.current.classList.add('js-closed');
	}

	addRemoveHeight = (title, isOpen, e) => {
		if (!this.props.isOpen) {
			this.accordion.style.height = `${this.height}px`;
		} else {
			this.accordion.style.height = `0px`;
		}
		this.props.handleClick(title, isOpen);
	};

	iconSwitch = isOpen => {
		if (!isOpen) {
			return <Icon className="test" iconName={'CaretDown2'} />;
		}
		return <Icon iconName={'CaretUp2'} />;
	};

	render() {
		const { title, contentClass, icon, isOpen } = this.props;

		const openClass = isOpen ? 'js-open' : '';

		!this.props.allowMultipleOpen &&
			!this.props.isOpen &&
			this.accordionref.current !== null &&
			this.accordionref.current.removeAttribute('style');

		return (
			<li className="accordion-item">
				<button
					className={`accordion-item__button ${openClass}`}
					onClick={e =>
						this.addRemoveHeight(this.props.title, !this.props.isOpen, e)
					}>
					{title}
					{icon && <div className="icon">{this.iconSwitch(isOpen)}</div>}
				</button>
				<div
					ref={this.accordionref}
					className={`${contentClass} accordion-item__background`}>
					<div className="content">{this.props.children}</div>
				</div>
			</li>
		);
	}
}

AccordionItem.propTypes = {
	children: propTypes.instanceOf(Object).isRequired,
	isOpen: propTypes.bool,
	title: propTypes.string,
	onClick: propTypes.func,
	btnClass: propTypes.string.isRequired,
	contentClass: propTypes.string.isRequired,
	icon: propTypes.bool,
};

AccordionItem.defaultProps = {
	contentClass: '',
	btnClass: '',
};

export default AccordionItem;
