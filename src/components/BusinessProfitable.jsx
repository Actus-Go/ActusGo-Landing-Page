import { useTranslation } from "react-i18next";

export default function BusinessProfitable() {
    const { t, i18n } = useTranslation("landing"); // Ensure the namespace is correct

    // Determine if the current language is RTL
    const isRTL = i18n.language === "ar";

    return (
        <div
            id="company"
            className={`min-h-[60vh] py-6 md:py-12 text-center flex flex-col justify-center items-center bg-yellow-50/70 dark:bg-black ${isRTL ? "rtl" : ""
                }`}
            dir={isRTL ? "rtl" : "ltr"} // Set direction attribute based on language
        >
            <div
                className={`px-4 text-center   flex flex-col justify-center  ${isRTL ? "text-right" : "text-left"
                    }  max-w-[1000px] w-full`}
            >

                {/* Heading Section */}
                <div
                    className={`text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-semibold dark:text-gray-300 `}
                >
                    <h1 className="text-center">
                        {t("BusinessProfitable.hero_heading")}{" "}
                        <span className="bg-gradient-to-r text-center from-yellow-700 to-blue-800 text-transparent bg-clip-text dark:from-yellow-500 dark:to-yellow-700">
                            {t("BusinessProfitable.sub_heading_text")}
                        </span>
                    </h1>
                    {/* Description Section */}
                    <div className="text-center justify-center w-full  flex">
                        <p
                            className={`text-gray-800 py-5 text-center text-base md:text-lg max-w-2xl dark:text-gray-400 `}
                        >
                            {t("BusinessProfitable.description")}
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
}
