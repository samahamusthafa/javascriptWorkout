// let object1={
//     name:"object1",
//     func:function(){
//         console.log('now i am in '+this.name)
//     }
// }

// let object2={
//     name:"object2"
// }

// object1.func.call(object2)

let object1={
    name:"obj1",
    func:function(){
        console.log("hello")
    }
}

let object2={
    name:"obj2"
    
}

object1.func.call(object2)