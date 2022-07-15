import { useTodos } from "../hooks";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, HandNewTodo } = useTodos();

    return (
        <>
            <h1>TodoApp { todosCount }, <small>pendientes: { pendingTodosCount }</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr/>
                    <TodoAdd onNewTodo={ HandNewTodo } />
                </div>
            </div>

        </>
    )
}
