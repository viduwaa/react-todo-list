export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li className="bg-slate-500 p-2 flex items-center rounded-md mb-2">
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
                className="ml-2 mr-2 h-[20px] w-[20px] text-green-600 rounded focus:ring-0 border-0  focus:ring-red-600"
            />
            <label className="w-[80%] text-[20px] text-white ">{title}</label>

            <button
                onClick={() => deleteTodo(id)}
                className="bg-red-400 rounded-md w-[75px] p-1 hover:bg-red-600 hover:rounded-lg transition-all"
            >
                Delete
            </button>
        </li>
    );
}


