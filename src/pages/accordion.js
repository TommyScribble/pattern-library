import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/Accordion/Accordion';
import Heading from '../objects/Heading';

const accordion = props => {
	return (
		<PageLayout>
			<Heading tagNumber={2} headingText={'Accordions'} />
			<Heading tagNumber={3} headingText={'Single Open'} />
			<Accordion
				icon={'CaretUp'}
				contentClass={'content-class'}
				btnClass={'button-class'}>
				<div title={'Alligator Mississippiensis-01'}>
					<div>
						<strong>Common Name:</strong> American Alligator
					</div>
					<div>
						<strong>Distribution:</strong> Texas to North Carolina, United
						States
					</div>
					<div>
						<strong>Endangered Status:</strong> Currently Not Endangered
					</div>
				</div>
				<div title={'Alligator Sinensis-02'}>
					<div>
						<strong>Common Name:</strong> Chinese Alligator ++
					</div>
					<div>
						<strong>Distribution:</strong> Eastern China
					</div>
					<div>
						<strong>Endangered Status:</strong> Critically Endangered
					</div>
				</div>
			</Accordion>
			<Heading tagNumber={3} headingText={'Multiple Open'} />
			<Accordion allowMultipleOpen>
				<div title={'Alligator Mississippiensis-11'}>
					<div>
						<strong>Common Name:</strong> American Alligator
					</div>
					<div>
						<strong>Distribution:</strong> Texas to North Carolina, United
						States
					</div>
					<div>
						<strong>Endangered Status:</strong> Currently Not Endangered
					</div>
				</div>
				<div title={'Alligator Sinensis-12'}>
					<div>
						<strong>Common Name:</strong> Chinese Alligator
					</div>
					<div>
						<strong>Distribution:</strong> Eastern China
					</div>
					<div>
						<strong>Endangered Status:</strong> Critically Endangered
					</div>
				</div>
			</Accordion>
		</PageLayout>
	);
};

export default accordion;
