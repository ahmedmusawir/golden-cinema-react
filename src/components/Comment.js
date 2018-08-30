import React, { Component } from 'react';

class Comment extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      todos: []
    };
  }

  componentDidMount = () => {
    localStorage.getItem('todosLocal') &&
      this.setState({
        todos: JSON.parse(localStorage.getItem('todosLocal'))
      });
  };

  handleChange(e) {
    if (e.key === 'Enter') {
      const todo = this.refs.todoItem.value;
      let todos = [];

      if (localStorage.getItem('todosLocal') == null) {
        todos.push({ name: todo });
        localStorage.setItem('todosLocal', JSON.stringify(todos));
      } else {
        todos = JSON.parse(localStorage.getItem('todosLocal'));
        todos.push({ name: todo });
        localStorage.setItem('todosLocal', JSON.stringify(todos));
      }
      e.target.value = '';

      this.setState({ todos: JSON.parse(localStorage.getItem('todosLocal')) });

      console.log(this.state.todos);
    }
  }

  handleRemove(i) {
    let newNames = this.state.todos;
    newNames.splice(i, 1);
    this.setState({ names: newNames });
    localStorage.setItem('todosLocal', JSON.stringify(this.state.todos));
  }

  render() {
    let tasks = this.state.todos.map((todo, i) => (
      <li
        className="list-group-item animated bounceInLeft text-dark mb-2"
        key={i}
      >
        {todo.name}

        <button
          className="float-right"
          onClick={this.handleRemove.bind(this, i)}
        >
          <i className="fa fa-trash text-danger" aria-hidden="true" />
        </button>
      </li>
    ));
    return (
      <div className="container">
        <textarea
          ref="todoItem"
          className="form-control"
          type="text"
          placeholder="Please Leave A Comment and Press Enter ... "
          value={this.state.newName}
          onKeyDown={this.handleChange.bind(this)}
        />

        <ul className="list-group">{tasks}</ul>
      </div>
    );
  }
}

export default Comment;
