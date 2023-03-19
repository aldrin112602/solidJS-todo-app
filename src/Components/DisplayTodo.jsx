const DisplayTodo = (props) => {
  const deleteTodo = (id) => {
    if (confirm("Are you sure to remove that item ?")) {
      // delete
     props.updateTodo(id);
    }
  };
  

  return (
    <div
      style="min-height: 300px; max-height: 600px;"
      className="p-2 bg-light overflow-auto"
    >
      {props.todos.map((todo) => {
        const { text, id, done } = todo;
        return (
          <div className="row my-2" key={id}>
            <div className="col">
              <div className="form-check d-flex align-items-center justify-content-start gap-3">
                <input
                  className="form-check-input p-2"
                  type="checkbox"
                  checked={done ? true : false}
                />
                <label
                  className={
                    "form-check-label fs-5 fw-semibold " +
                    (done ? "text-decoration-line-through text-secondary" : "")
                  }
                >
                  {text}
                </label>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-end gap-2">
              <button className="btn btn-success d-flex align-items-center justify-content-between">
                <span className="material-symbols-outlined">edit_note</span>
              </button>
              <button
                onClick={() => deleteTodo(id)}
                className="btn btn-danger d-flex align-items-center justify-content-between"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
