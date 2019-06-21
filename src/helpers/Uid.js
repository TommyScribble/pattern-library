export default function uid() {
	return `ID${crypto.getRandomValues(new Uint32Array(4)).join('-')}`;
}
