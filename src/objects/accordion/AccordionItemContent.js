import React from 'react';

const AccordionItemContent = props => {
	console.log('CONTENT', props);
	const { currentIndex, index, content, isOpen } = props;
	if (isOpen && currentIndex === index) {
		return <div>{content}</div>;
	} else {
		return null && console.log('NULL');
	}
};

export default AccordionItemContent;
