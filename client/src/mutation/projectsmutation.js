import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
  mutation addProject($name: String!, $description: String!, $status: ProjectStatus!,$clientId: ID!) {
    addProject(name: $name, description: $description, status: $status,clientId: $clientId) {
      name
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
      name
    }
  }
`;
const UPDATE_PROJECT = gql`
  mutation updateProject($id: ID!,$name: String!,$description: String!, $status: ProjectStatusUpdate!) {
    updateProject(id:$id,name: $name, description: $description, status: $status) {
      id
      name
      description
      status
    }
  }
`;
const GET_PROJECTS = gql `
  query getProjects {
    projects{
        name,
        id,
        status,
        description,
        clientId,
        client{
          name,
          phone
        }
      }
  }
`;
const GET_PROJECT = gql `
  query getProject($id:ID!) {
    project(id:$id){
        name,
        id,
        status,
        description,
        clientId,
        client{
          name,
          phone
        }
      }
  }
`;

export { GET_PROJECTS,GET_PROJECT,ADD_PROJECT,DELETE_PROJECT,UPDATE_PROJECT };