import React from 'react'
import AddClientmodal from "./components/addClientmodal";
import AddProjectmodal from "./components/addProjectmodal";
import Client from "./components/client";
import Project from "./components/project";
function Home() {
  return (
    <>
    <div className="flex gap-0 mx-20">
      <AddClientmodal/>
      <AddProjectmodal/>
      </div>
      <Project />
      <Client />
      </>
  )
}

export default Home