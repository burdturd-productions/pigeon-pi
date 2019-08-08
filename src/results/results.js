import store from '../store.js';

let sideImg = document.getElementById('side-image');
let storyImg = document.getElementById('story-image');
let textResult = document.getElementById('text-id');

let currentUser = store.getCurrentUser();
let userScore = currentUser.score;
console.log(userScore);

// Need an if statement that Renders results based on score.
if(userScore === 2) {
    sideImg.src = '../../assets/character-right.png';
    storyImg.src = '../../assets/wtfbirb.jpg';
    textResult.textContent = 'Georgie O. Squirrel was right, it WAS Aliens!';
}
else if(userScore === 1) {
    sideImg.src = '../../assets/character-right.png';
    storyImg.src = '../../assets/placeholder-pigeon.jpg';
    textResult.textContent = 'Something doesn\'t add up, are you sure you solved the case?' ;
}
else if(userScore === 0) {
    sideImg.src = '../../assets/character-right.png';
    storyImg.src = '../../assets/placeholder-pigeon.jpg';
    textResult.textContent = 'You Were Terrible...Don\'t Even Bother Trying Again...Loser!';
}