import React from 'react';
import AccordionItemButton from './AccordionItemButton';
import AccordionItemContent from './AccordionItemContent';

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// currentIndex: -1,
			// isOpen: false,
		};
	}

	accordionControl = (index, isOpen) => {
		const isOpenContent = isOpen;
		const currentIndexContent = index;
		return (
			[isOpenContent, currentIndexContent] &&
			console.log('ACOORDION-CONTROL', isOpenContent, currentIndexContent)
		);
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
							{console.log('INSIDE', element.id)}
							<AccordionItemContent
								content={element.content}
								index={element.id}
								currentIndex={this.currentIndexContent}
								isOpen={this.isOpenContent}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}

export default Accordion;
