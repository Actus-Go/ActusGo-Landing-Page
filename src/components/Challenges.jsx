import { useTranslation } from "react-i18next";
import { FaMoneyBillWave, FaBuilding, FaLightbulb } from "react-icons/fa"; // Import icons

const iconMapping = [
    FaMoneyBillWave,
    FaBuilding,
    FaLightbulb
]; // Array to map icons based on index

const Challenges = () => {
    const { t, i18n } = useTranslation("landing"); // Ensure the namespace is correct
    const challenges = t("challenges", { returnObjects: true });
    const isRTL = i18n.language === "ar"; // Check if the current language is RTL

    return (
        <div
            className="w-full py-4 min-h-screen max-w-[1400px] flex flex-col gap-8 text-white dark:text-gray-300"
            dir={isRTL ? "rtl" : "ltr"} // Set direction based on language
        >
            <div className="container mx-auto px-3">

                <h2 className="text-3xl text-black dark:text-gray-300 font-bold text-center mb-8">
                    {isRTL ? "التحديات التي نعمل عليها" : "Challenges We Work On"}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {challenges.map((challenge, index) => {
                        const Icon = iconMapping[index]; // Get the correct icon for each challenge

                        return (
                            <div
                                key={index}
                                className={`p-6 text-center rounded-lg ${index === 1 ? "bg-yellow-500" : ""
                                    } transition-shadow`}
                            >
                                <div className="flex justify-center mb-4">
                                    <Icon className={`h-16 w-16 dark:text-yellow-500 text-black/80 ${index === 1 ? "text-black/80 dark:text-black/80 " : ""}`} />
                                </div>

                                <h3 className="text-2xl dark:text-white text-black  mb-2">
                                    {challenge.title}
                                </h3>
                                <p className="text-gray-600">{challenge.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Challenges;
