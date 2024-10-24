import React from "react";
import { useTranslation } from "react-i18next";
import { IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Announce() {
  const { t, i18n } = useTranslation("landing"); // Ensure the namespace is 'landing'

  // Determine if the current language is RTL
  const isRTL = i18n.language === "ar";

  const [showAnnounce, setShowAnnounce] = React.useState(true);

  React.useEffect(() => {
    const lastShownDate = localStorage.getItem("lastShownDate");
    if (lastShownDate) {
      const currentDate = new Date().getTime();
      const timeDifference = currentDate - parseInt(lastShownDate);
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      if (daysDifference < 7) {
        setShowAnnounce(false);
      }
    }
  }, []);

  const hideAnnounce = () => {
    setShowAnnounce(false);
    const currentDate = new Date().getTime();
    localStorage.setItem("lastShownDate", currentDate.toString());
  };

  return (
    <>
      {showAnnounce && (
        <div
          className={`fixed bottom-4 z-[1000] right-4 left-4 md:left-auto md:right-6 bg-gray-900 text-white p-4 rounded-md shadow-md flex items-center justify-between ${
            isRTL ? "rtl" : ""
          }`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="flex px-1 items-center space-x-4 w-full max-w-[1200px]">
            <span className="text-sm md:text-base font-semibold hidden md:block">
              {t("new_announce")}
            </span>
            <p className="text-sm px-1 md:text-base flex items-center flex-wrap md:flex-nowrap">
              <span>{t("cta_line_1")}</span>
              <Link
                to="/signup"
                className="text-yellow-400 px-1 hover:underline ml-1"
              >
                {t("cta_line_2")}
              </Link>
            </p>
          </div>
          <IconButton color="white" variant="text" onClick={hideAnnounce}>
            <XMarkIcon className="w-5 h-5" />
          </IconButton>
        </div>
      )}
    </>
  );
}

export default Announce;
