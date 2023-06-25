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
const body = document.getElementById('project-section');
const section = document.createElement('section');
body.appendChild(section);
section.innerHTML = `
<section id="card-section">
        <div class="cards">
          <div class="card_container1">
            <img
              class="snap_img"
              src="images/bookstore.png"
              alt="project1"
            />
            <div class="card_content1">
              <h3 class=title>BookStore CMS</h3>
              <ul class="first_list">
                <li class="canopy">CANOPY</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">Back End Dev</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">2023</li>
              </ul>
              <p class="second_line">
              This project is a single page web application (SPA) 
              that aims to provide a platform for users to browse books online.
              </p>

              <ul class="second_list">
                <li class="second_list1">HTML</li>
                <li class="second_list2">CSS</li>
                <li class="second_list3">JAVA SCRIPT</li>
                <li class="second_list3">REACT/REDUX</li>

              </ul>

              <button  class="btn_project">See Project</button>
            </div>
          </div>
          <!-- ------card container 2 --------------------- -->
          <div class="card_container2">
            <img
              class="snap_img"
              src="images/mathmagicians.png"
              alt="project2"
            />
            <div class="card_content2">
              <h3>Math Magicians</h3>
              <ul class="first_list2">
                <li class="canopy">CANOPY</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">Back End Dev</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">2023</li>
              </ul>
              <p class="second_line">
              This project is React web application that allows users to perform basic
               mathematical operations such as addition, subtraction, multiplication, and division.
              </p>

              <ul class="second_list_B">
                <li class="second_list1B">HTML</li>
                <li class="second_list2B">CSS</li>
                <li class="second_list3B">JAVA SCRIPT</li>
                <li class="second_list3B">REACT</li>

              </ul>

              <button id="btnprojrec2" class="btn_project">See Project</button>
            </div>
          </div>
          <!-- ------card container 3--------------------- -->
          <div class="card_container3">
            <img
              class="snap_img"
              src="images/web3summit1.png"
              alt="project3"
            />
            <div class="card_content2">
              <h3>Web3 Summit</h3>
              <ul class="first_list3">
                <li class="canopy">CANOPY</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">Back End Dev</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">2023</li>
              </ul>
              <p class="second_line">
              The project for the Web3 Summit serves as the primary platform for 
              communicating information about the event, including dates, speakers, 
              workshops, and other important details.
              </p>

              <ul class="second_list_C">
                <li class="second_list1C">HTML</li>
                <li class="second_list2C">CSS</li>
                <li class="second_list3C">JAVA SCRIPT</li>
              </ul>

              <button class="btn_project2 btn_project">See Project</button>
            </div>
          </div>
          <!-- ------card container 4--------------------- -->
          <div class="card_container4">
            <img
              class="snap_img"
              src="images/todo.png"
              alt="project4"
            />
            <div class="card_content4">
              <h3>Todos</h3>
              <ul class="first_list4">
                <li class="canopy">CANOPY</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">Back End Dev</li>
                <img class="counter" src="images/Counter.png" alt="dotlogo" />
                <li class="backend">2023</li>
              </ul>
              <p class="second_line">
              A todo list project involves creating a simple web application where a 
              user can add and remove tasks they want to complete.
              </p>

              <ul class="second_list_D">
                <li class="second_list1D">HTML</li>
                <li class="second_list2D">CSS</li>
                <li class="second_list3D">JAVA SCRIPT</li>
              </ul>

              <button class="btn_project3 btn_project">See Project</button>
            </div>
          </div>
        </div>
      </section>
      
<!-- --------------------------------Desktop Version--Grid layout-------------------------->
     <section id="card-section1">
        <div class="cards-desk-container">

          <!-- ------Card1 container--------------------- -->
         <div class="card1">
            <img src="images/bookstore.png" alt="project1">
          </div>

          <!-- ------Card2 container--------------------- -->
          <div class="card2">
            <h3>BookStore CMS</h3>
           
            <ul class="first-ul">
              <li class="canopy">CANOPY</li>
              <img class="counter" src="images/Counter.png" alt="dotlogo" />
              <li class="backend">Back End Dev</li>
              <img class="counter" src="images/Counter.png" alt="dotlogo" />
              <li class="backend">2023</li>
            </ul>
            
            <p class="p1">
            This project is a single page web application (SPA) that aims 
            to provide a platform for users to browse books online.
            </p>

            <ul class="second-ul">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React/Redux</li>

            </ul>

            <button  id="btnprojectdesktop1" class="btn_project">See Project</button>
          </div>

          <!-- ------Card3 container--------------------- -->
          <div class="card3">
            <h3>Math Magicians</h3>
            <ul class="first-ul">
              <li class="canopy">CALCULATOR</li>
              <img class="counter" src="images/Counter.png" alt="dotologo" />
              <li class="backend">Full Stack</li>
              <img class="counter" src="images/Counter.png" alt="dotologo" />
              <li class="backend">2023</li>
            </ul>
            <p class="p1">
            This project is React web application that allows users to perform 
            basic mathematical operations such as addition, subtraction, multiplication, and division.
            </p>
            <ul class="second-ul">
              <li>HTML</li>
              <!-- <li>Ruby on rails</li>--!>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>

            </ul>
            <button id="btnprojectdesktop2" class="btn_project">See Project</button>
          </div>
        <!-- ------Card4 container--------------------- -->
        <div class="card4">
          <img src="images/mathmagicians.png" alt="project4">
        </div>
        <!-- ------Card5 container--------------------- -->
        <div class="card5">
          <img src="images/web3summit1.png" alt="project5">
        </div>
        <!-- ------Card6 container--------------------- -->
        <div class="card6">
          <h3>Web3 Summit</h3>
            <ul class="first-ul">
              <li class="canopy">CONFERENCE</li>
              <img class="counter" src="images/Counter.png" alt="dotlogo" />
              <li class="backend">Full Stack</li>
              <img class="counter" src="images/Counter.png" alt="dotlogo" />
              <li class="backend">2023</li>
            </ul>
            <p class="p1">
            The project for the Web3 Summit serves as the primary platform for communicating
             information about the event, including dates, speakers, workshops, and other important details.
            </p>
            <ul class="second-ul">
              <li>HTML</li>
              <!-- <li>Ruby on rails</li>--!>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <button id="btnprojectdesktop3" class="btn_project">See Project</button>
        </div>
        <div class="card7">
          <h3>Todos</h3>
          <ul class="first-ul">
            <li class="canopy">TASKS</li>
            <img class="counter" src="images/Counter.png" alt="dotlogo" />
            <li class="backend">Lead Developer</li>
            <img class="counter" src="images/Counter.png" alt="dotologo" />
            <li class="backend">2023</li>
          </ul>
          <p class="p1">
          A todo list project involves 
          creating a simple web application where a user can add and remove tasks they want to complete.
          </p>
          <ul class="second-ul">
            <li>HTML</li>
            <!--<li>Ruby on rails</li>--!>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <button id="btnprojectdesktop4" class="btn_project">See Project</button>
        </div>
        <div class="card8">
          <img src="images/todo.png" alt="project8">
        </div>
      </div>
    </section>
  </section>
`;

