import { TodoIten } from "./TodoIten"


export const TodoList = ({todoList,onDeleteTodo,onToogleTodo}) => {
  return (
        <ul className="list-group">
            {
                todoList.map( todo => (
                    <TodoIten 
                        key={todo.id} 
                        todo={todo} 
                        onDeleteTodo={onDeleteTodo}
                        onToogleTodo={onToogleTodo}
                        /
                        >
                ))
            }

        </ul>
  )
}
