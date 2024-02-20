const scr=0;
const s0=document.getElementById('score--0');
const s1=document.getElementById('score--1');

const dice=document.querySelector('.dice');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

//change the images after every click random


let currentscore=0;
let activeplayer=0;
let score;
let play=true;

function init(){
    score=[0,0];
    s0.textContent=0;
    s1.textContent=0;
    dice.classList.add('hidden');  //in this we have var.classList.add first we have classlist only then we can use add to add class or  remove
    }
    init();
    
function switchPlayer()
{

currentscore=0;
document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
activeplayer=activeplayer==0?1:0;
document.querySelector(`.player--${activeplayer}`).classList.add('player--active')
}



btnroll.addEventListener('click',function(){
 
if(play){    

let randNo=Math.trunc(Math.random()*6+1);

dice.classList.remove('hidden');

dice.src=`dice-${randNo}.png`;
if(randNo!=1)
{
    currentscore+=randNo;
    document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
}
else{
    switchPlayer();
}

}
})

btnhold.addEventListener('click',function(){

if(play)
{
score[activeplayer]+=currentscore;
document.querySelector(`#score--${activeplayer}`).textContent=score[activeplayer];

if(score[activeplayer]>=20)
{ 
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
    dice.classList.add('hidden');
    play=false;
}

switchPlayer();

}
})





