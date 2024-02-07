import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Sidebar from "./components/layout/sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;
