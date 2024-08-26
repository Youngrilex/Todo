import React from "react";
import AddTask from "./AddTask";
import WeatherTracker from "./WeatherTracker";
import DailyQuote from "./DailyQuote";
import Navbar from "./Navbar";

const TodoApp: React.FC = () => {
  return (
    <div className="body bg-light-gradient dark:bg-dark-gradient h-full w-full">
      <Navbar />
      {/* <Routes>
        <Route path="/weather" element={<WeatherTracker />} />
        <Route path="/quote" element={<DailyQuote />} />
        <Route path="/tasks" element={<AddTask />} />
      </Routes> */}
      <div className="relative z-10 p-4 pt-24 flex gap-4 flex-col sm:flex-col md:flex-row lg:flex-row justify-between">
        <WeatherTracker />
        <DailyQuote />
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-center dark:text-white">
        Todo List
      </h1>
      <AddTask />
      <img
        src="/todo.png"
        alt="bg"
        className="absolute top-32 sm:top-16 left-8 sm:left-12 w-[150px] h-[175px] sm:w-[300px] sm:h-[350px] lg:w-[450px] lg:h-[525px] z-0"
      />
    </div>
  );
};

export default TodoApp;
