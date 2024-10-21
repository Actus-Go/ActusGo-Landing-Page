import React from "react";
import { useTranslation } from "react-i18next";

const Banner15 = () => {
  const { t, i18n } = useTranslation("landing"); // Ensure correct namespace
  const sections = t("sectionsBanners", { returnObjects: true }); // Get section data
  const isRTL = i18n.language === "ar"; // Detect text direction

  return (
    <section
      id="relume"
      className={`relative flex w-screen max-w-full  justify-end overflow-hidden ${
        isRTL ? "text-right" : "text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Left and right glassy gradient for shadow effect */}
      <div className="absolute top-0 left-0 z-10  h-full w-[40px] bg-gradient-to-r from-[#fbfae9] dark:from-black/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 z-10 h-full w-[40px] bg-gradient-to-l from-[#fbfae9] dark:from-black/80 to-transparent pointer-events-none" />

      <div className="flex justify-end">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="grid animate-marquee-right auto-cols-max grid-flow-col grid-cols-[max-content] items-center justify-around py-4"
            >
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center justify-center whitespace-nowrap px-8 text-center lg:text-left">
                    <h1 className="text-3xl dark:text-white font-bold md:text-3xl">
                      {section.title}
                    </h1>
                  </div>
                  <div className="relative aspect-[3/2] w-full rounded-3xl overflow-hidden">
                    <img
                      src={section.image.src}
                      alt={section.image.alt || "Image"}
                      className="aspect-[3/2] h-[40px] max-h-24 object-cover md:h-auto transition-opacity duration-500"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Banner15;
