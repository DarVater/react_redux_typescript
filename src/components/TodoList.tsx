import React from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC= () => {
    const {page, todos ,error,limit,loading} = useTypedSelector(state => state.todo)
    const {fetchUsers} = useActions()

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (loading) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title} </div>
            )}
        </div>
    );
};

export default TodoList;