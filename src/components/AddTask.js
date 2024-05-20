import { useState } from 'react';

const AddTask = () => {

  const [tasksArray, setTasks] = useState([
    { id: 1, task: 'Go to the gym.' },
    { id: 2, task: 'Buy groceries.' },
    { id: 3, task: 'Clean the house.' }
  ]);

  const handleAddTask = (e) => {
    const task = document.getElementById('task-input');
    if (task.value === '') {
      alert('Task cannot be empty');
    } else {
      const newTask = { id: tasksArray.length + 1, task: task.value };
      setTasks([...tasksArray, newTask])
      task.value = '';
    }
  }

  return (
    <>
    <section className="add-task">
      <input type="text" name="task" id="task-input" className="form-input" />
      <button className="btn btn-submit" onClick={(e) => handleAddTask(e)}>Add Task</button>
    </section>
    <section className="tasks">
      <h2>Tasks</h2>
      <ul className="task-list">
          {tasksArray.map(
          (task) => <li className="task-item" key={task.id}>{task.task}</li>
        )}
      </ul>
    </section>    
    </>
  );
}
 
export default AddTask;