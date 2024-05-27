import AddTask from "./AddTask";
import TaskLists from "./TasksList";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";

const Tasks = () => {

  const { data, setData, isPending, error } = useFetch('http://localhost:8000/tasks')


  const addNewTask = (newTask) => {
    setData([...data, newTask]);
  }

  const deleteTask = (task) => {
    const filteredTasks = data.filter((t) => t.id !== task.id);
    setData(filteredTasks);
  }

  return (
    <>
      <AddTask tasksArray={data} addNewTask={addNewTask} />
      { error && <div>{ error }</div> }
      { isPending && <Loading />}
      { data && <TaskLists tasks={data} deleteTask={deleteTask} /> }
    </>
  );
}
 
export default Tasks;