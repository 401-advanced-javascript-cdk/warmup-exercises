// Array Methods
let arr = [1,2,3,4,5,6,7,8,9,10];

const forLoop = arr => {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const whileLoop = arr => {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter++]);
  }
}

const map = (arr, callback) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
}

const filter = (arr, filterFunc) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(filterFunc(arr[i])) newArr[i] = arr[i];
  }
  return newArr;
}

const reduce = (arr, callback) => {
  let accumulator = 0;
  for(val of arr) {
    let result = callback(val);
    accumulator = accumulator + result;
  }
  return accumulator;
}

console.log(forLoop(arr));
console.log(whileLoop(arr));
map(arr, console.log);
filter(arr, (val) => val % 2 === 0);
reduce(arr, (val) => val + 7);
// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = { people: [...people], stuff: {...stuff} };

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: [...stuff.cars, 'Lincoln']};
let newState = { people: ['Odie', ...state.people, 'Garfield'], stuff: {...state.stuff, cars: [state.stuff.cars, 'Lincoln']} };

console.log(newPeople);
console.log(newStuff);
console.log(state);
console.log(newState);