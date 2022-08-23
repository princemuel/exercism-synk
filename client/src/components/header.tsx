import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <nav className='navbar bg-light mb-4 p-0'>
        <div className='container d-flex'>
          <a href='/' className='navbar-brand'>
            <div className='d-flex'>
              <img src={logo} alt='logo' className='mr-2' />
              <div>Project MGMT</div>
            </div>
          </a>

          <div>
            <Link to='/projects' className='btn  btn-light'>
              Projects
            </Link>
            {/* <Link to="/clinets" >Projects</Link> */}
          </div>
        </div>
      </nav>

      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export { Header };
