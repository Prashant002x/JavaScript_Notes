// For Each Loop

const coding = [ "JS" , " RUBY" , "JAVA " , "CPP "]

coding.forEach( function (val) {
    console.log(val);
})
// Call Back functions don't have names

coding.forEach( (item)=> {
    console.log(item);
 })


function printMe(item) {
    console.log(item);
}

coding.forEach(printMe) // Giving it as paramater giving it as refernce

coding.forEach( (item, index ,arr) => {
    console.log(item,index, arr);
    // above we have many parameters
})

const myCoding = [ 
    {
        languageName: "Javascript",
        languageFileName: "JS",
        
    },
    {
        languageName: "java",
        languageFileName: "Java",

    },
    {
        languageName: "python",
        languageFileName: "py",

    }
  
]


myCoding.forEach( (item)=> {  // item is an object  froma a array 
    console.log(item.languageName);

})

