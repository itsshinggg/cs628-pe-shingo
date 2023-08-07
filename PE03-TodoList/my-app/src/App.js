import React, {useState} from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';
import './App.css';

function App() {
  const [taskDescriptions, setTaskDescriptions] = useState([]);

  const handleDelete = (index) => {
    const updatedTasks = [...taskDescriptions];
    updatedTasks.splice(index, 1);
    setTaskDescriptions(updatedTasks);
  };

  return (
    <div className="App">
      <h1>ToDo Lisst App</h1>
      <AddTask
        taskDescriptions={taskDescriptions}
        setTaskDescriptions={setTaskDescriptions}
      />
    <Tasks tasks={taskDescriptions} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
