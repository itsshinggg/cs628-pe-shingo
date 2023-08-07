import React, {useState} from 'react';
import AddTask from './AddTask';
import Tasks from './Tasks';
import './App.css';

function App() {
  const [taskDescriptions, setTaskDescriptions] = useState([]);

  return (
    <div className="App">
      <h1>ToDo Lisst App</h1>
      <AddTask
        taskDescriptions={taskDescriptions}
        setTaskDescriptions={setTaskDescriptions}
      />
    <Tasks tasks={taskDescriptions}/>
    </div>
  );
}

export default App;
