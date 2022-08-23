import { AddClient, Clients, Projects } from '../components';
import { AddProject } from '../components/add-project';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className='flex gap-3 mb-4'>
        <AddClient />
        <AddProject />
      </div>

      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export { Home };
