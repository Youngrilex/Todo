import React from "react";
import AddTask from "./AddTask";
import WeatherTracker from "./WeatherTracker";
import DailyQuote from "./DailyQuote";
import Navbar from "./Navbar";
import ExpenseTracker from "./ExpenseTracker";

const TodoApp: React.FC = () => {
  return (
    <div className="bg-light-gradient dark:bg-dark-gradient min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-12 mt-24 flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="flex-1 relative z-10 ">
          <WeatherTracker />
        </div>
        <div className="flex-1 h-full relative z-10">
          <DailyQuote />
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
        <section className="w-[90%] sm:w-[90%] md:w-1/2 lg:w-1/2 bg-white relative z-10 mx-6 dark:bg-gray-800 p-6 lg:p-12 shadow-lg rounded-lg lg:mx-12 mt-6 lg:mt-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center dark:text-white">
            Budget Overview
          </h2>
          <ExpenseTracker />
        </section>

        <section className="w-full sm:w-full md:w-1/2 lg:w-1/2 p-6 lg:p-12 mt-6 lg:mt-12">
          <AddTask />
        </section>
      </div>

      {/* Background Image */}
      <img
        src="/todo.png"
        alt="Background"
        className="hidden sm:block absolute top-32 sm:top-16 left-8 sm:left-12 w-[150px] h-[175px] sm:w-[300px] sm:h-[350px] lg:w-[450px] lg:h-[525px] z-0 opacity-50"
      />
    </div>
  );
};

export default TodoApp;

{
  /* <Routes>
        <Route path="/weather" element={<WeatherTracker />} />
        <Route path="/quote" element={<DailyQuote />} />
        <Route path="/tasks" element={<AddTask />} />
      </Routes> */
}
