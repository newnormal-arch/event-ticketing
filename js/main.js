const toggleBtn = document.querySelector('.icons')
const toggleBtnIcon = document.querySelector('.icons i')
const dropDownMenu = document.querySelector('.navbar')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'bx bx-x' : 'bx bx-menu-alt-right'
}

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}