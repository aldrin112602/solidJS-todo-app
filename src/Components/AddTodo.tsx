import { createSignal } from "solid-js";

const AddTodo = (props: any) => {
  const [todo, setTodo] = createSignal("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    todo().trim().length &&
      props.setTodos((curr: any) => [
        ...curr,
        {
          text: todo(),
          id: Math.floor(Math.random() * 999999),
          done: false,
        },
      ]);

    setTodo("");
  };


  return (
    <form
      onSubmit={handleSubmit}
      class="d-flex align-items-center justify-content-between gap-1"
    >
      <input
        value={todo()}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        class="form-control"
      />
      <button class="btn btn-primary">Add</button>
    </form>
  );
};

export default AddTodo;
