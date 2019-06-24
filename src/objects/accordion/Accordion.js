import React from 'react';
import AccordionItemButton from './AccordionItemButton';
import AccordionItemContent from './AccordionItemContent';

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: -1,
			// isOpen: false,
		};
	}

	accordionControl = (index, isOpen) => {
		const isOpenContent = isOpen;
		const indexContent = index;
		return console.log('Acordion Control', isOpenContent, indexContent);
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
								accordionControl={this.accordionControl}
								index={element.id}
								currentIndex={this.state.currentIndex}
							/>
							<AccordionItemContent
								content={element.content}
								index={element.id}
								currentIndex={this.state.currentIndex}
								// isOpen={isOpenContent}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Accordion;
