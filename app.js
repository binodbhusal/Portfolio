const headline = document.querySelector('.headline');
const menuBar = document.querySelector('.nav-item');
const menuLogo = document.getElementById('vector');
const mylogo = document.querySelector('.mylogo');
const closeBtn = document.getElementById('btnclose');

menuLogo.addEventListener('click', () => {
  menuBar.style.visibility = 'visible';
  menuLogo.style.visibility = 'hidden';
  headline.style.filter = 'blur(2px)';
  mylogo.style.filter = 'blur(2px)';
});
closeBtn.addEventListener('click', () => {
  menuBar.style.visibility = 'hidden';
  headline.style.filter = 'blur(0)';
  mylogo.style.filter = 'blur(0)';
  menuLogo.style.visibility = 'visible';
});
