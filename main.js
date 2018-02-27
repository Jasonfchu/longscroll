//initialize - set up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = 'figure';

//pseudocode - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll <- boolean (yes/no)

window.onscroll = function (){
  //when the user scrolls, do all of this..

    fromTop = window.pageYOffset;
    //test if it works
    console.log(fromTop);

    counter.style.top = 250 + fromTop + "px";

    if (fromTop > 0){
      counter.innerHTML = "figure";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 1000){
      counter.innerHTML = "phone1";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 2000){
      counter.innerHTML = "phone2";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 3000){
      counter.innerHTML = "phone3";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 4000){
      counter.innerHTML = "phone4";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 5000){
      counter.innerHTML = "phone5";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 6000){
      counter.innerHTML = "phone6";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 7000){
      counter.innerHTML = "phone7";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 8000){
      counter.innerHTML = "phone8";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    } if (fromTop > 9000){
      counter.innerHTML = "phone9";
      counter.style.backgroundColor = "white";
      counter.style.backgroundImage = "url(crown.png)";
    }
}
