import React from 'react';

import PageLayout from '../Objects/PageLayout';
import Heading from '../Atoms/Heading';
import Text from '../Atoms/Text';
import Anchor from '../Atoms/Anchor';

type Links = {
	path: string;
	class: string;
	linkType: string;
	text: string;
};

const HomepageTemplate = ({ content }: any) => {
	return (
		<PageLayout>
			<Heading tagNumber={3} headingText={content.Heading} />
			{content.Text.map((item: string, i: number) => {
				return <Text key={i}>{item}</Text>;
			})}
			{content.Links.map((link: Links, i: number) => {
				return (
					<Anchor
						key={i}
						path={link.path}
						anchorClass={link.class}
						linkType={link.linkType}>
						{link.text}
					</Anchor>
				);
			})}
		</PageLayout>
	);
};

export default HomepageTemplate;
