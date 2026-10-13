import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import svgPaths from "../../imports/svg-27yptgztxt";
import { Linkedin, Menu, X } from "lucide-react";

function Af() {
  return (
    <div className="h-[34px] w-[48px] min-[900px]:h-[40px] min-[900px]:w-[56px]" data-name="AF">
      <Link
        to="/"
        onClick={() =>
          window.scrollTo(0, 0)
        }
      >
        <svg
          className="block size-full cursor-pointer"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 84.2188 60.6562"
        >
          <g id="AF">
            <path
              d={svgPaths.p3746de00}
              fill="var(--fill-0, #63535B)"
              id="Vector"
            />
            <path
              d={svgPaths.p1f0c7780}
              fill="var(--fill-0, #63535B)"
              id="Vector_2"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
}

function ConnectButton() {
  return (
    <a
      href="https://www.linkedin.com/in/ahmedhfouad/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center hover:opacity-80 transition-opacity"
      aria-label="LinkedIn Profile"
    >
      <Linkedin
        className="w-8 h-8 text-[#ef6351]"
        strokeWidth={2}
      />
    </a>
  );
}

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isMobile = window.innerWidth < 900;
      const projectsSection = document.getElementById(
        isMobile ? "projects-mobile" : "projects-desktop"
      );
      const studioSection = document.getElementById(
        isMobile ? "studio-mobile" : "studio-desktop"
      );

      if (
        studioSection &&
        studioSection.offsetTop > 0 &&
        scrollPosition >= studioSection.offsetTop - 150
      ) {
        setActiveSection("studio");
      } else if (
        projectsSection &&
        projectsSection.offsetTop > 0 &&
        scrollPosition >= projectsSection.offsetTop - 150
      ) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position

      return () =>
        window.removeEventListener("scroll", handleScroll);
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const isMobile = window.innerWidth < 900;
    const resolvedId = isMobile ? `${sectionId}-mobile` : `${sectionId}-desktop`;
    const navHeight = document.querySelector("nav")?.closest("div[class*='fixed']")?.clientHeight
      ?? 64;

    const doScroll = () => {
      const element = document.getElementById(resolvedId);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 150);
    } else {
      doScroll();
    }
    
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#fff9e7] z-50 min-h-[64px]" style={{ borderBottom: '2px solid #63535B' }}>
      {/* AF logo — always 22px from left viewport edge */}
      <div className="absolute left-[22px] top-1/2 -translate-y-1/2">
        <Af />
      </div>

      {/* Centered nav links */}
      <div className="w-full flex items-center justify-center min-h-[64px]">
        <nav className="hidden min-[900px]:flex items-center gap-8">
          <button
            onClick={scrollToTop}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                activeSection === "home" &&
                location.pathname === "/"
                  ? "text-[#ef6351]"
                  : "text-[#63535B] hover:text-[#ef6351]"
              }
            >
              Home
            </span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                activeSection === "projects"
                  ? "text-[#ef6351]"
                  : "text-[#63535B] hover:text-[#ef6351]"
              }
            >
              Projects
            </span>
          </button>
          <button
            onClick={() => scrollToSection("studio")}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                activeSection === "studio"
                  ? "text-[#ef6351]"
                  : "text-[#63535B] hover:text-[#ef6351]"
              }
            >
              Studio
            </span>
          </button>
          <button
            onClick={() => {
              navigate("/about");
              setTimeout(() => window.scrollTo(0, 0), 0);
            }}
            className="font-['Nunito_Sans:Regular',sans-serif] text-[20px] transition-colors bg-transparent border-none cursor-pointer"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <span
              className={
                isActive("/about")
                  ? "text-[#ef6351]"
                  : "text-[#63535B] hover:text-[#ef6351]"
              }
            >
              About
            </span>
          </button>
        </nav>
      </div>

      {/* Hamburger icon for mobile - right side */}
      <div className="min-[900px]:hidden absolute right-[22px] top-1/2 -translate-y-1/2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-transparent border-none cursor-pointer p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#63535B]" strokeWidth={2.5} />
          ) : (
            <Menu className="w-6 h-6 text-[#63535B]" strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile slide-out menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="min-[900px]:hidden fixed inset-0 bg-black/20 z-40 animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setMobileMenuOpen(false)}
            style={{ top: '64px' }}
          />
          
          {/* Menu panel */}
          <div className="min-[900px]:hidden fixed right-0 bg-[#fff9e7] shadow-lg z-50 flex flex-col py-8 px-6 gap-6 animate-[slideInRight_0.3s_ease-out]" style={{ top: '64px', width: '240px', minHeight: 'calc(100vh - 64px)' }}>
            <button
              onClick={scrollToTop}
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-left text-[18px] transition-colors bg-transparent border-none cursor-pointer"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              <span
                className={
                  activeSection === "home" && location.pathname === "/"
                    ? "text-[#ef6351]"
                    : "text-[#63535B]"
                }
              >
                Home
              </span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-left text-[18px] transition-colors bg-transparent border-none cursor-pointer"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              <span
                className={
                  activeSection === "projects"
                    ? "text-[#ef6351]"
                    : "text-[#63535B]"
                }
              >
                Projects
              </span>
            </button>
            <button
              onClick={() => scrollToSection("studio")}
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-left text-[18px] transition-colors bg-transparent border-none cursor-pointer"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              <span
                className={
                  activeSection === "studio"
                    ? "text-[#ef6351]"
                    : "text-[#63535B]"
                }
              >
                Studio
              </span>
            </button>
            <button
              onClick={() => {
                navigate("/about");
                setTimeout(() => window.scrollTo(0, 0), 0);
                setMobileMenuOpen(false);
              }}
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-left text-[18px] transition-colors bg-transparent border-none cursor-pointer"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              <span
                className={
                  isActive("/about")
                    ? "text-[#ef6351]"
                    : "text-[#63535B]"
                }
              >
                About
              </span>
            </button>

            {/* LinkedIn link in mobile menu */}
            <div className="pt-4 mt-auto border-t" style={{ borderColor: 'rgba(99, 83, 91, 0.2)' }}>
              <ConnectButton />
            </div>
          </div>
        </>
      )}

      {/* LinkedIn icon — always 22px from right viewport edge */}
      <div className="hidden min-[900px]:block absolute right-[22px] top-1/2 -translate-y-1/2">
        <ConnectButton />
      </div>
    </div>
  );
}