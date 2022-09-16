
/*
console.log()
document.write()
window.alert()
innerHtml="marley"  <div id="demo">marley</div>
textContent="marley"  <div id="demo">marley</div>

*/

// console.log("funny worgihdfgjhdjfgld");
// document.write("funny worgihdfgjhdjfgld");
// window.alert("funny him")

// document.getElementById('demo').innerHTML ='hey marley'
// document.getElementById('demo').textContent ='hey yyyyyy'
/*jbjhkh */

// 'ug834y83y047384'
// "ug834y83y047384"
// 30
// true

// console.log(typeof('true'));

// keyword variableName = datavalue;
// let variableName = datavalue;
// const variableName = datavalue;

// variableName = datavalue;
// let personName = "marley";
// console.log(personName);

// const personDoB = 1955;

// school = "popl"
// console.log(hisName);
// console.log(hisName);

// decleared variables
// let personName , personAge;

// assign variables
// personName="marley";
// personAge=100;
// console.log(personAge);




// start Operator
    // arithmethic operators
    // +  -addition
    // /  division
    // *  -mult
    // -  -sub
    // ÷÷
    // --

    // let a ,b ;
    // a = 20;
    // b =40;

//    console.log( a + b);
//    console.log( a - b);
//    console.log( a * b);
//    console.log( a / b);
//    console.log( a ** b);
//    console.log( a++);
//    console.log( a++);
//    console.log( a++);
//    console.log( a --);
//    console.log( a --);
//    console.log( a --);





    // Assignment operators

    /*Assignment operators assign values to JavaScript variables.

        Operator	           Example	               Same As
        =	                   x = y	                 x = y
        +=	                   x += y	                 x = x + y
        -=	                   y -= x	                 y = y - x
        *=	                   x *= y	                 x = x * y
        /=	                   x /= y	                 x = x / y
        %=	                   x %= y	                 x = x % y
        **=	                   x **= y	                 x = x ** y



    */

        // console.log(a+=b); 
        
        // a= a + b;
        // console.log(a);



 

    /* Comparison operators
        4 == 10 -->false
        Operator        Description
        ==               equal to
        ===	             equal value and equal type
        !=               not equal
        >                greater than
        <	             less than
        >=	             greater than or equal to
        <=	             less than or equal to 
        ?	             ternary operator
    */

        let a =30;
        let b =40;
        // console.log(a < b);

        // if (a==b){
        //     console.log('yes');
        // }else{
        //     console.log('no');

        // }

        // a==b ? console.log('yessss') :console.log('nooooo');

        let name ={
            name :"kofi",
            age : 40

        }

        // console.log(name.name);




    
    // logical operators


    /*Exercise:
        Divide 10 by 2, and alert the result: 
        let ansewer = 10 / 2; 
        console.log(ansewer )
        alert(alert)
    
    
    */

        // let ansewer = 10 / 2; 
        // console.log(ansewer )
        // alert(alert)

    // Coding Challenge #1

    /*
    Mark and John are trying to compare their BMI (Body Mass Index),
     which is calculated using the formula: BMI = mass / height ** 2 
     or mass / (height * height). 
     (mass in kg and height in meter).

    1. Store Mark's and John's mass and   in variables
    2. Calculate both their BMIs using the formula (you can even implement both versions)
    3. Create a boolean variable 'markHigherBMI' containing information 
    about whether Mark has a higher BMI than John.

    TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
     John weights 92 kg and is 1.95 m tall.
    TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. 
    John weights 85 kg and is 1.76 m tall.

    GOOD LUCK 😀
    */

// solution 
//Marks variable
let MarksWeight=78;
let MarksHeight=1.69;

//johns variable
let johnsWeight=92;
let johnsHeight=1.88;

//formula for bmi
// BMI = mass / height ** 2  or mass / (height * height). 


//johns BMI 
let jonhsBMI = johnsWeight/johnsHeight**2;
// let jonhsBMI = johnsWeight/(johnsHeight*johnsHeight);
// console.log(jonhsBMI)

