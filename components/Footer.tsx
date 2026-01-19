'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white border-t border-[#eee] relative z-[99]">
      <div id="footer-bottom" className="relative text-center pb-6 sm:pb-8">
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="border border-[#f1f1f1] border-t-0 text-foreground overflow-hidden text-center w-[60px] h-[30px] block mx-auto rounded-b-[10px] hover:text-foreground transition-colors"
          aria-label="Back to top"
        >
          <svg className="w-[38px] h-[38px] relative -top-[7px] mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>

        <div className="container-inner mx-auto px-4 sm:px-6 lg:px-10 max-w-[1080px]">
          <div className="pt-5">
            <div id="copyright" className="text-[#666] text-xs sm:text-sm font-light leading-relaxed">
              <p>Jolanta Kwilman © {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
