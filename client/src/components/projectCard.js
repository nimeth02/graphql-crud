import React from 'react'

const ProjectCard = ({project}) => {
    console.log(project)
  return (
    <div> <div
    className="block rounded-lg bg-white p-6 bg-slate-300">
    <h5
      className="mb-2 text-xl font-medium ">
      {project.name && project.name}
    </h5>
    <p className="mb-4 text-base ">
      {project.description}
    </p>
    <div className='font-bold'>{project.status}</div>
      
    <a href={`/project/${project.id}`}> <div className='text-slate-400 flex justify-end mt-1'>view</div></a>
  </div>
  </div>
  )
}

export default ProjectCard