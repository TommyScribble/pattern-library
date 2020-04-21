import React from 'react';

import HomepageTemplate from '../components/Templates/HomepageTemplate';

import content from '../assets/HomepageData.json';

type Data = {
	Heading: string;
	Text: string[];
	Links: {
		path: string;
		class: string;
		internal: boolean;
		text: string;
	}[];
};

const homepage = () => {
	return <HomepageTemplate content={content as Data} />;
};

export default homepage;
