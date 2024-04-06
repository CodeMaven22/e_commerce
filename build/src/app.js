const cartMenu = document.querySelector('#cartMenubar')
const Menu = document.querySelector('#sideMenu')

cartMenu.addEventListener("click", () => {
    Menu.classList.toggle('-translate-y-full');
})

Menu.addEventListener("click", () => {
    Menu.classList.add('-translate-y-full');
})