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

  return (
    <div class="p-3">
      <h2>Todo</h2>
      <AddTodo setTodos={setTodos} />
      {/* display todos */}
      <DisplayTodo todos={todos()}/>
    </div>
  );
};

export default App;
