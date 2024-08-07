import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo({ id: Date.now(), content: inputValue, checked: false });
    setInputValue("");
  };

  return (
    <section>
      <form className="flex items-center" onSubmit={handleFormSubmit}>
        <div className="flex-grow mr-2">
          <input
            type="text"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Add a new task..."
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}

export default TodoForm;
