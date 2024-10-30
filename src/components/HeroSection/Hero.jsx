// Header80.js
import HeroText from "./HeroText";
import AnimationHero from "./AnimationHero";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Header80 = () => {
  // const { i18n } = useTranslation("landing");
  // const isRTL = i18n.language === "ar";

  return (
    <section
      className={clsx("relative overflow-hidden h-[120vh] px-[5%]")}
    >
      {/* Overlay with animated images */}
      <HeroText />
      {/* <div className="absolute top-0">
        <AnimationHero />
      </div> */}

      {/* Main text content */}
    </section>
  );
};

export default Header80;
