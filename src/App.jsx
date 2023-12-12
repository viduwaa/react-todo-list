import { useEffect, useState } from "react";
import "./index.css";
import { NewTodoForm } from "./component/NewTodoForm";
import { TodoList } from "./component/TodoList";

function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (localValue == null) return [];

        return JSON.parse(localValue);
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos));
    }, [todos]);

    function addTodo(title) {
        setTodos((currentTodos) => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ];
        });
    }

    function toggleTodo(id, completed) {
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }
                return todo;
            });
        });
    }

    function deleteTodo(id) {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id);
        });
    }

    return (
        <>
            <div className="flex flex-col items-center justify-start bg-slate-600 min-h-[80vh] p-5 md:w-[60%] ml-auto mr-auto mt-[5%] rounded-[20px] shadow-2xl">
                <NewTodoForm onSubmit={addTodo} />

                <div className="md:w-[60%] w-[80%] mt-2 transition-all">
                    <h1 className="text-left text-[25px] text-white ">
                        Todo List
                    </h1>
                    <TodoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
