import { FaTrash } from 'react-icons/fa';
import { IClient } from '../types';

type Props = {
  client: IClient;
};

const ClientRow = ({ client }: Props) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-sm btn-danger'>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export { ClientRow };
