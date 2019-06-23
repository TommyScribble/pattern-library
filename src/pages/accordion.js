import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/accordion/Accordion';
import data from '../objects/accordion/Data';

const accordion = props => {
	return (
		<PageLayout>
			<div>This is the accordion page</div>
			<Accordion data={data} />
		</PageLayout>
	);
};

export default accordion;