// objects stored in dynamic above-------------------------------------------------------
const data = [
  {


    name: 'BookStore CMS',
    deskname: 'BookStore CMS',
    imageUrl: 'images/bookstore.png',
    deskImageUrl: 'images/bookstore.png',

    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',

    description: 'This project is a single page web application (SPA) that aims to provide a platform for users to browse books online. It serves as a virtual bookstore where users can explore a wide range of books, view book details, add books.',
    description1: '<span><p id=desktext>This project is a single page web application (SPA) that aims to provide a platform for users to browse books online. It serves as a virtual bookstore where users can explore a wide range of books, view book details, add books.Overall, the Bookstore project aims to create an immersive and user-friendly online platform for book lovers to explore, discover, and add books conveniently.',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',
    buttonUrl: 'https://example.com/card2',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://github.com/binodbhusal/bookstore',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
  {
    name: 'Math Magicians',
    deskname: 'Math Magicians',
    imageUrl: 'images/mathmagicians1.png',
    deskImageUrl: 'images/mathmagicians1.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',
    description: 'This project is React web application that allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.',
    description1: '<span><p id=desktext>This project is React web application that allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division. It is designed to provide a simple and user-friendly interface for performing calculations.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',
    buttonUrl: 'https://math-magician-2l9g.onrender.com/',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://github.com/binodbhusal/math-magicians',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
  {
    name: 'Web3 Summit',
    deskname: 'Web3 Summit',
    imageUrl: 'images/web3summit.png',
    deskImageUrl: 'images/web3summit.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',

    description: 'The project for the Web3 Summit serves as the primary platform for communicating information about the event, including dates, speakers, workshops, and other important details.',
    description1: '<span><p id=desktext>The project for the Web3 Summit serves as the primary platform for communicating information about the event, including dates, speakers, workshops, and other important details. The project is designed to provide attendees with a comprehensive overview of the event, as well as to facilitate registration and ticket sales.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',

    buttonUrl: 'https://binodbhusal.github.io/we3summit.guthub.io/',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://github.com/binodbhusal/Capstone-project-Conference-page',
    buttonLabel1: 'See Source',
    button12Url: 'images/icon12.png',
    button2Url: 'images/github1.png',
  },
  {
    name: 'Todos',
    deskname: 'Todos',
    imageUrl: 'images/todo.png',
    deskImageUrl: 'images/todo.png',
    listItems1: '<span id=canopy>CANOPY<i class="fa-regular fa-circle counter"></i></span><span id=backend>Back end <i class="fa-regular fa-circle counter"></i>2015</span>',

    description: 'A todo list project involves creating a simple web application where a user can add and remove tasks they want to complete. The basic functionality includes the ability to add a new task, mark a task as completed, and delete a task from the list.',
    description1: '<span><p id=desktext>A todo list project involves creating a simple web application where a user can add and remove tasks they want to complete. The basic functionality includes the ability to add a new task, mark a task as completed, and delete a task from the list.</p></span>',
    technologies: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div>',
    technologies1: '<div class="list-item"><span>HTML</span></div><div class="list-item"><span>CSS</span></div><div class="list-item"><span>javascript</span></div><br><div class="list-item"><span>Ruby</span></div><div class="list-item"><span>Ruby on Rails</span></div>',

    buttonUrl: 'https://binodbhusal.github.io/todos.github.io/',
    buttonLabel: 'See Live',
    buttonUrl1: 'https://github.com/binodbhusal/ToDoList',
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
          <img id=crdimg src="${card.imageUrl}"
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
            <a class= linkbtn href="${card.buttonUrl1}">${card.buttonLabel1}<img class=icon12 src="${card.button2Url}"></a>
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
    popup.style.height = '90%';
    popup.style.width = '80%';
    popup.style.margin = '0 10%';

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
const form = document.querySelector('#myform');
const emailCheck = form.querySelector('#email');
const emailError = form.querySelector('#emailError');
// Form Validation starts----------------------------------------------------------------------
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
// Form Validation ends----------------------------------------------------------------------
