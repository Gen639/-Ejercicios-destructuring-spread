//1.  Ejercicios destructuring
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

console.log(empleados[1]);
console.log(empleados[0].email);

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
    primary: "Overgrow",
    hidden: "Chlorophyll",
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45,
  },
  moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

const { name: nombre, type, moves } = pokemon;
console.log(nombre);
console.log(type);
console.log(moves[1]);

//2. Ejercicios spread/rest
const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
    primary: "Static",
    hidden: "Lightning rod",
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90,
  },
  moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
};

const mergearObjetos = { ...pokemon, ...pikachu };
console.log(mergearObjetos);

function sumAllNumbers(...numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

console.log(sumAllNumbers(6, 8, 2, 3, 1));
console.log(sumAllNumbers(11, 3, 12));

function addOnlyNums(...arguments) {
  let count = 0;
  argumentsArray = Array.from(arguments);

  argumentsArray.forEach((element) => {
    if (typeof element === "number") {
      count += element;
    }
  });
  return count;
}
console.log(addOnlyNums(1, "perro", 2, 4));

function countTheArgs(...arguments) {
  argumentsArray = Array.from(arguments);
  return argumentsArray.length;
}
console.log(countTheArgs("gato", "perro"));
console.log(countTheArgs("gato", "perro", "pollo", "oso"));

function combineTwoArrays(a, b) {
  console.log([...a, ...b]);
}
combineTwoArrays([45, 10], [66, 77]);

//3. Extras
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const {
  yesterday,
  today: maximaHoy,
  tomorrow: maximaManana,
} = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

function onlyUniques(...elements) {
  console.log(elements);
  let uniqueValues = [];

  for (let i = 0; i < elements.length; i++) {
    let isUnique = true;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (elements[i] === uniqueValues[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique === true) {
      uniqueValues.push(elements[i]);
    }
  }

  return uniqueValues;
}
console.log(onlyUniques(2, 3, 4, 5, 5, 5, 3, 2, 5, 4));

function combineAllArrays(...arrays) {
  let mainArray = [];

  arrays.forEach((array) => {
    mainArray = [...mainArray, ...array];
  });
  return mainArray;
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(
  combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])
);

function sumAndSquare(...numbers) {
  let sumAndSquare = 0;
  numbers.forEach((number) => {
    sumAndSquare = sumAndSquare + number * number;
  });
  return sumAndSquare;
}

console.log(sumAndSquare(2, 3, 2));
