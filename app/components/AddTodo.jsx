var React = require ('react');




var AddTodo = React.createClass ({
  handleSubmit: function(e){
    e.preventDefault();
    var todoText= this.refs.todoText.value;

    if (todoText.length > 0){
      console.log("ok");
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText);
    } else {
      console.log("ko");
      this.refs.todoText.focus();
    }
  },
  render: function (){
    return (
      <div>
        <form className= "form" onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Search your Items"></input>
          <button className= "button expanded">AddTodo</button>
        </form>
      </div>
    )
  }
});
 module.exports = AddTodo;
