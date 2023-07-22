function x(y){
  console.log("it's x");
  y()
}
x(function(){
    console.log("it's y")
})