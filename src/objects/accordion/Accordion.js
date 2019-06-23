import React from 'react';
import AccordionList from './AccordionList';

class Accordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: -1,
		};
	}

	handleClick = index => {
		this.setState({
			currentIndex: index,
		});
	};

	render() {
		return (
			<ul>
				{this.props.data.map(element => {
					return (
						<AccordionList
							title={element.title}
							content={element.content}
							key={element.id}
							handleClick={this.handleClick}
							index={element.id}
							currentIndex={this.state.currentIndex}
						/>
					);
				})}
			</ul>
		);
	}
}

export default Accordion;
