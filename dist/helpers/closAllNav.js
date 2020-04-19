export default function closeAllNav(maxWidth) {
    var mobile = window.matchMedia(maxWidth);
    if (mobile.matches) {
        var navigationList = document.getElementsByClassName('navigation-list');
        for (var i = 0; i < navigationList.length; i++) {
            navigationList[i].style.height = '0px';
        }
    }
}
//# sourceMappingURL=closAllNav.js.map