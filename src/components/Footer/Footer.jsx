import React from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import DarkModeSwitcher from "../DarkModeSwitcher";
import SocialMediaLinks from "./SocialMediaLinks";
import LINKS from "./FooterLinks";
import Logo from "../header/Logo";

const CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='dark:bg-yellow-400 bg-black rounded-t-[30px] overflow-hidden w-full relative'>
      <div className='mx-auto  max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 relative z-10'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='dark:text-gray-900 text-white'>
              <h2 className='text-2xl font-bold'>
                {/* <Logo /> */}
              </h2>
            </div>
            <p className='mt-4 max-w-xs dark:text-gray-900 text-white'>
              Cutting Costs, Delivering Unmatched Value with Every Challenge.
            </p>
            <p className='mt-4 dark:text-gray-900 text-white'>
              Address: USA Inc. (HQ), 1309 Coffeen Avenue, STE 1200, Sheridan,
              WY 82801, USA
            </p>
            <DarkModeSwitcher />
            <LanguageSwitcher />
            <SocialMediaLinks />
          </div>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
            {LINKS.map(({ title, links }, idx) => (
              <div key={idx}>
                <p className='font-medium dark:text-gray-900 text-white'>
                  {title}
                </p>
                <ul className='mt-6 space-y-4'>
                  {links.map((link, index) => (
                    <li key={index}>
                      {link.status ? (
                        <a
                          href={link.url}
                          className='dark:text-gray-900 text-white hover:text-yellow-400 transition'>
                          {link.title}
                        </a>
                      ) : (
                        <span className='dark:text-gray-900 text-white'>
                          {link.title}
                          <span className='ml-2 text-xs bg-yellow-800 text-yellow-200 rounded-full px-2 py-1'>
                            Soon
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
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

export default Footer;