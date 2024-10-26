import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import headerData from "../../locales/HeaderData";

const Header80Animation = () => {
    const { i18n } = useTranslation("landing");
    const { images } = headerData[i18n.language] || headerData.en;

    const { scrollYProgress } = useScroll();
    const animatedScrollYProgress = useSpring(scrollYProgress, { bounce: 0 });

    // Define responsive breakpoints for transforms
    const scaleTransform = useTransform(
        animatedScrollYProgress,
        [0, 0.2],
        window.innerWidth < 768 ? [0.8, 1.2] : [0.6, 1.3] // Adjust scale for mobile
    );

    const xLeftTransform = useTransform(
        animatedScrollYProgress,
        [0, 0.01],
        window.innerWidth < 768 ? ["-10vw", "0vw"] : ["-20vw", "0vw"] // Adjust X for mobile
    );
    const xRightTransform = useTransform(
        animatedScrollYProgress,
        [0, 0.01],
        window.innerWidth < 768 ? ["10vw", "0vw"] : ["20vw", "0vw"]
    );

    return (
        <div className="h-[100vh] overflow-hidden">
            <div className="absolute bottom-0 left-0 top-0 z-[10]">
                <motion.div
                    className="flex flex-col gap-[18vw] md:pt-[90vh] pt-[30vh]"
                    style={{ y: useTransform(scrollYProgress, [0, 0.08], ["0vh", "-87.5vh"]) }}
                >
                    {images.slice(0, 6).map((image, index) => (
                        <motion.div
                            key={index}
                            style={{
                                scale: scaleTransform,
                                x: index % 2 === 0 ? xLeftTransform : xRightTransform,
                            }}
                            className={clsx("relative h-[35vw] pt-[60%] sm:h-auto", {
                                "left-[19vw] w-[30vw] md:w-[28vw] lg:w-[22vw]": index === 0,
                                "left-[52vw] mt-[-46vw] lg:left-[58vw] lg:w-[22vw]": index === 1,
                                "left-[14vw] mt-[-35vw] lg:w-[20vw]": index === 2,
                                "left-[64vw] mt-[-45vw] lg:w-[18vw]": index === 3,
                                "left-[44vw] mt-[-35vw] lg:w-[18vw]": index === 4,
                                "left-[34vw] mt-[-40vw] lg:w-[18vw]": index === 5,
                            })}
                        >
                            <img src={image.src} alt={image.alt} className="absolute inset-0 object-cover" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <motion.div className="absolute bottom-0 right-0 top-0 z-[-10]" style={{ y: useTransform(scrollYProgress, [0, 0.08], ["0vh", "-39.6vh"]) }}>
                <div className="flex flex-col gap-[26vw] pt-[50vh]">
                    {images.slice(6).map((image, index) => (
                        <motion.div
                            key={index}
                            style={{
                                scale: scaleTransform,
                                x: index % 2 === 0 ? xLeftTransform : xRightTransform,
                            }}
                            className={clsx(
                                "relative h-[35vw] pt-[120%] opacity-75 sm:h-auto",
                                {
                                    "w-[28vw] lg:w-[20vw]": index === 0,
                                    "right-[60vw] mt-[-44vw] lg:right-[54vw] lg:w-[18vw]": index === 1,
                                }
                            )}
                        >
                            <img src={image.src} alt={image.alt} className="absolute inset-0 object-cover" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Header80Animation;
