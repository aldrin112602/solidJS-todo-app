const DisplayTodo = (props: any) => {
  const deleteTodo = (id: number) => {
    confirm("Are you sure to remove that item ?") && props.updateTodo(id);
  };
  

  return (
    <div
      style="min-height: 300px; max-height: 600px;"
      class="p-2 bg-light overflow-auto"
    >
      {props.todos.map((todo: any) => {
        const { text, id, done } = todo;
        return (
          <div class="row my-2">
            <div class="col">
              <div class="form-check d-flex align-items-center justify-content-start gap-3">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  checked={done ? true : false}
                  onChange={() => props.toggleCheck(id)}
                />
                <label
                  class={
                    "form-check-label fs-5 fw-semibold " +
                    (done ? "text-decoration-line-through text-secondary" : "")
                  }
                >
                  {text}
                </label>
              </div>
            </div>
            <div class="col d-flex align-items-center justify-content-end gap-2">
              <button class="btn btn-success d-flex align-items-center justify-content-between">
                <span class="material-symbols-outlined">edit_note</span>
              </button>
              <button
                onClick={() => deleteTodo(id)}
                class="btn btn-danger d-flex align-items-center justify-content-between"
              >
                <span class="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
