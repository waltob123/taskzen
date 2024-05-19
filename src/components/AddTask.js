const AddTask = () => {

  const tasksArray = [
    'Go to the gym.', 'Make a sandwich.', 'Read a book.', 
  ]

  const handleAddTask = (e) => {
    const task = document.getElementById('task-input');
    if (task.value === '') {
      alert('Task cannot be empty');
    } else {
      const taskList = document.querySelector('.task-list');
      const newTask = document.createElement('li');
      newTask.textContent = task.value;
      newTask.classList.add('task-item');
      taskList.appendChild(newTask);
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
          (task) => <li className="task-item">{task}</li>
        )}
      </ul>
    </section>    
    </>
  );
}
 
export default AddTask;