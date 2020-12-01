// String
const str = 'hello';
str.length // 5
str[0] // 'h'
str.charAt(0) // 'h'
str.indexOf('l') // 2
str.lastIndexOf('l') // 3
str.startsWith('h') // true
str.endsWith('o') // true
str.includes('el') // true
str.split('l') // ['he', '', 'o']
str.slice(0) // 'ello'
str.slice(1,3) // 'el'
str.slice(-2) // 'lo'
str.substring(0) // = slice(0)
str.replace('l', 'L') // 'heLlo'
str.replaceAll('l', 'L') // 'heLLo'
str.replace(/l/g, 'L') // 'heLLo' 
str.match(/.llo/)
str.toUpperCase()
str.repeat(2)
`${str} world`



// Array
// Indexes are 0-based
// Create
let arr = [1, 2];
arr = new Array(1, 2);
arr = Array(1, 2);
arr = Array.of(1, 2);

arr = new Array(2);
arr.length // 2
arr[1] // undefined

arr[9] // undefined
arr.length // 10

// Read
arr = ['a', 'b']
arr[0] // 'a'
arr[9] // undefined, no Out of bound
// iterate
for(a of arr) { console.log(a) } // a, b
for(a in arr) { console.log(a) } // 1, 2
arr.forEach(console.log)
arr.map(a => a + 1) // [a1, b1]
// search
arr.includes('a') // true
arr.indexOf('a') // 0, or -1 not found
arr.find(e => e == 'a') // 'a'
arr.filter(e => e == 'a') // ['a']
arr.findIndex(e => e == 'a') // 0
arr.every(e => e == 'a') // false
arr.some(e => e == 'a') // true

// Add
arr.push('c', 'd'); // add to end
arr.unshift('-1', '-2'); // add to front, ['-1', '-2', 'a', 'b', 'c', 'd']


// Delete
arr.push(3); // [1,2,3]
arr.pop(); // 3, arr = [1, 2]
arr.shift(); // 1, arr = [2]

// sort
arr = [1,3,4,2]
arr.sort((a,b) => a - b) // in place sort, [1,2,3,4]