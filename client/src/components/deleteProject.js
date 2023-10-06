import { useMutation } from '@apollo/client';
import React from 'react'
import { DELETE_PROJECT } from '../mutation/projectsmutation';
import { useNavigate } from 'react-router-dom';

const DeleteProject = ({id}) => {
    const navigate=useNavigate()
    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: id },
        onCompleted:()=>navigate('/'),
        // refetchQueries: [{ query: DELETE_PROJECT }],
      });  
  return (
    <div className='flex w-16  h-8   items-center text-center justify-center text-white bg-red-600 rounded-md ' 
  onClick={deleteProject} 
  >
                           Delete
                </div>
  )
}

export default DeleteProject