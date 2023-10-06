import { FaTrash } from 'react-icons/fa';
import { useMutation ,gql} from '@apollo/client';
import { DELETE_CLIENT } from '../mutation/clientsmutation';

const GET_CLIENTS = gql `
  query getClients {
    clients {
      id
      name
      phone
   
    }
  }
`;

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }],
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });

  return (
     <tr key={client.id}class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {client.id}
                </th>
                <td class="px-6 py-4">
                {client.name}
                </td>
                <td class="px-6 py-4">
                {client.phone}
                </td>
                <td class="px-6 py-4 ">
                <div className='flex w-16 py-1 items-center text-center justify-center text-white bg-red-600 rounded-md ' onClick={deleteClient} >
                           Delete
                </div>
                </td>
               
        </tr>
  );
}