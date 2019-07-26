import React from 'react';
import propTypes from 'prop-types';

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
		const thisButton = e.currentTarget,
			navButtons = document.getElementsByClassName('accordion__button');

		if (!this.props.isOpen) {
			for (let i = 0; i < navButtons.length; i++) {
				navButtons[i].classList.remove('js-open');
			}
			thisButton.classList.add('js-open');
			this.accordion.style.height = `${this.height}px`;
		} else {
			thisButton.classList.remove('js-open');
			this.accordion.style.height = `0px`;
		}
		this.props.handleClick(title, isOpen);
	};

	render() {
		const { title, contentClass } = this.props;

		const { icon } = this.props.childProps;

		!this.props.allowMultipleOpen &&
			!this.props.isOpen &&
			this.accordionref.current !== null &&
			this.accordionref.current.removeAttribute('style');

		return (
			<li>
				<button
					className={'accordion__button'}
					onClick={e =>
						this.addRemoveHeight(this.props.title, !this.props.isOpen, e)
					}>
					{/* {icon && ( <Icon iconName={iconName} /> )} */}
					{title}
				</button>
				<div
					ref={this.accordionref}
					className={`${contentClass} accordion-content`}>
					{this.props.children}
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
};

AccordionItem.defaultProps = {
	contentClass: '',
	btnClass: '',
};

export default AccordionItem;
