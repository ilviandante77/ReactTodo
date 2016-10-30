var React = require ('react');
var Todo = require ('Todo');

var TodoList = React.createClass ({
  render: function (){
    var {todos} = this.props;
    var renderTodos = ((todos) => {
      return todos.map( (todo)=>{
        return
        <Todo key={todo.id}/>
      });
    });
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.export = TodoList;
