import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/HeroSection";
import CardsVerticalReel from "../components/CardsVerticalReel";
import ProcessSteps from "../components/ProcessSteps";
import GridFiveSections from "../components/GridFiveSections";
import arrowl from "../assets/images/arrow.png";
import arrowr from "../assets/images/arrowr.png";
import Header from "../components/Header";
import BusinessProfitable from "../components/BusinessProfitable";
import Challenges from "../components/Challenges";

export default function App() {
  const { t, i18n } = useTranslation("landing"); // Ensure the namespace is correct

  // const heroObj = {
  //   News: {
  //     id: 3,
  //     date: "2020-01-01",
  //     content: t("hero_section.news_content"),
  //     link: "#",
  //   },
  //   hero_heading: t("hero_section.hero_heading"),
  //   sub_heading_text: t("hero_section.sub_heading_text"),
  //   hero_highlighted_text: t("hero_section.hero_highlighted_text"),
  //   description: t("hero_section.description"),
  // };

  return (
    <div className="min-h-screen dark:bg-black bg-[#fafafc] m-auto flex justify-center flex-col">
      <Hero />

      <div className="flex justify-center m-auto">
        <Challenges />
      </div>
      <div className="flex justify-center m-auto">
        <CardsVerticalReel />
      </div>

      <div className="flex justify-center m-auto">
        <ProcessSteps arrow={arrowl} arrowr={arrowr} />
      </div>
        <BusinessProfitable />
      <div className="flex justify-center m-auto">
        <GridFiveSections />
      </div>
    </div>
  );
}
