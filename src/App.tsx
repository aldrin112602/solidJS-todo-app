import { Component, ComponentProps, createSignal } from "solid-js";
import AddTodo from "./Components/AddTodo";
import DisplayTodo from "./Components/DisplayTodo";

const initialTodos: Todo[] = [
  {
    text: "Lorem ipsum dolor sit amet",
    id: Math.floor(Math.random() * 999999),
    edit: false,
    done: false,
  },
];

const App: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>(initialTodos);

  // add todos function
  const handleTodoAdd: ComponentProps<typeof AddTodo>["onTodoAdd"] = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        text,
        id: Math.floor(Math.random() * 999999),
        edit: false,
        done: false,
      },
    ]);
  };

  // TODO: need to implement
  const handleTodoUpdate: ComponentProps<typeof DisplayTodo>["onTodoUpdate"] = (
    id
  ) => setTodos((curr) => curr);

  // delete todo function
  const handleTodoDelete: ComponentProps<typeof DisplayTodo>["onTodoDelete"] = (
    id
  ) => {
    confirm("Are you sure to remove that item ?") &&
      setTodos((curr) => curr.filter((todo) => todo.id !== id));
  };

  // toggle todo's check
  const handleCheckToggle = (id: number) => {
    setTodos((curr) =>
      curr.map((todo) => {
        return todo.id == id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  return (
    <div class="p-3">
      <h2>Todo</h2>
      <AddTodo onTodoAdd={handleTodoAdd} />
      {/* display todos */}
      <DisplayTodo
        todos={todos()}
        onTodoUpdate={handleTodoUpdate}
        onTodoDelete={handleTodoDelete}
        onCheckToggle={handleCheckToggle}
      />
    </div>
  );
};

export default App;
