// TUPLES
// Similar to an array but ensure the data within is in a specific order:

let person: [string, number, boolean] = ['Matt', 44, true];

person[0] = 'MattyMoo'

console.log(person);

//Common Tuples:

// hue, saturation, luminance, alpha => common color 
let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [94.44, 44.44]

function useCoords(): [number, number] {
  const lat = 100
  const long = 50

  return [lat, long];
}

const [lat, long] = useCoords()


// Named Tuples:

let player: [name: string, age: number]

player = ['Matt', 44]
console.log(player[0])
