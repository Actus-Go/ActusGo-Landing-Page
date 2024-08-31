import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Micros/button";
import unMiss from "../assets/images/5GridImages/unMiss.png";
import fastTrans from "../assets/images/5GridImages/fastTrans.png";
import CostEff from "../assets/images/3verticalCards/save.png";
import reliable from "../assets/images/3verticalCards/availability.png";
import advertising from "../assets/images/5GridImages/advertising.png";


const GridSection = () => {
  const { t, i18n } = useTranslation("landing");
  const isRTL = i18n.language === "ar";

  const cardsData = [
    {
      title: t("grid_section.cards.0.title"),
      text: t("grid_section.cards.0.text"),
      image: unMiss,
    },
    {
      title: t("grid_section.cards.1.title"),
      text: t("grid_section.cards.1.text"),
      image: fastTrans,
    },
    {
      title: t("grid_section.cards.2.title"),
      text: t("grid_section.cards.2.text"),
      image: advertising,
    },
    {
      title: t("grid_section.cards.3.title"),
      text: t("grid_section.cards.3.text"),
      image: CostEff,
    },
    {
      title: t("grid_section.cards.4.title"),
      text: t("grid_section.cards.4.text"),
      image: reliable,
    },
  ];

  return (
    <div
      className={`w-full px-4 flex flex-col min-h-screen max-w-[1400px] justify-center items-center gap-8 dark:text-white text-black ${isRTL ? "rtl" : ""}`}
      id="features"
    >
      <div className="container mx-auto flex flex-col gap-7 justify-center items-center text-center max-w-[800px] pt-5">
        {/* Heading Section */}
        <div
          className={`text-3xl max-w-[1000px] text-center md:text-4xl lg:text-5xl xl:text-6xl font-semibold dark:text-gray-300 `}
        >
          <h1 className="md:text-2xl grid place-items-center text-xl md:text-center text-start font-medium text-yellow-800 uppercase dark:text-yellow-400">
            {t("grid_section.head.badge")}
          </h1>
          <h1 className="text-center">
            {" "}
            {t("grid_section.head.title.text")}{" "}
            <span className="bg-gradient-to-r text-center from-yellow-700 to-blue-800 text-transparent bg-clip-text dark:from-yellow-500 dark:to-yellow-700">
              {" "}
              {t("grid_section.head.title.highlight")}{" "}
            </span>{" "}
            {t("grid_section.head.title.continue")}{" "}
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
      </div>

      <div className="container max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-4  md:gap-5">
        {cardsData.map(({ title, text, image }, index) => (
          <a
            href="#"
            key={index}
            className={`hover:scale-[1.03] cursor-pointer transition-all ${index <= 1 ? "col-span-2 lg:col-span-3" : "col-span-2"} overflow-hidden dark:bg-yellow-800/10 border-2 border-yellow-600/20 bg-yellow-100/60 rounded-3xl h-[375px] text-left flex flex-col justify-between`}
          >
            <div className="p-5 flex flex-col gap-1">
              <h1 className="text-2xl">{title}</h1>
              <p className="dark:text-white/50 text-black/50 text-[14px]">
                {text}
              </p>
            </div>
            <div className="w-full h-full relative">
              <img
                src={image}
                alt={title}
                className="absolute bottom-0 left-0 w-full h-full object-contain object-center"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="text-center grid mb-12 place-items-center gap-7 px-4">
        <h2 className="text-2xl capitalize md:text-4xl text-center font-semibold">
          {t("grid_section.cta_text_below")}
        </h2>

        <a href="/Pricing" className="h-16 w-64">
          <Button CTAtext={t("grid_section.button_text")} />
        </a>
      </div>
    </div>
  );
};

export default GridSection;
