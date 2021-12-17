// function getMilk(money, costPerBottle) { 
    
//     // var yearsRemaining  = 90 - age; 
//     // var days = yearsRemaining * 365;
//     // var weeks = yearsRemaining * 52;
//     // var months = yearsRemaining * 12
// console.log("Buy " + calcBottles(money, 2.5) + " bottle of milk!")

//     // console.log("You have " + yearsRemaining + " years remaining until you are " + age + " years old!")
//     // console.log("If you live to be " + age + " you will have this many days " + days + " to live!");
//     // console.log("If you live to be " + age + " you will have this many weeks " + weeks + " to live!");
//     // console.log("If you live to be " + age + " you will have this many months " + months + " to live!");
    
//     return calcChange(money, costPerBottle);
//   }

//   function calcBottles(startingMoney, costPerBottle) {
//     var numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     return numberOfBottles
//   }
//   function calcChange(startingAmount, costPerBottle) {
//     var change = startingAmount%costPerBottle;
//     return change;
//   }
// console.log("Hello Master, he is your " + getMilk(10, 1.5) + " change!");




//BMI Calculator

// function calcBMI(weight, height) {
//   var BMI = (weight / (height * height));
  
//   if(BMI < 18.5) {
//     console.log("Your BMI is " + BMI + ", so you are underweight.")
//   } else if (BMI >= 18.5 && BMI <= 24.9) {
//     console.log("Your BMI is " + Math.round(BMI) + ", so you are normal weight.")

//   } else {
//     console.log("Your BMI is " + Math.round(BMI) + ", so you are overweight.")
//   }
  
//   return Math.round(BMI);
// }

// calcBMI(80, 1.8);


// prompt("What is your name");
// prompt("What is their name");
// var loveScore = Math.random() * 100;

// loveScore = Math.floor(loveScore) + 1;

// if(loveScore > 30 && loveScore <= 70) {
//   alert("Your love score is " + loveScore + " PERFECT MATCH")
// } else {
//   alert("Your love score is " + loveScore + "%" + " Your not a Match, RUN!")
// }

//Arrays

// function allowedInParty() {
//   var guestName = prompt("What is the guests name?")

//   const guestList = ["Angel", "Damon", "Silvia", "Ana", "William", "Mom", "Dad", "Brother"]

//     if (guestList.includes(guestName)) {
//       console.log("You are welcome!")
//     } else {
//       console.log("Sorry, maybe next time!")
//     }
// }
// allowedInParty();


// function fizzBuzz() {
//     for(var count = 1; count < 101; count++) {
//     if (count %3 === 0 && count %5 === 0) {
//       console.log("Fizzbuzz" + count)
//     } else if(count %3 === 0) {
//         console.log("Fizz" + count)
//     } else if (count %5 === 0) {
//       console.log("Buzz" + count);
//     } 
//   }
// }
// fizzBuzz();

//control statements


