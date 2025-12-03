const menuIcon = document.querySelector('.fa-list');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    sideMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuIcon) {
        sideMenu.classList.remove('open');
    }
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

window.addEventListener("load", () => {
    const popup = document.getElementById("freePopup");
    const closeBtn = document.getElementById("closePopup");

    setTimeout(() => {
        popup.classList.add("show");
    }, 500);

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
