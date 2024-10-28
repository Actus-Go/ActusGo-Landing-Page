/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Testimonial33 = () => {
    const { t, i18n } = useTranslation("landing");
    const isRTL = i18n.language === "ar";

    const Testiemonials = t("Testiemonials", { returnObjects: true });
    const {
        heading,
        description,
        leftTestimonials,
        rightTestimonials,
    } = {
        ...Testiemonials,
    }; // Select Testiemonials-specific data

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const isMobile = useMediaQuery("(max-width: 1440px)");

    const leftCards = useTransform(
        scrollYProgress,
        [0, 0.9],
        isMobile ? ["20vh", "-70vh"] : ["-10rem", "5rem"] // Scrolls up on mobile and down on desktop
    );

    const rightCards = useTransform(
        scrollYProgress,
        [0, 0.9],
        isMobile ? ["20vh", "-20vh"] : ["10rem", "-10rem"] // Scrolls down on mobile and up on desktop
    );

    return (
        <section
            id="relume"
            ref={sectionRef}
            className="overflow-hidden px-6 py-12 md:py-16 lg:py-20 dark:text-white"
            dir={isRTL ? "rtl" : "ltr"}
        >

            <div className="container grid min-h-svh auto-cols-fr grid-cols-1 items-stretch overflow-hidden lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
                <div className="flex flex-col justify-center p-8 md:p-12">
                    <div>
                        <h2 className="rb-5 mb-5 font-bold bg-gradient-to-r from-red-600 to-blue-500 text-transparent bg-clip-text dark:from-red-400 dark:to-blue-800 text-4xl leading-snug md:text-6xl ">
                            {heading}
                        </h2>
                        <p className="md:text-md">{description}</p>
                    </div>
                </div>
                <div className="grid h-screen relative auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-border-primary px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pl-0 lg:pr-12">
                    <div className="absolute top-0 left-0 z-10  w-full h-[50px] bg-gradient-to-b from-[#f1f0ee] dark:from-black/80 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 z-10 w-full h-[50px] bg-gradient-to-t from-[#f1f0ee] dark:from-black/80 to-transparent pointer-events-none" />

                    <motion.div
                        className="grid transition-all duration-300 size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
                        style={{ y: leftCards }}
                    >
                        <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
                            {leftTestimonials.map((leftTestimonial, index) => (
                                <div key={index} className="relative w-full">
                                    <TestimonialCard key={index} {...leftTestimonial} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        className="grid size-full transition-all duration-300 auto-cols-fr grid-cols-1 gap-4"
                        style={{ y: rightCards }}
                    >
                        <div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
                            {rightTestimonials.map((rightTestimonial, index) => (
                                <div key={index} className="relative w-full">
                                    <TestimonialCard key={index} {...rightTestimonial} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ quote,isRTL, avatar, name, position, companyName, numberOfStars }) => (
    <div className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white dark:bg-gray-900 rounded-3xl">
        <div className="rb-5 mb-5 md:mb-6">
            <div className="rb-6 mb-6 flex">
                {Array(numberOfStars).fill(null).map((_, starIndex) => (
                    <BiSolidStar key={starIndex} className="mr-1 size-6 text-[#FFC107]" />
                ))}
            </div>
            <blockquote className="md:text-md text-gray-800 dark:text-gray-200">{quote}</blockquote>
        </div>
        <div className="flex w-full flex-col gap-3 items-start text-left md:w-fit md:flex-row md:items-center">
            <img
                src={avatar.src}
                alt={avatar.alt}
                className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
            />
            <div className={`${isRTL ? "text-start" : ""}`}>
                <p className={`font-semibold ${isRTL ? "text-start" : ""}`}>{name}</p>
                <p className="text-gray-600 dark:text-gray-400">
                    {position}, {companyName}
                </p>
            </div>
        </div>
    </div>
);

export default Testimonial33;
