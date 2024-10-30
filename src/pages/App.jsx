import React, { Suspense } from "react";
import { useTranslation } from 'react-i18next';

// Lazy load components
import Hero from "../components/HeroSection/Hero";
const CardsVerticalReel = React.lazy(
  () => import("../components/CardsVerticalReel")
);
// const ProcessSteps = React.lazy(() => import("../components/ProcessSteps"));
const GridFiveSections = React.lazy(
  () => import("../components/GridFiveSections")
);
import Header from "../components/Header";
const BusinessProfitable = React.lazy(
  () => import("../components/BusinessProfitable")
);
const Layout408 = React.lazy(() => import("../components/Challenges"));
const Faq3 = React.lazy(() => import("../components/FAQ"));
const AnimationHero = React.lazy(
  () => import("../components/HeroSection/AnimationHero")
);
const Testimonial33 = React.lazy(() => import("../components/Testimonials"));

// const { t, i18n } = useTranslation('landing');
// const isRTL = i18n.language === 'ar';

export default function App() {
  return (
    <div className="min-h-screen relative dark:bg-black bg-[#f1f0ee] m-auto flex justify-center flex-col">
      <Header />
      <div className="relative w-full h-full">
        <div className="absolute max-w-[1500px] top-0 left-0 right-0">
          <AnimationHero />
        </div>
        <Hero />
      </div>
      
      <div className="flex justify-center m-auto">
        <Suspense >
          <Layout408 />
        </Suspense>
      </div>

      <div className="flex justify-center m-auto">
        <Suspense>
          <CardsVerticalReel />
        </Suspense>
      </div>

      <div className="flex justify-center m-auto">
        <Suspense>
          <Testimonial33 />
        </Suspense>
      </div>

      {/* <div className="flex justify-center m-auto">
        <Suspense fallback={<div>Loading Process Steps...</div>}>
          <ProcessSteps arrow={arrowl} arrowr={arrowr} />
        </Suspense>
      </div> */}

      <Suspense>
        <BusinessProfitable />
      </Suspense>

      <div className="flex justify-center m-auto">
        <Suspense>
          <GridFiveSections />
        </Suspense>
      </div>

      <div className="flex justify-center m-auto">
        <Suspense >
          <Faq3 />
        </Suspense>
      </div>
    </div>
  );
}
