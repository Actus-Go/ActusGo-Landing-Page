// src/components/DesktopMenu.js
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

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
    // { name: "Company", href: "#company" },
    { name: "Why US", href: "#marketplace" },
    { name: "Benefits", href: "#features" },
    { name: "Log in", href: "#" },
  ],
};

const DesktopMenu = () => (
  <PopoverGroup className="hidden lg:flex lg:gap-x-12">
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 dark:text-black text-white">
        Product
        {/* <ChevronDownIcon aria-hidden='true' className='h-5 w-5 flex-none text-gray-400' /> */}
      </PopoverButton>

      {/* <PopoverPanel
        transition
        className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark: shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in'>
        <div className='p-4'>
          {navItems.products.map((item) => (
            <div
              key={item.name}
              className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-yellow-100'>
              <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-900/40 dark:bg-yellow-400'>
                <item.icon aria-hidden='true' className='h-6 w-6 text-gray-600 dark:text-black' />
              </div>
              <div className='flex-auto'>
                <a href={item.href} className='block font-semibold text-gray-900 dark:text-black'>
                  {item.name}
                  <span className='absolute inset-0' />
                </a>
                <p className='mt-1 text-gray-600 dark:text-black'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-yellow-300'>
          {navItems.callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-black hover:bg-gray-100 dark:hover:bg-yellow-400'>
              <item.icon aria-hidden='true' className='h-5 w-5 flex-none text-gray-400 dark:text-black' />
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel> */}
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

export default DesktopMenu;
