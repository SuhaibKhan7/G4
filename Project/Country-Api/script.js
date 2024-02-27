
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const request =new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/name/india');
request.send();
request.addEventListener('load',function(){

   const data=JSON.parse(this.responseText)[1];
   console.log(data);







})