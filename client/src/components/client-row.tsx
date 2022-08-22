import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../mutations';
import { GET_CLIENTS } from '../queries';
import { IClient } from '../types';

type Props = {
  client: IClient;
};

const ClientRow = ({ client }: Props) => {
  const [deleteClient] = useMutation<IClient, { id: IClient['id'] }>(
    DELETE_CLIENT,
    {
      variables: { id: client.id },
      // refetchQueries: [{ query: GET_CLIENTS }],
      update(cache, { data: { deleteClient } }) {
        const { clients } = cache.readQuery({ query: GET_CLIENTS });
        cache.writeQuery({
          query: GET_CLIENTS,
          data: {
            clients: clients.filter((client) => client.id !== deleteClient.id),
          },
        });
      },
    }
  );

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
