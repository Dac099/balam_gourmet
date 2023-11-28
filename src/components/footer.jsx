import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="sticky mt-10 bottom-0 left-0 bg-neutral-950 w-full h-24 border-t-2 border-dashed border-pink-400 flex justify-between p-2"
    >
      <section
        className="text-white text-xs"
      >
        <nav>
          <ul>
            <li className="mb-1">
              <Link to={'/privacidad'}>
                Politicas de privacidad
              </Link>
            </li>

            <li className="mb-1">
              <Link to={'/devoluciones'}>
                Politicas de devoluciones
              </Link>
            </li>

            <li className="mb-1">
              <Link to={'/envios'}>
                Información de envios
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section
        className="flex text-white text-2xl gap-4 items-end"
      >
        <Link to={'#'}>
          <FaFacebook />        
        </Link>

        <Link to={'#'}>        
          <FaInstagramSquare />
        </Link>

        <Link to={'#'}>        
          <FaTiktok />
        </Link>
      </section>

    </footer>
  );
}