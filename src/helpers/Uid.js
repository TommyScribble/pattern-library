export const Uid = () => {
	return `ID${crypto.getRandomValues(new Uint32Array(4)).join('-')}`;
};
