import React from 'react';

class AccordionItemButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: -1,
			isOpen: false,
		};
	}

	handleButtonClick = (index, isOpen) => {
		this.setState({
			currentIndex: index,
			isOpen: !isOpen,
		});
		//create loop back to parent here
		// this.props.accordionControl(this.state.currentIndex, this.state.isOpen);
	};

	render() {
		const { title, index, accordionControl } = this.props;
		console.log('Clixk', this.state);

		accordionControl(this.state.currentIndex, this.state.isOpen);
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
