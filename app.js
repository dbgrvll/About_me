'use strict';

var preferredName = prompt('Is my preferred name JinK?');
preferredName = preferredName.toLowerCase();

if (preferredName === 'yes' || preferredName === 'y') {
  alert('Boo, Wrong!');
} else {
  alert('You da best! Correct :)');
}

var askUniversity = prompt('Did I graduate from University of Hawaii at Manoa?');
askUniversity = askUniversity.toLowerCase();

if (askUniversity === 'yes' || askUniversity === 'y') {
  alert('Very nice! you been creeping on my info :^)');
} else {
  alert('Try agiain!');
}

var myPassion = prompt('Do I want to go into dental school now?');
myPassion = myPassion.toLowerCase();

if (myPassion === 'yes' || myPassion === 'y') {
  alert('Unfortunately, not anymore :(');
} else {
  alert('Yes thats correct! Let get that coding job!');
}

var moveSeattle = prompt('Did I move to seattle 2 years ago?');
moveSeattle = moveSeattle.toLowerCase();

if (moveSeattle === 'yes' || moveSeattle === 'y') {
  alert('Sorry, I am only 1 year old Seattlian');
} else {
  alert('Correct, I been enjoying here!');
}

var myGoal = prompt('Do I want to build a app to take over the WORLD?');
myGoal = myGoal.toLowerCase();

if (myGoal === 'yes' || myGoal === 'y') {
  alert('uh oh, you know my secret. HAHA just kidding, I am not!?');
} else {
  alert('Ding Ding Ding, That`/s right I want to build an app to help underserved people');
}



