import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
  todoProps:TodoType
}

function Todo({todoProps} :TodoProps) {
  const {id,content} = todoProps;

  const dispatch = useDispatch();

  const [editable,setEditable] = useState(false);

  const handleRemoveTodo = () =>{
    dispatch(removeTodoById(id));
  }

  return (
   <div style={{display:'flex',flexDirection:'row'
   ,alignItems:'center',justifyContent:'space-between',
   border:'1px solid lightgrey',padding:'16px',marginTop:'25px',
   borderRadius:'5px'}}>

     <div>
      {content}
    </div>
    <div style={{display:'flex',flexDirection:'row'
   ,alignItems:'center',justifyContent:'center'}}>
        <div onClick={handleRemoveTodo} style={{marginRight:'5px'}} className='icons'><IoMdRemoveCircleOutline /></div>
        <div className='icons'><FaEdit/></div>
    </div>
   </div>
  )
}

export default Todo
