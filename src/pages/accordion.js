import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/accordion/Accordion';
import Text from '../objects/Text';
import Heading from '../objects/Heading';

const accordion = props => {
	return (
		<PageLayout>
			<Text>This is the accordion page</Text>
			<Accordion>
				<div title={'Alligator Mississippiensis'} isOpen={false}>
					<li>
						<strong>Common Name:</strong> American Alligator
					</li>
					<li>
						<strong>Distribution:</strong> Texas to North Carolina, United
						States
					</li>
					<li>
						<strong>Endangered Status:</strong> Currently Not Endangered
					</li>
				</div>
				<div title={'Alligator Sinensis'} isOpen={false}>
					<li>
						<strong>Common Name:</strong> Chinese Alligator
					</li>
					<li>
						<strong>Distribution:</strong> Eastern China
					</li>
					<li>
						<strong>Endangered Status:</strong> Critically Endangered
					</li>
				</div>
			</Accordion>
			<Heading tagNumber={4} headingText={'Multiple Open'} />
			<Accordion allowMultipleOpen>
				<div title={'Alligator Mississippiensis'} isOpen={false}>
					<li>
						<strong>Common Name:</strong> American Alligator
					</li>
					<li>
						<strong>Distribution:</strong> Texas to North Carolina, United
						States
					</li>
					<li>
						<strong>Endangered Status:</strong> Currently Not Endangered
					</li>
				</div>
				<div title={'Alligator Sinensis'} isOpen={false}>
					<li>
						<strong>Common Name:</strong> Chinese Alligator
					</li>
					<li>
						<strong>Distribution:</strong> Eastern China
					</li>
					<li>
						<strong>Endangered Status:</strong> Critically Endangered
					</li>
				</div>
			</Accordion>
		</PageLayout>
	);
};

export default accordion;
