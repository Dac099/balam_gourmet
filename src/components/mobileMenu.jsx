import { RiCloseCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export const MobileMenu = ({closeMenu, showMenu}) => {
  const linkStyle = 'block text-2xl mb-2 p-2';
  const activeLink = 'bg-white text-pink-600 rounded-md';
  const menuBaseStyle = 'absolute top-0 -left-full w-screen h-screen bg-pink-600 text-white p-4';
  const menuTransformStyle = showMenu ? 'translate-x-full' : '-translate-x-full';

  return (
    <article className={`${menuBaseStyle} ${menuTransformStyle} transition-transform duration-300 ease-in`}>
      <section
        className='flex items-center justify-between text-2xl'
      >
        <p className='text-center font-bold mb-2'>Balam Gourmet</p>
        <RiCloseCircleFill 
          className='text-zinc-950'
          onClick={closeMenu}
        />
      </section>

      <hr className='mb-4'/>

      <nav>
        <ul>
          <li>
            <NavLink
              to={'/'}
              className={({isActive}) => isActive ? `${linkStyle} ${activeLink}` : linkStyle}
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'contacto'}
              className={({isActive}) => isActive ? `${linkStyle} ${activeLink}` : linkStyle}
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'productos'}
              className={({isActive}) => isActive ? `${linkStyle} ${activeLink}` : linkStyle}
              onClick={closeMenu}
            >
              Productos
            </NavLink>
          </li>
        </ul>
      </nav>
    </article>
  );
}