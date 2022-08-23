import { Link } from 'react-router-dom';
import { capitalize } from '../helpers';
import { IProject } from '../types';

type Props = {
  project: IProject;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className='col-md-4'>
      <div className='card mb-3'>
        <div className='card-body'>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='card-title'>{project.name}</h5>
            <Link to={project.id}>View</Link>
            {/* <Link to={`projects/${project.id}`}>View</Link> */}
          </div>
          <p className='small'>
            Status: <strong>{capitalize(project.status)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
