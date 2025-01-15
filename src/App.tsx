import { useEffect } from "react";
import useUserSessionStore from "./stores/useUserSessionStore";
import LandingPage from "./pages/LandingPage";

function App() {
  const { name } = useUserSessionStore();

  useEffect(() => {}, []);

  return <div>{name ? <>HI, {name}</> : <LandingPage />}</div>;
}

export default App;
