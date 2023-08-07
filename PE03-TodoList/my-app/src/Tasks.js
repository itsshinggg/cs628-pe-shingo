import Card from "./Card";
import './App.css';
import "./Buttons.css"


function Tasks({tasks}) {
    return (
      <div>
        {tasks.map(task => <Card> <h3> {task}</h3> <button className="rounded-box delete-btn">Delete</button> </Card>)}
      </div>
    );
  }
  
  export default Tasks;