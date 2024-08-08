import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';

interface TodoProps {
  todoProps:TodoType
}

function Todo({todoProps} :TodoProps) {
  const {id,content} = todoProps;
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
        <div style={{marginRight:'5px'}} className='icons'><IoMdRemoveCircleOutline/></div>
        <div className='icons'><FaCheck/></div>
    </div>
   </div>
  )
}

export default Todo
