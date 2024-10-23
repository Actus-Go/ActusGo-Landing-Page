import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const DarkModeSwitcher = () => {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark mode class to the body or another root element
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`mt-4 flex items-center ${i18n.language === "ar" ? "gap-2" : "gap-2"}`}
    >
      <span className="mr-2 text-gray-300 dark:text-gray-900">
        {darkMode
          ? i18n.language === "ar"
            ? "داكن"
            : "Dark Mode"
          : i18n.language === "ar"
            ? "فاتح"
            : "Light Mode"}
      </span>
      <button
        onClick={toggleDarkMode}
        className={`w-12 h-6 rounded-full  p-1 transition-colors duration-300 focus:outline-none ${
          darkMode ? "bg-yellow-600  " : "bg-gray-700/40"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full  bg-yellow-400 dark:bg-black transition-transform duration-300 ${
            darkMode
              ? i18n.language === "ar"
                ? "translate-x-[-1.5rem]"
                : "translate-x-6"
              : i18n.language === "ar"
                ? "translate-x-0"
                : "translate-x-[0.1rem]"
          }`}
        />
      </button>
    </div>
  );
};

export default DarkModeSwitcher;
