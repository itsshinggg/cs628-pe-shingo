import {BrowserRouter, Link} from 'react-router-dom'
import AddCity from './AddCity';
import Nav from './Nav' 
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AddCity/>
    </div>
  );
}

export default App;
