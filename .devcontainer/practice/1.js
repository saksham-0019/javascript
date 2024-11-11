//let score = "33";
//console.log(typeof score);  // string
//console.log(typeof(score));  // string

//let valueInNumber = Number(score);  // Convert string to number
//console.log(typeof valueInNumber);  // number
//console.log(valueInNumber);  // 33
 

//===========================Conversion opration ===========================================================================================

//let someNumber = 33;
//let stringNumber = String(someNumber);  // Corrected the function call

//console.log(someNumber);  // 33
//console.log(typeof stringNumber);  // string

//============================Oprations=============================================================================================

//let value = 3
//let negvalue = -value 
//console.log(negvalue)

//let str1 = "hello"
//let str = "saksham"
//let  str3 = str1+str
//console.log(str3);

//let gameCounter = 1000
//++gameCounter 
//console.log(gameCounter);

//============================ Data ttypes =========================================================================================


// numbers
//const score1 = 100;
//const score2 = 100.98;

// boolean 
//const isLoggedIn = false;

// null
//const outsideTemp = null;

// undefined
//const logged = undefined;

// symbol
//const id = Symbol(837);

// bigint 
//const bigNumber = 2390830201923109310n;

// Console log all variables
//console.log("Score 1:", score1);
//console.log("Score 2:", score2);
//console.log("Is Logged In:", isLoggedIn);
//console.log("Outside Temp:", outsideTemp);
//console.log("Logged:", logged);
//console.log("ID Symbol:", id);
//console.log("Big Number:", bigNumber)////;

//=============================================== string data types ===============================================================

// concatinate 
 //const name = "saksham"
 //const repocount = 30
//console.log(`hello my name is ${name} and my repocount is ${repocount}`);

//const gameName = "saksham";
//console.log(gameName.length);// string ki length bttane k liye 

//console.log(gameName.toUpperCase);
//console.log(gameName.charAt(2));// kis number p kons astring hai 
//console.log(gameName.indexOf('k')); // kis string number prr ye vale hai 

//const anotherString = gameName.slice(-8,4);
//console.log(anotherString);// kitni string ki and value hai jitne hisab s tumne isko number diye hai 

//const url="https:sak.com/hit%20sing"
//console.log(url.replace('%20','------------'));n // value replacing property 

//============================================== NUMBERS ======================================================================================================================

//const balance = new Number(100);
//console.log(balance); // Outputs: [Number: 100]

//console.log(balance.toString()); // Outputs: "100"
//console.log(balance.toString().length); // Outputs: 3 (since "100" has 3 characters)

//console.log(balance.toFixed(2)); // Outputs: "100.00" (fixed to 2 decimal places)

//const otherNumber = 123.9337;
//console.log(otherNumber.toPrecision(3)); // Outputs: "124" (rounded to 3 significant digits)

//const humndreds= 1000000000;
//console.log(humndreds.toLocaleString('en-IN'));

//========================= MATHS ====================================================================================================================================================

//console.log(Math);           // Logs the Math object to the console
//console.log(Math.abs(-4));    // Logs the absolute value of -4, which is 4

//console.log(Math.round(3.7));  // Logs 4, since 3.7 is rounded to the nearest integer
//console.log(Math.sqrt(16));   // Logs 4, as the square root of 16 is 4
//console.log(Math.random());

//const min = 10;
//const max = 20;
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Math.random() generates a random decimal between 0 (inclusive) and 1 (exclusive).
//Math.random() * (max - min + 1) scales this random number to the desired range (from min to max, inclusive).
//Math.floor() rounds the number down to the nearest integer.
//Adding min shifts the range so that the random number is between min and max.

//================================= Dates ==============================================================================================================================================

//let myDate = new Date();
//console.log(myDate.toString());

//console.log(myDate.toDateString());

//console.log(myDate.toLocaleString());

//console.log(typeof myDate);

//========================================= Array ==================================================================================================================================

//const myArr = [0, 1, 2, 3, 4, 5];
//const myHero = ["billu badmos", "dahrampaal"];

