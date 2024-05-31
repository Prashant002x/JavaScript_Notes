console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("     ");
console.log("2" > 1);
console.log("02" > 1);   //typescript Don't Allow this
console.log("     ");
console.log(null > 0);  //false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log("     ");
//  Comparisons > <>= <= and equality check ==  works differently
// Comparison converts NULL into 0 sometimes into Nan
 
console.log(undefined == 0 )
console.log(undefined > 0 )  // Same as NULL
console.log(undefined < 0 )
console.log("     ");
// Strict Check ===// Comparison operators and equality check examples:
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Comparisons involving strings:
console.log("2" > 1); // true (string "2" is converted to number 2 for comparison)
console.log("02" > 1); // true (string "02" is converted to number 2 for comparison)
// TypeScript doesn't allow this implicit conversion, ensuring type safety.

// Null comparisons:
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// Comparisons and equality checks treat null differently, often converting it to 0 or NaN.

// Undefined comparisons:
console.log(undefined == 0); // false
console.log(undefined > 0); // false (similar to null)
console.log(undefined < 0); // false (similar to null)

// Strict equality check (===) does not perform type conversion:
// console.log("2" === 2); // false (string "2" is not strictly equal to number 2)

// Comparisons (> < >= <=) and equality check (==) work differently:
// Comparisons evaluate based on values and may perform type coercion (e.g., converting strings to numbers).
// Equality check loosely compares values and performs type coercion if needed (e.g., converting null to 0).
// It's recommended to use strict equality (===) for precise comparisons without type coercion.

 
console.log("2" === 2);
//


// Avoid Above times of Comparison