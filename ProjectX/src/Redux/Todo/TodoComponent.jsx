/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './todo';

export default function TodoComponent() {
    const [todo,setTodo] = useState();
    const [editIndex, setEditIndex] = useState(null);

    let dispatch = useDispatch();

    const handleSave=()=>{
        dispatch(addTodo(todo))
        setTodo("");
    }

    let data = useSelector((state)=>{
        return state.todokey.todo;
    })

    const deleteHandler=(index)=>{
        dispatch(deleteTodo(index));
    }
    const edithandler = (index) => {
        setTodo(data[index])
        setEditIndex(index)
    }

    const handlerUpdate=()=>
        {
            dispatch(updateTodo({index:editIndex,data:todo}));
            setEditIndex(null);
            setTodo('');
        }

  return (
    <div>
        <input type='text'      
            placeholder='Enter task'
            onChange={(e)=>setTodo(e.target.value)}
            value={todo}
            />

            {editIndex !== null ? <button onClick={handlerUpdate}>Update Task</button> : <button onClick={handleSave}>Save Task</button>}

        {data.map((value,index)=>{
            return <div key={index}>
                            <h1 >{value}</h1>
                            <button onClick={()=>deleteHandler(index)}>Delete</button>
                            <button onClick={() => edithandler(index)}>Edit</button>

                </div>
        })}
    </div>
  )
}
