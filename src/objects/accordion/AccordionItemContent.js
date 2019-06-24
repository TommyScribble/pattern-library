import React from 'react';

const AccordionItemContent = props => {
	const { currentIndex, index, content, isOpen } = props;

	if (isOpen && currentIndex === index) {
		return <div>{content}</div>;
	} else {
		return null;
	}
};

export default AccordionItemContent;
