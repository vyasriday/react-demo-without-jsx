class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Create a Todo App without JSX",
        },
        {
          id: 2,
          title: "Add State and Props to App",
        },
      ],
    };
  }

  render() {
    return this.state.todos.map((todo) => {
      return React.createElement(TodoItem, { ...todo });
    });
  }
}
