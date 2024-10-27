/* eslint-disable react/prop-types */
import Lottie from "react-lottie";
import Prize from "../assets/lotties/kit loyalty program or affinity program.json";
import fallbackImage from "/images/kit-loyalty-program-or-affinity-program.png";
import { useMediaQuery } from "@relume_io/relume-ui";
import { useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const calculateScales = (totalSections, scrollYProgress) => {
    return Array.from({ length: totalSections }, (_, index) => {
        const sectionFraction = 1 / totalSections;
        const start = sectionFraction * index;
        const end = sectionFraction * (index + 1);

        return index < totalSections - 1
            ? useTransform(scrollYProgress, [start, end], [1, 0.8])
            : useMotionValue(1);
    });
};

const Layout408 = (props) => {
    const { t, i18n } = useTranslation("landing");
    const challenges = t("challenges", { returnObjects: true });
    const isRTL = i18n.language === "ar";

    const { tagline, heading, description, featureSections } = {
        ...challenges,
        ...props,
    };

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end 60%"],
    });
    const scales = calculateScales(featureSections.length, scrollYProgress);

    return (
        <section
            id="relume"
            className="px-4 py-12 sm:px-8 md:px-[5%] md:py-16 lg:py-24"
            dir={isRTL ? "rtl" : "ltr"}
        >
            <div className="container mx-auto">
                <div className="text-center dark:text-white mb-10 max-w-xl mx-auto md:mb-16 lg:mb-20">
                    <p className="mb-3 text-lg font-semibold md:mb-4">
                        {tagline}
                    </p>
                    <h1 className="text-4xl font-bold mb-5 md:text-5xl lg:text-6xl md:mb-6">
                        {heading}
                    </h1>
                    <p className="text-base text-black/80 dark:text-white/70 md:text-lg">
                        {description}
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 gap-10 md:gap-12"
                >
                    {featureSections.map((featureSection, index) => (
                        <FeatureSection
                            key={index}
                            {...featureSection}
                            scale={scales[index]}
                            index={index}
                            isLast={index === featureSections.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureSection = ({
    tagline,
    heading,
    description,
    image,
    scale,
    index,
    isLast,
}) => {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const Section = isMobile ? "div" : motion.div;

    const contentOrder =
        !isMobile && index % 2 === 0 ? "order-first" : "order-last";
    const imageOrder =
        !isMobile && index % 2 === 0 ? "order-last" : "order-first";

    const [showFallback, setShowFallback] = useState(false);
    const [animationLoaded, setAnimationLoaded] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Prize,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        // Start a timeout to show the fallback image if animation doesn't load in time
        const fallbackTimeout = setTimeout(() => {
            if (!animationLoaded) {
                setShowFallback(false);
            }
        }, 5000); // Adjust the timeout duration as needed

        return () => clearTimeout(fallbackTimeout);
    }, [animationLoaded]);

    return (
        <Section
            className="relative bg-[#fbff7b] dark:bg-[#191104] dark:text-white rounded-[1.75rem] md:sticky md:top-[10%] md:mb-[10vh] md:h-[80vh] 
                       grid grid-cols-1 md:grid-cols-2 items-stretch overflow-hidden 
                       border dark:border-[#47390e] border-border-primary bg-background-primary"
            style={{ scale }}
            id="StartNow"
        >
            <div
                className={clsx(
                    "flex flex-col justify-center p-6 md:p-8 lg:p-12 ",
                    contentOrder
                )}
            >
                <p className="mb-2 text-2xl font-semibold">{tagline}</p>
                <h2 className="mb-5 font-semibold bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text dark:from-red-400 dark:to-blue-800 text-3xl leading-snug md:text-5xl ">
                    {heading}
                </h2>
                <p className=" text-black/80 dark:text-white/70 text-xl md:text-2xl">
                    {description}
                </p>
            </div>

            <div className={clsx("w-full h-full", imageOrder)}>
                {isLast ? (
                    showFallback ? (
                        <img
                            src={fallbackImage}
                            alt="Fallback"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Lottie
                            options={defaultOptions}
                            height={"90%"}
                            width={"90%"}
                            eventListeners={[
                                {
                                    eventName: "complete",
                                    callback: () => {
                                        setAnimationLoaded(true);
                                    },
                                },
                            ]}
                        />
                    )
                ) : (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover video-animation"
                        poster={image.poster}
                    >
                        <source src={image.src} alt={image.alt} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </Section>
    );
};

export default Layout408;
