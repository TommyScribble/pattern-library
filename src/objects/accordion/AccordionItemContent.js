import React from 'react';

const AccordionItemContent = props => {
	const { currentIndex, index, content, isOpen } = props;
	// console.log('content-open', isOpen)
	return isOpen && currentIndex === index && <div>{content}</div>;
};

export default AccordionItemContent;
