"use client";

import LogoDark from "/public/images/logoDark.png";
import LogoLight from "/public/images/logoLight.png";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

// Check if dark mode is enabled
const isDarkMode = document.documentElement.classList.contains("dark");
// Define navigation items
const navItems = {
  products: [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers’ data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ],
  callsToAction: [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
  ],
  otherLinks: [
    { name: "Features", href: "#features" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "Company", href: "#company" },
    { name: "Log in", href: "#" },
  ],
};

// Desktop Menu Component
const DesktopMenu = () => (
  <PopoverGroup className="hidden lg:flex lg:gap-x-12">
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 dark:text-black text-white">
        Product
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:  shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-4">
          {navItems.products.map((item) => (
            <div
              key={item.name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50  dark:hover:bg-yellow-100"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900/40 dark:bg-yellow-400  ">
                <item.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-600 dark:text-black"
                />
              </div>
              <div className="flex-auto">
                <a
                  href={item.href}
                  className="block font-semibold text-gray-900 dark:text-black"
                >
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600 dark:text-black">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-yellow-300">
          {navItems.callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-black hover:bg-gray-100 dark:hover:bg-yellow-400"
            >
              <item.icon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400 dark:text-black"
              />
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>

    {navItems.otherLinks.slice(0, -1).map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="text-sm font-semibold leading-6 dark:text-black text-white"
      >
        {item.name}
      </a>
    ))}
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a
        href={navItems.otherLinks[navItems.otherLinks.length - 1].href}
        className="text-sm font-semibold leading-6 dark:text-black text-white"
      >
        {navItems.otherLinks[navItems.otherLinks.length - 1].name}{" "}
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </PopoverGroup>
);

// Mobile Menu Component
const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <Dialog
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
    className="lg:hidden"
  >
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">SMSInEgy</span>
          <img alt="" src={LogoDark} className="h-8 w-auto dark:block hidden" />
          <img alt="" src={LogoLight} className="h-8 w-auto dark:hidden" />
        </a>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <Disclosure as="div" className="-mx-3">
              <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Product
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 space-y-2">
                {navItems.products
                  .concat(navItems.callsToAction)
                  .map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
              </DisclosurePanel>
            </Disclosure>
            {navItems.otherLinks.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
            <a
              href={navItems.otherLinks[navItems.otherLinks.length - 1].href}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {navItems.otherLinks[navItems.otherLinks.length - 1].name}
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black dark:bg-yellow-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-[1400px] items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SMSInEgy</span>
            <img
              alt=""
              src={LogoDark}
              className="h-8 w-auto dark:block hidden"
            />
            <img alt="" src={LogoLight} className="h-8 w-auto dark:hidden" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <DesktopMenu />
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
