//  Variables

//  1. Declare a variable to store your name and log it to the console.

// let Name="Anees"
// console.log(Name)

// 2. Create two variables to store your age and a friend’s age, then log the sum.

// let MyAge=20;
// let MyFriendAge=23;

// console.log(MyAge+MyFriendAge)

//  3. Declare a constant to store the value of Pi (3.14159).

// const PiValue=3.14159;

// 4. Store your favorite color in a variable and display it in a sentence.

// let Color="black"
// console.log("My favourite color is "+Color)


//  5. Swap the values of two variables without creating a third variable.

// let a=2;
// let b=4;

// [a,b]=[b,a]
// console.log(b,a)



// 6. Declare a variable with no initial value, then assign a number to it.

// let variable1;
// variable1=4;

// 7. Create a variable that holds the result of multiplying two numbers.

// let val1=3;
// let val2=4;
// var result=val1*val2;
// console.log(result);

//  8. Store the result of dividing two numbers and log whether the result is an integer.

// let val1=3;
// let val2=4;
// var result=val1/val2;
// console.log(result);

//  9. Declare variables for first name, last name, and age. Log a sentence combining them.

// let firsName='Muhammad';
// let lastName='Anees';
// let Age=20;
// console.log("My first name is "+firsName+" and my last  name is "+lastName+" my age is "+Age);


//  10. Declare a Boolean variable to indicate whether today is sunny. Log the value.

// let isSunny=true;
// console.log(isSunny)



//  Operators 

// 1. Use the addition operator to add two numbers and display the result.

// let a=3;
// let b=5;
// console.log(a+b)

//  2. Use the modulus operator to check if a number is even or odd.

// let num=prompt("enter a number : ")
// if (num %2==0){
//     console.log("the number is even")
// }
// else{
//     console.log("number is odd")
// }


//  3. Write a program to compare two numbers and log which is larger.

// let a=4;
// let b=5;
// if(a>b){
//     console.log(a+"is greater than b")
// }
// else{
//     console.log("b is greater than a")
// } 

//  4. Use the increment operator to increase a variable by 1.
// let a=5;
// a+=1;
// console.log(a)

//  5. Use the decrement operator to decrease a variable by 1.

// let a =6;
// a-=1;
// console.log(a)


//  6. Write a program to calculate the area of a rectangle (length × width).

// let length = 40;
// let width = 50;
// console.log(length*width)


//  7. Use the += operator to add 10 to a variable.


// let a=0;
// a+=10;
// console.log(a)

//  8. Write a program to calculate the simple interest (P × R × T) / 100.

// let P=3;
// let R=2;
// let T=6;

// console.log("the simple interest will be : "+(P * R * T) / 100)


// 9. Create a program to find the remainder when dividing 25 by 4.

// let a=25;
// let b=4;
// console.log(a%b)


//  10. Check whether two strings are equal using the equality operator.
// let a=8;
// let b=4;
// console.log(a==b)





//  IF-ELSE Conditions

//  1. Write a program to check if a number is positive, negative, or zero.

// let Num=5;
// if (Num>0){
//     console.log("Number is Positive")
// }
// else if(Num<0){
//     console.log("Number is negative")
// }
// else{

//     console.log(Num +"is 0")
// }




//  2. Check if a person is eligible to vote based on age.

// let age=prompt("enter your age  : ")
// if(age>=18){
//     console.log("You're eligible to vote")
// }
// else{
//     console.log("you are not eligible to vote")
// }



//  3. Write a program to check whether a number is divisible by 5 and 11.

// let num=prompt("enter a number ; ")
// if(num %5 ==0 && num %11==0){
//     console.log("number is divisble")
// }
// else{
//     console.log("number is not divisible")
// }

//  4. Check whether a given year is a leap year.

// let year=prompt("year : ")
// if(year %4==0){
//     console.log("this year is leap year")
// }
// else{
//     console.log("this is not leao year")
// }


