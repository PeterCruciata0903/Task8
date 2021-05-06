// Function for Reversing a String
// function reverseThisString(string) {
//     return string.split("").reverse().join("");
// }
// console.log(reverseThisString("Hello"));



// Function to Swap Case
// function swapCase(string) {
//     var newString = '';
//     var i; 
    
//     for (i = 0; i < string.length; i++){
//         if(string[i] >= 'a' && string [i] <= 'z')
//         newString+= string[i].toUpperCase();

//     else if(string[i]>='A' && string[i] <='Z')
//         newString+= string[i].toLowerCase();
//     }

//     console.log(newString);
//     }
//     swapCase("Hello World"); 



// Function to convert degrees F to degrees C
// const conversion = [23, 32, 41, 50, 59].map(function(n){
//     return (n-32) * (5/9)
// });

// console.log(conversion);



// Function for determining array bool
// const value = [20, 30, 50, 80, 90, 100].map(function(array){
//     if(array > 75)
//     return true;
//     else
//     return false
// })

// console.log(value)

    function germanNumbers(){
        array=[];

        const cardinalNumbers = [2,3,4,5,6];
        const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

        for(i=0; i < 5; i++){
            array[i] = cardinalNumbers[i] + " is " + germanNumbers[i];
        }

        console.log(array);
    }

    germanNumbers();

// function returnPrimeNumbers(number){
//     for (var i = 2; number > i; i++) {
//       if (number % i == 0) {
//         return false;
//       }
//     }
//     return number;
// }
    
//     const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//     console.log(numbers.filter(returnPrimeNumbers)); 

// //Function for looping numbers
// for (var i = 1; i <= 100; i++)
// {
//   if (i % 3 === 0 && i % 5 === 0)
//   {
//     console.log("CSC225 RULES I LOVE JAVASCRIPT");
//   }
//   else if (i % 3 === 0 ) 
//   {
//     console.log("CSC225 RULES");
//   }
//   else if (i % 5 === 0) 
//   {
//     console.log("I LOVE JAVASCRIPT");
//   }
//   else
//   {
//     console.log(i);
//   }
// }

    