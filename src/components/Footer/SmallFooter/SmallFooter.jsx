import React from "react";


const CurrentYear = new Date().getFullYear();

function SmallFooter() {
  return (
    <footer className='dark:bg-yellow-400 bg-black  overflow-hidden w-full relative'>
      <div className='mx-auto  max-w-screen-xl space-y-8 px-4 py-5 sm:px-6 lg:space-y-16 lg:px-8 relative z-10'>
        <p className='text-center dark:text-gray-900 text-white'>
          © {CurrentYear} ActusGo LLC. All rights reserved.
        </p>
      </div>
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      </div>
    </footer>
  );
}

export default SmallFooter;