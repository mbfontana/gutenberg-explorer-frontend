import { useEffect } from "react";
import useSessionStore from "./stores/useSessionStore";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";

function App() {
  const { name } = useSessionStore();

  useEffect(() => {}, []);

  return <div>{name ? <MainPage /> : <LandingPage />}</div>;
}

export default App;
