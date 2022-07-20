import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='bg-bigblue text-white py-4 px-5 bold flex overflow-x-scroll space-x-5 text-xl'>
        <Link to='/state'>
          <button className=''>useState</button>
        </Link>
        <Link to='/effect'>
          <button className=''>useEffect</button>
        </Link>
        <Link to='/context'>
          <button className=''>useContext</button>
        </Link>
        <Link to='/ref'>
          <button className=''>useRef</button>
        </Link>
        <button className=''>useReducer</button>
        <button className=''>useMemo</button>
        <button className=''>useCallback</button>
        <button className=''>useLayoutEffect</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
