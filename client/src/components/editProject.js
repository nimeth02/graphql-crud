import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { UPDATE_PROJECT } from '../mutation/projectsmutation';

const EditProject = ({project}) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(project.name);
  const [description, setdescription] = useState(project.description);
  const [status, setstatus] = useState(project.status);

  const [updateProject]=useMutation(UPDATE_PROJECT,{
    variables:{ id:project.id,name, description, status}
  })

  const handleSubmit=()=>{
    setShowModal(false);
    console.log(name,status,description)
    if (name === '' || status === '' || description === '') {
        return alert('Please fill in all fields');
      }
      updateProject(name,description,status)
     

  }
  return (
    <div className=" mt-10 ">
    <button
      className="bg-pink-500  py-1 text-white  font-bold uppercase text-sm px-6   mx-20 rounded "
      type="button"
      onClick={() => setShowModal(true)}
    >
      Update Project
    </button>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Update Project</h3>
                <button
                  className="p-1 ml-auto bg-black border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-black text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto px-20 ">
                <div class="mb-3 pt-0 w-80 flex  ">
                  <input
                    type="text"
                    placeholder="Name"
                    class=" px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                   value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
                <div class="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                    onChange={(e)=>{setdescription(e.target.value)}}  
                  />
                </div>
                <div class="mb-3 pt-0">
                  <select
                    type="text"
                    placeholder="Phone"
                    class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                    onChange={(e)=>{setstatus(e.target.value)}}
                    value={status}
                  >
                    <option value=''>Select option</option>
                    <option value='new'>new</option>
                    <option value='progress'>in progress</option>
                    <option value='completed'>completed</option>
                    
                  </select>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => {handleSubmit()}}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </div>
  )
}

export default EditProject