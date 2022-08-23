import { AddClient, Clients, Projects } from '../components';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className='flex gap-3 mb-4'>
        <AddClient />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export { Home };
