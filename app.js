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

// Pup menu version Part--------------------------------------------------------------------
// objects stored in dynamic above-------------------------------------------------------
const data = [
  {
    name: 'Tonic',
    deskname: 'Tonic',
    imageUrl: 'images/Snapshoot Portfolio (1).png',
    deskImageUrl: 'images/Snapshootdesktop.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',

    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    description1: '<span><p id=desktext>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p id=desktext>Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',
    buttonUrl: 'https://example.com/card2',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://example.com/card2',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
  {
    name: 'Multi-post Stories',
    deskname: 'Multi-post Stories',
    imageUrl: 'images/Snapshoot Portfolio (3).png',
    deskImageUrl: 'images/SnapshootPortfolio12.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description1: '<span><p id=desktext>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p id=desktext>Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',
    buttonUrl: 'https://example.com/card2',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://example.com/card2',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
  {
    name: 'Tonic',
    deskname: 'Facebook 360',
    imageUrl: 'images/Snapshoot Portfolio (2).png',
    deskImageUrl: 'images/SnapshootPortfoliocard5.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',

    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description1: '<span><p id=desktext>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p id=desktext>Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',

    buttonUrl: 'https://example.com/card2',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://example.com/card2',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
  {
    name: 'Multi-post Stories',
    deskname: 'Uber-Navigation',
    imageUrl: 'images/Snapshoot Portfolio (4).png',
    deskImageUrl: 'images/SnapshootPortfolio8.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',

    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description1: '<span><p id=desktext>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p id=desktext>Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',

    buttonUrl: 'https://example.com/card2',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://example.com/card2',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
];

// displayCards function ()---------------------------------------------------------------------
function displayCards(index) {
  const card = data[index];
  let cardHTML = '';

  // Mobile version
  if (window.innerWidth <= 768) {
    cardHTML = ` 
              
          <div class=card>
          <button class=closebtn1>&times;</button>
          <h3>${card.name}</h3>
          ${card.listItems1}
          <img src="${card.imageUrl}"<br>
         <p class=descriptiontxt>${card.description}</p>
          ${card.technologies}
          </div>
          <div id=linkbutton>
          <a class= linkbtn href="${card.buttonUrl}">${card.buttonLabel}<img class=icon12 src="${card.button12Url}"></a>
          <a class= linkbtn href="${card.buttonUrl1}">${card.buttonLabel1}<img class=icon12 src="${card.button2Url}"></a>
          </div>`;
    // Desktop version------------------------------------------------------------
  } else if (window.innerWidth > 768) {
    cardHTML = ` 
                
            <div class=card>
            <button class=closebtn1>&times;</button>
            <h3>${card.deskname}</h3>
           <span> ${card.listItems1}</span>
            <img class=deskimg src="${card.deskImageUrl}"
            </div>
            <div class=row>
            <div class=column>
           <p> ${card.description1}</p>
           </div>
            <div class=column1 id=linkbutton>
           ${card.technologies1}
           <div id=tech1><a class= linkbtn href="${card.buttonUrl}">${card.buttonLabel}<img class=icon12 src="${card.button12Url}"></a>
            <a class= linkbtn href="${card.buttonUrl1}">${card.buttonLabel}<img class=icon12 src="${card.button2Url}"></a>
            </div>
            </div>
            </div>
  
      `;
  }

  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.style.height = 'auto';
  popup.style.marginRight = '24px';
  popup.style.marginLeft = '24px';
  popup.style.borderRadius = '16px';
  popup.innerHTML = cardHTML;
  const popupcontainer = document.getElementById('popup-container');
  popupcontainer.appendChild(popup);
  // popup overlay
  if (window.innerWidth > 768) {
    popup.style.height = '1000px';
    popup.style.position = 'Absolute';
  }
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  const closebtn1 = document.querySelector('.closebtn1');
  closebtn1.addEventListener('click', () => {
    popup.remove();
    overlay.remove();
  });
}
// /object data end---------------------------------------------------------------
// button click area start-------------------------------------------------------------------

const button1 = document.querySelector('.btn_project');
const button2 = document.getElementById('btnprojrec2');
const button3 = document.querySelector('.btn_project2');
const button4 = document.querySelector('.btn_project3');
const button5 = document.getElementById('btnprojectdesktop1');
const button6 = document.getElementById('btnprojectdesktop2');
const button7 = document.getElementById('btnprojectdesktop3');
const button8 = document.getElementById('btnprojectdesktop4');

// button selector end
// display function ends-------------------------------------------------------
// button click events start -------------------------------------------------------
button1.addEventListener('click', () => {
  displayCards(0);
});
button2.addEventListener('click', () => {
  displayCards(1);
});
button3.addEventListener('click', () => {
  displayCards(2);
});
button4.addEventListener('click', () => {
  displayCards(3);
});
button5.addEventListener('click', () => {
  displayCards(0);
});
button6.addEventListener('click', () => {
  displayCards(1);
});
button7.addEventListener('click', () => {
  displayCards(2);
});
button8.addEventListener('click', () => {
  displayCards(3);
});

// button click event ends------------------------------------------------------------------