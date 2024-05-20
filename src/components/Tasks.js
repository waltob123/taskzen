import { useState } from "react";
import AddTask from "./AddTask";
import TaskLists from "./TasksList";


const Tasks = () => {

  const tasks = [
    { id: 1, task: 'Go to the gym.' },
    { id: 2, task: 'Buy groceries.' },
    { id: 3, task: 'Clean the house.' }
  ];

   const [tasksArray, setTasks] = useState(tasks);

  const addNewTask = (newTask) => {
    setTasks([...tasksArray, newTask]);
  }

  const deleteTask = (task) => {
    const filteredTasks = tasksArray.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  }

  return (
    <>
      <AddTask tasksArray={tasks} addNewTask={addNewTask} />
      <TaskLists tasks={tasksArray} deleteTask={deleteTask} />
    </>
  );
}
 
export default Tasks;