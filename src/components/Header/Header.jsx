// src/components/Header.js
import { useState } from "react";
import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black dark:bg-yellow-300">
      {/* <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1400px] items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="h-6 w-6 text-white dark:text-black"
            />
          </button>
        </div>
        <DesktopMenu />
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav> */}
    </header>
  );
};

export default Header;
