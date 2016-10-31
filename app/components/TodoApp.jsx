var React = require ('react');
var TodoList = require ('TodoList');
var AddTodo = require ('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function (){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id:2,
          text: 'Clean the yard'
        },
        {
          id:3,
          text: 'testo di prova 3'
        },
        {
          id:4,
          text: 'testo di prova 4'
        }

      ]
    };
  },
  handleAddTodo: function(text) {
    alert('now todo: ' + text);
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div className= "container">
        <div className= "title">Segue la lista di Alba:</div>
        <AddTodo onAddTodo= {this.handleAddTodo}/>
       <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
