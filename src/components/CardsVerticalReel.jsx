import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import analysisAnimation from "../assets/lotties/florid young woman wearing vr glasses.json"; // Lottie JSON file

const Badge = ({ text }) => (
  <div className="badge w-fit mx-auto text-black dark:text-white/70 rounded-lg border-2 border-black/40 dark:border-yellow-400/40 dark:border-gray-600 px-2 py-1">
    {text}
  </div>
);

function TrainingServiceSection() {
  const { t, i18n } = useTranslation("landing");
  const cards = t("use_cases.section.cards", { returnObjects: true });

  // Dynamic Media Loader: Either Lottie or Video
  const renderMedia = (media) => {
    if (media.type === "lottie") {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: media.src,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      return (
        <Lottie
          options={defaultOptions}
          height={"100%"}
          width={"100%"}
          onError={() => (
            <img src={media.fallback} alt="Fallback" className="w-full h-full object-cover" />
          )}
        />
      );
    } else if (media.type === "video") {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={() => (
            <img src={media.fallback} alt="Fallback" className="w-full h-full object-cover" />
          )}
        >
          <source src={media.src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      );
    }
    // Fallback to an image if media type is unknown
    return <img src={media.fallback} alt="Fallback" className="w-full h-full object-cover" />;
  };

  const FullCardsData = [
    {
      badge: cards[0].badge,
      title: cards[0].title,
      description: cards[0].description,
      media: {
        type: "lottie",
        src: analysisAnimation, // Lottie animation
        fallback: "/images/florid-young-woman-wearing-vr-glasses.png", // Fallback image for Lottie
      },
    },
    {
      badge: cards[1].badge,
      title: cards[1].title,
      description: cards[1].description,
      media: {
        type: "video",
        src: "/videos/coworking-augmented-reality-mobile-app-in-retail.webm", // Video
        fallback: "/images/coworking-augmented-reality-mobile-app-in-retail.png" // Fallback image for Video
      },
    },
    {
      badge: cards[2].badge,
      title: cards[2].title,
      description: cards[2].description,
      media: {
        type: "video",
        src: "/videos/3d-isometric-mini-drone-with-package-landing-on-map-in-smartphone.webm", // Video
        fallback: "/images/3d-isometric-mini-drone-with-package-landing-on-map-in-smartphone (1) (1) (1).png", // Fallback image for Video
      },
    },
  ];

  return (
    <div
      className="w-full min-h-screen max-w-[1400px] flex flex-col gap-8 text-white dark:text-gray-300"
      id="WhyUs"
    >
      <div className="head px-3 container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5">
        <h1 className="text-2xl font-medium text-yellow-800 uppercase dark:text-yellow-400">
          {t("use_cases.section.content.0.badge")}
        </h1>

        <h1 className="md:text-6xl text-4xl capitalize font-semibold text-black dark:text-white">
          {t("use_cases.section.content.1.text")}
          <span className="bg-gradient-to-r from-yellow-600 to-blue-500 text-transparent bg-clip-text dark:from-yellow-400 dark:to-blue-800">
            {t("use_cases.section.content.1.highlight")}
          </span>
          {t("use_cases.section.content.1.continue")}
        </h1>

        <p className="text-gray-800 py-5 text-xl dark:text-gray-400">
          {t("use_cases.section.content.1.discription")}
        </p>
      </div>

      <div className="content container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FullCardsData.map((card, index) => (
          <div
            key={index}
            className="rounded-[1.75rem] min-h-[500px] overflow-hidden text-center p-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300 border-2 border-black dark:bg-yellow-800/10 dark:border-yellow-600/20 bg-[#fbff7b]"
          >
            <div className="flex flex-col justify-between items-center">
              <Badge text={card.badge} />
              <h1 className="font-semibold capitalize text-black text-lg md:text-xl dark:text-transparent bg-clip-text bg-gradient-to-r from-yellow-800 to-gray-400">
                {card.title}
              </h1>
            </div>
            <p className="text-[14px] font-semibold text-gray-600 dark:text-gray-300">
              {card.description}
            </p>
            <div className="flex justify-center h-full w-full">
              {renderMedia(card.media)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainingServiceSection;
