const navLinksCont = document.getElementsByClassName('links-nav')[0];
const navLinksDiv = navLinksCont.getElementsByClassName('nav-links');
const dotCont = document.getElementsByClassName('dots')[0];
const accNo = document.getElementById('accountNumber');
const copyAccNo = document.getElementById('copyAccountNumber');
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const sentStatus = document.getElementById('sent-stats');

// FOR THE TABLET & MOBILE NAVBAR
function displayMenu() {
  navLinksCont.classList.add('for-media-query');
  const cancelMenu = document.createElement('div');
  cancelMenu.setAttribute('id', 'cancel-menu');
  cancelMenu.innerHTML = '&#x292C';
  navLinksCont.appendChild(cancelMenu);
  cancelMenu.addEventListener('click', function() {
    this.style.display = 'none';
    this.parentElement.classList.remove('for-media-query');
  });
}
// FPR THE ACCOUNT NUMBER COPY
copyAccNo.addEventListener('click', function(e) {
  navigator.clipboard.writeText(accNo.innerText)
    .then(() => {setTimeout(() => {
      copyAccNo.innerHTML = '<b>✓</b> Copied';
    }, 1500);})
    .catch(error => {console.error(error)})
    setTimeout(() => {
      copyAccNo.innerHTML = '<i class="fa-regular fa-copy"></i>Copy';
    }, 3500);
});
//
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending...';
  return fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    sentStatus.innerHTML = '<b>✓</b> Message Sent';
    sentStatus.style.color = 'green';
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message<i class="fa-solid fa-arrow-right"></i>';
    setTimeout(() => {
      sentStatus.innerHTML = '';
    }, 3500);
    console.log(data);
    form.reset();
  })
  .catch(error => {
    sentStatus.innerHTML = '<b>X</b> Cound not send message';
    sentStatus.style.color = 'red';
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message<i class="fa-solid fa-arrow-right"></i>';
    setTimeout(() => {
      sentStatus.innerHTML = '';
    }, 3500);
    console.error(error)
  });
});