import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	children: string;
};

const Text: React.FC<Props> = ({ children }: Props) => {
	return <p data-test="component-text">{children}</p>;
};

Text.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Text;
