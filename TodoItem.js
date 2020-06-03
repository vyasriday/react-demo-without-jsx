const TodoItem = ({ id, title }) =>
  React.createElement(
    "div",
    { class: "todo-item" },
    React.createElement("h3", { class: "todo-title" }, `${title}`)
  );
