import React from 'react'
import { useState} from 'react'

export default function Header({sendFromChild}) {

    const [taskInput, setTaskInput] = useState('');
    
    const handleInputChange = (e) => {
        setTaskInput(e.target.value);         
    }
    const addTasks = (e)=>{

        e.preventDefault();
        sendFromChild(taskInput);
        setTaskInput('')
    }

  return (
    <div>
        <form onSubmit={addTasks}>
            <input type="text" placeholder='Enter the Tasks list' value={taskInput} onChange={handleInputChange}/>
            <button type='submit' disabled={taskInput.length===0 ? true : false}>Add</button>
      </form>
    </div>
  )
}
