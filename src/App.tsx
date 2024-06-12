import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 45, description: 'aaa', amount: 10, category: "Utilities" },
    { id: 55, description: 'bbb', amount: 20, category: "Utilities" },
    { id: 65, description: 'ccc', amount: 30, category: "Utilities" },
    { id: 75, description: 'ddd', amount: 30, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory 
  ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  if (expenses.length === 0) return null;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => { setSelectedCategory(category); }} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
