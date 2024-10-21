/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

// FAQ Item Component with Animation
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null); // Ref to get the height of the answer content

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-gray-300 pb-4">
            {/* Question Section */}
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleOpen}
            >
                <h3 className="text-lg font-semibold dark:text-white w-[90%]">{question}</h3>
                <div className="h-6 w-6 flex items-center justify-center rounded-full bg-[#fbff7b]">
                    <span className="text-xl text-black">{isOpen ? '-' : '+'}</span>
                </div>
            </div>

            {/* Answer Section with Smooth Height Animation */}
            <div
                ref={answerRef}
                className={`transition-all duration-300 overflow-hidden`}
                style={{
                    height: isOpen ? answerRef.current?.scrollHeight : 0,
                }}
            >
                <p className="mt-2 dark:text-white/80 text-gray-600">{answer}</p>
            </div>
        </div>
    );
};

// Main FAQ Section Component
const FAQSection = () => {
    const { t, i18n } = useTranslation('landing');
    const isRTL = i18n.language === 'ar';

    // Fetch FAQs from JSON
    const faqs = t('faq.questions', { returnObjects: true });

    return (
        <div
            className={`flex flex-col max-lg:items-center max-w-[1400px] lg:flex-row justify-center gap-8 py-3 mx-auto px-6 md:p-8 mt-6 ${
                isRTL ? 'text-right' : 'text-left'
            }`}
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            <div className="flex flex-col gap-4 md:max-w-lg">
                <p className="text-[#c6cc28]  font-bold text-lg">
                    {t('faq.title')}
                </p>
                <h2 className="text-3xl max-w-[300px] dark:text-white font-bold mb-6">
                    {t('faq.subtitle')}
                </h2>
            </div>
            <div className="space-y-4 w-full max-w-lg">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
