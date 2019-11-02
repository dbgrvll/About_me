'use strict';


// ask name question
// var askName = prompt('What\'s your name?');
// alert('Welcome ' + askName + ', exciting info about "Jin" and Juice ahead!');


// 1st question
// function preferName (){
//   var preferredName = prompt('Is my preferred name JinK?');
//   preferredName = preferredName.toLowerCase();

//   // console.log(preferredName);

//   if (preferredName === 'yes' || preferredName === 'y') {
//     alert('Boo, Wrong!');
//   } else {
//     alert('You da best! Correct');
// }
// }
// console.log (preferName());

// 2nd question
// function whatUniversity(){
//   var askUniversity = prompt('Did I graduate from University of Hawaii at Manoa?');
//   askUniversity = askUniversity.toLowerCase();

//   // console.log(askUniversity);

//   if (askUniversity === 'yes' || askUniversity === 'y') {
//     alert('Very nice! you been creeping on my info');
//   // console.log('Very nice! you been creeping on my info');
//   } else {
//     alert('Try again!');
//   // console.log('Try again!');
//   }
// }
// console.log (whatUniversity());

// // 3rd question
// function myGoal (){
//   var myPassion = prompt('Do I want to go into dental school now?');
//   myPassion = myPassion.toLowerCase();

//   // console.log(myPassion);

//   if (myPassion === 'yes' || myPassion === 'y') {
//     alert('Unfortunately, not anymore.');
//   // console.log('Unfortunately, not anymore.')
//   } else {
//     alert('Yes that\'s correct! Let get that coding job!');
//   // console.log('Yes that\'s correct! Let get that coding job!')
//   }
// }
// console.log (myGoal());

// // // 4th question
// // var moveSeattle = prompt('Did I move to Seattle 2 years ago?');
// // moveSeattle = moveSeattle.toLowerCase();

// // // console.log(moveSeattle)

// // if (moveSeattle === 'yes' || moveSeattle === 'y') {
// //   alert('Sorry, I am only 1 year old Seattlian.');
// //   // console.log('Sorry, I am only 1 year old Seattlian.')
// // }
// // else {
// //   alert('Correct, I been enjoying here!');
// //   // console.log('Correct, I been enjoying here!')
// // }

// // 5th question
// var myGoal = prompt('Do I want to build a app to take over the WORLD?');
// myGoal = myGoal.toLowerCase();

// // console.log(myGoal);

// if (myGoal === 'yes' || myGoal === 'y') {
//   alert('uh oh ' + askName + ', you know my secret. HAHA just kidding, I am not!?');
//   // console.log('uh oh ' + askName + ', you know my secret. HAHA just kidding, I am not!?')
// } else {
//   alert('Ding Ding Ding ' + askName + ', That\'s right I want to build an app to help underserved people.');
//   // console.log('Ding Ding Ding ' + askName + ', That\'s right I want to build an app to help underserved people.')
// }

// 6th question with for loop
// function differentCountries(){
//   for (var i = 0; i < 4;i++) {
//     var countryVisit = prompt('How many countries have i visited?');

//     // console.log('before parseint ' + typeof countryVisit)

//     countryVisit = parseInt(countryVisit)

//     // console.log('after paseint ' + typeof countryVisit)

//     if (countryVisit > 3) {
//       alert('Sadly, I haven\'t been to that many countries yet.');
//     } else if (countryVisit < 3) {
//       alert('I been fortunate enough to visit more than that');
//     } else if (countryVisit === 3 || countryVisit === 'three') {
//       alert('Great job!');
//       i = countryVisit.length + 2
//     }

//   }
// }

// differentCountries();

// 7th question with for loop
var favoriteFood = prompt ('What is my favorite food?');
favoriteFood = favoriteFood.toUpperCase();
var listFood = ['SUSHI', 'KIMCHI FRIED RICE', 'SUKIYAKI', 'HOT POT', 'YELLOW CURRY', 'PASTA', 'ITALIAN SUB SANDWICH', 'LOCO MOCO', 'HAMBURGER', 'PIZZA']
var numGuess = 6;

while (numGuess > 0) {
  for (var i=0;i < listFood.length; i++) {
    if (favoriteFood === listFood[i]) {
     alert('Hey you got it right buddy!');
     numGuess = 0;
    }
    }
     numGuess --;
    if(numGuess !== 0) {
      favoriteFood = prompt('Try again for different food!');
    } else if (numGuess === 0){
alert ('correct options were sushi');
    } else if (numGuess === -1){
alert ('you\'re right! all answers were sushi');

    
  }
}



// fruit loop

// var listFood = ['SUSHI', 'KIMCHI FRIED RICE', 'SUKIYAKI', 'HOT POT', 'YELLOW CURRY', 'PASTA', 'ITALIAN SUB SANDWICH', 'LOCO MOCO', 'HAMBURGER', 'PIZZA'];
// listFood = listFood.toLowerCase();

// for (var i = 0 ; i < 6; i++) {

//   var favoriteFood = prompt ('What is my favorite food?');

//   if (favoriteFood === listFood[i]) {
//     alert('Hey you got it right buddy!');
//     i = listFood.length + 1;
//   } else {
//     alert('Try again for different food!');
//   }

// }

// alert('correct answers were ' + listFood);







alert('Thank for taking your time to take my quizes ' + askName + ', I hope you learn little bit more about myself.');
