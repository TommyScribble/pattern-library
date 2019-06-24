import React from 'react';

const AccordionItemButton = props => {
	const { title, handleClick, index, isOpen } = props;

	// buton onClick make all buttons isOpen=false
	// them make this button only isOpen=true

	return <button onClick={() => handleClick(index, isOpen)}>{title}</button>;
};

export default AccordionItemButton;
