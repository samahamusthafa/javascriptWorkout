const array=[1,2,3,4,5]

const result=array.filter((number)=>number%2==0).reduce((acc,num)=>acc+num)
console.log(result)