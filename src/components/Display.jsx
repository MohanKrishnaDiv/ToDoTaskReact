import React from 'react'

export default function Display({tasks ,removeTasks}) {
    // console.log(props.showTasks,'tasklluu')
    // console.log(userData)
  return (
    <div>
        {tasks.map((task,index)=><li key={index}>{task}<button onClick={()=>removeTasks(index)}>remove</button></li>)}
    </div>
  )
}