//const myArr2 = new Array(1, 2, 3, 4, 5); // Corrected the syntax for declaring myArr2
//console.log(myArr[1]);  // Logs 1, which is the element at index 1 in myArr

//======================================== Arry method ===============================================================================================================================
//const myArr = [0, 1, 2, 3, 4, 5];  // Initial array
//myArr.push(6);                      // Adds 6 to the end of the array
//myArr.push(7);                      // Adds 7 to the end of the array
//myArr.pop();                        // Removes the last element from the array (which is 7)
//console.log(myArr);                 // Logs the current state of myArr


//console.log(myArr.includes(9));  // Logs false, as 9 is not in myArr

//const newArr = myArr.join();      // Joins array elements into a string
//console.log(myArr);                // Logs the original array
//console.log(newArr);               // Logs the joined string of myArr

//const myn1 = myArr.slice(1, 3);   // Creates a new array from index 1 to 2 (3 is exclusive)
//console.log(myn1);                 // Logs [1, 2]
//console.log("B", myArr);           // Logs "B" followed by the original array

//const myn2 = myArr.splice(1, 3);   // Removes 3 elements starting from index 1
//console.log('c', myn2);            // Logs 'c' followed by the removed elements
//console.log(myArr);                 // Logs the modified original array

//const heros = ['ram', 'sham', 'kam'];
//const villan = ["biwih", "wshwb", 'wuvyw'];

// Corrected variable name
//const allHerosVillains = [...heros, ...villan];  

//console.log(allHerosVillains);  // Logs ['ram', 'sham', 'kam', 'biwih', 'wshwb', 'wuvyw']

//==================================== Objects ================================================================================================================================

// Create a symbol to use as a unique key in the object
//const mySym = Symbol("key1");

// Create an object using object literals with various properties and methods
//const JsUser = {
    // Property name with a simple string value
    //name: "saksham", 

    // Property with a space in the name, so it needs to be in quotes
    //"full name": "saksham singla", 

    // Property key using the previously created symbol, making it unique
    //[mySym]: "mykey1", 

    // Other properties of the user
    //age: 18, 
    //location: "Jaipur", 
    //email: "sh@google.com", 
    //isLoggedIn: false,

    // Array property for storing the days the user last logged in
    //lastLoginDays: ["Monday", "Saturday"], 
//};

// Access and log the user's email in two different ways
//console.log(JsUser.email);  // Accessing the 'email' property using dot notation
//console.log(JsUser["email"]);  // Accessing the 'email' property using bracket notation

// Accessing a property with a space in its name requires bracket notation
//console.log(JsUser["full name"]);  

// Accessing the symbol-keyed property using the symbol as the key
//console.log(JsUser[mySym]);  

// Changing the email property value
//JsUser.email = "hit@chatgpt.com";  

// Freezing the object to prevent further modifications to its properties
//Object.freeze(JsUser);  

// Attempt to modify the email property again after freezing the object (this won't work)
//JsUser.email = "hi@microsoft.com";  

// Log the object to see that the email change didn't happen
//console.log(JsUser);  

// Add a method to the object that logs a simple greeting
//JsUser.greeting = function() {
 //   console.log("Hello JS user");
//};

// Add another method that uses the object's 'name' property to personalize the greeting
//JsUser.greetingTwo = function() {
 //   console.log(`Hello JS user, ${this.name}`);  // 'this' refers to the current object (JsUser)
//};

// Call the greeting method (prints the message)
//console.log(JsUser.greeting());  // Outputs "Hello JS user"

// Call the personalized greeting method (prints the message with the user's name)
//console.log(JsUser.greetingTwo());  // Outputs "Hello JS user, saksham"

//=================================================== singleton object =========================================================================================================

//const tinderUsre = new Object(); // singleton object
//const tinderUsre = {}; // non singleton object
// inn dono m koi farak nhi hai bss ye singleton aur non singleton object hai baki value same hi aygi 


// easy diclaird 

////const TinderUser = {};
//TinderUser.id = "1234";
//TinderUser.name = "sammmay";
//TinderUser.isloggedIn = false; // Use 'false' instead of 'False'
//console.log(TinderUser);

// objects k andr objects 

