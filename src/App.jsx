import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./components/navbar";
import { Footer } from './components/footer';

export const App = () => {
  const location = useLocation();

  return (
    <main className="relative flex flex-col">
      <NavBar />

      <section className="">
        {location.pathname === '/'
          ? <Home />
          : <Outlet />
        }
      </section>

      <Footer />
    </main>
  );
}