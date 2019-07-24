export default function closeAllNav(maxWidth) {
	const mobile = window.matchMedia(maxWidth);
	if (mobile.matches) {
		const navigationList = document.getElementsByClassName('navigation-list');
		for (let i = 0; i < navigationList.length; i++) {
			navigationList[i].style.height = '0px';
		}
	}
}
