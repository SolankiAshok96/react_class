import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos:JSON.parse(localStorage.getItem("todos")) || [],
      value: "",
      editing: false,
      currentid: "",
      currentValue: "",
      search: "",
    };
  }

  


  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
//   onAddTask = (e) => {
//     e.preventDefault();

//     const obj = {
//       name: this.state.value,
//       id: Date.now(),
//     };
//     if (this.state.value !== "") {
//       this.setState({ todos: this.state.todos.concat(obj) });
//       this.setState({ value: "" });
//     }
//   };
onAddTask = (e) => {
    e.preventDefault();
  
    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      const newTodos = this.state.todos.concat(obj);
      this.setState({ todos: newTodos, value: "" });
   
      // Store the updated todos array in local storage
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };
  

//   onDeleteTask = (itemId) => {
//     this.setState({
//       todos: [...this.state.todos].filter((id) => id.id !== itemId),
//     });
//   };

onDeleteTask = (itemId) => {
    const newTodos = this.state.todos.filter((id) => id.id !== itemId);
    this.setState({ todos: newTodos });
  
    // Update local storage to remove the deleted task
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

//   onEditTodo = (id, newValue) => {
//     this.state.todos.map((todo) => {
//       if (todo.id === id) {
//         todo.name = newValue;
//       }
//     });
//   };

onEditTodo = (id, newValue) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: newValue };
      }
      return todo;
    });
  
    this.setState({ todos: updatedTodos, editing: false });
  
    // Store the updated todos array in local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };
  

  onSubmitEditTodo = (e) => {
    e.preventDefault();

    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  };

  onToggleEdit = (todo) => {
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const filteredTodos = this.state.todos.filter((todo) =>
    todo.name.toLowerCase().includes(this.state.search.toLowerCase())
  );

   const mylist = filteredTodos.map((todo) => (
     <li className="todo_item" key={todo.id}>
       {todo.name}
       <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
       <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
     </li>
   ));    





    return (
      <>
        <div className="App">
  
        <input className="search"
                type="text"
                placeholder="Search Tasks"
                value={this.state.search}
                onChange={this.handleSearchChange}
              />
    

          {this.state.editing === false ? (
            <form onSubmit={this.onAddTask}>
              <input className="input_add"
                placeholder="Type your task"
                value={this.state.value}
                onChange={this.onChange}
              />
              <button className="additem_btn" onClick={this.onAddTask}>Add Item</button>
            </form>
          ) : (
            <form onSubmit={this.onSubmitEditTodo}>
                <input
                 className="add_input"
                placeholder="edit your task"
                value={this.state.currentValue}
                name={this.state.currentValue}
                onChange={this.onEditInputChange}
              />
              <button onClick={this.onSubmitEditTodo}>Update Item</button>
            </form>
          )}

             <table>
               <tr>
                 <th className="heading">Task</th>
               </tr>
                 <tr>
                     <td>{mylist}</td>
                 </tr>
            </table>    
                         
        </div>
      </>
    );
  }
}
