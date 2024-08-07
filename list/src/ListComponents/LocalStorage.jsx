export const getLocalStorage=()=>{

        const rawTodos=localStorage.getItem(todoskey);
        if(!rawTodos) return [];
        return JSON.parse(rawTodos);
};
const todoskey="reactTodo";
export const setLocalStorage=(tasks)=>{

    return  localStorage.setItem(todoskey,JSON.stringify(tasks));
};