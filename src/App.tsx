import { Component, createSignal } from "solid-js";
import AddTodo from "./Components/AddTodo";
import DisplayTodo from "./Components/DisplayTodo";

const App: Component = () => {
  const [todos, setTodos] = createSignal([
    {
      text: "Lorem ipsum dolor sit amet",
      id: Math.floor(Math.random() * 999999),
      done: false,
    },
  ]);

  // update todos function
  const updateTodo = (id: number) =>
    setTodos((curr) => curr.filter((todo) => todo.id != id));

  const toggleCheck = (id: number) => {
    setTodos((curr) =>
      curr.map((todo) => {
        return todo.id == id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };
  return (
    <div class="p-3">
      <h2>Todo</h2>
      <AddTodo setTodos={setTodos} />
      {/* display todos */}
      <DisplayTodo
        todos={todos()}
        updateTodo={updateTodo}
        toggleCheck={toggleCheck}
      />
    </div>
  );
};

export default App;
