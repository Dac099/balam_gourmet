import { NavLink, Link } from 'react-router-dom';
import { RiMenuFill } from "react-icons/ri";
import { useState } from 'react';
import { MobileMenu } from './mobileMenu';

export const NavBar = () => {
  const activeStyles = 'font-bold text-pink-600 text-lg';
  const linkStyle = 'text-sm';
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  }

  const openMenu = () => {
    setShowMenu(true);
  }

  return (
    <section className='fixed z-20 bg-violet-100/50 top-0 left-0 w-full px-3'>
      <nav
        className='flex items-center justify-between mb-2'
      >
        <Link
          to={'/'}
          className='text-2xl font-bold text-pink-600'
        >
          Balam Gourmet
        </Link>

        <RiMenuFill 
          className='hidden max-sm:block text-pink-600 text-xl'
          onClick={openMenu}
        />        

        <ul
          className='flex items-center gap-3 max-sm:hidden'
        >
          <li>
            <NavLink
              to={'/'}
              className={({isActive}) => isActive ? activeStyles : linkStyle}
            >
              Inicio
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to={'/contacto'}
              className={({isActive}) => isActive ? activeStyles : linkStyle}
            >
              Contacto
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to={'/productos'}
              className={({isActive}) => isActive ? activeStyles : linkStyle}
            >
              Productos
            </NavLink>
          </li>

        </ul>
      </nav>
      
      <hr />    

      <MobileMenu closeMenu={closeMenu} showMenu={showMenu}/>    
    </section>
  );
}

