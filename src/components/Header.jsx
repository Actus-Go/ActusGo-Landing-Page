import { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react'; // Import Sun and Moon icons
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Initialize theme from localStorage
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === 'ar';

  // Scroll event listener for changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Apply the theme to the body element
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme); // Store theme in localStorage
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  };

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { key: 'products', href: '#products' },
    { key: 'solution', href: '#solution' },
    { key: 'developers', href: '#developers' },
    { key: 'resources', href: '#resources' },
    { key: 'pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all shadow-lg duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-md py-1' : 'bg-gray-900 py-3'
      }`}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className={`flex-shrink-0 flex items-center gap-2 transition-all duration-300 ${isOpen ? 'scale-90' : 'scale-100'
            }`}>
            <span className={`font-bold text-white transition-all duration-300 ${isOpen ? 'text-xl' : 'text-2xl'
              }`}>
              {t('brand.name')}
            </span>
            <div className={`transition-all duration-300 ${isOpen ? 'w-[40px]' : 'w-[50px]'
              }`}>
              <img
                className="max-w-[100%] rounded-2xl"
                src="/public/images/ActusGoLogo.png"
                alt="Logo"
              />
            </div>
          </div>

          {/* Central Navigation - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-gray-300 px-4 transition-colors duration-200"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={changeLanguage}
              className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
              aria-label={t('nav.changeLanguage')}
            >
              <Globe className="h-5 w-5 mr-1 rtl:ml-1" />
              {isRTL ? 'English' : 'العربية'}
            </button>

            <button
              onClick={toggleTheme}
              className="text-white hover:text-gray-300 transition-colors duration-200"
              aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
              {t('nav.signIn')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
              aria-label={t('nav.toggleMenu')}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slides from right in LTR, left in RTL */}
        <div
          className={`fixed z-[1000] top-0 bottom-0 w-72 bg-black transform transition-transform duration-300 ease-in-out md:hidden ${isRTL
              ? `right-auto left-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
              : `left-auto right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
            }`}
          style={{
            boxShadow: isOpen
              ? isRTL
                ? '4px 0 15px rgba(0,0,0,0.3)'
                : '-4px 0 15px rgba(0,0,0,0.3)'
              : 'none'
          }}
        >
          <div className="flex flex-col relative z-[1000] h-full">
            {/* Mobile Menu Header */}
            <div className={`flex p-4 ${isRTL ? 'justify-start' : 'justify-start'}`}>
              <button
                onClick={toggleMenu}
                className="text-white p-2 hover:bg-gray-700 rounded-md"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className={`flex ${isRTL ? 'items-start' : 'items-start'} flex-col flex-1 px-4`}>
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-white py-3 hover:bg-gray-700 rounded-md px-4 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-700">
              <div className={`flex ${isRTL ? 'items-end' : 'items-start'}`}>

                <button
                  onClick={changeLanguage}
                  className={`w-full text-white flex items-center px-4 py-3 hover:bg-gray-700 rounded-md mb-4 transition-colors duration-200`}
                >
                  <Globe className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {isRTL ? 'English' : 'العربية'}
                </button>

              </div>

              <button className="w-full bg-white text-gray-900 px-4 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                {t('nav.signIn')}
              </button>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={toggleMenu}
            style={{ zIndex: -1 }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
