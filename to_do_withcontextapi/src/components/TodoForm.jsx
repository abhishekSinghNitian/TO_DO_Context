import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const addTask = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
    toast.success("Todo added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <form onSubmit={addTask} className="flex justify-center gap-2 m-4 p-2">
      <input
        type="text"
        className="w-[518px] h-10 rounded-lg p-4 text-black outline-none border-none shrink-0"
        placeholder="Enter todo here"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <button
        className="w-[120px] h-10 rounded-lg text-xl bg-green-600 text-white shrink-0"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
