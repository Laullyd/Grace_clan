// FOR THE DESKTOP NAVBAR ANIMATION
window.onscroll = function bringOutNavbar() {
  document.getElementById('demo').innerHTML = window.innerWidth;
  let navBar = document.getElementById("nav-bar");
  let navBarHeight = navBar.offsetHeight;
  let logoText = document.getElementById("logo-txt");
  let navLinkDivs = document.getElementsByClassName("nav-links");
  let optionBtnDiv = document.getElementById('option-btn')
  let optionBtn = optionBtnDiv.getElementsByTagName('a')[0];
  if (document.documentElement.scrollTop > navBarHeight ) {
    navBar.style.background = '#ebebeb';
    logoText.style.color = 'rgb(36, 36, 36)';
    for (var i = 0; i < navLinkDivs.length; i++) {
      if (i === 1) {continue;}
      if (i === 5) {break;}
      let eachNavLinkDiv = navLinkDivs[i];
      let eachNavLink = eachNavLinkDiv.getElementsByTagName('a')[0];
      if (window.innerWidth > 768) {
        eachNavLink.style.color = 'rgb(30, 86, 30)';
      }
      optionBtn.style.color = '#000';
    }
  } else {
    navBar.style.background = 'transparent';
    logoText.style.color = '#d7d7d7';
    for (var j = 0; j < navLinkDivs.length; j++) {
      if (j === 1) {continue;}
      if (j === 5) {break;}
      let eachNavLinkDiv = navLinkDivs[j];
      let eachNavLink = eachNavLinkDiv.getElementsByTagName('a')[0];
      if (window.innerWidth > 768) {
        eachNavLink.style.color = '#d7d7d7';
      } else {
        eachNavLink.style.color = '#000';
      }
      optionBtn.style.color = '#d7d7d7';
    }
  }
}

// FOR THE TEBLET & MOBILE NAVBAR
function displayMenu() {
  let navLinksCont = document.getElementsByClassName('links-nav')[0];
  navLinksCont.classList.add('for-media-query');
  let navLinksDiv = navLinksCont.getElementsByClassName('nav-links');
  let dotCont = document.getElementsByClassName('dots')[0];
  let cancelMenu = document.createElement('div');
  cancelMenu.setAttribute('id', 'cancel-menu');
  cancelMenu.innerHTML = '&#x292C';
  navLinksCont.appendChild(cancelMenu);
  cancelMenu.addEventListener('click', function() {
    this.style.display = 'none';
    this.parentElement.classList.remove('for-media-query');
  });
}

/* FOR THE EMPOWERMENT INNER ELEMENT SWITCH WHEN SCREEN < 768px
let emp = document.getElementById('empowerment');
let empTxt = emp.getElementsByClassName('txt-cont')[0];
let empImg = emp.getElementsByClassName('images')[0];
function switchElements() {
  if (window.innerWidth <= 768) {
    empTxt.insertAdjacentElement('beforebegin', empImg);
  } else {
    empImg.insertAdjacentElement('beforebegin', empTxt);
  }
}
window.addEventListener('resize', switchElements);*/
