import axios from "./utils/axios.customize";
import Header from "./components/layout/header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`);
      console.log(">>> check res ", res);
    };
    fetchHelloWorld();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