//  5. Write a program to display the largest of three numbers.

// let num1=3;
// let num2=4;
// let num3=6;

// if(num1>num2 && num1>num3){
//     console.log(num1+"is greater")
// }
// else if(num2>num1 && num2>num3){
//     console.log(num2+"is greater")

// }

// else {
//     console.log( num3+" number is greater ")
// }



//  6. Check if a person is a child (age < 12), teenager (12–18), or adult (18+).

// let age=prompt("enter your age : ")
// if (age < 12){
//     console.log("You're child")
// }

// else if(age >=12 && age <=18){
//     console.log("You're teenager");

// }
// else if(age>18){
//     console.log("You're adult")
// }


//  7. Write a program to determine if a character is a vowel or a consonant.

// let Vowels='aeiou';
// let consonant=prompt("enter a character : ")
// if(Vowels.includes(consonant)){
//     console.log("the character you entered is an vowel")

// }
// else{
//     console.log("its consonant")
// }




//8. Check if a number is even or odd using an if-else statement.

// let a=6;
// if(a %2==0){
//     console.log("the number is even")
// }
// else{
//     console.log("the number is odd")
// }



//  9. Write a program to determine if a grade is pass or fail (pass >= 40).

// let marks=45;
// if(marks>=45){
//     console.log("you're pass")

// }
// else{
//     console.log("you're fail")
// }


//  10. Write a program to determine whether a person is tall enough to ride a roller coaster  (height ≥ 120 cm).

// let height=129;
// if(height >=120){
//     console.log("you can ride on roller coaster ")
// }
// else{
//     console.log("your height is short")
// }



//  Switch Statement

//  1. Write a program to display the name of a day based on a number (1 for Monday, etc.).

// let day=3;
// switch(day){
//     case 1: 
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5: 
//        console.log("friday")
//        break;
//     case 6:
//         console.log("saturday")
//         break;
//     case 7:
//         console.log("sunday")
//         break;
//     default:
//         console.log("Invalid")
// }



//  2. Create a program that takes a month number and logs the number of days in that month.

// let month=2;
// switch (month){
//     case 1:
//         console.log("January: 31 days")
//        break;
//     case 2:
//         console.log("February: 28 days")
//         break;
//     case 3:
//         console.log("March: 31 days")
//         break;
//     default:
//         console.log("invalid month number ")
// }




// 3. Use aswitch statement to classify a character as a vowel or consonant.

// let Vowels='aeiou';
// let character='f'
// switch(true){
//     case Vowels.includes (character):
//         console.log("its a vowel")
//     break;
//     default:
//         console.log("character is consonant ")

// }



//  4. Write a program to assign grades based on marks (A, B, C, D, F).

// let marks=90;
// switch(true){
//     case marks>50 && marks<=55:
//         console.log("Your grade is C")
//         break;
//     case marks>55 && marks<=60:
//         console.log("Your grade is C+")
//         break;
//     case marks>60 && marks<=65:
//     console.log("Your grade is B")
//     break;
//     case marks>65 && marks<=70:
//         console.log("Your grade is B+")
//         break;
//         case marks>70 && marks<=75:
//     console.log("Your grade is A")
//     break;
//     case marks>75 && marks<=100:
//         console.log("Your grade is A+")
//         break;
//     case marks>100:
//         console.log("invalid marks")
//         break;
//     default:
//         console.log("Sorry you are fail")
    
// }


//  6. Use aswitch statement to determine the type of triangle based on side lengths.
// let length_1=prompt("enter length of side 1 : ")
// let length_2=prompt("enter length of side 2 : ")
// let length_3=prompt("enter length of side 3 : ")
// switch(true){
      
