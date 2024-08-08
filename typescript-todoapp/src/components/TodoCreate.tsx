import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo,setNewTodo] = useState<string>('');

  const handleCreateTodo =() =>{

  }

  return (

    <div className='todo-create'>
        <input 
        value={newTodo}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
        className='text' type="text" placeholder='Enter todo...' />
        <button onClick={handleCreateTodo}>Create</button>
    </div>
  )
}

export default TodoCreate
