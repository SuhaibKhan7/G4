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

let randno=(min,max)=> Math.floor(Math.random()*(max-min)+1);

let rancolor=()=>`rgb(${randno(0,255)},${randno(0,255)},${randno(0,255)})`




document.querySelectorAll('.nav__link').forEach(element=>{

element.addEventListener('click',function()
{
this.style.backgroundColor=rancolor();

})

})


addEventListener('click',function()
{

this.style.backgroundColor=rancolor();

})

array.forEach(element => {
  
});


// document.querySelector('.nav__links').addEventListener('click',function(e)
// {

// this.style.backgroundColor=rancolor();


// })
// document.querySelector('.nav').addEventListener('click',function()
// {

// this.style.backgroundColor=rancolor();

// })
// document.querySelector('body').addEventListener('click',function()
// {

// this.style.backgroundColor=rancolor();

// })