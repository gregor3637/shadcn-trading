import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";

function App() {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
