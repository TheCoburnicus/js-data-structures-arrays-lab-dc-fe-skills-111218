// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

let arr1 = [...arr2];

function appendDriver(name) {
  const copyOfDrivers = [...drivers, name];
  return copyOfDrivers;
}


function prependDriver(name) {
  const copyOfDrivers = [...drivers, name];
  return copyOfDrivers;
}