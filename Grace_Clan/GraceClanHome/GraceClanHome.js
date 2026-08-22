// FOR THE DESKTOP NAVBAR ANIMATION
window.onscroll = function bringOutNavbar() {
  //document.getElementById('demo').innerHTML = window.innerWidth;
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
      if (i === 0) {continue;}
      if (i === 5) {break;}
      let eachNavLinkDiv = navLinkDivs[i];
      let eachNavLink = eachNavLinkDiv.getElementsByTagName('a')[0];
      if (window.innerWidth > 768) {
        eachNavLink.style.color = 'rgb(30, 86, 30)';
      }
      optionBtn.style.color = '#000';
    }
  } else {
    navBar.style.background = 'rgba(0, 0, 0, 0.6)';
    logoText.style.color = '#d7d7d7';
    for (var j = 0; j < navLinkDivs.length; j++) {
      if (j === 0) {continue;}
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
  /*for (let eachNavLinkDiv of navLinksDiv) {
    let eachNavLink = eachNavLinkDiv.getElementsByTagName('a')[0];
    eachNavLink.style.textAlign = 'center';
    eachNavLink.style.marginTop = '20px';
  }*/
  let cancelMenu = document.createElement('div');
  cancelMenu.setAttribute('id', 'cancel-menu');
  cancelMenu.innerHTML = '&#x292C';
  navLinksCont.appendChild(cancelMenu);
  cancelMenu.addEventListener('click', function() {
    this.style.display = 'none';
    this.parentElement.classList.remove('for-media-query');
  });
}

// FOR THE FIRST CAROUSEL
let slidesCont = document.getElementById('carousel-img-container');
let slides = document.getElementsByClassName("each-carousel-img-container");
let overlay = document.querySelector('#dark-transparent');
let dots = document.getElementsByClassName("dot");
let index = 0;
let prevIndex;
let slideshowTimer;
let slideshowTimer2;
let slideshowInterval;

// For the selectSlide()
function selectSlide(ind) {
  clearTimeout(slideshowTimer);
  index = ind;
  slideOver();
}
let indexx;
prevIndex = (index - 1 + slides.length) % slides.length;

// When user swipes left or right
let touchStartX = 0;
let touchEndX = 0;
overlay.addEventListener('touchstart', function(e) {
  touchStartX =  e.changedTouches[0].clientX;
});
overlay.addEventListener('touchend', function(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});
function handleSwipe() {
  let swipeDistance = touchEndX - touchStartX;
  if (swipeDistance < -50) {
    swipeLeft();
  } else if (swipeDistance > 50) {
    swipeRight();
  }
}
function swipeLeft() {
  clearTimeout(slideshowTimer);
  slideOver();
}
function swipeRight() {
  clearTimeout(slideshowTimer);
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-for-dots", "");
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slide-away-r');
    slides[i].classList.remove('slide-into-r');
    slides[i].classList.remove('slide-away-l');
    slides[i].classList.remove('slide-into-l');
  }
  index = indexx;
  index--;
  prevIndex = (index - 1 + slides.length) % slides.length;
  if (index < 0) {
    index = slides.length - 1;
  }
  dots[index].className += " active-for-dots";
  activeSlide.classList.add('slide-away-r');
  activeSlide.style.left = '100%';
  activeSlide.classList.remove('active');
  slides[index].classList.add('slide-into-r');
  slides[index].style.left = '0px';
  slides[index].classList.add('active');
  activeSlide = slidesCont.querySelector('.active');
  slideshowTimer2 = setTimeout(slideOver, 500);
}

