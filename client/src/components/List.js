import React from 'react';
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import axios from 'axios';
import { baseURL } from '../utils/constant';

const List = ({id, task, updateMode, setUpdateUI}) => {
 
const removeTask = () => {
    axios.delete(`${baseURL}/remove/${id}`)
}  
    return (
        <li className="flex items-center justify-between py-2 border-b border-gray-300">
        <span className="text-lg">{task}</span>
        <div className="flex space-x-2">
          <BiEditAlt
            onClick={() => updateMode(id, task)}
            className="p-1 text-blue-500 hover:underline"
          />          
          <BsTrash
            onClick={removeTask}
            className="p-1 text-red-500 hover:underline"
          />
        </div>
      </li>
  )
}

export default List