//const regularUser = {
  //  email: "some@gmail.com",
    //fullname: {
      //  userfullname: {
        //    firstname: "saksham",
          //  lastname: "singla"
       // }
    //}
//};

//console.log(regularUser.fullname.userfullname.firstname);


// obect merg like spreding arry 
//const obj1 = {1: "a", 2: "b"};
//const obj2 = {3: "a", 4: "b"};
//const obj3 = {5: "a", 6: "b"};  // First obj3

//const combinedObj = {...obj1, ...obj2, ...obj3};  // Combines all three

//const obj4 = {...obj1, ...obj2};  // Rename this to obj4 to avoid redeclaration
//console.log(obj4);

// value destructurized 

//const course = {
  //  "course name": "js",  // Key with a space needs to be in quotes
    //price: "99",
    //courseinstrouctor: "saksham"  // Corrected spelling of the key
//};

//const { courseinstrouctor: tutor } = course;  // Corrected key for destructuring
//console.log(tutor);

//++++++++++++++++++++++++++++++++++++++++++++++++++ FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//basics 
//function SayMyName (){
 // console.log ("s");
//console.log("a");
//console.log("k");
//}
//SayMyName()


//function AddTwoNumbers(number1, number2) {
  //console.log(number1 + number2);
//}
//AddTwoNumbers(3, 4);

//function loginUserMessage(username = "sam") {
  // Step 1: Check if the username is provided
  //if (!username) {
    // Step 2: If username is not provided, print a message asking the user to enter a username
    //console.log("Please enter a Username");
    //return; // Exit the function since no valid username was provided
  //}

  // Step 3: If username is provided, return a login message
  //return `${username} just logged in`; // Corrected: return should be return, not 'returen'
//}

// Step 4: Call the function without passing any arguments
//console.log(loginUserMessage()); // "sam just logged in" (uses default value)

// Step 5: Call the function with a specific username
//console.log(loginUserMessage("saksham")); // "saksham just logged in"
  

// REST AND SPRED OPRATION 

//function calculateprice(...num1){
  //return num1
//}
//console.log (calculateprice(200,3727,62729,28353,920));




// Defining an object User
//const User = {
//  username: "saksham",
  //price: 100
//};

// Function to handle an object
//function handleObject(anyObject) {
  // Accessing properties of the object passed as a parameter
  //console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
//}

// Calling the function with an object
//handleObject({
  //username: "sam", // Changed "Username" to "username" to match property name
  //price: 309
//});

// Defining an array
//const MyNewArray = [200, 400, 100, 600];

// Function to get the second value from an array
//function secondValue(getArray) {
 // return getArray[1]; // Returns the second element (index 1) of the array
//}

// Calling the function and logging the result
//console.log(secondValue(MyNewArray)); // 400

// Correcting the function call (fixed spelling error)
//console.log(secondValue([200, 400, 100, 600])); // 400

//++++++++++++++++++++++++++++++++++++++++++== scopes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//{}// this is the scopes 
//function one() {
  //const username = "saksham"; // 'username' is defined in the scope of function 'one'
//}

//function two() {
  //const website = "youtube"; // 'website' is defined in the scope of function 'two'
  
  
  // Attempting to access 'username' from function 'one' will result in a ReferenceError
  // console.log(username); // Uncommenting this will cause an error since 'username' is not defined in this scope
//}

// Calling function two will not log 'username'
//two(); 

// Attempting to access 'website' outside its scope will also result in a ReferenceError
// console.log(website); // Uncommenting this will cause an error since 'website' is not defined in this scope



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ this key word arrow function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//const user = {
  //username: "saksham",
  //price: 999,
  
  // Corrected method name to 'welcomeMessage' for consistency
  //welcomeMessage: function() {
    // Fixed syntax error: added closing backtick and parenthesis for the console.log statement
    //console.log(`${this.username} welcome to the website`);
  //}
//};

// Calling the welcomeMessage method
//user.welcomeMessage(); // Output: "saksham welcome to the website"

// Updating the username property
//user.username = "sam";

// Calling the welcomeMessage method again to see the updated username
//user.welcomeMessage(); // Output: "sam welcome to the website"

