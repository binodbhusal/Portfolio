const headline = document.querySelector('#main-area');
const menuBar = document.querySelector('.nav-item');
const menuLogo = document.getElementById('vector');
const mylogo = document.querySelector('.mylogo');
const closeBtn = document.getElementById('btnclose');
const listItems = document.querySelectorAll('.mobile-menu > li');

for (let i = 0; i <= listItems.length - 1; i += 1) {
  listItems[i].addEventListener('click', () => {
    menuBar.style.visibility = 'hidden';
    headline.style.filter = 'blur(0)';
    mylogo.style.filter = 'blur(0)';
    menuLogo.style.visibility = 'visible';
  });
}

menuLogo.addEventListener('click', () => {
  menuBar.style.visibility = 'visible';
  menuLogo.style.visibility = 'hidden';
  menuBar.style.filter = 'blur(0)';
  headline.style.filter = 'blur(4px)';
  mylogo.style.filter = 'blur(2px)';
});
closeBtn.addEventListener('click', () => {
  menuBar.style.visibility = 'hidden';
  headline.style.filter = 'blur(0)';
  mylogo.style.filter = 'blur(0)';
  menuLogo.style.visibility = 'visible';
  menuBar.style.transition = '0.2s';
});
const form = document.querySelector('#myform');
const emailCheck = form.querySelector('#myemail');
const emailError = form.querySelector('#emailError');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValue = emailCheck.value;
  if (emailValue !== emailValue.toLowerCase()) {
    emailError.innerHTML = 'please type email in lower case';
    return;
  }
  emailError.innerHTML = '';
  form.submit();
});

// local storage
const nameInput = document.getElementById('myname');
const emailInput = document.getElementById('myemail');
const textarrInput = document.getElementById('mytextarr');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const getData = {
    nameInput: nameInput.value,
    email: emailInput.value,
    textarr: textarrInput.value,
  };
  localStorage.setItem('getData', JSON.stringify(getData));
  const allFormData = JSON.parse(localStorage.getItem('getData'));
  console.log(allFormData);
});
