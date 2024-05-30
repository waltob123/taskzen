import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddTask = ({ tasksArray, addNewTask }) => {

  const [taskInput, setTaskInput] = useState('');
  const history = useHistory();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') {
      alert('Task cannot be empty');
    } else {
      const newTask = { task: taskInput.trim() };
      // addNewTask(newTask);
      // console.log(newTask);
      fetch('http://localhost:8000/tasks', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
      }).then((res) => {
        // addNewTask(newTask);
        console.log('Added task successfully!');
        history.push('/');
      })
      setTaskInput('');
    }
  }

  return (
    <>
      <section className="add-task">
        <form action="" method="post"
        onSubmit={(e) => handleAddTask(e)}>
          <input type="text" name="task" id="task-input" className="form-input"
            value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <button className="btn btn-submit">Add Task</button>
        </form>
    </section>
    </>
  );
}
 
export default AddTask;
