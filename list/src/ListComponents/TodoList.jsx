import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListcompo from "./TodoListcompo";
import DateTime from "./DateTime";
import {setLocalStorage,getLocalStorage} from "./LocalStorage";
function TodoList() {


  const [tasks, setTasks] = useState(getLocalStorage);

  const handleFormButton = (inputValue) => {
    if (!inputValue.content) return;

    const isTodoContentMatched = tasks.find(
      (curTask) => curTask.content === inputValue.content
    );
    if (isTodoContentMatched) return;

    setTasks((prevTasks) => [
      ...prevTasks,
      inputValue,
    ]);
  };
  setLocalStorage(tasks);
  const handleDelete = (content) => {
    const updatedTasks = tasks.filter((curTask) => curTask.content !== content);
    setTasks(updatedTasks);
  };

  const onHandleCheckedTodo = (content) => {
    const updatedTasks = tasks.map((curTask) =>
      curTask.content === content
        ? { ...curTask, checked: !curTask.checked }
        : curTask
    );
    setTasks(updatedTasks);
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <section className="p-6 rounded-lg shadow-lg max-w-md mx-auto bg-blue-100 m-6">
      <header className="text-center mb-4">
        <h1 className="text-black text-3xl font-bold">Todo List</h1>
        <DateTime />
      </header>
      <TodoForm onAddTodo={handleFormButton} />
      <section className="mt-4">
        <ul>
          {tasks.map((curTask) => (
            <TodoListcompo
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              handleDelete={() => handleDelete(curTask.content)}
              onHandleCheckedTodo={() => onHandleCheckedTodo(curTask.content)}
            />
          ))}
        </ul>
      </section>
      <div className="flex justify-center items-center">
        <button className="bg-red-500 text-center p-2 rounded-lg" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}

export default TodoList;
