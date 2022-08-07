/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header");
// const links = document.querySelectorAll(".nav-links") //navlinks
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
/* --------------- Sticky Navbar --------------- */

function stickyNavbar(){
    header.classList.toggle("scrolled",window.pageYOffset > 0);
}

stickyNavbar()

window.addEventListener("scroll", stickyNavbar)








/*---------------- Loop Through images  ---------------*/ 

function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  
  hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    } else {
      closeMenu();
    }
  });
  
  links.forEach((link) => link.addEventListener("click", () => closeMenu()));
  
  

/* --------------- Portfolio Filter Animation --------------- */

let mixer = mixitup(".portfolio-gallery");


/* --------------- Modal Pop Up Animation Animation --------------- */

// const prt_section = document.querySelector(".portfolio");
// const zoom_icons = document.querySelector(".zoom-icon");
// const modal_overlay = document.querySelector(".modal-overlay");


// zoom_icons.forEach(icn => icn.addEventListener("click",() =>{
//   prt_section.classList.add("open")  
// }));

// modal_overlay.addEventListener("click", () => 
// prt_section.classList.remove("open"))

/* --------------- Change Active Link On Scroll --------------- */
// window.addEventListener("scroll", ()=>{
// activeLink();
// });

// function activeLink () {
//     let sections = document.querySelectorAll("section[id]")
//     let passedSections = Array.from(sections).map((sct, i) => {
//         return {
//            y: sct.getBoundingClientRect().top -header.offsetHeight,
//          id: i,
//         } 
//     }).filter(sect => sect.y <=0)


//     let currentSectionID = passedSections.at(-1).id

//     links.forEach(l => l.classList.remove("active"))
//     links[currentSectionID].classList.add("active")
// }




// form validattion

function validation(){
  let x = document.forms["myForm"]
   ['tel'].value;
  if(tel.length<=7){
    alert("Phone Number should include area code")
  } else {
    return

  }
  
}

validation()

//form validation