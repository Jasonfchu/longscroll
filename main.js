//initialize - set up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = '';

//pseudocode - when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll <- boolean (yes/no)

window.onscroll = function (){
  //when the user scrolls, do all of this..

    fromTop = window.pageYOffset;
    //test if it works
    console.log(fromTop);

    counter.style.top = 600 + fromTop + "px";

    if (fromTop > 900){
      counter.style.backgroundImage = "url(images/year1.png)";
    } if (fromTop > 1800){
      counter.style.backgroundImage = "url(images/year2.png)";
    } if (fromTop > 2800){
      counter.style.backgroundImage = "url(images/year3.png)";
    } if (fromTop > 3800){
      counter.style.backgroundImage = "url(images/year4.png)";
    } if (fromTop > 4800){
      counter.style.backgroundImage = "url(images/year5.png)";
    } if (fromTop > 5800){
      counter.style.backgroundImage = "url(images/year6.png)";
    } if (fromTop > 7000){
      counter.style.backgroundImage = "url(images/year7.png)";
    } if (fromTop > 8000){
      counter.style.backgroundImage = "url(images/year8.png)";
    }
}