//johns BMI 
let MarksBMI = MarksWeight/MarksHeight**2;
// let MarksBMI = johnsWeight/(johnsHeight*johnsHeight);
// console.log(MarksBMI);
// end Operator
// let markHigherBMI = MarksBMI >jonhsBMI;
// console.log(markHigherBMI);


// console.log(`johns bmi is ${jonhsBMI}, marks bmi is ${MarksBMI},`);


//  
/*function 
        is a block of code which is desidned to perform 
        a specific task.
        function can only work(function) when it is being called 
        or
        What is a Function ?

A Function is a block of code that is designed to perform a task and executed when it is been called or invoked.
There are 3 ways of writing a function in JavaScript:

        Function Declaration
        Function Expression
        Arrow Function


        how to create a function syntax
        function func_name(){
            // what function is going to do ...
        }

        you can pass data into a function through a  the parameter
        and recieve data through argument 

*/ 
// function func_name(){
//     // what function is going to do ...
//     let a = 12;
//     let b = 30;
//     // let ansewer=;

//     return  a +b;
// }
// console.log(func_name());
  

// function calculat_exponent(unkwn1,unkwn2){
//     let a  = unkwn1;
//     let b  = unkwn2;
//     let result = a**b;
//     return result;
// }
// console.log(calculat_exponent(2,12))

// function diplay_class_members(name) {
//     return name;
// }

// Function Expression
// const diplay_class_members =function (name) {
//     return name;
// }


// Arrow Functions
// const diplay_class_members = (name) =>{
//     return name;
// }

// console.log(diplay_class_members("marley"));
// console.log(diplay_class_members("ama"));
// console.log(diplay_class_members("kojo"));
// console.log(diplay_class_members("yaw"));


// function add_two_numbers(){
//     a = 20;
//     b = 30;
//     c= a+b;
//     return c
    

// }

// const add_two_numbers = (a, b)=>{ return a+b;}

// console.log(add_two_numbers(20,30));

// object

// console.log(2022- 1957);

// function calculat_age(currentYear,yearBorn){
//     return currentYear- yearBorn;
// }

// const calculat_age =function (currentYear,yearBorn){
//     return currentYear- yearBorn;
// }


// const calculat_age = (currentYear,yearBorn)=>{
//    return currentYear- yearBorn}
// console.log(calculat_age(2019,1957));
// console.log(calculat_age(2022,1957));


// function declearation 
// function addition_calc(firstNumber=0,secondNumber=0){
//     return  firstNumber +secondNumber;
// }
// console.log(addition_calc());


// function expression 
// const addition_calc = function (firstNumber=0,secondNumber=0){
//     return  firstNumber +secondNumber;
// }
// console.log(addition_calc());

//  arrow function 

// const addition_calc = (firstNumber=0,secondNumber=0)=>firstNumber +secondNumber;
// console.log(addition_calc(100,200));



// objects
const phone ={
    //properties
    name:"Iphone 14",
    memory:'64gig',
    //methods
    calling: ()=> `${phone.name}  can be used for calling`,
    messaging:function(){
        return "the phone can be used for messaging";
    }
}
// console.log(phone.name);
// console.log(phone.calling());
// console.log(phone.messaging());


const car = {
    // properties
    name: "BMW",
    color:"red",
    model:2021,

    // methods
    info:function(){
        return `the name of my car is ${this.name} and it has a color of ${this.color} and it was made in the year ${this.model}`
    }
    
}

// console.log(car.name);
// console.log(car.info());

// car.size =4000;
// car.speed =function(){
//     return 'wesdrews'
// };

// console.log(car);

const jonasAccount = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    information: function () {
        return `welcome mr/mis ${this.owner} you have made this ${this.movements} transcations with ${this.interestRate} interest Rate your password is ${this.pin}`;
    }
};
// jonasAccount.username = 'js';
// jonasAccount.owner = 'sika kumi';



console.log(jonasAccount.information());
  