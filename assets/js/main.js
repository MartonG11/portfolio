const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// SHOW MENU
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDE MENU
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// HIDE MENU ON ITEMCLICK
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL TO THE CLICKED NAVLINK

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// CHANGE THEME

let theme = localStorage.getItem('theme')

if(theme == null){
  setTheme('light')
}else{
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode
    setTheme(mode)
  })
}

function setTheme(mode){
  if(mode == 'default'){
    document.getElementById('theme-style').href = 'assets/css/default.css'
  }
  if(mode == 'red'){
    document.getElementById('theme-style').href = 'assets/css/red.css'
  }
  if(mode == 'green'){
    document.getElementById('theme-style').href = 'assets/css/green.css'
  }
  if(mode == 'grey'){
    document.getElementById('theme-style').href = 'assets/css/grey.css'
  }

  localStorage.setItem('theme', mode);
}
