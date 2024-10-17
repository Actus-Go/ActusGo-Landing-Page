
import { useTranslation } from "react-i18next";
import analysis from "../assets/images/3verticalCards/analysis.png";
import availability from "../assets/images/3verticalCards/availability.png";
import save from "../assets/images/3verticalCards/save.png";

const Badge = ({ text }) => (
  <div className="badge w-fit mx-auto text-black dark:text-white/70 rounded-lg  border-2 border-yellow-400/40 dark:border-white/40 px-2 py-1 dark:text-gray-300 dark:border-gray-600">
    {text}
  </div>
);

function TrainingServiceSection() {
  const { t, i18n } = useTranslation("landing");
  const isRTL = i18n.language === "ar";
  const cards = t("use_cases.section.cards", { returnObjects: true });
  const FullCardsData = [
    {
      badge: cards[0].badge,
      title: cards[0].title,
      description: cards[0].description,
      image: analysis,
    },
    {
      badge: cards[1].badge,
      title: cards[1].title,
      description: cards[1].description,
      image: availability,
    },
    {
      badge: cards[2].badge,
      title: cards[2].title,
      description: cards[2].description,
      image: save,
    },
  ];

  return (
    <div
      className="w-full min-h-screen max-w-[1400px] flex flex-col gap-8 text-white dark:text-gray-300"
      id="marketplace"
    >
      <div className="head px-3 container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5">
        <h1 className="md:text-2xl grid place-items-center text-xl md:text-center text-start font-medium text-yellow-800 uppercase dark:text-yellow-400">
          {" "}
          {t("use_cases.section.content.0.badge")}{" "}
        </h1>

        <h1 className="text-4xl felx  capitalize md:text-6xl font-semibold text-black dark:text-white">
          {" "}
          {t("use_cases.section.content.1.text")}{" "}
          <span className="bg-gradient-to-r from-yellow-600 to-blue-500 text-transparent bg-clip-text dark:from-yellow-400 dark:to-blue-800">
            {" "}
            {t("use_cases.section.content.1.highlight")}{" "}
          </span>{" "}
          {t("use_cases.section.content.1.continue")}{" "}
        </h1>
        <p className=" text-gray-800  py-5 text-center text-base md:text-lg dark:text-gray-400 ">
          {" "}
          {t("use_cases.section.content.1.discription")}{" "}
        </p>
      </div>

      <div className="content container  mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FullCardsData.map((card, index) => (
          <div
            key={index}
            className={`rounded-3xl min-h-[500px] relative overflow-hidden text-center p-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300   border-2   dark:bg-yellow-800/10  border-yellow-600/20 bg-yellow-100/60`}
          >
            <div className="flex flex-col justify-between items-center">
              <Badge text={card.badge} />
              <h1 className="font-semibold capitalize text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  dark:from-yellow-800 text-black  dark:to-gray-400 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r">
                {card.title}
              </h1>
            </div>
            <p className="text-[14px] text-center font-semibold text-gray-600 dark:text-gray-300">
              {card.description}
            </p>
            <div className="flex justify-center h-full w-full relative items-center">
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain"
              />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainingServiceSection;
