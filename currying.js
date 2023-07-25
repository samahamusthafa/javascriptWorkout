// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }
// const multiplyByTwo=multiply(2)
// console.log(multiplyByTwo(4))


function multiply(a){
    return function(b){
        return a*b;
    }
}
const multiplyByTwo=multiply(2)
console.log(multiplyByTwo(4))