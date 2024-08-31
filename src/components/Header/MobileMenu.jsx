// src/components/MobileMenu.js
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const navItems = {
  products: [
    { name: "Analytics", href: "#" },
    { name: "Engagement", href: "#" },
    { name: "Security", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Automations", href: "#" },
  ],
  callsToAction: [
    { name: "Watch demo", href: "#" },
    { name: "Contact sales", href: "#" },
  ],
  otherLinks: [
    { name: "Features", href: "#features" },
    { name: "Marketplace", href: "#marketplace" },
    { name: "Company", href: "#company" },
    { name: "Log in", href: "#" },
  ],
};

const MobileMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <Dialog
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
    className="lg:hidden"
  >
    <div className="fixed inset-0 z-10" />
    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto dark:bg-white bg-black  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Logo />
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
              <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white/80 hover:text-white/50 dark:text-gray-900 dark:hover:text-gray-900/80">
                Product
                {/* <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                /> */}
              </DisclosureButton>
              {/* <DisclosurePanel className="mt-2 space-y-2">
                {navItems.products
                  .concat(navItems.callsToAction)
                  .map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white/80 hover:text-white/50 dark:text-gray-900 dark:hover:text-gray-900/80"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
              </DisclosurePanel> */}
            </Disclosure>
            {navItems.otherLinks.slice(0, -1).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white/80 hover:text-white/50 dark:text-gray-900 dark:hover:text-gray-900/80"
              >
                {item.name}
              </a>
            ))}
            <a
              href={navItems.otherLinks[navItems.otherLinks.length - 1].href}
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white/80 hover:text-white/50 dark:text-gray-900 dark:hover:text-gray-900/80"
            >
              {navItems.otherLinks[navItems.otherLinks.length - 1].name}
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
);

export default MobileMenu;
