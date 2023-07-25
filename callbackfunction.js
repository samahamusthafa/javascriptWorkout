function x(y){
  console.log("it's x");
  y()
}
x(function(){
    console.log("it's y")
})


function hello(hi){
    console.log("it's hello")
    hi()
}
hello(()=>{
    console.log("it's hi")
})