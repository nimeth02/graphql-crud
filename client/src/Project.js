import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { GET_PROJECT,DELETE_PROJECT } from './mutation/projectsmutation';
import Spinner from './components/spinner';
import { useParams } from 'react-router-dom';
import DeleteProject from './components/deleteProject';
import EditProject from './components/editProject';


const Project = () => {
    const {id}=useParams()

    const { loading, error, data } = useQuery(GET_PROJECT,{
        variables:{id}
    });
   
   
   
    if (loading) {
        return <Spinner />;
      }
    if (error) {return <p>Something went wrong</p>};
      console.log(data);
      const{project}=data
    // const [deleteProject] = useMutation(DELETE_PROJECT, {
    //     variables: { id: project.id },
    //     refetchQueries: [{ query: DELETE_PROJECT }],
    //     // update(cache, { data: { deleteClient } }) {
    //     //   const { clients } = cache.readQuery({ query: DELETE_PROJECT });
    //     //   cache.writeQuery({
    //     //     query: DELETE_PROJECT,
    //     //     data: {
    //     //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     //     },
    //     //   });
    //     // },
    //   });  
      

  return (
    <div>
        <div
    className="block rounded-lg mx-40 mt-10  p-6 bg-yellow-500">
    <h5
      className="mb-2 text-xl font-medium ">
      {project.name && project.name}
    </h5>
    <p className="mb-4 text-base ">
      {project.description}
    </p>
    <div className='font-bold text-white'>{project.status}</div>
   <div className='mt-4 text-slate-600 ml-4'>  
   <div className='font-semibold text-black '>client info</div>
   <div>Sachin</div>
   <div>07065438</div>
   </div> 
   <div className='flex mt-4 justify-end items-end  '
  >
    <EditProject className='' project={project}/>
    <DeleteProject className='' id={project.id}/>     
                </div>
   
  </div>
  
    </div>
  )
}

export default Project