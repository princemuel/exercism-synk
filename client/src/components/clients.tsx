import { gql, useQuery } from '@apollo/client';
import { IClient } from '../types';

type Props = {};

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = (props: Props) => {
  const { loading, data, error } = useQuery<IClient[]>(GET_CLIENTS);

  if (loading) return <p>loading..</p>;
  if (error) return <p>something went wrong..</p>;

  return (
    <>
      <h1>Clients</h1>
    </>
  );
};

export { Clients };
