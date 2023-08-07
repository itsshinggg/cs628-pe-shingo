import Card from "./Card";
import './App.css';
import "./Buttons.css"


function Tasks({tasks, onDelete}) {
    return (
      <div>
        {tasks.map((task, index) => <Card key={index}> <h3> {task}</h3> <button className="rounded-box delete-btn" onClick={() => {onDelete()}}>Delete</button> </Card>)}
      </div>
    );
  }
  
  export default Tasks;