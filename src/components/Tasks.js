import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskLists from "./TasksList";
import Loading from "./Loading";


const Tasks = () => {

  const [tasksArray, setTasks] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
          fetch('http://localhost:8000/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
      setIsPending(false);
     }, 2000);
  }, []);

  const addNewTask = (newTask) => {
    setTasks([...tasksArray, newTask]);
  }

  const deleteTask = (task) => {
    const filteredTasks = tasksArray.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  }

  return (
    <>
      <AddTask tasksArray={tasksArray} addNewTask={addNewTask} />
      { isPending && <Loading />}
      { tasksArray && <TaskLists tasks={tasksArray} deleteTask={deleteTask} /> }
    </>
  );
}
 
export default Tasks;