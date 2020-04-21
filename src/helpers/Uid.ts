export const Uid = () => {
	return `ID${window.crypto.getRandomValues(new Uint32Array(4)).join('-')}`;
};
