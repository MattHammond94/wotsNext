// TYPE ALIASES:

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return [r, g, b];
}

console.log(getRandomColor());


// Types as object literals:

type User = {
  name: string,
  score: number
}

const userOne: User = { name: 'mario', score: 75 }

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(userOne);
formatUser({ name: 'Peach', score: 100 });