//      case length_1==length_2 && length_2==length_3:
//          console.log("this triangle is equilateral ")
//          break;
//      case length_1==length_2 || length_1==length_3 ||  length_2==length_3 :
//          console.log("this trangle is Isosceles Triangle")
//          break;
//       case length_1!==length_2  && length_2!==length_3 && length_1!==length_3:
//            console.log("Scalene Triangle")
//           break;
    
//      default:
//       console.log("dekhty hain bhai")



// }



// 7. Write a program to print the season name based on a month number.



// 8. Create a program to identify the type of food (fruit, vegetable, grain) based on input.
// 9. Use aswitch statement to return the corresponding zodiac sign based on a birth date.
// 10. Write a program to determine the type of fuel based on the user’s selection (petrol,
// diesel, etc.).


//  Loops


// 1. Write a program to print numbers from 1 to 10 using a for loop.

// let i;
// for(i=1;i<=10;i++){
//      console.log(i)
// }


// 2. Use awhile loop to print the first 10 even numbers.

// let i=1;
// while( i<=10){
//      if(i%2==0){
//           console.log(i)
//      }  
//     i++;
// }

//  3. Write a program to calculate the factorial of a number using a for loop.


//  4. Print the multiplication table of a given number using a loop.

// let i;
// for(i=1;i<=10;i++){
//      console.log(i*2)
// }

// 5. Write a program to reverse a number (e.g., 123 → 321).









//  5. Create a calculator using a switch statement for operations (+,-, *, /).

// let num1=parseFloat(prompt("enter num 1 "));
// let num2=parseFloat(prompt("enter num 2"));

// let Operations = prompt(" + , - , x,*,X , /")

// switch(Operations){
//     case "+":
//         console.log("Addition = " + (num1+num2))
//         break;
//     case "-":
//         console.log("Subtraction = " +(num1-num2))
//         break;
//     case "x"|| 'X'|| '*':
//         console.log("Multiplication = " +(num1*num2))
//         break;
//     case "/":
//         while (num2 === 0) {
//             num2 = parseFloat(prompt("Denominat or cannot be zero. Please re-enter num 2: "));
//         }
       
//             console.log("Division : "+(num1/num2))
//             break; 
        
        
//     default:
//         console.log("invalid choice ")
    
// }

  



// Functions

// 1.   Write a function that prints "Welcome to JavaScript!" to the console.

// function Welcome(){
//     console.log("Welcome to JavaScript!")
// }
// Welcome();



// 2 . Create a function that takes a number and returns the number doubled.


// let number=prompt("enter number : ")
// function  DoubleNumber(number){
//     console.log(number*2)
// }

// DoubleNumber(number);



// 3 . Write a function that returns the square of a given number.

// let number=prompt("enter number : ")
// function SquareOfNumber(number){
//     console.log(number**2)
// }

// SquareOfNumber(number);



// 4 .  Create a function that takes two numbers and returns their sum.

// function SumNumbers(num1,num2){
//     console.log(num1+num2)
// }
// SumNumbers(2,3);



//  5 . Write a function that logs a greeting message with a name passed as a parameter.


// function Greetings(name){
//     console.log("hello MR/Mr's : "+ name)
// }

// Greetings("Anees");



// 6 . Create a function that takes a string and returns it in uppercase.


// let StrName = prompt("Your Name : ")
// function NameUpperCase(StrName){
//    let  UpperCase = StrName.toUpperCase()
//     console.log(UpperCase )
// } 
// NameUpperCase(StrName);



// 7 . Write an arrow function that subtracts one number from another.

// const subtraction=(num1 , num2 )=>{
//      console.log(num1-num2)
// }
// subtraction(10 , 8 );



// 8 . Create an arrow function that returns the product of two numbers.

// const Product=(num1 , num2 )=>{
//      console.log(num1*num2)
// }
// Product(10 , 8 );



// 9 . Write a function to calculate the area of a rectangle (length × width).

// function Area(length,width){
//     rectangle=length*width
//     console.log(rectangle)
// }
// Area(3,3);



