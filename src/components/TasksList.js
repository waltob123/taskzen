import { Link } from "react-router-dom";

const TaskLists = ({ tasks, deleteTask }) => {
  return (
    <>
      <section className="tasks">
        <h2>Tasks</h2>
        <ul className="task-list">
          {tasks.map((task) => (
            <Link to={`/task/${task.id}`} className='d-block' key={task.id}>
              <li className="task-item flex j-between a-center" key={task.id}>
                {task.task}
                <button
                  className="btn btn-delete"
                  onClick={() => deleteTask(task)}
                >
                  Delete Task
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
};

export default TaskLists;
