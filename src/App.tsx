import { useEffect } from "react";
import useUserSessionStore from "./stores/useUserSessionStore";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";

function App() {
  const { name } = useUserSessionStore();

  useEffect(() => {}, []);

  return <div>{name ? <MainPage /> : <LandingPage />}</div>;
}

export default App;
