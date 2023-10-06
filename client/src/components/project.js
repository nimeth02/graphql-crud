import { gql, useQuery, useMutation } from "@apollo/client";
import Spinner from "./spinner";

import { GET_PROJECTS } from "../mutation/projectsmutation";
import ProjectCard from "./projectCard";

const Project = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  // const [deleteClient]=useMutation(DELETE_CLIENT,{
  //   variables:{id:data.client.id},
  //   refetchQueries:[{query:GET_CLIENTS}]
  // })

  if (loading) {
    return <Spinner />;
  }
  if (error) return <p>Something went wrong</p>;
  console.log(data);

  return (
    <>
      {!loading && !error && (
        <>
          <div class="relative overflow-x-auto mx-40 grid grid-cols-2 gap-3 mt-2 mb-2">
            {
                data.projects.map((project)=>{
                    return <ProjectCard key={project.id} project={project}/>
                })
            }
         
          </div>
        </>
      )}
    </>
  );
};

export default Project;
