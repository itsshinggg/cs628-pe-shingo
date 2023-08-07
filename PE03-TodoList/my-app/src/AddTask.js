import React, {useState} from 'react';
import './App.css';
import './AddTask.css'
import './Buttons.css'

function AddTask({ taskDescriptions, setTaskDescriptions }) {
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskDescription.trim() !== '') {
            setTaskDescriptions([...taskDescriptions, taskDescription]);
            setTaskDescription('');
        }
        console.log('submitted!', taskDescription)
        };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className="rounded-box input-box" 
            placeholder='Enter task description'  
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}></input>
            <br></br>
            <button className="rounded-box submit-btn" type='submit'>Add Task</button>
        </form>
    </div>
  );
}

export default AddTask;