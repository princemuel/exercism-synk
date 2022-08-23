import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries';
import { IProject } from '../types';
import { ProjectCard } from './project-card';
import { Spinner } from './spinner';

interface IProjectData {
  projects: IProject[];
}

const Projects = () => {
  const { loading, data, error } = useQuery<IProjectData>(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong..</p>;
  return (
    <>
      {data && !!data.projects?.length ? (
        <div className='row mt-4'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export { Projects };
