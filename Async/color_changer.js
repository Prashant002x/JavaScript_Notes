// Generate Random Color
const randomColor = function() {
    const hex= '0123456789ABCDEF';
    let color ='#'
    for (let i = 0; i< 6; i++) {
        color+=hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
// console.log(randomColor());
let interval1;
const startChangingColor =  function(){
     if(!interval1){
        interval1=setInterval( changeColor, 1000);
     }
   function changeColor(){
     document.body.style.backgroundColor = randomColor();
   }
}
document.querySelector('#start').addEventListener('click',startChangingColor);

const stopChangingColor = function(){
    clearInterval(interval1);
    interval1= null ;  //will result in  code not working
}
document.querySelector("#stop").addEventListener('click',stopChangingColor);