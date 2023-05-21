import { deleteTodo, getAllTodos } from "@/utils/supabaseFunction";
import React from "react";

type Props = {
    todos: any;
    setTodos: React.Dispatch<any>;
}

const TodoList = (props: Props) => {

    const { todos, setTodos } = props;

    const handleDelete = async (id: number) => {
        await deleteTodo(id);

        let todos = await getAllTodos();
        setTodos(todos);
    }
    console.log(todos);


    return (
        <div>
            <ul className="mx-auto">
                {todos.length !== 0 ? (
                    <div>
                        {todos.map((todo: any) => (
                            <div key={todo.id} className="flex bg-orange-200 rounded-md mt-2 mb-2 p-2 justify-between">
                                <li>✅ {todo.title}</li>
                                <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>&otimes;</span>
                            </div>
                        ))}
                    </div>
                ) :
                    (
                        <div>No Data</div>
                    )}
            </ul>
        </div>
    );
};

export default TodoList;
