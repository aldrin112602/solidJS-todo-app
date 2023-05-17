import { Component, createSignal } from "solid-js";

const AddTodo: Component<{
  onTodoAdd: (text: string) => void;
}> = (props) => {
  const [todo, setTodo] = createSignal("");

  const handleSubmit: HTMLFormElement["onsubmit"] = (e) => {
    e.preventDefault();

    if (!todo().trim().length) return;

    props.onTodoAdd(todo());
    setTodo("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="d-flex align-items-center justify-content-between gap-1"
    >
      <input
        value={todo()}
        onChange={(e) => setTodo(e.currentTarget.value)}
        type="text"
        class="form-control"
      />
      <button class="btn btn-primary">Add</button>
    </form>
  );
};

export default AddTodo;
