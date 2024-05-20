const TaskLists = ({ tasks, deleteTask }) => {

  return ( 
    <section className="tasks">
      <h2>Tasks</h2>
      <ul className="task-list">
          {tasks.map(
            (task) => <li className="task-item flex j-between a-center" key={task.id}>
              {task.task}
              <button className="btn btn-delete" onClick={ () => deleteTask(task) }>Delete Task</button>
            </li>
        )}
      </ul>
    </section>  
   );
}
 
export default TaskLists;