// basic arrow fuction 
// const addTwo = (num1 , num2 ) => {
//   return num1 + num2 


// }
// console.log(addTwo(3,4));



//////// implicit returen arrow function 



// const addNumbers = (num1, num2) => (num1 + num2);
// console.log(addNumbers(3, 4));  // Output: 7

// IMIDATILY INVOKE FUNCTIONS EXPRESSIONS (IIFE)

// (function saksham(){
//   console.log("database connected ");
  
// })()


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ JAVASCRIPT EXECUTION CONTEXT  ( code execution ) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// {} ---> (this) global execution contexet 

// major three types of EC 
// global excecution context 
// function excution conytext 
// eval excution context 

//example code :-)

// let val1 = 10;  // Variable names can't have spaces
// let val2 = 5;

// function addNumbers(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }

// let result1 = addNumbers(val1, val2);  // Correct function call
// let result2 = addNumbers(10, 2);       // Another function call

// console.log(result1);  // Output: 15
// console.log(result2);  // Output: 12





//CONTROLE FLOW (IF)

// const UserLogIn = true 
// const temp = 41 
// if (temp == 40){
//   console.log("less then 50");

// }else{
//   console.log ("temp is grater than 50 ");

// } console.log ("execute")


// const userLoggedIn = true;

// if (userLoggedIn) {
//   // If the user is logged in, show the welcome message
//   console.log("Welcome back, user!");
// } else {
//   // If the user is not logged in, prompt them to log in
//   console.log("Please log in to continue.");
// }

// console.log("Execution finished.");


// const number = 7;

// if (number % 2 === 0) {
//   // If the number is divisible by 2 with no remainder, it's even
//   console.log("The number is even.");
// } else {
//   // If the number is not divisible by 2, it's odd
//   console.log("The number is odd.");
// }

// console.log("Number check completed.");

////////////////////////
// const userLoggedIn = true;
// const debitCard = true;
// const LoggedInFromGoogle = false;
// const LoggedInFromEmail = true;

// // First condition: Checks if user is logged in, has a debit card, and 2 equals 3 (which is false)
// if (userLoggedIn && debitCard && 2 == 3) {
//   // This will not run because 2 == 3 is false
//   console.log("Allow to buy a course");
// }

// // Second condition: Checks if the user is logged in either from Google or Email
// if (LoggedInFromGoogle || LoggedInFromEmail) {
//   // This will run because LoggedInFromEmail is true
//   console.log("User logged in");
// }
// const month = 'october';

// switch (month) {
//   case "jan":
//     console.log("January");
//     break;
//   case "feb":
//     console.log("February");
//     break;
//   case "march":
//     console.log("March");
//     break;
//   case "apr":
//     console.log("April");
//     break;
//   default:
//     console.log("Default case match");
//     break;
// }


// //  falsy values
// false,0,-0,big int on , null , undifined , NaN

// //truthly values 
// 0,false,"", [],{},function (){}

// // Example user email
// const userEmail = ""; // Assuming this is an example input

// // Check if the userEmail string is empty
// if (userEmail.length === 0) {
//   console.log("Email is empty");
// }

// // Create an empty object
// const emptyObj = {};

// // Check if the object is empty
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
//}

// nullish coaleslicing oprator (??): null undifind 

// let val1;  // Variable name cannot have a space
// val1 = 5 ?? 10;  // Use nullish coalescing operator (??)
// val1 = null??10
// val1 = undefined??15
// console.log(val1);  // Corrected console.log statement

// //terniary oprator 
// // condetions ? tru : false 

// const iceteaprice = 100
// iceteaprice <=80? console.log("less than 80")
// : console.log ("more than 80");


//========================================================== loops ====================================================================================================================
//  for (let i=0; i <=10; i++){
//   const element = i ; 
//   if (element ==5){
//     console.log("5 is best number ");

//   }
//   console.log(element);
//  }



// // Outer loop from 0 to 10
// for (let i = 0; i <= 10; i++) {
//   // Log the current value of the outer loop (i)
//   console.log(`Outer loop value: ${i}`);

