const hamburgerIconBtn = document.getElementsByClassName("hamburger-icon-button")[0];
const topNavMenu = document.getElementsByClassName("topnav-menu")[0];

hamburgerIconBtn.addEventListener('click', event => {
  if (topNavMenu.style.display == "flex") {
    topNavMenu.style.display = "none";
    return;
  }
  
  topNavMenu.style.display = "flex";
})