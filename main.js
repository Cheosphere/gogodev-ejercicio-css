let burguerIcon = document.getElementById('burger-icon')
let closeIcon = document.getElementById('close-icon')
let menuMobile = document.getElementById('navbar-menu')
let searchIcon = document.getElementById('search-icon')
let searchIconImg = document.getElementById('search-icon-img')
let searchBar = document.getElementById('search')

burguerIcon.addEventListener('click', () => {
    menuMobile.classList.add('show-menu')
    burguerIcon.style.display = "none"
    closeIcon.style.display = "flex"
})

closeIcon.addEventListener('click', () => {
    menuMobile.classList.remove('show-menu')
    burguerIcon.style.display = "flex"
    closeIcon.style.display = "none"
})

searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('search-view')
    searchIconImg.classList.toggle('color-icon')
})