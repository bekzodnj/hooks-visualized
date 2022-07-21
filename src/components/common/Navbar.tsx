import { Outlet, Link } from 'react-router-dom';
let activeStyle = {
  textDecoration: 'underline',
};
function Navbar() {
  return (
    <>
      <nav className='bg-bigblue text-white py-4 px-5 bold flex overflow-x-scroll space-x-5 text-xl'>
        <Link to='/state'>useState</Link>
        <Link to='/effect'>useEffect</Link>
        <Link to='/context'>useContext</Link>
        <Link to='/ref'>useRef</Link>
        <Link to='/reducer'>useReducer</Link>
        <button className=''>useMemo</button>
        <button className=''>useCallback</button>
        <button className=''>useLayoutEffect</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
