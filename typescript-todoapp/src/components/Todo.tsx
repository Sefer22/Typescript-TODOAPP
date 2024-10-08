import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
import { DiVim } from 'react-icons/di';

interface TodoProps {
  todoProps:TodoType
}

function Todo({todoProps} :TodoProps) {
  const {id,content} = todoProps;

  const dispatch = useDispatch();

  const [editable,setEditable] = useState<boolean>(false);
  const [newTodo,setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () =>{
    dispatch(removeTodoById(id));
  }

  const handleUpdateTodo = () =>{
    const payload :TodoType= {
      id:id,
      content:newTodo
    }
    dispatch(updateTodo(payload));
    setEditable(false);
  }

  return (
   <div style={{display:'flex',flexDirection:'row'
   ,alignItems:'center',justifyContent:'space-between',
   border:'1px solid lightgrey',padding:'16px',marginTop:'25px',
   borderRadius:'5px'}}>

     <div> 
      {editable ? <input type='text' style={{width:'400px',border:'none',
      borderBottom:'1px solid lightgrey',outline:'none'}} value={newTodo} 
      onChange={(e:React.ChangeEvent<HTMLInputElement>) =>
        setNewTodo(e.target.value)
      }/> : <div>{content}</div>}
      
    </div>
    <div style={{display:'flex',flexDirection:'row'
   ,alignItems:'center',justifyContent:'center'}}>
        <div onClick={handleRemoveTodo} style={{marginRight:'5px'}} className='icons'><IoMdRemoveCircleOutline /></div>
        {editable ? <button className='icons' onClick={handleUpdateTodo}><FaCheck/></button> :  <button onClick={()=> setEditable(true)} className='icons'><FaEdit/></button>}
    </div>
   </div>
  )
}

export default Todo
