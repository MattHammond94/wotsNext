console.log('hello world!!!!!');

// Custom types:
// Customs types are customised data types such as numbers, strings and booleans:
// Custom types are created using interfaces, classes and type-aliases

interface MenuItem {
  title: string,
  cost: number
}

function printMenuItem(item: MenuItem) {
  console.log(item.title, ':', item.cost)
}

printMenuItem({ title: 'Sarnie', cost: 25 });
