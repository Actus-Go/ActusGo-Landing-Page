// src/components/Logo.js
import LogoDark from "/images/logoDark.png";
import LogoLight from "/images/logoLight.png";

const Logo = () => (
  <a href="/" className="-m-1.5 p-1.5">
    <span className="sr-only">SMSInEgy</span>
    <img alt="" src={LogoDark} className="h-8 w-auto dark:block hidden" />
    <img alt="" src={LogoLight} className="h-8 w-auto dark:hidden" />
  </a>
);

export default Logo;
