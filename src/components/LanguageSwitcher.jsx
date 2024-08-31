import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLanguage);
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
  };

  return (
    <div
      className={`mt-4 flex items-center ${i18n.language === "ar" ? "gap-2" : "gap-2"}`}
    >
      <span className="mr-2 text-gray-300 dark:text-gray-900">
      {i18n.language === "ar" ? "عربي" : "English"}
      </span>
      <button
        onClick={toggleLanguage}
        className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
          i18n.language === "ar" ? "dark:bg-yellow-600 bg-gray-700/40 " : "dark:bg-yellow-600 bg-gray-700/40"
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full  bg-yellow-400 dark:bg-black transition-transform duration-300 ${
            i18n.language === "ar" ? "translate-x-0" : "translate-x-6"
          }`}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
