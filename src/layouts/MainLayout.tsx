// React
import { useEffect, useState } from 'react'

// Routing
import { Outlet } from "react-router-dom";

// Components
import NavBar from "../components/NavBar/NavBar";
import LoadingPolilla from "../components/LoadingPolilla/LoadingPolilla";
import Overlay from '../components/Overlay/Overlay';

// Styles
import '../styles/App.css'

const MainLayout = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2500);

        return () => clearTimeout(timer);
    }, []);

  return (
    <>
      {loading ? (
        <LoadingPolilla loading={loading} />
      ) : (
        <>
            <NavBar />
            <main>
                <Overlay />
                <Outlet />
            </main>
        </>
        )}
    </>
  );
};

export default MainLayout;
