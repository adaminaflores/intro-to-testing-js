// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input) {
    if (typeof input === "boolean") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input){
   if (typeof input === "boolean"){
       return "boolean";
   } else {
       return false;
   }
}

function isEven(input) {
  if (input <= '8') {
      return true;
  } else if(input === !isEven(3)){
      return false;
  } else {
    return false;
  }
}




