import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Header from './components/Header';

function App() {
  const [tasks,setTasks] = useState([])

  const getTasks = (data) =>{
    setTasks([...tasks,data])
  }
  const removeTasks=(index)=>{
    tasks.filter((task,i)=> index!==i
    )
    setTasks(removeTasks)
  }
  return (
    <div className="App">
      <br/>
      <center>
        <Header sendFromChild={getTasks}/>
        <Display  tasks={tasks} removeTasks={removeTasks}/>
      </center>
    </div>
  );
}

export default App;
