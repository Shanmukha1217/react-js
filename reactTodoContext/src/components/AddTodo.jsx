import { useState } from "react";
import { useTodo } from "../contexts";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form
      onSubmit={add}
      className="flex items-center gap-5 w-screen justify-center p-10"
    >
      <input
        type="text"
        placeholder="Enter todo....."
        className="outline outline-red-300 rounded-sm w-1/4 px-2 py-1"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="bg-green-600 text-white font-bold px-4 py-1 outline outline-white rounded-sm hover:bg-green-800"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