// 10 . Create an arrow function that divides one number by another and returns the result.

// const Division=(num1 = 2 , num2 = 3)=>{
//     return num1 / num2;
// }
// console.log(Division());




//               Functions with Conditional Logic 



//  1. Write a function to check if a number is positive or negative.

// function numberCheck(num){
//       if (num > 0 )
//       {
//         console.log(num + " is postive")
//       }
//       else if (num < 0 )
//       {
//         console.log(num + " is negative")
//       }
//       else{
//           console.log(num + " is Zero")
//       }

// }

// numberCheck(5);




// 2. Create a function that returns true if a number is even and false if it’s odd.

// function EvenOdd(num){
//     if (num  %2== 0){
//         return true;
//     }
//     else{
//        return false;
//     }
// }

//  console.log(EvenOdd(4));



// 3 . Write an arrow function that checks if a string contains the word "hello".



// const WordCheck=(str = "hello world")=>{
//     if (str.includes ( "hello")) {
//         console.log("available")
//     }
//     else{
//         console.log("not available")
//     }
// }

// WordCheck();





// 4 . Create an arrow function that takes a number and returns whether it’s greater than 10.

// const GreaterThan=(num)=>{
//      if(num>10){
//         console.log(num + " is Greater")
//      }
//      else{
//         console.log(num + "is less than 10 ")
//      }

// }
// GreaterThan(18);




// 5. Write a function that calculates whether a student passed or failed based on a grade (pass >= 40).
 
// let marks=prompt("enter your marks : ")

// function PassOrFail(marks){
//     if (marks >=40 ){
//         console.log("Pass ho app ")
//     }
//     else{
//         console.log("fail ho app ")

//     }

// }

// PassOrFail(marks);




// 6. Create a function that checks if a given year is a leap year.

// function LeapYear(Year){

//     if(Year % 4 == 0){
//         console.log("this year is leap year ")
//     }
//     else{
//         console.log("its not a leap year ")
//     }
// }

// LeapYear(2005);



// 7. Write a function that checks if a string is longer than 5 characters

// let str="myname";
// function LongerString(str){
//     if(str.length >5 ){
//         console.log("its greater  ")
//     }
//     else{
//         console.log("its less")
//     }
// }

// LongerString(str);


//  8. Create a function that takes a number and returns "small" if it’s less than 50 and "large" otherwise.


// function NumCheck(num){
//     if(num > 50 ){
//         console.log("its greater than 50 ")
//     }
//     else{
//         console.log("its less than 50")
//     }
// }

// NumCheck(70);
 



// let char=prompt("enter any character : ");
// let vowels = "a,e,i,o,u";


// 9. Write a function to determine if a character is a vowel.

// function VowelCheck(char){
//     if (vowels.includes(char)){
//         console.log("its a vowel")
//     }
//     else{
//         console.log("its not a vowel character")
//     }

// }

// VowelCheck(char);



// 10. Create an arrow function that checks if a given age qualifies for a senior citizen discount (age >= 60).


// function Discount(age){
//     if(age>=60){
//         // console.log("congratulationns you got discount")
//         return "congratulationns you got discount",  68;
        
//     }
//     else{
//         console.log("Sorry there's no discount")
//     }

// }
// let Discounted=Discount(60);
// console.log(Discounted);





// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) ); // 8






//  Working with Arrays


// 1. Write a function that returns the first element of an array.

// let arr=[1,2,3,4]
// function firstElement(arr){
//    console.log(arr[0])
// }
// firstElement(arr);


//  2. Create a function that returns the last element of an array.

// let arr=[1,2,3,4]
// function firstElement(arr){
//    console.log(arr[3])
// }
// firstElement(arr);


//  3. Write a function that adds an element to the end of an array and returns the new array.

// let arr=[1,2,3,4]
// function firstElement(arr){
//    arr.push(5)
//    console.log(arr)
// }
// firstElement(arr);


