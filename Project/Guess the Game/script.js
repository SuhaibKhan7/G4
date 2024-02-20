// let text=document.getElementById('message').textContent;
// console.log(text);
// document.getElementById('message').textContent='Game start';

// let text=document.querySelector('#message').textContent;
// console.log(text);
// document.querySelector('#message').textContent='Game start';


let sn=Math.trunc(Math.random()*20+1);
console.log(sn);

let soc=20;
let highscore=0;
function guessTheNumber(){

if(soc>0)
{
let guess=document.querySelector('.guess').value;
console.log(guess);
if(!guess)
{
    document.querySelector('#message').textContent='❌ Enter the Number';  
}

else if(guess==sn)
{
    document.querySelector('#message').textContent='🥳 You Won';
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('.number').textContent=guess;
    
    if(soc>highscore)
{
document.querySelector('.highscore').textContent=soc;
highscore=soc;
}


}
else if(guess>sn)
{
    soc--;
    document.querySelector('#message').textContent='⬆️ Too High';
    document.querySelector('.score').textContent=soc;

}

else if(guess<sn)
{
    soc--;
    document.querySelector('#message').textContent='⬇️ Too Low';
    document.querySelector('.score').textContent=soc;
}



    }
else{
    document.querySelector('body').style.backgroundColor='red';
    document.querySelector('#message').textContent='🥶 Game OVer';
}


}


function resetGame()
{
    soc=20;
    sn=Math.trunc(Math.random()*20+1);
    console.log(sn);
    document.querySelector('body').style.backgroundColor='#000';
    document.querySelector('#message').textContent='Start guessing...';
    document.querySelector('.score').textContent=soc;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

}