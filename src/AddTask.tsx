import { useState } from 'react'
import { FiEdit, FiSave, FiTrash } from 'react-icons/fi';

interface Todo {
    id: string;
    value: string;
    isRemoving?: boolean;
  }

const AddTask = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [textInput, setTextInput] = useState<string>("");
    const [editTextInputId, setEditTextInputId] = useState<string | null>(null);
    const [editText, setEditText] = useState<string>("");
  
  
    // __define-ocg__
    const varEdit = (id: string, text: string) => {
      setEditTextInputId(id);
      setEditText(text);
    };
  
    const addTodo = () => {
      if (textInput.trim() === "") return;
      setTodos([...todos, { id: Date.now().toString(), value: textInput }]);
      setTextInput("");
    };
  
    const saveAfterEdit = (id: string) => {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, value: editText } : item
        )
      );
      setEditTextInputId(null);
      setEditText("");
    };
  
    const deleteTodo = (id: string) => {
      // Add an animation class to trigger fade-out
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isRemoving: true } : todo
      );
  
      setTodos(newTodos);
  
      // Delay removal to allow the animation to complete
      setTimeout(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      }, 500);
    };
  
  
  return (
<div>
<h1 className="text-3xl lg:text-5xl font-bold mb-4 text-center dark:text-white">
        Todo List
      </h1>
    <div className="bg-[url('/src/assets/bg.jpg')] bg-no-repeat bg-cover bg-center relative flex flex-col justify-center mt-8 w-[90%] h-[300px] min-w-3xl mx-auto p-6 bg-[#8494ff] dark:bg-[#b3c2f4] text-black dark:text-white rounded-lg shadow-md z-10">
    
    <input
      type="text"
      placeholder="Enter a new Todo"
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
      className="w-full p-2 mb-4 border-2 border-[#5b69c7] rounded text-black"
    />
    <button
      onClick={addTodo}
      className="w-full bg-[#5b69c7] text-white p-2 rounded mb-4 hover:bg-[#4854a3] transition-transform transform hover:scale-105 active:scale-95"
    >
      Add New Task
    </button>  
  </div>
  <div className="relative mt-12 z-20 mx-4 sm:mx-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-full">
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex flex-col bg-[#6b7fff] dark:bg-[#ced9ff] rounded-xl shadow-lg p-4 h-auto justify-between items-center border-b border-gray-200"
          >
            {editTextInputId === item.id ? (
              <div className="w-full flex gap-2 items-center">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full p-2 mb-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => saveAfterEdit(item.id)}
                  className="bg-[#ced9ff] dark:bg-[#6b7fff] text-[#6b7fff] flex gap-2 items-center dark:text-white px-4 py-2 rounded hover:bg-[#a0b2f5] animate-fade-in"
                >
                  <FiSave className="text-[#6b7fff] dark:text-white" />
                  Save
                </button>
              </div>
            ) : (
              <>
                <span className="text-lg text-center text-white dark:text-black">{item.value}</span>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => varEdit(item.id, item.value)}
                    className="bg-[#ced9ff] dark:bg-[#6b7fff] text-[#6b7fff] dark:text-white px-3 py-1 rounded-md border-2 border-white shadow-lg hover:text-blue-600 animate-fade-in flex gap-2 items-center"
                  >
                    <FiEdit className="text-[#6b7fff] dark:text-white" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(item.id)}
                    className={`todo-item flex gap-2 items-center text-white bg-red-500 rounded-lg border-2 px-3 py-1 border-white shadow-lg ${
                      item.isRemoving ? "animate-fade-out" : "animate-fade-in"
                    }`}
                  >
                    <FiTrash className="text-white" />
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  
  </div>
  )
}

export default AddTask