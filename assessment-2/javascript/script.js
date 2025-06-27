// task1
// most repeating character in a string
let str = "aabbbcc";
let charCount = {};
let maxChar = '';
let maxCount = 0;

for (let char of str) {
  if (char !== ' ') {
    charCount[char] = (charCount[char] || 0) + 1;
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }
}

console.log("Most repeating character:", maxChar);

// task2
// find the unique elements in two arrays
let arr1 = [1,2,3];
let arr2 = [2,4,5];
let uniqueElements = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
console.log("Unique elements:", uniqueElements);


// task3
// function to find the longest word in a sentence
let sentence = "JavaScript is powerful";
let longestWord = sentence.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, '');
console.log("Longest word:", longestWord);

// task4
// chainable function 
function chain(init) {
    let value = init;

    return {
        add: function(num) {
            value += num;
            return this;
        },
        subtract: function(num) {
            value -= num;
            return this;
        },
        result: function() {
            return value;
        }
    };
}

console.log(chain(5).add(2).subtract(1).result()); 

// task5
// hoisting
console.log(a);
var a = 5;


// console.log(b);
// let b = 10;
// in hoisting if we do with let and const it shows error[var la matum thaan undefined show panum]



