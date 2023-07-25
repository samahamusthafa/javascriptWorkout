const array=[1,2,3]

array.forEach((number)=>{
    let result=number*2
    console.log(result)
})

const array1=[2,3,5]
const result=array.map((number)=>{
    return number*2
})
console.log(result)