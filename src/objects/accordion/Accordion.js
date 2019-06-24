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

	render() {
		const { data } = this.props;

		return (
			<ul>
				{data.map(element => {
					return (
						<li key={element.id}>
							<AccordionItemButton
								title={element.title}
								handleClick={this.handleClick}
								index={element.id}
								// currentIndex={this.state.currentIndex}
								// isOpen={this.state.isOpen}
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
