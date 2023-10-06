import {gql,useQuery,useMutation} from '@apollo/client'
import Spinner from './spinner';
import { DELETE_CLIENT } from '../mutation/clientsmutation';
import ClientRow from './clientRow';

const GET_CLIENTS = gql `
  query getClients {
    clients {
      id
      name
      phone
   
    }
  }
`;

const Client = () => {

    

    const {loading,error,data}=useQuery(GET_CLIENTS)

    // const [deleteClient]=useMutation(DELETE_CLIENT,{
    //   variables:{id:data.client.id},
    //   refetchQueries:[{query:GET_CLIENTS}]
    // })

    if(loading) {return <Spinner/>}
    if(error) return <p>Something went wrong</p>
    console.log(data)

   
  return (
    <>{!loading && !error && (
      <>
      <div class="relative overflow-x-auto mx-40">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Client id
                </th>
                <th scope="col" class="px-6 py-3">
                Name
                </th>
                <th scope="col" class="px-6 py-3">
                   Phone 
                </th>
                <th scope="col" class="px-6 py-3">
                </th>
            </tr>
        </thead>
        <tbody>{data.clients.map((client)=>
        <ClientRow client={client} key={client.id}/>
        // <tr key={client.id}class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        //         <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        //             {client.id}
        //         </th>
        //         <td class="px-6 py-4">
        //         {client.name}
        //         </td>
        //         <td class="px-6 py-4">
        //         {client.phone}
        //         </td>
        //         <td class="px-6 py-4 ">
        //         <div className='flex w-16 py-1 items-center text-center justify-center text-white bg-red-600 rounded-md ' onClick={deleteClient} >
        //                    Delete
        //         </div>
        //         </td>
               
        // </tr> 
        )
          
        }
            
            
          
        </tbody>
    </table>
</div>
      </>
    )}</>
    
  )
}

export default Client