import React, { useState } from "react";
import { GET_CLIENTS } from "../mutation/clientsmutation";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../mutation/projectsmutation";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("new");
  const [clientId, setclientId] = useState("");

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status,clientId },
    // update(cache, { data: { addClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });

    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: [...clients, addClient] },
    //   });
    // },
  });

  console.log(data)

  const handleSubmit=()=>{
    setShowModal(false);
    console.log(name,status,description)
    if (name === '' || status === '' || description === '') {
        return alert('Please fill in all fields');
      }
  
      addProject(name, description, status,clientId);
  
      setName('');
      setdescription('');
      setstatus('');
      setclientId('');
  }
  return (
    <div className=" mt-10 ">
      <button
        className="bg-yellow-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 mt-10 mx-20 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Project
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Project</h3>
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
                      onChange={(e)=>{setName(e.target.value)}}
                    />
                  </div>
                  <div class="mb-3 pt-0">
                    <input
                      type="text"
                      placeholder="Description"
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
                  <div class="mb-3 pt-0">
                    <select
                      type="text"
                      placeholder="ClientId"
                      class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
                      onChange={(e)=>{setclientId(e.target.value)}}
                      value={clientId}
                    >
                      <option value=''>Select option</option>
                      {data.clients.map((client)=>{
                        return <option key={client.id} value={client.id}>{client.name}</option>
                      })}
                     
                      
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
  );
}
