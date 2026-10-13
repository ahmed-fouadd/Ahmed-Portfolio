import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Navigation } from "../components/Navigation";
import svgPaths from "../../imports/svg-27yptgztxt";
import imgLoftCapstone from "figma:asset/fdf0ae79670625e4270fe51502c86e0313f1ab0b.png";
import imgImage1 from "figma:asset/53f95c8acce783dc53eb9750520107c8cc1d9afc.png";
import imgImage2 from "figma:asset/8d2cc5647b285616e4723fb180f7da03e2f609a8.png";
import imgInnerLight from "figma:asset/c07762af4b3efaad2fba4788380794cbabd9eaa2.png";
import imgP10009271 from "figma:asset/168e178754a77a78b99c0555c815047d21bedf50.png";
import imgBeetle from "figma:asset/c565958b8547f31cd336f604c257c615ec4fd9f5.png";
import imgStudio1 from "figma:asset/91e5470d7aee7d6a75319aa1e060a71d03bbc6e1.png";
import imgStudio2 from "figma:asset/6bed3c8ca39fbce7693ec76bb5dee0795b23f727.png";
import imgStudio3 from "figma:asset/b36bd7ff20f178076cab2d390222c43b6cdf3f50.png";
import imgStudio4 from "figma:asset/908bea42d18f16bf6a37d8be032a426732e75823.png";
import imgStudio5 from "figma:asset/a3cad47adef444ea4301c95a6b82917fbd86e7fb.png";
import imgStudio6 from "figma:asset/6690ca69cd027810e5fa9a86daa3304c3ff80f0b.png";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [beetleSpinning, setBeetleSpinning] = useState(false);

  return (
    <div className="bg-[#fff9e7] min-h-screen">
      <style>{`
        @keyframes beetle-spin {
          from { transform: rotate(45deg); }
          to   { transform: rotate(405deg); }
        }
      `}</style>
      <Navigation />

      {/* Desktop Layout */}
      <div className="hidden min-[900px]:flex flex-col min-h-screen">
        {/* Hero Section - Cream Background - exactly from Figma */}
        <div className="max-w-[1280px] mx-auto relative w-full">
          <div className="relative h-screen bg-[#fff9e7] flex flex-col">
            {/* Beetle - top right, shifted down and left, rotated 45° clockwise */}
            <img
              src={imgBeetle}
              alt="Beetle illustration"
              className="absolute select-none w-[220px] cursor-pointer"
              onMouseEnter={() => setBeetleSpinning(true)}
              onAnimationEnd={() => setBeetleSpinning(false)}
              style={{
                top: "120px",
                right: "120px",
                transform: beetleSpinning
                  ? undefined
                  : "rotate(45deg)",
                animation: beetleSpinning
                  ? "beetle-spin 0.6s ease-in-out forwards"
                  : "none",
              }}
            />
            <div className="flex-1 flex items-center justify-center pt-[80px]">
              {/* Centered group — 903×465px, internal positions unchanged */}
              <div
                className="relative"
                style={{ width: "903px", height: "465px" }}
              >
                {/* Signature Name - Ahmed Fouad */}
                <div className="absolute left-0 top-0">
                  <div className="flex flex-col w-[619px] h-[465px] justify-center text-[#63535b] font-['Zeyada:Regular',sans-serif] text-[295px] font-normal leading-[193px]">
                    <p className="whitespace-pre-wrap m-[0px]">
                      <span style={{ letterSpacing: "-28px" }}>
                        A
                      </span>
                      <span style={{ letterSpacing: "-10px" }}>
                        h
                      </span>
                      <span style={{ letterSpacing: "-14px" }}>
                        m
                      </span>
                      <span style={{ letterSpacing: "-1px" }}>
                        ed
                      </span>
                      <span>{`       `}</span>
                      <span
                        style={{ letterSpacing: "-33px" }}
                      >{`   F`}</span>
                      <span style={{ letterSpacing: "-26px" }}>
                        o
                      </span>
                      <span style={{ letterSpacing: "-10px" }}>
                        u
                      </span>
                      <span style={{ letterSpacing: "-5px" }}>
                        a
                      </span>
                      <span style={{ letterSpacing: "-4px" }}>
                        d
                      </span>
                    </p>
                  </div>
                </div>

                {/* Subtitle - Product, UI/UX and Brand Design */}
                <div className="absolute left-0 top-[390px]">
                  <p className="w-[420px] h-[42px] font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] text-[32px] leading-[42px] text-justify mx-[25px] my-[0px] whitespace-nowrap">
                    Product, UI/UX and Brand Design
                  </p>
                </div>

                {/* Bio Text */}
                <div className="absolute left-[524px] top-[149px]">
                  <div className="w-[379px] h-[277px] flex flex-col justify-center">
                    <p className="text-[24px] leading-[26px] whitespace-pre-wrap m-[0px]">
                      <span
                        className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75]"
                        style={{
                          fontVariationSettings:
                            "'YTLC' 500, 'wdth' 100",
                        }}
                      >{`22 years old, designer, researcher, and takes too many photos. Based between Boston and Cairo, `}</span>
                      <span
                        className="font-['Nunito_Sans:Black',sans-serif] font-black text-[#708b75]"
                        style={{
                          fontVariationSettings:
                            "'YTLC' 500, 'wdth' 100",
                        }}
                      >
                        currently studying Engineering
                        Psychology and Studio Arts at Tufts
                        University.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll for more - fixed at bottom of viewport */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[60px] mx-[0px] my-[-41px] cursor-pointer"
              onClick={() => {
                const nav = document.querySelector(
                  "[class*='fixed']",
                ) as HTMLElement | null;
                const navHeight = nav?.clientHeight ?? 64;
                const el = document.getElementById(
                  "projects-desktop",
                );
                if (el)
                  window.scrollTo({
                    top:
                      el.getBoundingClientRect().top +
                      window.scrollY -
                      navHeight,
                    behavior: "smooth",
                  });
              }}
            >
              <div className="flex flex-row items-center gap-3">
                <p
                  className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[#ef6351] text-[20px] leading-[0]"
                  style={{
                    fontVariationSettings:
                      "'YTLC' 500, 'wdth' 100",
                  }}
                >
                  Scroll for more
                </p>
                <div className="h-[17px] w-[20px]">
                  <svg
                    className="w-5 h-4"
                    fill="none"
                    viewBox="0 0 20 14"
                  >
                    <path
                      d={svgPaths.p386d7e80}
                      stroke="#EF6351"
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Green section - spans full viewport width and goes to bottom */}
        <div className="w-full bg-[#708b75] pb-12 flex-1">
          <div className="max-w-[1280px] mx-auto px-[100px]">
            {/* Projects Section */}
            <div
              id="projects-desktop"
              className="pt-8 scroll-mt-[52px]"
            >
              <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[48px] leading-[193px] p-[0px] mx-[0px] mt-[-22px] mb-[-52px]">
                Projects
              </h2>

              {/* Projects Grid */}
              <div className="space-y-6">
                {/* Project 1 - LOFT x Tufts Capstone */}
                <Link
                  to="/projects/loft-capstone"
                  onClick={() => window.scrollTo(0, 0)}
                  className="grid grid-cols-2 gap-6 items-start group no-underline"
                >
                  <div className="relative pr-[12px] pb-[12px]">
                    <div
                      className="absolute bg-[#ef6351]"
                      style={{
                        top: 0,
                        left: 0,
                        right: "12px",
                        bottom: "12px",
                      }}
                    />
                    <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px]">
                      <img
                        alt="LOFT x Tufts Capstone"
                        className="w-full h-[235px] object-cover"
                        src={imgLoftCapstone}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-2">
                      LOFT × TUFTS CAPSTONE
                    </h3>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2026 || UX Research + Product Design
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >A design project focused on reducing data anxiety in fitness wearables. Created in partnership with Loft Design, this interface bridges objective device biometrics with subjective user feelings to help active young adults seamlessly track and optimize their daily rest.</p>
                  </div>
                </Link>

                {/* Project 2 - Orbit */}
                <Link
                  to="/projects/orbit-lighting"
                  onClick={() => window.scrollTo(0, 0)}
                  className="grid grid-cols-2 gap-6 items-start group no-underline"
                >
                  <div>
                    <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2">
                      ORBIT: LIGHTING REIMAGINED
                    </h3>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Industrial Design
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A dual-mode lamp that shifts seamlessly
                      from focused task lighting to ambient
                      glow. Built to bring calm, comfort, and
                      control to compact living through
                      intuitive, analog design.
                    </p>
                  </div>
                  <div className="relative pr-[12px] pb-[12px]">
                    <div
                      className="absolute bg-[#ef6351]"
                      style={{
                        top: 0,
                        left: 0,
                        right: "12px",
                        bottom: "12px",
                      }}
                    />
                    <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px]">
                      <img
                        alt="Orbit Lighting"
                        className="w-full h-[235px] object-cover"
                        src={imgImage2}
                      />
                    </div>
                  </div>
                </Link>

                {/* Project 3 - Cymatics */}
                <Link
                  to="/projects/cymatics-resonance"
                  onClick={() => window.scrollTo(0, 0)}
                  className="grid grid-cols-2 gap-6 items-start group no-underline"
                >
                  <div className="relative pr-[12px] pb-[12px]">
                    <div
                      className="absolute bg-[#ef6351]"
                      style={{
                        top: 0,
                        left: 0,
                        right: "12px",
                        bottom: "12px",
                      }}
                    />
                    <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px]">
                      <img
                        alt="Cymatics Resonance"
                        className="w-full h-[235px] object-cover"
                        src={imgImage1}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-2">
                      CYMATICS: RESONANCE
                    </h3>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || Product Design + Human Factors
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      A real-time visualizer that responds to
                      live music with evolving cymatic imagery.
                      Built to make concerts more immersive and
                      inclusive through thoughtful, sound-driven
                      design.
                    </p>
                  </div>
                </Link>

                {/* Project 4 - InnerLight */}
                <Link
                  to="/projects/innerlight"
                  onClick={() => window.scrollTo(0, 0)}
                  className="grid grid-cols-2 gap-6 items-start group no-underline"
                >
                  <div>
                    <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2">
                      INNERLIGHT: DIGITAL CARE
                    </h3>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] leading-[32px] mb-3">
                      2025 || UI/UX + Web Programming
                    </p>
                    <p
                      className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] text-[16px] leading-[28px]"
                      style={{
                        fontVariationSettings:
                          "'YTLC' 500, 'wdth' 100",
                      }}
                    >
                      An online platform for group therapy
                      designed to help find affordable mental
                      health support. Built from scratch with
                      HTML, CSS, JavaScript, and jQuery as part
                      of a full website design project.
                    </p>
                  </div>
                  <div className="relative pr-[12px] pb-[12px]">
                    <div
                      className="absolute bg-[#ef6351]"
                      style={{
                        top: 0,
                        left: 0,
                        right: "12px",
                        bottom: "12px",
                      }}
                    />
                    <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[12px] group-hover:translate-y-[12px]">
                      <img
                        alt="InnerLight: Digital Care"
                        className="w-full h-[235px] object-cover"
                        src={imgInnerLight}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Studio Section */}
            <div
              id="studio-desktop"
              className="pt-14 scroll-mt-[52px]"
            >
              <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[48px] leading-[193px] mx-[0px] mt-[0px] mb-[-52px] px-[0px] py-[1px]">
                Studio
              </h2>

              {/* Studio grid: magazine stack left (2 cols), other 3 right (1 col) */}
              <div className="grid grid-cols-3 gap-4 items-start">
                {/* Left: two magazine images stacked */}
                <div className="col-span-2 flex flex-col gap-4">
                  <img
                    alt="Tufts Observer cover"
                    className="w-full h-auto"
                    src={imgStudio1}
                  />
                  <img
                    alt="Tufts Observer spread"
                    className="w-full h-auto"
                    src={imgStudio5}
                  />
                </div>
                {/* Right: street photo + sculpture stacked */}
                <div className="flex flex-col gap-4">
                  <img
                    alt="Street photography"
                    className="w-full h-auto"
                    src={imgStudio2}
                  />
                  <img
                    alt="Wooden sculpture"
                    className="w-full h-auto"
                    src={imgStudio3}
                  />
                </div>
              </div>
              {/* Bottom row: two paintings side by side */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  alt="Still life painting"
                  className="w-full h-[520px] object-cover"
                  src={imgStudio4}
                />
                <img
                  alt="Figure with flowers painting"
                  className="w-full h-[520px] object-cover"
                  src={imgStudio6}
                />
              </div>
            </div>

            {/* Footer - Three Column Layout - Closer to bottom */}
            <div className="pt-16 pb-8">
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Left - Reach Out */}
                <div>
                  <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[28px] leading-[32px] mb-3">
                    Reach Out
                  </h3>
                  <p
                    className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#fff9e7] text-[18px] leading-[32px]"
                    style={{
                      fontVariationSettings:
                        "'YTLC' 500, 'wdth' 100",
                    }}
                  >
                    <a
                      href="mailto:aahmedhfouad@gmail.com"
                      className="text-[#fff9e7] hover:text-[#ef6351] transition-colors no-underline"
                    >
                      aahmedhfouad@gmail.com
                    </a>
                  </p>
                </div>

                {/* Center - Back to Top */}
                <div className="flex justify-center">
                  <div
                    className="group cursor-pointer"
                    onClick={scrollToTop}
                  >
                    <svg
                      className="w-[150px] h-[20px]"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 150.248 20.6"
                    >
                      <g>
                        <path
                          d={svgPaths.p1fa80e00}
                          fill="currentColor"
                          className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                        />
                        <g>
                          <path
                            d={svgPaths.pdf16b80}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p29503900}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p2b24fc80}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p1100c400}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p18501dc0}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p7c7d200}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p16f48b00}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p30892b00}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                          <path
                            d={svgPaths.p105e0ca0}
                            fill="currentColor"
                            className="text-[#FFF9E7] group-hover:text-[#ef6351] transition-colors duration-200"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Right - Resume */}
                <div className="flex justify-end">
                  <a
                    href="https://drive.google.com/file/d/1eYyL45MHyLW9wzBgEROQh3aUhNN96y4s/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block pr-[6px] pb-[6px] group no-underline"
                  >
                    <div
                      className="absolute bg-[#ef6351]"
                      style={{
                        top: 0,
                        left: 0,
                        right: "6px",
                        bottom: "6px",
                      }}
                    />
                    <span
                      className="relative z-10 inline-block px-6 py-1.5 text-[#ef6351] font-['Dosis:Bold',sans-serif] font-bold text-[19px] transition-transform duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]"
                      style={{ backgroundColor: "#fff9e7" }}
                    >
                      Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="min-[900px]:hidden flex flex-col min-h-screen pt-16 px-6 pb-8">
        {/* Hero */}
        <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center">
          <p
            className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75] mx-[0px] mt-[0px] mb-[60px]"
            style={{ fontSize: "26px" }}
          >
            Product, UI and Brand Design
          </p>
          <h1
            className="font-['Zeyada:Regular',sans-serif] text-[#63535b] mx-[0px] mt-[0px] mb-[5px]"
            style={{ fontSize: "160px", lineHeight: 0.6 }}
          >
            Ahmed Fouad
          </h1>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] max-w-[520px] p-[0px] mx-[15px] mt-[130px] mb-[150px]"
            style={{
              fontSize: "19px",
              lineHeight: 1.65,
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            21 years old, designer, researcher, and takes too
            many photos. Based between Boston and Cairo,{" "}
            <span
              className="font-['Nunito_Sans:Black',sans-serif] font-black"
              style={{
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              currently studying Engineering Psychology and
              Studio Arts at Tufts University.
            </span>
          </p>

          {/* Scroll for more - anchored to bottom of hero */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => {
              const nav = document.querySelector(
                "[class*='fixed']",
              ) as HTMLElement | null;
              const navHeight = nav?.clientHeight ?? 64;
              const el = document.getElementById(
                "projects-mobile",
              );
              if (el)
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    navHeight,
                  behavior: "smooth",
                });
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <p
                className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[#ef6351]"
                style={{
                  fontSize: "22px",
                  fontVariationSettings:
                    "'YTLC' 500, 'wdth' 100",
                }}
              >
                Scroll for more
              </p>
              <svg
                className="w-7 h-5"
                fill="none"
                viewBox="0 0 20 14"
              >
                <path
                  d={svgPaths.p386d7e80}
                  stroke="#EF6351"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Projects Section Mobile */}
        <div
          id="projects-mobile"
          className="bg-[#708b75] -mx-6 px-6 py-12 mb-0 scroll-mt-[52px] flex-1"
        >
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-5xl mb-5">
            Projects
          </h2>

          <Link
            to="/projects/loft-capstone"
            onClick={() => window.scrollTo(0, 0)}
            className="block mb-12 no-underline group"
          >
            <div className="relative mb-4 pr-[6px] pb-[6px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "6px",
                  bottom: "6px",
                }}
              />
              <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                <img
                  src={imgLoftCapstone}
                  alt="LOFT x Tufts Capstone"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2">
              LOFT × TUFTS CAPSTONE
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[15px] leading-[28px] mb-3">
              2026 || UX Research + Product Design
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] leading-[30px]"
              style={{
                fontSize: "17px",
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A design project focused on reducing data anxiety in fitness wearables. Created in partnership with Loft Design, this interface bridges objective device biometrics with subjective user feelings to help active young adults seamlessly track and optimize their daily rest.
            </p>
          </Link>

          <Link
            to="/projects/cymatics-resonance"
            onClick={() => window.scrollTo(0, 0)}
            className="block mb-12 no-underline group"
          >
            <div className="relative mb-4 pr-[6px] pb-[6px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "6px",
                  bottom: "6px",
                }}
              />
              <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                <img
                  src={imgImage1}
                  alt="Cymatics Resonance"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2">
              CYMATICS: RESONANCE
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[15px] leading-[28px] mb-3">
              2025 || Product Design + Human Factors
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] leading-[30px]"
              style={{
                fontSize: "17px",
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A real-time visualizer that responds to live music
              with evolving cymatic imagery. Built to make
              concerts more immersive and inclusive through
              thoughtful, sound-driven design.
            </p>
          </Link>

          <Link
            to="/projects/orbit-lighting"
            onClick={() => window.scrollTo(0, 0)}
            className="block mb-12 no-underline group"
          >
            <div className="relative mb-4 pr-[6px] pb-[6px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "6px",
                  bottom: "6px",
                }}
              />
              <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                <img
                  src={imgImage2}
                  alt="Orbit Lighting"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2">
              ORBIT: LIGHTING REIMAGINED
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[15px] leading-[28px] mb-3">
              2025 || Industrial Design
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] leading-[30px]"
              style={{
                fontSize: "17px",
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              A dual-mode lamp that shifts seamlessly from
              focused task lighting to ambient glow. Built to
              bring calm, comfort, and control to compact living
              through intuitive, analog design.
            </p>
          </Link>

          <Link
            to="/projects/innerlight"
            className="block no-underline group"
          >
            <div className="relative mb-4 pr-[6px] pb-[6px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "6px",
                  bottom: "6px",
                }}
              />
              <div className="relative z-10 overflow-hidden transition-transform duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
                <img
                  src={imgInnerLight}
                  alt="InnerLight: Digital Care"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[32px] mb-2">
              INNERLIGHT: DIGITAL CARE
            </h3>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[15px] leading-[28px] mb-3">
              2025 || UI/UX + Web Programming
            </p>
            <p
              className="font-['Nunito_Sans:Regular',sans-serif] text-[#fff9e7] leading-[30px]"
              style={{
                fontSize: "17px",
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
              }}
            >
              An online platform for group therapy designed to
              help find affordable mental health support. Built
              from scratch with HTML, CSS, JavaScript, and
              jQuery as part of a full website design project.
            </p>
          </Link>
        </div>

        {/* Studio Section Mobile */}
        <div
          id="studio-mobile"
          className="bg-[#708b75] -mx-6 px-6 py-12 scroll-mt-[52px]"
        >
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-5xl mb-5">
            Studio
          </h2>

          <div className="space-y-4">
            <div>
              <img
                src={imgStudio1}
                alt="Tufts Observer cover"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={imgStudio5}
                alt="Tufts Observer spread"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={imgStudio2}
                alt="Street photography"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={imgStudio3}
                alt="Wooden sculpture"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={imgStudio4}
                alt="Still life painting"
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div>
              <img
                src={imgStudio6}
                alt="Figure with flowers painting"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer Mobile */}
        <div className="bg-[#708b75] -mx-6 px-6 py-10">
          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[34px] leading-[40px] mb-4">
            REACH OUT!
          </h3>
          <p
            className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[32px]"
            style={{
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            <a
              href="mailto:aahmedhfouad@gmail.com"
              className="text-[#fff9e7] hover:text-[#ef6351] transition-colors no-underline"
            >
              aahmedhfouad@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}