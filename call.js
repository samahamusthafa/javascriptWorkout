function sayHello(message1,message2){
    console.log(message1 + ' ' + message2 +' '+this.name)
}

const person = {
    name:"samaha"
}

sayHello.call(person,"hi","hello")
sayHello.apply(person,["hi","hello"])
const binding=sayHello.bind(person,"hi","hello")
binding()