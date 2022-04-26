console.log("Working...");

// Arithmetic Opertors
// +, -, /, *, %

// modulus - It gives us the remainder. 

console.log(2+3);//5
console.log(2-3);//-1
console.log(2*3);//6
console.log(2/3);//0.66666
console.log(2%3);//2

// Comparison Operators
//  ==/!= only check the values and not the data types.
// but === check both the values and the data types.

// <, >, <=, >=, ==, ===, !=
console.log(2<3);//true(boolean values)
console.log(2>3);//false
console.log(2>=3);//false
console.log(2<=3);//true (true or false i.e true)

console.log(2==2);//true
console.log(2===2);//true values are 2 and data types number
console.log(2=="2");//true 
console.log(2==="2");//false values are 2 and data types are number and string.
console.log(2!=3);//true
console.log(2!=2);//false
console.log(2!==2);//false

// Logical Operators
// ||, &&, !

// OR operator ||- if the value is non-zero the first value is print.
// ||- if the value is zero the second value is print.
console.log(2||3); //2 
console.log(0||3); //3
console.log(0||0); //0

// AND operator && - bigger value is printed
console.log(1&&3);//3
console.log(0&&3);//0
console.log(1&&0);//0
console.log(2&&3);//0

// NOT operator
console.log(!0);// true
console.log(!1);// false
console.log(!2);// false

// Increment and Decrement Operators
// post increment operators (++)
// post decrement operators (--)

let a = 1;
a++;// a = a+1
console.log(a);//2
a--;// a = a-1
console.log(a);//1
// a = 1;
console.log(a++);//1 I will first print the value of a and then increment its value with 1 which will be reflected in next line not on the same line.
console.log(a);//2
// a = 2;
console.log(a--);//2 I will first print the value of a and then increment its value with 1 which will be reflected in next line not on the same line.
console.log(a);//1

let b = 2;
b*=3; // b = b*3
b/=3; // b = b/3
b+=2; // b = b+2
b-=2; // b = b-2




