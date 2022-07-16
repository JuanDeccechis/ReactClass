import { generateId } from "./helpers";

// Este es un una implementacion en memoria simulando un REST server

const fakeDatabase = {
  todos: [
    {
      id: generateId(),
      name: "hey",
      isComplete: true
    },
    {
      id: generateId(),
      name: "ho",
      isComplete: true
    },
    {
      id: generateId(),
      name: "let’s go",
      isComplete: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "active":
        return fakeDatabase.todos.filter(t => !t.isComplete);
      case "completed":
        return fakeDatabase.todos.filter(t => t.isComplete);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
