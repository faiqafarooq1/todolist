import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

function TodoListcompo({ data, checked, handleDelete, onHandleCheckedTodo }) {
  return (
    <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-2 text-gray-900">
      <span className={checked ? "checkL" : "notcheckL"}>{data}</span>
      <div className="flex space-x-2">
        <button className="text-green-500 hover:text-green-600" onClick={onHandleCheckedTodo}>
          <FaCheck />
        </button>
        <button className="text-red-500 hover:text-red-600" onClick={handleDelete}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}

export default TodoListcompo;
