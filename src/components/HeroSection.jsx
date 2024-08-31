import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Micros/button";
import ButtonLite from "./Micros/ButtonLite";
import { Link } from "react-router-dom";

export default function Hero_2() {
  const { t, i18n } = useTranslation("landing"); // Ensure the namespace is correct

  // Determine if the current language is RTL
  const isRTL = i18n.language === "ar";

  return (
    <div
      id="company"
      className={`min-h-screen py-6 md:py-12 text-center flex flex-col justify-center items-center bg-yellow-50/70 dark:bg-black ${
        isRTL ? "rtl" : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"} // Set direction attribute based on language
    >
      <div
        className={`px-4 text-center   flex flex-col justify-center  ${
          isRTL ? "text-right" : "text-left"
        }  max-w-[1000px] w-full`}
      >
        {/* News Section */}
        <div
          className={`p-2 flex flex-col items-center ${
            isRTL ? "text-right" : "text-left"
          } mb-8 md:mb-12`}
        >
          <a
            href={"#"}
            className={`flex flex-col items-center active:scale-95 duration-200 gap-1 text-md bg-yellow-400/10 shadow-gray-200/20 shadow-inner px-4 py-2 rounded-full min-w-[30px] dark:bg-yellow-400/20 dark:shadow-gray-700/20 ${
              isRTL ? "text-right" : "text-left"
            } w-full sm:w-auto`}
          >
            <span className={`dark:text-yellow-300 text-center font-bold `}>
              {t("hero_section.news_title")}
            </span>
            <span
              className={`dark:text-yellow-400/70 text-center text-black hover:underline duration-300 `}
            >
              {t("hero_section.news_content")}
            </span>
          </a>
        </div>

        {/* Heading Section */}
        <div
          className={`text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-semibold dark:text-gray-300 `}
        >
          <h1 className="text-center">
            {t("hero_section.hero_heading")}{" "}
            <span className="bg-gradient-to-r text-center from-yellow-700 to-blue-800 text-transparent bg-clip-text dark:from-yellow-500 dark:to-yellow-700">
              {t("hero_section.sub_heading_text")}
            </span>
          </h1>
          {/* Description Section */}
          <div className="text-center justify-center w-full  flex">
            <p
              className={`text-gray-800 py-5 text-center text-base md:text-lg max-w-2xl dark:text-gray-400 `}
            >
              {t("hero_section.description")}
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div
          className={`mt-8 flex flex-col gap-4 justify-center sm:flex-row sm:gap-8 items-center`}
        >
          <Link to="/Pricing">
            <div className="flex-grow min-w-[200px] w-full h-16 max-w-64">
              <Button
                color="gray"
                CTAtext={t("hero_section.cta")}
                className="w-full animate-pulse"
              />
            </div>
          </Link>
          <div className="flex-grow min-w-[200px]  h-16 max-w-64">
            <ButtonLite
              CTAtext={t("hero_section.button_lite_cta")}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
