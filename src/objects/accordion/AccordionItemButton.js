import React from 'react';

class AccordionItemButton extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		currentIndex: -1,
	// 		isOpen: false,
	// 	};
	// }

	// handleClick = (index, isOpen) => {
	// 	this.setState({
	// 		currentIndex: index,
	// 		isOpen: !isOpen,
	// 	});
	// };

	render() {
		const { title, handleClick, index, isOpen } = this.props;

		return (
			<div>
				<button onClick={() => handleClick(index, isOpen)}>{title}</button>
			</div>
		);
	}
}

export default AccordionItemButton;
