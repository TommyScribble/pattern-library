import React from 'react';
import PageLayout from '../components/PageLayout';
import Accordion from '../objects/accordion/Accordion';
import Text from '../objects/Text';
import Heading from '../objects/Heading';

const accordion = props => {
	return (
		<PageLayout>
			<Text>This is the accordion page</Text>
			<Heading tagNumber={4} headingText={'Single Open'} />
			<Accordion>
				<div title={'Alligator Mississippiensis'} isOpen={false}>
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
				<div title={'Alligator Sinensis'} isOpen={false}>
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
			<Heading tagNumber={4} headingText={'Multiple Open'} />
			<Accordion allowMultipleOpen>
				<div title={'Alligator Mississippiensis'} isOpen={false}>
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
				<div title={'Alligator Sinensis'} isOpen={false}>
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
