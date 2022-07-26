import { Outlet, Link, NavLink } from 'react-router-dom';

let activeClassName = 'underline underline-offset-4';

function Navbar() {
  return (
    <>
      <nav className='bg-bigblue text-white py-4 px-5 bold flex overflow-x-scroll space-x-5 text-xl'>
        <NavLink
          to='/state'
          className={({ isActive }) => (isActive ? activeClassName : '')}
        >
          useState
        </NavLink>
        <NavLink
          to='/effect'
          className={({ isActive }) => (isActive ? activeClassName : '')}
        >
          useEffect
        </NavLink>
        <NavLink
          to='/context'
          className={({ isActive }) => (isActive ? activeClassName : '')}
        >
          useContext
        </NavLink>
        <NavLink
          to='/ref'
          className={({ isActive }) => (isActive ? activeClassName : '')}
        >
          useRef
        </NavLink>
        <NavLink
          to='/reducer'
          className={({ isActive }) => (isActive ? activeClassName : '')}
        >
          useReducer
        </NavLink>
        <NavLink
          to='/memo'
          className={({ isActive }) => (isActive ? activeClassName : '')}
        >
          useMemo
        </NavLink>
        <button className=''>useCallback</button>
        <button className=''>useLayoutEffect</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
