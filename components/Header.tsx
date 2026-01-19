'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProjectsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/realizacje') {
      return pathname.startsWith('/realizacje');
    }
    if (path === '/publikacje') {
      return pathname.startsWith('/publikacje');
    }
    return pathname === path;
  };

  return (
    <header id="header" className="bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] relative py-4 sm:py-6 lg:py-8">
      <div className="container-inner mx-auto px-4 sm:px-6 lg:px-10 max-w-[1080px]">
        <div id="header-top" className="group pb-0">
          <div className="flex items-center justify-between">
            <h1 className="site-title text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight leading-tight sm:leading-[60px] py-2 sm:py-2.5 relative z-[2] flex-1">
              <Link 
                href="/" 
                className="text-foreground hover:text-foreground/80 block max-w-full"
              >
                Jolanta Kwilman
              </Link>
            </h1>

            {/* Mobile menu toggle - centered with Jolanta Kwilman */}
            <button
              className="menu-toggle lg:hidden flex flex-col gap-2 p-3 sm:p-4 shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="block w-6 sm:w-7 h-0.5 bg-foreground transition-transform"></span>
              <span className="block w-6 sm:w-7 h-0.5 bg-foreground transition-opacity"></span>
              <span className="block w-6 sm:w-7 h-0.5 bg-foreground transition-transform"></span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center pt-3 pb-7 pl-7 relative z-10">
            <ul className="flex items-start gap-0">
              <li className="mt-4 mr-5">
                <Link 
                  href="/oferta" 
                  className={`hover:text-foreground transition-colors text-base font-normal ${isActive('/oferta') ? 'text-foreground' : 'text-foreground/50'}`}
                >
                  Oferta
                </Link>
              </li>
              <li 
                className="relative mt-4 mr-5"
                onMouseEnter={() => setIsProjectsMenuOpen(true)}
                onMouseLeave={() => setIsProjectsMenuOpen(false)}
              >
                <div className="flex items-center pb-2">
                  <Link 
                    href="/realizacje" 
                    className={`hover:text-foreground hover:[&>span]:text-foreground transition-colors text-base font-normal flex items-center gap-0.5 ${isActive('/realizacje') ? 'text-foreground' : 'text-foreground/50'}`}
                  >
                    Realizacje
                    <span 
                      className="text-foreground/20 transition-colors"
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-2" fill="currentColor" viewBox="0 0 20 12">
                        <polygon points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358" transform="translate(-1310 -358)"></polygon>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div 
                  className={`absolute top-full left-0 transition-all duration-150 ${isProjectsMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1.5'}`}
                >
                  <div className="bg-[#333] text-white rounded min-w-[200px] py-2.5 shadow-lg">
                    <Link 
                      href="/realizacje/wnetrza-prywatne" 
                      className="block px-5 py-2.5 text-[#eee] hover:bg-white/10 transition-colors border-b border-white/[0.08] text-[15px]"
                    >
                      Wnętrza prywatne
                    </Link>
                    <Link 
                      href="/realizacje/wnetrza-uzytecznosci-publicznej" 
                      className="block px-5 py-2.5 text-[#eee] hover:bg-white/10 transition-colors text-[15px]"
                    >
                      Wnętrza użyteczności publicznej
                    </Link>
                  </div>
                </div>
              </li>
              <li className="mt-4 mr-5">
                <Link 
                  href="/publikacje" 
                  className={`hover:text-foreground transition-colors text-base font-normal ${isActive('/publikacje') ? 'text-foreground' : 'text-foreground/50'}`}
                >
                  Publikacje
                </Link>
              </li>
              <li className="mt-4 mr-5">
                <Link 
                  href="/referencje" 
                  className={`hover:text-foreground transition-colors text-base font-normal ${isActive('/referencje') ? 'text-foreground' : 'text-foreground/50'}`}
                >
                  Referencje
                </Link>
              </li>
              <li className="mt-4 mr-0">
                <Link 
                  href="/kontakt" 
                  className={`hover:text-foreground transition-colors text-base font-normal ${isActive('/kontakt') ? 'text-foreground' : 'text-foreground/50'}`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
            </nav>
          </div>

          {/* Mobile Navigation - appears after Jolanta Kwilman, before Pracownia */}
          <nav className={`lg:hidden border-t border-black/[0.07] overflow-hidden transition-all duration-300 ease-out ${isMenuOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0 pb-0'}`}>
            <ul className="flex flex-col">
              <li className="border-b border-black/[0.07]">
                <Link 
                  href="/oferta" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-foreground py-3.5 px-5 text-base ${isActive('/oferta') ? 'font-bold' : 'font-semibold'}`}
                >
                  Oferta
                </Link>
              </li>
              <li className="border-b border-black/[0.07]">
                <div>
                  <div className="flex items-center">
                    <Link 
                      href="/realizacje" 
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex-1 text-foreground py-3.5 pl-5 text-base ${isActive('/realizacje') ? 'font-bold' : 'font-semibold'}`}
                    >
                      Realizacje
                    </Link>
                    <button 
                      className="text-foreground py-3.5 px-5 transition-transform duration-300"
                      onClick={() => setIsProjectsMenuOpen(!isProjectsMenuOpen)}
                      aria-label="Toggle submenu"
                    >
                      <svg 
                        className={`w-3.5 h-2 transition-transform duration-300 ${isProjectsMenuOpen ? 'rotate-180' : ''}`}
                        fill="currentColor" 
                        viewBox="0 0 20 12"
                      >
                        <polygon points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358" transform="translate(-1310 -358)"></polygon>
                      </svg>
                    </button>
                  </div>
                  <ul className={`bg-black/[0.03] overflow-hidden transition-all duration-300 ease-out ${isProjectsMenuOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <li className="border-b border-black/[0.07]">
                      <Link 
                        href="/realizacje/wnetrza-prywatne" 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-foreground py-3 pl-10 text-sm"
                      >
                        Wnętrza prywatne
                      </Link>
                    </li>
                    <li className="border-b border-black/[0.07]">
                      <Link 
                        href="/realizacje/wnetrza-uzytecznosci-publicznej" 
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-foreground py-3 pl-10 text-sm"
                      >
                        Wnętrza użyteczności publicznej
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="border-b border-black/[0.07]">
                <Link 
                  href="/publikacje" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-foreground py-3.5 px-5 text-base ${isActive('/publikacje') ? 'font-bold' : 'font-semibold'}`}
                >
                  Publikacje
                </Link>
              </li>
              <li className="border-b border-black/[0.07]">
                <Link 
                  href="/referencje" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-foreground py-3.5 px-5 text-base ${isActive('/referencje') ? 'font-bold' : 'font-semibold'}`}
                >
                  Referencje
                </Link>
              </li>
              <li className="border-b border-black/[0.07]">
                <Link 
                  href="/kontakt" 
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-foreground py-3.5 px-5 text-base ${isActive('/kontakt') ? 'font-bold' : 'font-semibold'}`}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>

          {/* Pracownia subtitle - only on home page, hidden on mobile when menu is open */}
          {pathname === '/' && (
            <div className={`site-subtitle text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-foreground mt-4 ${isMenuOpen ? 'hidden lg:block' : ''}`}>
              Pracownia Architektury<br />Wnętrz
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