//  4. Create a function that adds an element to the beginning of an array.

// let arr=[1,2,3,4]
// function firstElement(arr){
//     arr.unshift(5)
//    console.log(arr)
// }
// firstElement(arr);

//  5. Write an arrow function that removes the last element from an array.

// let arr=[1 ,2 , 3, 4]
// const Removes=(arr)=>{
//      console.log("before : ",arr)
//      arr.pop()
//      console.log("after : ",arr)

// }

// Removes(arr);

//  6. Create a function that removes the first element from an array.


// let arr=[1,2,3,4]
// function firstElement(arr){
//     console.log(arr)
//     arr.shift()
//    console.log(arr)
// }
// firstElement(arr);



//  7. Write a function to find the largest number in an array of numbers.
// let num=[1,2,3,4,5]
// function FindNum(num){
 
//   let n=  (Math.max(...num))
//     console.log(num)
//     console.log(n)
// }
// FindNum(num) 


//  8. Create an arrow function to calculate the sum of all numbers in an array.
//  9. Write a function that checks if an array contains a specific number.
//  10. Create an arrow function that reverses an array and returns it.






// Array Exercises

//  push

//  ● Add multiple elements to an array using push and return the updated array.

    // let arr=[]
    // function ElementAdd(arr){
    //      return arr.push(6);
    // }
    
    // ElementAdd(arr);
    // console.log(arr)


//  ● Create a function that adds numbers from 1 to 10 to an empty array using push.
    // let arr=[]
    // function MultipleNumbers(arr){
    //     for(let  i=1; i<=10; i++){
    //         arr.push(i)
    //     }
    // }
    // MultipleNumbers(arr);
    // console.log(arr)

//  ● Use push to add a nested array [5, 6] to an existing array.

// let  arr=[2,4]
// let nestedArray=[5,6]
// arr.push(nestedArray)
// console.log(arr)


//  ● Write a function that uses push to add a string to an array and then logs the new length
//  of the array.

// let arr=[1,2,3,4]
// function AddingString(arr){
//      arr.push("hello")
// }
// AddingString(arr);
// console.log(arr);
// console.log("this is length : ",arr.length)

//  ● Simulate a stack by adding items with push and removing the last item later.

// let Stack = [];

// function New(Stack) {
   
//     for (let i = 0; i <= 5; i++) {
//         Stack.push(i);
//     }
// console.log("Before : ",Stack)
 
//     for (let j =Stack.length - 1; j >= 0; j--) {
//         console.log( Stack.pop());
//     }
// }

// New(Stack);
// console.log("Final Stack:", Stack);




// pop


// ● Create a function that removes the last element of an array and returns it.

// let arr=[1,2,3,4]
// function Remover(arr){
//      arr.pop(arr[3])
// }
// Remover(arr);
// console.log(arr)




// ● Write a function that removes elements from an array until it becomes empty using pop.

// let arr=["a","b","c","d",4,6,7]
// function Remover(arr){
//     while (arr.length > 0) { 
//         arr.pop(); 
//     }
// }
// console.log( "Before Removing Elements : ",arr)

// Remover(arr)
// console.log("After Removing Elements : ",arr)

// ● Use pop to remove the last element of an array, then log the updated array.

// let arr=["anees",3,4]
// arr.pop()
// console.log(arr)

// ● Combine push and pop to add and immediately remove an element from an array.

// let arr=[1,2,3]
// function Combine(arr){
//     arr.pop()
//     console.log("before : ",arr)
//     arr.push(3)
// }
// Combine(arr);
// console.log(arr)


// ● Write a function that repeatedly uses pop to retrieve all elements from an array in
// reverse order.

// let arr=[1,2,3,4,5]
// function RepeatedlyRemover(arr){
//    for(let i=0; i=arr.length; i++){
//        console.log("Poped element : ",arr.pop(i)) 
//    }

