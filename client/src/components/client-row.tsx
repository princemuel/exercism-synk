import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../mutations';
import { GET_CLIENTS, GET_PROJECTS } from '../queries';
import { IClient } from '../types';

type Props = {
  client: IClient;
};

// , { id: IClient['id'] } <{clients: IClient[]}>
const ClientRow = ({ client }: Props) => {
  const [deleteClient] = useMutation<IClient>(DELETE_CLIENT, {
    variables: { id: client.id },
    // wipes out the client and its projects and then updates the ui
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // update(cache, { data: { deleteClient } }) {
    //   //@ts-expect-error
    //   const { clients } = cache.readQuery({
    //     query: GET_CLIENTS,
    //   });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       //@ts-expect-error
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className='btn btn-sm btn-danger'
          onClick={() => deleteClient()}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export { ClientRow };
