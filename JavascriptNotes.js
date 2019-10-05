JAVASCRIPT TERMS, TIPS, NOTES
// LEXICAL SCOPE: Scope is how a computer keeps track of all the variables in a program. 
// It refers to the specific environment where a variable is accessible and can be used.
//  JavaScript uses the lexical scoping approach which allows for scopes to be nested and 
//  therefore an outer scope encloses (hence closure) an inner scope. There are two types
//   of scope: global scope and local scope. Lexical Scoping defines how variable names are r
//   esolved in nested functions: inner functions contain the scope of parent functions even 
//   if the parent function has returned. Lexical this is when the this in the inner functions
//    have the this of the outer functions. Only works with the fat arrow functions. 
//    https://stackoverflow.com/questions/34696686/what-is-lexical-this

//--------------------------------------------------------------------------//

// CLOSURES:  the combination of a function bundled together (enclosed) with references 
// to its surrounding state (the lexical environment). In other words, a closure gives 
// you access to an outer function’s scope from an inner function. In JavaScript, closures
// are created every time a function is created, at function creation time. Inner functions
// referring to local variables of its outer function create closures. To use a closure,
// simply define a function inside another function and expose it. To expose a function,
// return it or pass it to another function. The inner function will have access to the
// variables in the outer function scope, even after the outer function has returned.

//--------------------------------------------------------------------------//

// How to import and export: 
// /------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

//--------------------------------------------------------------------------//

// Array and Object Methods, Tips
let hobbies = ["dancing", "running"]
for(let hobby of hobbies) {
    console.log(hobby)
}

//------------


let hobbiesCopy = [...hobbies] //Spread operator helps you not copy the reference of the array. ALSO WORKS WITH OBJECTS
console.log(...hobbies) //'dancing, running' 

//------------

const restFunc = (...args) => { //Rest operator helps with handling unknown number or arguments, bundles them in an array
    console.log(...args)
}
restFunc(1,2,3,4,5)
//------------

let person = { 
    name: "Max",
    age: 29,
    hasJob: true
}

const myFunc = ({ name, age }) => { //Destructuring helps us pull out key value pairs from objects into local variables. ALSO WORKS WITH ARRAYS
}

myFunc(person)

const { name, age} = person //Valid

//--------------------------------------------------------------------------//
//POST request to server 

const apiCall = async () => {
    let response = await fetch("http://numbersapi.com/42");
    let data = await response.text();
   newData = JSON.stringify({ // Need to stringify your json to send to server
      data: data
    });
  
    let responseFromServer = await fetch("/number", {
      // server can respond back with a res.send(Json Object)
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: { "Content-Type": "application/json" },
      body: newData // body data type must match "Content-Type" header
    });
    let responseFromServerData = await responseFromServer.json();
    console.log(responseFromServerData);
  };
  
  apiCall();
   
  // NODE JS
  const numberController = (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send({ name: "fehmi" }); 
  };

//--------------------------------------------------------------------------//
// EVENT DELEGATION https://www.youtube.com/watch?v=mXTEVCg60zM