//   // Inner loop from 0 to 10
//   for (let j = 0; j <= 10; j++) {
//     // Log the current value of the inner loop (j) and the current iteration of the outer loop (i)
//     console.log(`Inner loop value: ${j} and Inner loop iteration of outer loop: ${i}`);

//     // Log the multiplication result of the current outer and inner loop values
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }


// Initialize an array with three string elements
// let MyArray = ["flash", "batman", "buri buri zymon"];

// // Log the length of the array (number of elements it contains)
// console.log(MyArray.length);  // Output: 3

// // Loop through each element in the array
// for (let index = 0; index < MyArray.length; index++) {
//     // Access the element at the current index
//     const element = MyArray[index];

//     // Log the current element to the console
//     console.log(element);
// }

// brake and continue 

// Loop through numbers from 1 to 20
// for (let index = 1; index <= 20; index++) {

//   // Check if the current index is equal to 5
//   if (index === 5) {
//     // Log a message when index is 5
//     console.log('miracle! miracle! 5 mil gaya!');
    
//     // Exit the loop when index is 5
//     break;
//   }

//   // Log the current index value, using template literals for dynamic values
//   console.log(`value of i is ${index}`);
// }

//================================================================== while loops =======================================================================================================
// Initialize the index variable to 0
// let index = 0;

// // Start a while loop that runs as long as index is less than or equal to 10
// while (index <= 10) {
//   // Log the current value of index using a template literal
//   console.log(`value of index is ${index}`);

//   // Increment index by 2
//   index = index + 2;
// }



// // Initialize an array with three string elements
// let MyArray = ["jarvish", "lucky man", "poweranger"];

// // Initialize the counter variable for the while loop
// let arr = 0;

// // Start a while loop that continues as long as arr is less than the array's length
// while (arr < MyArray.length) {
//   // Log the current array element at index arr
//   //console.log(`value is ${MyArray[arr]}`);

//   // Increment the counter to move to the next element in the next loop iteration
//   arr = arr + 1;
// }


// // Initialize the score variable to 0 (11 - 11 = 0)
// let score = 11 - 11;

// // Use a do...while loop to log the score and increment it until it exceeds 10
// do {
//   // Log the current value of score
//   console.log(`score is ${score}`);

//   // Increment the score by 1
//   score++;

// } while (score <= 10);  // Continue the loop while score is less than or equal to 10



// for of 

// const arr = [1,2,3,4,5]
// for(const num of arr){
//   console.log(num);
// }
// const greetings = "hello ramesshhh"
// for (const greet of greetings){
//   console.log(`each char is ${greet}`)
// }

 




// Maps
// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ':', value);
// }


// Initialize an array of coding languages
// const coding = ["js", "ruby", "java", "python"];

// // Correct usage of forEach with an anonymous function
// coding.forEach(function(val) {
//     console.log(val); // logs each value in the array
// });

// // Correct syntax for arrow function in forEach
// coding.forEach((item) => {
//     console.log(item); // logs each value using arrow function
// });

// // Using a separate function to log items
// function printme(item) {
//     console.log(item); // logs each item in the array
// }
// coding.forEach(printme); // calls printme function for each item

// // Using forEach with index and array
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr); // logs each item, its index, and the entire array
// });


// const myCoding = [
//   {
//     langname: "javascript",
//     langfilename: "js"
//   },
//   {
//     langname: "java",
//     langfilename: "java"
//   },
//   {
//     langname: "python",
//     langfilename: "py"
//   }
// ];

// myCoding.forEach((item) => {
//   console.log(item.langfilename)
//   console.log(item.langname);
// });





// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNums = myNums.filter((num) => {
//     return num > 4;
// });

// const newNums = [];
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });

// console.log(filteredNums); // Output: [5, 6, 7, 8, 9, 10]
// console.log(newNums);      // Output: [5, 6, 7, 8, 9, 10]









// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//  console.log(userBooks);








// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);





// const shoppingCart = [
//   {
//     itemname: "allu",
//     price: 938
//   },
//   {
//     itemname: "gnnaa",
//     price: 383
//   },
//   {
//     itemname: "baygan",
//     price: 484
//   }
// ];

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(priceToPay); // Outputs the total price to pay
