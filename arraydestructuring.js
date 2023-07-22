// Example 1: Basic array destructuring
const myArray = [1, 2, 3];
const [a, b, c] = myArray;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Example 2: Skipping elements using commas
const anotherArray = [10, 20, 30, 40, 50];
const [x, , y, , z] = anotherArray;

console.log(x); // Output: 10
console.log(y); // Output: 30
console.log(z); // Output: 50

// Example 3: Using rest operator to collect remaining elements
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const [firstFruit, secondFruit, ...restFruits] = fruits;

console.log(firstFruit);   // Output: 'apple'
console.log(secondFruit);  // Output: 'banana'
console.log(restFruits);   // Output: ['orange', 'grape', 'kiwi']

// Example 4: Swapping variables using destructuring
let p = 5;
let q = 10;

[p, q] = [q, p];

console.log(p); // Output: 10
console.log(q); // Output: 5




const colors=["black","green","orange"]
const[col1,col2,col3]=colors

console.log(col1)
console.log(col2)
console.log(col3)


const names=["sama","siru","vivek","dileep","akhil","janna"]
const [name1, ,name3, , ,name6]=names
console.log(name1)
console.log(name6)


const place=["mlp","ponnani","tirur","pattambi"]
const[firstplace,...remainingplace]=place
console.log(firstplace)
console.log(remainingplace)