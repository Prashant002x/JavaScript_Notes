const myNumers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNumers.map( (num) => num +10)


const newNum =myNumers  // Chaining
                .map((num) => num * 10 )
                .map((num) => num + 1)
                .filter( (num) => num >=40)
// .map().filter // is possile

console.log(newNum);

// Filter is Where condititon is True   it returns it
// In case of Map it Returns Everything