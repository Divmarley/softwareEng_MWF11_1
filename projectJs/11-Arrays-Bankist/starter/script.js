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
  username: 'js',
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

function generate_username(allaccount) {
  allaccount.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  });
}
generate_username(accounts);

let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  // console.log(inputLoginUsername.value);
  // console.log(typeof(Number(inputLoginPin.value)));

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.innerHTML = `welcome back,  ${
      currentAccount.owner.split(' ')[0].split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';

    //  console.log( currentAccount.movements);
    const mov = currentAccount.movements;
    DisplayMovements(mov);

    const mainBalance = mov.reduce((int, val) => int + val);

    labelBalance.innerHTML = `${mainBalance}$`;

    // display summary of withdrawal and deposit
    calcDisplaySummary(currentAccount);
  }
});

const DisplayMovements = function (mov) {
  containerMovements.innerHTML = '';
  mov.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (acc) {
  const deposit = currentAccount.movements
    .filter(mov => mov > 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  labelSumIn.innerHTML = deposit;

  const withdrawal = currentAccount.movements
    .filter(mov => mov < 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  labelSumOut.innerHTML = withdrawal;
};



// Transfer money
btnTransfer.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log('qwertu');

})