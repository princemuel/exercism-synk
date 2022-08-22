import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries';
import { IClient } from '../types';
import { ClientRow } from './client-row';
import { Spinner } from './spinner';

type Props = {};

interface IClientData {
  clients: IClient[];
}

const Clients = (props: Props) => {
  const { loading, data, error } = useQuery<IClientData>(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong..</p>;

  return (
    <>
      <table className='table tabe-hover mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export { Clients };
