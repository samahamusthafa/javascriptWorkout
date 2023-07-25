const promise=require('promise')
function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("samaha")
        },3000)
    })
}

function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("34567890")
        },2000)
    })
}

promise.all([getName(),getNumber()]).then((result)=>{
    console.log(result)
})

async function getUser(){
    const name=await getName()
    console.log(name)

    const number=await getNumber()
    console.log(number)
}
getUser()

console.log("started")
console.log("ended")


function getName1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("mn vivek")
        },8000)
    })
}

function getNumber1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("567890-")
        },3000)
    })
}

Promise.all([getName1(),getNumber1()]).then((res)=>{
    console.log(res)
})


async function getUser1(){
    const name1=await getName1()
    console.log(name1)
    const number1=await getNumber1()
    console.log(number1)
}
getUser1()



function getAge(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },1000)
    })
}
Promise.all([getAge()]).then((result)=>{
    console.log(result)
})

async function getUserr(){
    const age=await getAge()
   
    console.log(age)
}
getUserr()