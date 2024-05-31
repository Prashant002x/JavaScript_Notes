const clock =  document.getElementById('clock');

// let date = new date()
// console.log(date.toLocaleTimeString());

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000);

