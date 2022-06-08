// Add answers here 

/*#### 1. Los or New?
Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

##### Examples
````javascript
nameOfCity('New York') ➞ 'New York'
nameOfCity('newark') ➞ 'newark'
nameOfCity('London') ➞ 'The city name does not begin with Los or New'*/

/*
let string = "New York"


newString = string.split(" ");
console.log(newString[0]);

if (newString[0] === "New") {
    console.log(true);
} */

let nameOfCity = function (str) {
    let newString = str.split(" ") 
    
       if (newString[0] === "Los" || newString[0] === "New") {
           console.log(str); 
       } else {
           console.log("the city name does not begin with Los or New");
       }
    } 
    

nameOfCity("New York") // 'New York'
nameOfCity('newark') // 'newark'
nameOfCity('London')

/*
#### 2. isDivisible?
Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.

##### Examples
````javascript
isDivisible(1) ➞ false
isDivisible(1000) ➞ true
isDivisible(100) ➞ true*/

let isDivisible = function (num) {
    if (num % 100 === 0 ){
        console.log(true); 
    }else {
        console.log(false);
    }
}

isDivisible(1) // false
isDivisible(1000)// true
isDivisible(100)// true



/*
#### 4. What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

##### Example
````javascript
isRaining(true) ➞ 'wet day - you need an umbrella'*/



function isRaining (bool) {
    return (bool ? "wet day- you need an umbrella": "dry day- leave umbrella at home")
  }

  console.log(isRaining (true)); //wet day- you need an umbrella
  console.log(isRaining (false));// dry day- leave umbrella at home


/*
### Loops 

#### 1. Sequence
Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

##### Example
````javascript
geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'*/
 

let geometricalSequence = function(num) {
    let sum =0;
    let result = [1];
   for (let i = 0 ; i <=8; i ++){
      
        sum = result[i]*2;
        result = result.concat(sum);
    }

    return result.join(" ")

}

console.log(geometricalSequence(1));

/*

#### 2. Multiples
Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

##### Example
````javascript
multiplesOfThree() ➞ '3 6 9 12 15' */


let multiplesOfThree = function() {
    let num = 0;
    let result = []
    for (i = 0 ; i <= 15 ; i++){
        num = i;
        if (i % 3 === 0 ){
           result= result.concat(num)

        } 
    }
    return result.join(" ")
}
console.log(multiplesOfThree()); 

/*
#### 1. You've got the power
Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

##### Examples
````javascript
powerOf(3) ➞ 27
powerOf(4) ➞ 256
````*/

let powerOf = function (num) {
    return Math. pow (num,num)

}
console.log(powerOf(3)); //27
console.log (powerOf(4)) ///256



// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

