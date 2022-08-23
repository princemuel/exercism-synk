import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_PROJECT } from '../queries';
import { IProject } from '../types';
import { Spinner } from './spinner';

type Props = {};

interface ProjectData {
  project: IProject;
}

const Project = (props: Props) => {
  const { id } = useParams();
  const { loading, data, error } = useQuery<ProjectData>(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong..</p>;

  return (
    <>
      {data && (
        <article className='mx-auto w-75 card p-5'>
          <Link to={'/'} className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Back
          </Link>
          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className='mt-3'>Project Status</h5>
          <p className='lead'>{data.project.status}</p>

          {/* <ClientInfo client={data.project.client} /> */}
        </article>
      )}
    </>
  );
};
export { Project };
