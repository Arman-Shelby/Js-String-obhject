const address = 'andarkilla ';
const part = address.slice(3,6); // get a slice from an string 
console.log(part);


const sentence  = 'I am a good and hardworking person';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim , fahim , karim , faraz';
const friends = friendsStr.split(',');
console.log(friends);


const realFriend = [ 'Rahim ', ' fahim ', ' karim ', ' faraz' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));