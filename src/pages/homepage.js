import React from 'react';
import PageLayout from '../components/PageLayout';
import Heading from '../objects/Heading';
import Text from '../objects/Text';
import Anchor from '../objects/Anchor';

const homepage = props => {
	return (
		<PageLayout>
			<Heading
				tagNumber={3}
				headingText={
					'This pattern library is currently still under construction'
				}
			/>
			<Text>
				Navigate using the sidebar to the element you would like to use to find
				out more
			</Text>
			<Text>To get involved use one of the links below</Text>
			<Anchor path={'/buttons'} anchorClass={'button'} internal={true}>
				Get started
			</Anchor>
			<Anchor
				path={'https://github.com/TommyScribble/pattern-library'}
				anchorClass={'button'}>
				View Git
			</Anchor>
		</PageLayout>
	);
};

export default homepage;
