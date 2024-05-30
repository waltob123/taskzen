import AddTask from "./AddTask";
import TaskLists from "./TasksList";
import Loading from "./Loading";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

const Tasks = () => {
  const history = useHistory();
  const { data, setData, isPending, error } = useFetch(
    "http://localhost:8000/tasks"
  );

  const addNewTask = (newTask) => {
    setData([...data, newTask]);
  };

  const deleteTask = (task) => {
    // const filteredTasks = data.filter((t) => t.id !== task.id);
    // setData(filteredTasks);
    fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "DELETE",
    }).then((res) => {
      // setData(data.filter((t) => t.id !== task.id));
      console.log("Task deleted successfully!");
      history.push("/");
    });
  };

  return (
    <>
      <AddTask tasksArray={data} addNewTask={addNewTask} />
      {error && <div>{error}</div>}
      {isPending && <Loading />}
      {data && <TaskLists tasks={data} deleteTask={deleteTask} />}
    </>
  );
};

export default Tasks;
