import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./components/navbar";
import { Footer } from './components/footer';

export const App = () => {
  const location = useLocation();

  return (
    <main className="bg-violet-100/50">
      <NavBar />

      <section>
        {location.pathname === '/'
          ? <Home />
          : <Outlet />
        }
      </section>

      <Footer />
    </main>
  );
}