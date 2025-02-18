import './App.scss';
import {Login} from "./pages/login";
import {RoutesComponent} from "./routes";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function App() {

    const navigate = useNavigate();
    const isAuth = JSON.parse(localStorage.getItem("isAuth") || "false") as boolean;

    useEffect(() => {
        navigate('/');
    }, []);

  return (
      isAuth ? <RoutesComponent/>  : <Login/>
  );
}

export default App;
