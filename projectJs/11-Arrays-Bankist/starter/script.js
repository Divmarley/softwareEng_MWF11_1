'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data


const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111, 
  username :'js'
 
};
 
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

function generate_username(allaccount){
  allaccount.forEach(function(account){
    account.username = account.owner.toLowerCase().split(' ').map((val)=>val[0]).join('');
  });
 
}
 
generate_username(accounts);

// console.log(accounts)
 









// const mygenUsername =account1.owner.toLowerCase().split(' ').map((val)=>val[0]).join('');
// account1.username =mygenUsername;
// console.log(account1);


// console.log(account1);

// account1.email ="@mainkdfnxdfckm.com"
// // account1.owner ="sika kofi"

// // account1.owner
// const usernameArray =[];
// const trying =account1["owner"].split(' ')
// for (let i = 0; i < trying.length; i++) {
 
//   usernameArray.push(trying[i][0].toLowerCase())
// }

// // account1.push(usernameArray)
// let usernameuser =usernameArray.join('')
// account1.username=usernameuser
// console.log(account1);
// console.log();
 

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin'); 
 


// let theName =account1["owner"].split(' ')[0];
// titleWelcome.innerHTML =`Welcome back, ${theName}`; //good
// titleWelcome.innerHTML ="hello, " + name; //bad

// btnLogin.addEventListener('click',function(e){
//   e.preventDefault();
//   console.log("you made a click");
// });
let currentAccount;
btnLogin.addEventListener('click',(e)=>{
  e.preventDefault();
  // console.log(inputLoginUsername.value);
  console.log(typeof(Number(inputLoginPin.value)));

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)){
    labelWelcome.innerHTML =`welcome back,  ${currentAccount.owner.split(' ')[0].split(' ')[0]}`
    containerApp.style.opacity =100;
    inputLoginUsername.value=inputLoginPin.value='';

  //  console.log( currentAccount.movements);
    const mov =currentAccount.movements
    
    mov.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    }); 
    const mainBalance = currentAccount.movements.reduce((int,val)=>int+val)
    console.log(mainBalance);

    labelBalance.innerHTML =`${mainBalance}$`
  
  }



});



// document.getElementById('login__btn');

// document.getElementsByClassName('login__btn')
// document.getElementsByTagName('button')


// document.querySelector('#login__btn')
// document.querySelector('.login__btn')
// document.querySelector('button')


// console.log(10 === '10');


