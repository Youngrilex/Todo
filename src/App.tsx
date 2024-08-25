import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import AddTask from "./AddTask";


const TodoApp: React.FC = () => {
  return (
    <div className="body bg-light-gradient dark:bg-dark-gradient h-screen w-full">
      <div className="p-4 flex justify-end">
        <DarkModeToggle />
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-center dark:text-white">
        Todo List
      </h1>
      <AddTask />
      <img
        src="/src/assets/todo.png"
        alt="bg"
        className="absolute top-32 sm:top-16 left-8 sm:left-12 w-[150px] h-[175px] sm:w-[300px] sm:h-[350px] lg:w-[450px] lg:h-[525px] z-0"
      />
    </div>
  );
};

export default TodoApp;
