import React from 'react';
import propTypes from 'prop-types';

type Props = {
	tagNumber: number;
	headingText: string;
};

const Heading: React.FC<Props> = ({ tagNumber, headingText }: Props) => {
	const HeaderTag: any = `h${tagNumber}`;

	return <HeaderTag>{headingText}</HeaderTag>;
};

Heading.propTypes = {
	tagNumber: propTypes.number.isRequired,
	headingText: propTypes.string.isRequired,
};

export default Heading;
