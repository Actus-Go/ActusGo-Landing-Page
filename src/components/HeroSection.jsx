import Button from "./Micros/button";
import ButtonLite from "./Micros/ButtonLite";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import headerData from "../locales/HeaderData.js"; // Import the data

const Header80 = (props) => {
  const { t, i18n } = useTranslation("landing");
  const isRTL = i18n.language === "ar"; // Detect if the current language is Arabic

  // Choose the data object based on the current language
  const { heading, description, images } = headerData[i18n.language] || headerData.en;

  const transformRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: transformRef });
  const animatedScrollYProgress = useSpring(scrollYProgress, { bounce: 0 });

  // Speed up the scrolling effect by adjusting the transform input range
  const yFirst = useTransform(animatedScrollYProgress, [0, 0.4], ["0vh", "-87.5vh"]);
  const ySecond = useTransform(animatedScrollYProgress, [0, 0.4], ["0vh", "-39.6vh"]);

  return (
    <section
      ref={transformRef}
      className={clsx("relative h-[150vh] px-[5%] md:h-[300vh]", {
        "text-right": isRTL, // Align text to the right for Arabic
      })}
    >
      <div className="sticky top-0 h-[100vh]  overflow-hidden">
        <div className="absolute bottom-0 left-0 top-0 z-10">
          <motion.div className="flex flex-col gap-[26vw] pt-[70vh]" style={{ y: yFirst }}>
            {images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={clsx("relative h-[35vw] pt-[120%] sm:h-auto", {
                  "w-[30vw] md:w-[28vw] lg:w-[22vw]": index === 0,
                  "left-[52vw] mt-[-46vw] lg:left-[58vw] lg:w-[22vw]": index === 1,
                  "left-[4vw] mt-[-5vw] lg:w-[20vw]": index === 2,
                  "left-[64vw] mt-[-45vw] lg:w-[18vw]": index === 3,
                })}
              >
                <img src={image.src} alt={image.alt} className="absolute inset-0 object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute bottom-0 right-0 top-0 z-[-10]" style={{ y: ySecond }}>
          <div className="flex flex-col gap-[26vw] pt-[70vh]">
            {images.slice(4).map((image, index) => (
              <div
                key={index}
                className={clsx("relative h-[35vw] pt-[120%] opacity-75 sm:h-auto", {
                  "w-[28vw] lg:w-[20vw]": index === 0,
                  "right-[50vw] mt-[-44vw] lg:right-[54vw] lg:w-[18vw]": index === 1,
                })}
              >
                <img src={image.src} alt={image.alt} className="absolute inset-0 object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main content centered vertically and horizontally */}
        <div className="container relative flex h-full  items-center justify-center">
          <div className="text-center">
            <h1 className="mb-5 text-4xl font-bold dark:text-white md:text-6xl">{heading}</h1>
            <p className="mb-8 dark:text-white/90">{description}</p>

            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="h-16 min-w-64">
                <Link to="/Pricing">
                  <Button
                    color="gray"
                    CTAtext={t("hero_section.cta")}
                    className="h-12 w-[200px]  text-black  dark:text-black rounded"
                  >
                    {t("hero_section.cta")}
                  </Button>
                </Link>
              </div>
              <div className="h-16 min-w-64">
                <ButtonLite CTAtext={t("hero_section.button_lite_cta")} className=" text-black border-gray-700 rounded" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 mt-[35rem] md:mt-[100vh]" />
      </div>
    </section>
  );
};

export default Header80;
