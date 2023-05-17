import { Component, For } from "solid-js";

const DisplayTodo: Component<{
  todos: Todo[];
  onTodoUpdate: (id: number) => void;
  onCheckToggle: (id: number) => void;
  onTodoDelete: (id: number) => void;
}> = (props) => {
  return (
    <div
      style="min-height: 300px; max-height: 600px;"
      class="p-2 bg-light overflow-auto"
    >
      <For each={props.todos}>
        {(todo) => {
          const { text, id, done } = todo;
          return (
            <div class="row my-2">
              <div class="col">
                <div class="form-check d-flex align-items-center justify-content-start gap-3">
                  <input
                    class="form-check-input p-2"
                    type="checkbox"
                    checked={done ? true : false}
                    onChange={() => props.onCheckToggle(id)}
                  />
                  <label
                    class={
                      "form-check-label fs-5 fw-semibold " +
                      (done
                        ? "text-decoration-line-through text-secondary"
                        : "")
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
                  onClick={() => props.onTodoDelete(id)}
                  class="btn btn-danger d-flex align-items-center justify-content-between"
                >
                  <span class="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default DisplayTodo;
