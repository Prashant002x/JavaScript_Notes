const marvel_heros = [ "thor", "IronMan" , "SpiderMan"]
const dc_heros= ["SuperMan", "Flash", "BatMan"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
// [ 'thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]

// Array inside Array

console.log(marvel_heros[3]); // Whole pushed Array is printed
// // for accessing individual Element

// console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);

 // Both Arry Merged Properly

 const all_new_heros = [ ...marvel_heros, ...dc_heros]  
 // It is not array above spread out

 console.log(all_new_heros);

 const another_array = [1 , 2, 3,[ 4, 5, 6], 7, [6 ,7 , [4 ,5]]]
const real_another_array = another_array.flat(Infinity)
// depth for Sub Array Depth and infinity for automatic

console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"})) // interesting
// {key:   ya Value:}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,  score2, score3));



