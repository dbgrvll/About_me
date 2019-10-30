'use strict';

var askName = prompt('What\'s your name?');
    alert('Welcome ' + askName + `, exciting info about "Jin" and Juice ahead!`);

var preferredName = prompt('Is my preferred name JinK?');
preferredName = preferredName.toLowerCase();

// console.log(preferredName);

if (preferredName === 'yes' || preferredName === 'y') {
    alert('Boo, Wrong!');
} else if (preferredName === 'no' || preferredName === 'n') {
    alert('You da best! Correct :)');
}

var askUniversity = prompt('Did I graduate from University of Hawaii at Manoa?');
askUniversity = askUniversity.toLowerCase();

// console.log(askUniversity);

if (askUniversity === 'yes' || askUniversity === 'y') {
    alert('Very nice! you been creeping on my info :^)');
} else if (preferredName === 'no' || preferredName === 'n') {
    alert('Try again!');
}

var myPassion = prompt('Do I want to go into dental school now?');
myPassion = myPassion.toLowerCase();

// console.log(myPassion);

if (myPassion === 'yes' || myPassion === 'y') {
    alert('Unfortunately, not anymore :(');
} else if (preferredName === 'no' || preferredName === 'n') {
    alert('Yes that\'s correct! Let get that coding job!');
}

var moveSeattle = prompt('Did I move to Seattle 2 years ago?');
moveSeattle = moveSeattle.toLowerCase();

// console.log(moveSeattle)

if (moveSeattle === 'yes' || moveSeattle === 'y') {
    alert('Sorry, I am only 1 year old Seattlian.');
} else if (preferredName === 'no' || preferredName === 'n') {
    alert('Correct, I been enjoying here!');
}

var myGoal = prompt('Do I want to build a app to take over the WORLD?');
myGoal = myGoal.toLowerCase();

// console.log(myGoal);

if (myGoal === 'yes' || myGoal === 'y') {
    alert('uh oh ' + askName + ', you know my secret. HAHA just kidding, I am not!?');
} else if (preferredName === 'no' || preferredName === 'n') {
    alert('Ding Ding Ding ' + askName + ', That\'s right I want to build an app to help underserved people.');
}

    alert('Thank for taking your time to take my quizes ' + askName + ', I hope you learn little bit more about myself.')