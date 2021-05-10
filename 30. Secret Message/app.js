let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


console.log(secretMessage.length);
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to','program');
let index = secretMessage.indexOf('easily');
secretMessage[index] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');

let indexOfget = secretMessage.indexOf('get');

secretMessage.splice(indexOfget, 5, 'know')

console.log(secretMessage.join(' '));
 
