const { error } = require("console")

function hello(x,something){
    setTimeout(()=>{
       something(x)
    },1000)
}

console.log('first')
hello('middle',goingToCall)
console.log('end')

function goingToCall(res){
   console.log(res)
}


function add(a,b){
    let sum=a+b

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(sum==0){
                reject('zero')
            }else{
                resolve(sum)
            }
        },1000)
    })
}
add(10,0).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(error)
})


function addNum(a,b,cb){
    cb(a+b)
}

addNum(10,200,(result)=>{
    console.log(result)
})

// while we passing lot of functions ass arguments and recieve it as argument its really very hard to learn and read
// this is low readability it this concept is called call back hell 


function calculations(a,b,sum,c,multiply,division){
    sum(a+b+c)
    multiply(a*b*c)
    division(b/c)
}
calculations(100,200,((sumres)=>{
    console.log(sumres)
}),1000,((result)=>{
    console.log(result)
}),((re)=>{
    console.log(re)
}))