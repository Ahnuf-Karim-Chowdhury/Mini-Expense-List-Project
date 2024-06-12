import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 45, description: 'aaa', amount: 10, category: "Utilities" },
    { id: 55, description: 'bbb', amount: 20, category: "Utilities" },
    { id: 65, description: 'ccc', amount: 30, category: "Utilities" },
    { id: 75, description: 'ddd', amount: 30, category: "Utilities" },
  ]);
  if(expenses.length===0) return null;
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
