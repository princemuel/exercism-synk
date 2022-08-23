import { FaExclamationTriangle } from 'react-icons/fa';

type Props = {};

const Missing = (props: Props) => {
  return (
    <div className='d-flex flex-column justify-content-conter align-items-center mt-5'>
      <FaExclamationTriangle className='text-danger' size={'3em'} />
    </div>
  );
};

export { Missing };
