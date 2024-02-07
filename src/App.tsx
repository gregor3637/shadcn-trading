import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}

export default App;
