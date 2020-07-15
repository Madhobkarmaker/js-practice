var friendAge = [25, 26, 27, 28, 29];
console.log(friendAge);

var shuvoAge = friendAge[3];
console.log(shuvoAge);

friendAge[3] = 24 ;
console.log(friendAge);

var position = friendAge.indexOf(27);
console.log(position);

friendAge.push(20);
console.log(friendAge);
console.log(friendAge.length);

friendAge.pop();
console.log(friendAge);

friendAge.pop();
console.log(friendAge);

friendAge.unshift(18, 21);
console.log(friendAge);

friendAge.slice(2,5);
console.log(friendAge);

var friendList = ['shuvo', 'manik', 'shohag', 'sondip', 'sompod', 'akash', 'tonmoy'];
console.log(friendList);

var friendPriority = friendList[4];
console.log(friendPriority);
console.log(friendPriority.length);

friendList[5] = 'ullash';
console.log(friendList);

var fridenPosition  = friendList.indexOf('tonmoy');
console.log(fridenPosition);

friendList.push('shako');
console.log(friendList);

friendList.pop();
console.log(friendList);

friendList.shift();
console.log(friendList);

friendList.unshift('Arup');
console.log(friendList);

var friendzone = friendList.slice(2,4);
console.log(friendzone);

