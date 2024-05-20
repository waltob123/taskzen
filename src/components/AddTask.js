import { useState } from 'react';

const AddTask = ({ tasksArray, addNewTask }) => {

  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (e) => {
    if (taskInput.trim() === '') {
      alert('Task cannot be empty');
    } else {
      const newTask = { id: tasksArray.length + 1, task: taskInput.trim() };
      addNewTask(newTask);
      setTaskInput('');
    }
    console.log(tasksArray);
  }

  return (
    <>
    <section className="add-task">
        <input type="text" name="task" id="task-input" className="form-input"
        value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
      <button className="btn btn-submit" onClick={(e) => handleAddTask(e)}>Add Task</button>
    </section>
    </>
  );
}
 
export default AddTask;
