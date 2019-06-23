import React from 'react';

const AccordionList = props => {
	const { title, content, handleClick, index, currentIndex } = props;

	return (
		<li>
			{console.log('props', props)}
			<button onClick={() => handleClick(index)}>{title}</button>
			{currentIndex === index && <div>{content}</div>}
		</li>
	);
};

export default AccordionList;
