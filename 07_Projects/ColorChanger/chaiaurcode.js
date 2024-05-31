const buttons=  document.querySelectorAll('.button');

// console.log(buttons);

const body= document.querySelector("body");

buttons.forEach(function (button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // e is varible name
        // console.log(e) //Pointer  Event when Clicked
        // console.log(e.target)// Which element is clicked
        if(e.target.id === 'red'){
            body.style.backgroundColor =e.target.id;
        }
        console.log(e.target)// Which element is clicked
        if(e.target.id === 'blue'){
            body.style.backgroundColor =e.target.id;
        }
        console.log(e.target)// Which element is clicked
        if(e.target.id === 'pink'){
            body.style.backgroundColor =e.target.id;
        }
        console.log(e.target)// Which element is clicked
        if(e.target.id === 'yellow'){
            body.style.backgroundColor =e.target.id;
        }
    })
});