import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {};

const Missing = (props: Props) => {
  return (
    <div className='d-flex flex-column justify-content-conter align-items-center mt-5'>
      <FaExclamationTriangle className='text-danger' size={'3em'} />
      <h1>404</h1>
      <p className='lead'>Sorry, this page does not exist</p>
      <Link to='/' className='btn btn-primary'>
        Go To Home
      </Link>
    </div>
  );
};

export { Missing };
