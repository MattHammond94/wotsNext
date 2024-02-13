import { v4 as uuidv4 } from 'uuid';

type Todo = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

// console.log(uuidv4());
// console.log('Hello World');

// Using generics to specify what an element is when selected makes working with HTML elements much easier:

const list = document.querySelector<HTMLUListElement>('#list');
// const form = document.querySelector<HTMLFormElement>('#new-todo-form');
const input = document.querySelector<HTMLInputElement>('#new-todo-title');

// You can see below that as list has been defined as a UL List element it does not have access to .value whereas input does:
// list.value
// input.value

// =============
// Other selectors/functions will not be able to use a Generic syntax.
// getElementByID can be used with the as keyword to specify what type of element we should be getting when getting an element by Id:
const form = document.getElementById("new-todo-form") as HTMLFormElement | null

const todos: Todo[] = loadTodos();
todos.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return

  const newTodo: Todo = {
    id: uuidv4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  todos.push(newTodo)

  addListItem(newTodo)
  input.value = ""
});

function addListItem(task: Todo) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkBox = document.createElement("input")

  // Everytime a change takes place we save to LS.
  checkBox.addEventListener("change", () => {
    task.completed = checkBox.checked
    console.log("todos")

    saveTodos();
  })

  checkBox.type = "checkbox"
  checkBox.checked = task.completed
  label.append(checkBox, task.title)
  item.append(label)
  list?.append(item)
}

function saveTodos() {
  localStorage.setItem("TODOS", JSON.stringify(todos)); 
}

function loadTodos(): Todo[] {
  const todoJSON = localStorage.getItem("TODOS")
  if (todoJSON == null) return []
  return JSON.parse(todoJSON)
}