// For the slideOver()
slides[0].classList.add('active');
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = (i == 0) ? '0' : '100%';
}
dots[0].className += " active-for-dots";
let activeSlide;
let activeSlideImg;
slideOver();
function slideOver() {
  if (index == slides.length) {
    index = 0;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-for-dots", "");
  }
  dots[index].className += " active-for-dots";
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slide-away-l');
    slides[i].classList.remove('slide-into-l');
    slides[i].classList.remove('slide-away-r');
    slides[i].classList.remove('slide-into-r');
  }
  activeSlide = slidesCont.querySelector('.active');
  activeSlideImg = activeSlide.getElementsByTagName('img')[0];
  if (!slides[index].isSameNode(activeSlide)) {
    activeSlide.classList.add('slide-away-l');
    activeSlide.style.left = '-100%';
    activeSlide.classList.remove('active');
    slides[index].classList.add('slide-into-l');
    slides[index].style.left = '0px';
    slides[index].classList.add('active');
  }
  activeSlide = slidesCont.querySelector('.active');
  activeSlideImg = activeSlide.getElementsByTagName('img')[0];
  index++;
  indexx = index - 1;
  slideshowTimer = setTimeout(slideOver, 6000);
}

// FOR THE SECOND CAROUSEL
let index2 = 0;
showSlides();
function showSlides() {
  let slides2 = document.getElementsByClassName("fade");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  if (index2 == slides2.length) {
    index2 = 0;
  }
  slides2[index2].style.display = "block";  
  index2++;
  setTimeout(showSlides, 5000);
}

// FOR THE CHARITY SECTION SCROLL INTO VIEW ANIMATION EFFECT
let charitySection = document.querySelector("#charity");
let charityImgCont = document.querySelector("#charity-img-cont");
let charityTextCont = document.querySelector("#charity-txt-cont");
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      charityImgCont.classList.add("right");
      charityImgCont.classList.add("bounce");
      charityTextCont.classList.add("left");
    }
  });
}, {
  threshold: 0.3 
});
observer1.observe(charitySection);

// FOR THE MUSIC SECTION SCROLL INTO VIEW ANIMATION EFFECT
let musicSection = document.querySelector("#music");
let musicTextCont = document.querySelector("#music-txt-cont");
// First, create an Intersection Observer machine to lookout for when one or more elements (to be specified) intersects with the viewport.
const observer2 = new IntersectionObserver((entries) => { // 'entries' is an array containing the said element(s) and their intersection information.
  // Then, Configure the observer on what to do when the said element(s) intersect with the viewport.
  entries.forEach(entry => {
    if (entry.isIntersecting) {  // 'isIntersecting' is an entry object property that indicates whether the observed element is currently intersecting with the viewport or not.
      musicTextCont.classList.add("show");
    }/* else {
      musicTextCont.classList.remove("show"); // This is optional. It allows for a fade-out effect as the user scrolls away from the music section.
    }*/
  });
}, {
  threshold: 0.3 // This specifies the percentage of the element that must be visible to trigger the observer callback function. '0.3' means 30%.
});
// Finally, tell the observer which element(s) to observe.
observer2.observe(musicSection);

// FOR THE MEMBERS SECTION SCROLL INTO VIEW ANIMATION EFFECT
if (window.innerWidth <= 768) {
  let prmImgCont = document.querySelector("#prm-img-cont");
  let memberConts = document.querySelectorAll(".each-member-cont");
  let prmDots = document.querySelectorAll(".dot2");
  for (let i = 0; i < memberConts.length; i++) {
    let currentMemberCont = memberConts[i];
    let currentPrmDot = prmDots[i];
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          currentPrmDot.classList.add("active");
        } else {
          currentPrmDot.classList.remove("active");
        }
      });
    }, {
      root: prmImgCont,
      threshold: 0.4 
    });
    observer2.observe(currentMemberCont);
  }
}

// FOR THE MODAL
let modal = document.getElementById('modal');
let modalImg = modal.getElementsByTagName('img')[0];
let imgCaption = document.getElementById('caption');
function openModal(clickedPic) {
  modal.style.display = 'flex';
  modalImg.src = clickedPic.src;
  imgCaption.innerHTML = clickedPic.alt;
}
function closeModal() {
  modal.style.display = 'none';
}
