import React from 'react';
import AccordionItemButton from './AccordionItemButton';
import AccordionItemContent from './AccordionItemContent';

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: -1,
			isOpen: false,
		};
	}

	handleClick = (index, isOpen) => {
		this.setState({
			currentIndex: index,
			isOpen: !isOpen,
		});
	};

	// closeAllAccordions = (isOpen) => {
	// 	// buton onClick make all buttons isOpen=false
	// 	// find all isOpen = true
	// 	this.setState({
	// 		isOpen: isOpen
	// 	})
	// 	console.log('closeAllAccordions', this.state)
	// }

	render() {
		return (
			<ul>
				{this.props.data.map(element => {
					return (
						<li key={element.id}>
							<AccordionItemButton
								title={element.title}
								closeAllAccordions={this.closeAllAccordions}
								handleClick={this.handleClick}
								index={element.id}
								currentIndex={this.state.currentIndex}
								isOpen={this.state.isOpen}
							/>
							<AccordionItemContent
								content={element.content}
								index={element.id}
								currentIndex={this.state.currentIndex}
								isOpen={this.state.isOpen}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Accordion;
