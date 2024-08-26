import { useEffect, useState } from 'react';
import { FaPlusCircle, FaTag, FaTrashAlt } from 'react-icons/fa';


type Expense = {
    id: number;
    amount: string;
    description: string;
    category: string;
  };
  
  

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(), // Generate a unique ID
      amount,
      description,
      category,
    };
    setExpenses([...expenses, newExpense]);
    setAmount('');
    setDescription('');
    setCategory('');
  };
  

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const deleteExpense = (id: number) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };
  
  

const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  return (
    <div className="max-w-sm p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg  mx-auto">
    <h2 className="text-2xl font-bold mb-4">Document Your Expenses</h2>
    <div className="mb-4">    
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md w-full mb-2 dark:border-gray-600 dark:bg-gray-700"
      />
        <input 
        type="text" 
        placeholder="Amount" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        className="p-2 border border-gray-300 rounded-md w-full mb-2 dark:border-gray-600 dark:bg-gray-700"
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-full mb-2 dark:border-gray-600 dark:bg-gray-700"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </select>
      <button 
          onClick={handleAddExpense} 
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center justify-center"
        >
          <FaPlusCircle className="mr-2" />
          Add Expense
        </button>
    </div>
    <ul className="list-disc pl-5">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700">
           <span className="flex items-center">
              <FaTag className="mr-2" />
              {expense.description} - ₦{expense.amount} ({expense.category})
            </span>
            <button 
              onClick={() => deleteExpense(expense.id)} 
              className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <FaTrashAlt />
            </button>
        </li>
      ))}
    </ul>
    <p className="mt-4 text-lg font-semibold">Total Expenses: ₦{calculateTotal()}</p>
  </div>
  );
};

export default ExpenseTracker;
