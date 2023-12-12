import React from "react";
import { useState } from "react";



export function NewTodoForm({onSubmit}) {
   
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    
        if (newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="md:w-[60%] w-[80%] transition-all"
        >
            <div className="flex flex-col">
                <label htmlFor="item" className="w-auto text-[18px] text-white">
                    New Item
                </label>
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                    className="h-8 p-2 rounded"
                />
            </div>
            <button className="w-full h-8 text-white bg-slate-700 border border-solid border-white rounded mt-2 hover:bg-slate-500 hover:rounded-lg transition-all">
                Add
            </button>
        </form>
    );
}


