'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)

  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message=document.createElement('div');

message.classList.add('cookie-message');

// message.textContent='We use cookie to improve the service and your data is secure with us <button class="btn">Got it</button>';
message.innerHTML='We use cookie to improve the service and your data is secure with us <button class="btn btn--close-cookie">Got it</button>';

const header=document.querySelector('.header');
header.prepend(message);
header.append(message);

const cookieclose=document.querySelector('.btn--close-cookie');
cookieclose.addEventListener('click',function(){
  message.remove();
})

// message.style.backgroundColor="orange";
// console.log(message.style.backgroundColor);
// console.log(message.style.fontSize='2rem');


// console.log(getComputedStyle(message));

// const size=Number.parseInt(getComputedStyle(message).fontSize);
// console.log(size);
// message.style.fontSize=size+15+'px';

// document.documentElement.style.setProperty('--color-primary','orangered');

// const logo=document.querySelector('.nav__logo');
// console.log(logo.className);//nav__logo
// console.log(logo.alt);//Bankist logo

// logo.setAttribute('dev','us');

// console.log(logo.dev);  //->undefined
// console.log(logo.src);//http://192.168.145.121:5500/javascript/Javascript_tutorials/Daily/DOM/starter/img/logo.png
// console.log(logo.getAttribute('src'));//img/logo.png


// logo.classList.add('abc','def');
// logo.classList.remove('');
// logo.classList.toggle('');
// logo.classList.contains('');

// const randomInt=(min,max)=>Math.floor(Math.random())
// console.log(randomInt(0,255));

// const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
// //console.log(randomInt(0,255));

// const randomcolor=()=>`rgb(${randomInt(0,255)}, ${randomInt(0,255)},${randomInt(0,255)})`;

// document.querySelector('.nav__link').addEventListener('click',function(e){
// console.log(e)
// console.log(this)
// this.style.backgroundColor=randomcolor();

// e.stopPropagation();

// })
// document.querySelector('.nav__links').addEventListener('click',function(){

//   this.style.backgroundColor=randomcolor();
//   })
//   document.querySelector('.nav').addEventListener('click',function(){

//     this.style.backgroundColor=randomcolor();
    
//     })

// const tabs=document.querySelectorAll('.operations__tab');
// console.log(tabs);
//  const tabscontainer=document.querySelector('.operations__tab-container');
//  const tabscontent=document.querySelectorAll('.operations__content');

// // tabs.forEach(t=>t.addEventListener('click',()=>{
// // console.log('tab');
// // }))
// tabscontainer.addEventListener('click',(e)=>{

// // const clicked=e.target
// //const clicked=e.target.parentElement;

// const clicked=e.target.closest('.operations__tab')
// // console.log(clicked);
// if(!clicked) return;
// // console.log(clicked);

// tabs.forEach(t=>t.classList.remove('operations__tab--active'));

// clicked.classList.add('operations__tab--active')


// tabscontent.forEach(c=>c.classList.remove('operations__content--active'));
// document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

// })

window.onload=init();

const next=document.querySelector('.submit');
const logout=document.querySelector('#logout')

 next.addEventListener('click', init);
 logout.addEventListener('click',logOut);

function init(){
  if(!localStorage.getItem('username'))
    {
     const usrName=document.querySelector('#usr').value;

      if(usrName!='')
      {
        localStorage.setItem('username',`${usrName}`)
        closeModal();
        window.onload=init();
      }

    }
    
else
  {
    console.log( document.querySelector('#nav_btn').classList.add('hidden'));;
    document.querySelector('#user').classList.remove('hidden');
    document.querySelector('#username').innerHTML=`hi ${localStorage.getItem('username') }`
    return;
  }
   
    
}
function logOut()
{
  localStorage.removeItem('username')
}