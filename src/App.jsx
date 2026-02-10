import { useEffect, useState } from "react";
import "./App.css";
import Hover from "./components/Hover";
import Responsive from "./components/Responsive";
import Sizing from "./components/sizing";
import { FiMoon, FiSun } from "react-icons/fi";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 transition-all duration-500">
      <nav className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-sm border-b border-neutral-200 dark:border-neutral-800">
        <button
          onClick={toggleDarkMode}
          className="p-2  cursor-pointer rounded-lg transition-colors"
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? (
            <FiSun size={20} className="text-yellow-500" />
          ) : (
            <FiMoon size={20} className="text-neutral-600" />
          )}
        </button>
      </nav>
      <Sizing />
      <Responsive/>
      <Hover />
    </div>
  );
}

export default App;
