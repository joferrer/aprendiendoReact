
import { useTodo } from "../Hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList"




export const TodoApp = () => {

    const {
        todos, 
        todosCounter , 
        pendingTodosCount , 
        handleNewTodo, 
        handleDeleteTodo , 
        handleToogleTodo   } = useTodo();

    


  return (
    <div>
        <h1>Todo App: {todosCounter} <span> Pendientes: {pendingTodosCount}</span></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todoList = {todos} 
                    onDeleteTodo ={handleDeleteTodo}
                    onToogleTodo={handleToogleTodo}
                    />
            </div>

            <div className="col-5">
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>

        </div>

    </div>
  )
}
