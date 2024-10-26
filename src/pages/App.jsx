import React, { Suspense } from "react";

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

export default function App() {
  return (
    <div className="min-h-screen relative dark:bg-black bg-[#f1f0ee] m-auto flex justify-center flex-col">
      <Header />

      <div className="relative">
        <div className="absolute top-0">
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
