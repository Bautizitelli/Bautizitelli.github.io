
var toggle_btn = document.querySelector(".toggle-btn");
var big_wrapper = document.querySelector(".big-wrapper");
var hamburguer_menu = document.querySelector(".hamburguer_menu")
var imagesContainer = document.getElementById("logos")
var images = imagesContainer.children
var toggleLOGO = document.querySelector(".toggleLOGO")


const toggleAnimation=()=>{
     if(big_wrapper.className === "big-wrapper light"){
        big_wrapper.className = "big-wrapper dark"
     }
     else {
        big_wrapper.className = "big-wrapper light"
     }
}

const toggleSideMenu=()=>{
   big_wrapper.classList.toggle("active")
}

function toggleLogo() {
   for (let i = 0; i < images.length; i++) {
     if (images[i].classList.contains("blackLogo")) {
       images[i].classList.remove("blackLogo");
       images[i].classList.add("whiteLogo");
     } else {
       images[i].classList.remove("whiteLogo");
       images[i].classList.add("blackLogo");
     }
   }
 }

toggle_btn.addEventListener('click', toggleAnimation)
toggle_btn.addEventListener('click',toggleLogo)
hamburguer_menu.addEventListener('click',toggleSideMenu)