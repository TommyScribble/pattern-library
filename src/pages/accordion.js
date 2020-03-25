import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/accordion/Accordion';
import Heading from '../objects/Heading';

const accordion = props => {
	return (
		<PageLayout>
			<Heading tagNumber={2} headingText={'Accordions'} />
			<Heading tagNumber={3} headingText={'Single Open'} />
			<Accordion icon>
				<div title={'Alligator Mississippiensis-01 - first'}>
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
				<div title={'Alligator Sinensis-02 - second'}>
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
			{/* <Accordion allowMultipleOpen>
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
			<Heading tagNumber={3} headingText={'Multiple Open With Icons'} />
			<Accordion allowMultipleOpen icon>
				<div title={'Alligator Mississippiensis-21'}>
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
				<div title={'Alligator Sinensis-22'}>
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
			</Accordion> */}
		</PageLayout>
	);
};

export default accordion;
