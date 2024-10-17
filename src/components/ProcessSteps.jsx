import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Auth from "../assets/images/StepsLanding/Auth.png";
import Deposit from "../assets/images/StepsLanding/Deposit.png";
import OTP from "../assets/images/StepsLanding/OTP.png";
import SendMessages from "../assets/images/StepsLanding/SendMessages.png";
function ProcessStep({ step, isReversed }) {
  const { t, i18n } = useTranslation("landing");
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      className={`min-h-[200px] sm:min-h-[300px] grid relative  md:grid-cols-2 gap-8 p-4`}
      style={{ textAlign: isRTL ? "right" : "left" }}
    >
      <div
        className={`flex flex-col justify-center ${
          isRTL ? "md:mr-[10%] lg:mr-[20%]" : "md:ml-[10%] lg:ml-[20%]"
        }`}
      >
        <div className="flex gap-2 items-center">
          <span
            className={`hover:ring-2 duration-500 select-none bg-gray-700 text-white dark:bg-gray-900 text-lg w-10 h-10 flex items-center justify-center rounded-full`}
          >
            {step.id}
          </span>
          <h1
            className={`text-xl sm:text-2xl md:text-3xl select-none ${
              isRTL ? "pr-2" : "pl-2"
            } font-semibold font-sans dark:text-white`}
          >
            {step.step}
          </h1>
        </div>
        <div
          className={`text-gray-800 dark:text-gray-300 ${
            isRTL ? "mr-4 sm:mr-12" : "ml-4 sm:ml-12"
          }`}
        >
          <p>{step.description}</p>
        </div>
      </div>
      <div
        className="sm:mt-8 p-5 max-w-[300px] sm:max-w-[360px] mx-auto pt-3"
        style={{
          filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5))",
        }}
      >
        <img
          className="relative bounce-2 box2"
          src={step.imageSrc}
          alt={step.step}
          height="auto"
          width="100%"
        />
      </div>
    </div>
  );
}

function ProcessStepsComp() {
  const { t, i18n } = useTranslation("landing");
  const isRTL = i18n.dir() === "rtl";

  // Set RTL direction dynamically
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const processStepsData = {
    ProcessStepsCompHeadData: {
      heading: {
        text: t("process_steps.process_steps_heading.text"),
        highlight: t("process_steps.process_steps_heading.highlight"),
        continue: t("process_steps.process_steps_heading.continue"),
      },
      sub_heading: t("process_steps.process_steps_sub_heading"),
    },
    processSteps: [
      {
        id: 1,
        step: t("process_steps.process_steps_1"),
        description: t("process_steps.process_steps_1_description"),
        imageSrc: Auth,
      },
      {
        id: 2,
        step: t("process_steps.process_steps_2"),
        description: t("process_steps.process_steps_2_description"),
        imageSrc: OTP,
      },
      {
        id: 3,
        step: t("process_steps.process_steps_3"),
        description: t("process_steps.process_steps_3_description"),
        imageSrc: Deposit,
      },
      {
        id: 4,
        step: t("process_steps.process_steps_4"),
        description: t("process_steps.process_steps_4_description"),
        imageSrc: SendMessages,
      },
    ],
  };

  const { ProcessStepsCompHeadData, processSteps } = processStepsData;

  return (
    <div
      className={`mx-auto px-4 max-w-[1400px] py-6 md:py-16 flex flex-wrap justify-center ${
        isRTL ? "text-right" : "text-left"
      } dark:text-gray-300`}
    >
      {/* Heading Section */}
      <div className="w-full max-w-[1000px] mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-gray-300">
          {ProcessStepsCompHeadData.heading.text}{" "}
          <span className="bg-gradient-to-r from-yellow-700 to-blue-800 text-transparent bg-clip-text dark:from-yellow-500 dark:to-yellow-700">
            {" "}
            {ProcessStepsCompHeadData.heading.highlight}{" "}
          </span>{" "}
          {ProcessStepsCompHeadData.heading.continue}{" "}
        </h1>
        <p className="text-gray-800 py-5 text-base sm:text-lg md:text-xl max-w-2xl mx-auto dark:text-gray-400">
          {t("hero_section.description")}
        </p>
      </div>

      {/* Steps Section */}
      <div className="w-full">
        <div className="flex flex-col gap-12">
          {processSteps.length > 0 ? (
            processSteps.map((step, index) => (
              <React.Fragment key={step.id}>
                <ProcessStep step={step} isReversed={index % 2 === 1} />
              </React.Fragment>
            ))
          ) : (
            <p>No steps available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProcessStepsComp;
