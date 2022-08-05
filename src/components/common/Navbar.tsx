import { Outlet, Link, NavLink } from 'react-router-dom';

let activeClassName = 'border-b-yellow-600 border-b-4 py-3';

function Navbar() {
  return (
    <>
      <nav className='px-4 bg-bluerose text-white bold flex overflow-x-scroll space-x-5 text-xl '>
        <NavLink
          to='/state'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useState
        </NavLink>
        <NavLink
          to='/effect'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useEffect
        </NavLink>
        <NavLink
          to='/context'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useContext
        </NavLink>
        <NavLink
          to='/ref'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useRef
        </NavLink>
        <NavLink
          to='/reducer'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useReducer
        </NavLink>
        <NavLink
          to='/memo'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useMemo
        </NavLink>
        <NavLink
          to='/callback'
          className={({ isActive }) => (isActive ? activeClassName : 'py-3')}
        >
          useCallback
        </NavLink>
        <button className='border-b-yellow-600'>useLayoutEffect</button>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
