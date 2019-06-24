import React from 'react';

class AccordionItemButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	handleButtonClick = (index, isOpen) => {
		this.setState({
			isOpen: !isOpen,
		});
		//create loop back to parent here
		this.props.accordionControl(index, isOpen);
	};

	render() {
		const { title, index } = this.props;
		console.log(
			'Button-STATE',
			this.state.isOpen,
			index,
			this.props.currentIndex
		);
		return (
			<div>
				<button
					onClick={() => {
						this.handleButtonClick(index, this.state.isOpen);
					}}>
					{title}
				</button>
			</div>
		);
	}
}

export default AccordionItemButton;
