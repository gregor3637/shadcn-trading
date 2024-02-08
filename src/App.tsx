import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import Home from "./pages/home";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
