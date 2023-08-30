
//   Functions Used as Variable Values and functions

function abcd( a ,  b){
    return a*b;
}

 var  a = abcd(2,4);

 console.log(a);


// write a js function that will convert fahrenheit to celsius

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

  console.log(value);

//   Local Variables

// local variables decleared within the js function become to the local function

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

  