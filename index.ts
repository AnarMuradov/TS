let num: number;
let soz: string = "salam";
let isClicked: boolean = true;
const nums: readonly boolean[] = [true, false, true, true];
let ourtuple: readonly [number, boolean, string] = [1, true, "salam"];
let deyer: null;

const car: { type: string; model: string; year: number } = {
  type:"Toyota",
  model:"Corolla",
  year:2009
};

enum CardinalDirections {
    North,
    East,
    South,
    West
  }
  let currentDirection = CardinalDirections.North;
  console.log(currentDirection);
  currentDirection = "North"; 

  function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');