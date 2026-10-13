import { Link } from "react-router";
import { Navigation } from "../components/Navigation";

import imgHome       from "figma:asset/2dc2f595eb85d07a9e9ea1655758c290916a67c5.png";
import imgQuiz       from "figma:asset/19c98c5324442a8b1f67dc0c041efb97bbebd4d6.png";
import imgTestimonials from "figma:asset/00da407baca7936437b2642b7e27eddce91993fa.png";
import imgFaqDesk    from "figma:asset/a986671150dbf2364460836067f241f4c77dc538.png";
import imgFaqMobile  from "figma:asset/70bef5981edc359d5166f583ae81c72bb7e09678.png";
import imgResDesk    from "figma:asset/03589f83cc986890401a5fa0f16aa94b765af3df.png";
import imgResMobile  from "figma:asset/a4f1beee5ac25d422558c4d24f7598286d093323.png";

const fvs = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// ── Back button (green, orange shadow) ────────────────────────────────────────
function BackButton() {
  return (
    <Link
      to="/"
      onClick={() => window.scrollTo(0, 0)}
      className="relative inline-block pr-[6px] pb-[6px] group no-underline"
    >
      <div
        className="absolute bg-[#ef6351]"
        style={{ top: 0, left: 0, right: "6px", bottom: "6px" }}
      />
      <span
        className="relative z-10 inline-block px-6 py-1.5 text-[#fff9e7] font-['Dosis:Bold',sans-serif] font-bold text-[19px] transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px] group-hover:bg-[#ef6351]"
        style={{ backgroundColor: "#708b75" }}
      >
        ← Back to projects
      </span>
    </Link>
  );
}

function MobileBackButton() {
  return (
    <Link
      to="/"
      onClick={() => window.scrollTo(0, 0)}
      className="relative inline-block pr-[6px] pb-[6px] group no-underline"
    >
      <div
        className="absolute bg-[#ef6351]"
        style={{ top: 0, left: 0, right: "6px", bottom: "6px" }}
      />
      <span
        className="relative z-10 inline-block px-5 py-1.5 text-[#fff9e7] font-['Dosis:Bold',sans-serif] font-bold text-[17px] transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px] group-hover:bg-[#ef6351]"
        style={{ backgroundColor: "#708b75" }}
      >
        ← Back to projects
      </span>
    </Link>
  );
}