// }
// RepeatedlyRemover(arr)
// console.log(arr)




// unshift
// ● Write a function that adds multiple elements to the beginning of an array using unshift.

// let arr=[2,3,4,5]
// function UpdatedArray(arr){
//     arr.unshift(1,6,7,"Anees")
// }

// UpdatedArray(arr); 
// console.log(arr)

// ● Use unshift to add a value to the start of an array and return the updated array.

// let arr=["B","C","D","E"]
// arr.unshift("A")
// console.log(arr)

// ● Create a function that inserts numbers 1 to 5 into an empty array using unshift.

// let arr=[]
// function NewArray(arr){
//     for(let i=1; i<=5; i++){
//         arr.unshift(i)
//     }
// }
// NewArray(arr)
// console.log(arr)

// ● Combine Unshift with pop to add a value to the start of an array and remove the last
// value.

// let arr=["B","C","D","E"]
// arr.unshift("A")
// arr.pop("E")
// console.log(arr)



// ● Write a function that Repeatedly adds elements to the start of an array until its length is
// 10

// let arr=[]
// function Repeatedly(arr){
//     for(let i=0;i<=arr.length; i++){
//        arr.unshift(i)
//        if(arr.length==10){
//         break;
//        }
//     }
// }
// Repeatedly(arr)
// console.log(arr)



// shift
 
// ● Write a function that removes the first element from an array using shift and returns it.

// let arr=[1,2,3,4]

// function UpdatedArray(arr){
//     console.log("Removed : ",arr.shift())

// }
// UpdatedArray(arr)
// console.log(arr)

// ● Use shiftto remove the first element of an array and log the updated array
//    let arr=[1,2,3,4]
//    console.log("Original array : ",arr)
//    arr.shift()
//    console.log("updated array : ",arr)




// ● Combine shift and unshift to remove the first element of an array and add a new
// one at the beginning.

// let arr=["hello","world","lets ","code","together"]
// console.log("Removed : ",arr.shift())
// console.log("Added : ",arr.unshift(("hi")))
// console.log(arr)


// ● Write a function that removes elements from an array until it becomes empty using
// shift.

// let arr=[1,2,3,4,5,6,7,8,9,0]
// function NewArray(arr){
//    while(arr.length>0){
//     console.log(arr.shift())
//    }
    
// }
// NewArray(arr); 
// console.log(arr)


// ● Use shift to create a queue simulation where elements are added to the end with
//  push and removed from the front with shift.

// let arr=[]

// for(let j=0; j<=4;j++){
//    console.log("Added element : ",arr.push(j)) 
// }

// console.log(arr)
// for(let i=0; i<=4;i++){
    
//     console.log("Removed : ",arr.shift(i))
// }
// console.log(arr)



// splice
// ● Write a function that uses splice to insert elements into an array at a specific index.

// let arr=[1,2,3,4,5]
// function MyArray(arr){
//     arr.splice(1,0,6,7)
    
// }
// MyArray(arr)

// console.log(arr)


// ● Create a function that removes elements from an array using splice and returns the
// removed elements.

// array.splice(startIndex, deleteCount, item1, item2, ...)

// let arr=[1,2,3,4,5]
// function NewArray(arr){
//   let elements_to_remove = arr.splice(3,2)
//   console.log(elements_to_remove)

// }
// NewArray(arr)
// console.log(arr)

// ● Use splice to replace elements in an array with new values and return the updated
// array.

// let arr=["a","b","c","d","e","f"]

// arr.splice(2,1,"Anees")
// console.log(arr)

 
// ● Write a function that uses splice to remove the last two elements from an array.

// let arr=["a","b","c","d","e","f"]
// arr.splice(4,2)
// console.log(arr)

// ● Use splice to remove an element at a specific index and insert a new one in its place.

// let arr=["a","b","c","d","e","f"]
// arr.splice(0,1,"G")
// console.log(arr)

