import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { NavBar } from "./components/navbar";

export const App = () => {
  const location = useLocation();

  return (
    <main className="p-3">
      <NavBar />

      {location.pathname === '/'
        ? <Home />
        : <Outlet />
      }
    </main>
  );
}