// ── Eyebrows ──────────────────────────────────────────────────────────────────
function EyebrowCream({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}
function EyebrowGreen({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[12px] tracking-widest uppercase mb-3" style={{ opacity: 0.6 }}>
      {children}
    </p>
  );
}

// ── Section headings ──────────────────────────────────────────────────────────
function H2Cream({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[42px] leading-[50px] mb-8">
      {children}
    </h2>
  );
}
function H2Green({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-8">
      {children}
    </h2>
  );
}

// ── Offset-bordered image ─────────────────────────────────────────────────────
function BorderedImage({
  src,
  alt,
  shadowColor = "#ef6351",
  offset = 10,
  fill = false,
}: {
  src: string;
  alt: string;
  shadowColor?: string;
  offset?: number;
  fill?: boolean;
}) {
  if (fill) {
    return (
      <div
        className="h-full relative"
        style={{ paddingRight: offset, paddingBottom: offset }}
      >
        <div
          className="absolute"
          style={{ top: 0, left: 0, right: offset, bottom: offset, backgroundColor: shadowColor }}
        />
        <div
          className="relative z-10 overflow-hidden border-2 border-[#ef6351]"
          style={{ height: "100%" }}
        >
          <img src={src} alt={alt} className="w-full h-full object-cover object-top block" />
        </div>
      </div>
    );
  }
  return (
    <div
      className="relative"
      style={{ paddingRight: offset, paddingBottom: offset }}
    >
      <div
        className="absolute"
        style={{
          top: 0,
          left: 0,
          right: offset,
          bottom: offset,
          backgroundColor: shadowColor,
        }}
      />
      <div className="relative z-10 overflow-hidden border-2 border-[#ef6351]">
        <img src={src} alt={alt} className="w-full object-cover block" />
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ProjectInnerLight() {
  return (
    <div className="bg-[#fff9e7] min-h-screen">
      <Navigation />

      {/* ════════════════════════════════════════════════════════
          DESKTOP
      ════════════════════════════════════════════════════════ */}
      <div className="hidden min-[900px]:block">
        <div className="max-w-[1280px] mx-auto px-[100px]">

          {/* ── HERO ──────────────────────────────────────────── */}
          <div className="pt-[120px] pb-[72px]">
            <EyebrowCream>2025 &nbsp;||&nbsp; UI/UX + Web Programming</EyebrowCream>

            <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[72px] leading-[76px] mb-6">
              INNERLIGHT: DIGITAL CARE
            </h1>

            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[21px] leading-[36px] mb-12 max-w-[860px]"
              style={fvs}
            >
              An interactive platform built to connect people, specifically recent college graduates, with group therapy options through personalized pathways, responsive layouts, and thoughtful interface design.
            </p>

            {/* Hero — home page screenshot */}
            <BorderedImage src={imgHome} alt="InnerLight home page" offset={10} />
          </div>
        </div>

        {/* ── THE PROBLEM – sage green bg ──────────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Problem Space</EyebrowGreen>
            <H2Green>The Problem</H2Green>
            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[21px] leading-[38px] max-w-[860px]"
              style={{ ...fvs, opacity: 0.9 }}
            >
              Starting therapy can feel intimidating, especially for young adults navigating transitions after graduation. We aimed to create a digital space that felt safe, welcoming, and easy to navigate. Every element of the site was built to reduce friction and help users find support with clarity and confidence.
            </p>
          </div>
        </div>

        {/* ── KEY FEATURES – cream bg ──────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>What We Built</EyebrowCream>
          <H2Cream>Key Features</H2Cream>

          {/* Feature pills */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-16 max-w-[900px]">
            {[
              "Responsive design across 7 pages including Home, FAQ, Resources, and Testimonials",
              "Personalized quiz that matches users to therapy groups based on their answers",
              "Form validation using DOM interactions",
              "Testimonial data loaded via external JSON",
              "jQuery animations and interactive behaviors",
              "Fixed header and footer for consistent navigation",
            ].map((feat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-[6px] shrink-0 w-[10px] h-[10px] rounded-full bg-[#ef6351]" />
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[17px] leading-[28px]"
                  style={fvs}
                >
                  {feat}
                </p>
              </div>
            ))}
          </div>

          {/* Quiz screenshot */}
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-4">
            Personalized Quiz
          </p>
          <div className="mb-16">
            <BorderedImage src={imgQuiz} alt="Find Your Group quiz" shadowColor="#708b75" offset={10} />
          </div>

          {/* Testimonials screenshot */}
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-4">
            Testimonials Page
          </p>
          <BorderedImage src={imgTestimonials} alt="Testimonials page" offset={10} />
        </div>

        {/* ── TOOLS & TECH – sage green bg ─────────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Stack</EyebrowGreen>
            <H2Green>Tools & Technologies</H2Green>

            <div className="flex flex-wrap gap-4">
              {["HTML", "CSS", "JavaScript", "jQuery", "JSON", "Figma", "PageSpeed Insights"].map((tool) => (
                <span
                  key={tool}
                  className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[16px] px-5 py-2 border-2 border-[#fff9e7] rounded-full"
                  style={{ opacity: 0.88 }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQ + RESOURCES screenshots – cream bg ───────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>Pages in Detail</EyebrowCream>
          <H2Cream>Responsive Across Every View</H2Cream>

          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[18px] leading-[34px] mb-12 max-w-[720px]"
            style={fvs}
          >
            The site was designed to feel consistent and accessible on both desktop and mobile. Below are side-by-side comparisons of the FAQs and Resources pages across screen sizes.
          </p>

          {/* FAQs — desktop + mobile side by side */}
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-4">
            FAQs Page
          </p>
          <div className="grid gap-8 items-center mb-16" style={{ gridTemplateColumns: "3fr 1fr" }}>
            <div>
              <BorderedImage src={imgFaqDesk} alt="FAQs desktop view" offset={10} />
            </div>
            <div className="self-stretch">
              <BorderedImage src={imgFaqMobile} alt="FAQs mobile view" shadowColor="#708b75" offset={10} fill />
            </div>
          </div>

          {/* Resources — desktop + mobile side by side */}
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-4">
            Resources Page
          </p>
          <div className="grid gap-8 items-center" style={{ gridTemplateColumns: "3fr 1fr" }}>
            <div>
              <BorderedImage src={imgResDesk} alt="Resources desktop view" offset={10} />
            </div>
            <div className="self-stretch">
              <BorderedImage src={imgResMobile} alt="Resources mobile view" shadowColor="#708b75" offset={10} fill />
            </div>
          </div>
        </div>

        {/* ── REFLECTION – sage green bg ───────────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Looking Back</EyebrowGreen>
            <H2Green>Reflection</H2Green>
            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[21px] leading-[38px] max-w-[860px]"
              style={{ ...fvs, opacity: 0.9 }}
            >
              InnerLight gave me experience in translating user needs into interface logic and visual structure. I learned how to build interactions that are both functional and emotionally considerate. The project combined design systems, front-end development, and user empathy into one cohesive product experience.
            </p>
          </div>
        </div>

        {/* ── BACK BUTTON ──────────────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <BackButton />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          MOBILE
      ════════════════════════════════════════════════════════ */}
      <div className="min-[900px]:hidden pt-24 px-6 pb-16">

        {/* Hero */}
        <EyebrowCream>2025 &nbsp;||&nbsp; UI/UX + Web Programming</EyebrowCream>
        <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[40px] leading-[46px] mb-4">
          INNERLIGHT: DIGITAL CARE
        </h1>
        <p
          className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[17px] leading-[30px] mb-8"
          style={fvs}
        >
          An interactive platform connecting recent college graduates with group therapy through personalized pathways and responsive design.
        </p>
        <div className="mb-10">
          <BorderedImage src={imgHome} alt="InnerLight home page" offset={7} />
        </div>

        {/* The Problem */}
        <div className="bg-[#708b75] -mx-6 px-6 py-10 mb-10">
          <EyebrowGreen>Problem Space</EyebrowGreen>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[30px] leading-[38px] mb-5">
            The Problem
          </h2>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[28px]"
            style={{ ...fvs, opacity: 0.9 }}
          >
            Starting therapy can feel intimidating, especially for young adults navigating transitions after graduation. Every element of the site was built to reduce friction and help users find support with clarity and confidence.
          </p>
        </div>

        {/* Key Features */}
        <EyebrowCream>What We Built</EyebrowCream>
        <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[30px] leading-[38px] mb-6">
          Key Features
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {[
            "Responsive design across 7 pages",
            "Personalized quiz that matches users to therapy groups",
            "Form validation using DOM interactions",
            "Testimonial data loaded via external JSON",
            "jQuery animations and interactive behaviors",
            "Fixed header and footer for consistent navigation",
          ].map((feat, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="mt-[7px] shrink-0 w-[8px] h-[8px] rounded-full bg-[#ef6351]" />
              <p
                className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[27px]"
                style={fvs}
              >
                {feat}
              </p>
            </div>
          ))}
        </div>

        <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Personalized Quiz</p>
        <div className="mb-8">
          <BorderedImage src={imgQuiz} alt="Find Your Group quiz" shadowColor="#708b75" offset={7} />
        </div>

        <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Testimonials Page</p>
        <div className="mb-10">
          <BorderedImage src={imgTestimonials} alt="Testimonials page" offset={7} />
        </div>

        {/* Tools */}
        <div className="bg-[#708b75] -mx-6 px-6 py-10 mb-10">
          <EyebrowGreen>Stack</EyebrowGreen>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[30px] leading-[38px] mb-6">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "jQuery", "JSON", "Figma", "PageSpeed Insights"].map((tool) => (
              <span
                key={tool}
                className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[14px] px-4 py-1.5 border-2 border-[#fff9e7] rounded-full"
                style={{ opacity: 0.88 }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Pages in Detail */}
        <EyebrowCream>Pages in Detail</EyebrowCream>
        <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[30px] leading-[38px] mb-6">
          Responsive Across Every View
        </h2>

        <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">FAQs — Desktop + Mobile</p>
        <div className="grid gap-4 items-center mb-8" style={{ gridTemplateColumns: "3fr 1fr" }}>
          <div>
            <BorderedImage src={imgFaqDesk} alt="FAQs desktop" offset={6} />
          </div>
          <div className="self-stretch">
            <BorderedImage src={imgFaqMobile} alt="FAQs mobile" shadowColor="#708b75" offset={6} fill />
          </div>
        </div>

        <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Resources — Desktop + Mobile</p>
        <div className="grid gap-4 items-center mb-10" style={{ gridTemplateColumns: "3fr 1fr" }}>
          <div>
            <BorderedImage src={imgResDesk} alt="Resources desktop" offset={6} />
          </div>
          <div className="self-stretch">
            <BorderedImage src={imgResMobile} alt="Resources mobile" shadowColor="#708b75" offset={6} fill />
          </div>
        </div>

        {/* Reflection */}
        <div className="bg-[#708b75] -mx-6 px-6 py-10 mb-10">
          <EyebrowGreen>Looking Back</EyebrowGreen>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[30px] leading-[38px] mb-5">
            Reflection
          </h2>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[28px]"
            style={{ ...fvs, opacity: 0.9 }}
          >
            InnerLight gave me experience translating user needs into interface logic and visual structure. The project combined design systems, front-end development, and user empathy into one cohesive product experience.
          </p>
        </div>

        <MobileBackButton />
      </div>
    </div>
  );
}