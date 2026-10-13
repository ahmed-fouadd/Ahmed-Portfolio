import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import imgRoom1 from "figma:asset/f0ec387669e66c06ad3fba42bb77304432014c40.png";
import imgRoom2 from "figma:asset/c19fbe3531ddc5abfd79ad27d288d21282a2849e.png";
import imgSketches from "figma:asset/57d8314c19bc4f04d13a2f3d642123c034a716a4.png";
import imgProcess from "figma:asset/c581af562a14d8b7b03e532dd1f93f4ba45d64e2.png";
import imgColors from "figma:asset/967d25fa0370598f437b029ed96cbf360eafe8df.png";
import imgInSpace from "figma:asset/bfeccabb9ba4296ed2ba97b864bb250aeafc92eb.png";

const fvs = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// ── Offset-shadow back button (matches site style) ────────────────────────────
function BackButton() {
  return (
    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="relative inline-block pr-[6px] pb-[6px] group no-underline">
      <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
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
    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="relative inline-block pr-[6px] pb-[6px] group no-underline">
      <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
      <span
        className="relative z-10 inline-block px-5 py-1.5 text-[#fff9e7] font-['Dosis:Bold',sans-serif] font-bold text-[17px] transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px] group-hover:bg-[#ef6351]"
        style={{ backgroundColor: "#708b75" }}
      >
        ← Back to projects
      </span>
    </Link>
  );
}

// ── Section eyebrow labels ─────────────────────────────────────────────────────
// On cream background → coral
function EyebrowCream({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}
// On green background → cream (low opacity so it doesn't clash)
function EyebrowGreen({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[12px] tracking-widest uppercase mb-3" style={{ opacity: 0.6 }}>
      {children}
    </p>
  );
}

function DeskH2Cream({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[42px] leading-[50px] mb-8">
      {children}
    </h2>
  );
}
function DeskH2Green({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-8">
      {children}
    </h2>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function ProjectOrbit() {
  return (
    <div className="bg-[#fff9e7] min-h-screen">
      <Navigation />

      {/* ══════════════════════════════════════════════════════
          DESKTOP
      ══════════════════════════════════════════════════════ */}
      <div className="hidden min-[900px]:block">
        <div className="max-w-[1280px] mx-auto px-[100px]">

          {/* ── HERO ──────────────────────────────────────────── */}
          <div className="pt-[120px] pb-[72px]">

            {/* Eyebrow */}
            <EyebrowCream>2025 &nbsp;||&nbsp; Industrial Design</EyebrowCream>

            {/* Title */}
            <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[72px] leading-[76px] mb-10">
              ORBIT: LIGHTING REIMAGINED
            </h1>

            {/* Hero Image */}
            <div className="relative pr-[10px] pb-[10px] mb-12">
              <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
              <div className="relative z-10 overflow-hidden">
                <img src={imgColors} alt="Orbit lamp hero" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* ── THE CHALLENGE – sage green bg ───────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Problem Space</EyebrowGreen>
            <DeskH2Green>The Challenge</DeskH2Green>

            <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[21px] leading-[38px] max-w-[860px]" style={{ ...fvs, opacity: 0.9 }}>
              Dorm rooms function as bedrooms, study spaces, and social areas, but most lighting doesn't support that flexibility. Overhead fixtures are harsh, desk lamps are static, and students often can't mount anything to walls. The result is uninspired lighting that doesn't adapt to their needs.
            </p>
          </div>
        </div>

        {/* ── DESIGN PROCESS – cream bg ───────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>Research &amp; Ideation</EyebrowCream>
          <DeskH2Cream>Design Process</DeskH2Cream>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[18px] leading-[34px] mb-8 max-w-[860px]" style={fvs}>
            This solo project began with user research and a persona for a student who wanted one lamp that felt intuitive, looked good, and adapted to different moments.
          </p>
          <div className="flex gap-12 mb-14">
            <div className="border-l-4 border-[#ef6351] pl-5">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[20px] leading-[26px] mb-1">Flexibility</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[27px]" style={fvs}>One lamp that adapts to study, work, and relaxation</p>
            </div>
            <div className="border-l-4 border-[#ef6351] pl-5">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[20px] leading-[26px] mb-1">Compactness</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[27px]" style={fvs}>Optimized for small dorm and apartment spaces</p>
            </div>
            <div className="border-l-4 border-[#ef6351] pl-5">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[20px] leading-[26px] mb-1">Analog Control</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[27px]" style={fvs}>Tactile, intuitive dimming without digital complexity</p>
            </div>
          </div>

          {/* Wide ideation sketches */}
          <div className="relative pr-[10px] pb-[10px] mb-16">
            <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
            <div className="relative z-10 overflow-hidden border-2 border-[#ef6351]">
              <img src={imgSketches} alt="Ideation sketches" className="w-full object-cover" />
            </div>
          </div>

          {/* Final concept */}
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-4">Final Concept</p>
          <div className="flex justify-center">
            <div className="relative pr-[10px] pb-[10px] w-full max-w-[500px]">
              <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
              <div className="relative z-10 overflow-hidden border-2 border-[#ef6351]">
                <img src={imgProcess} alt="Final concept sketch" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* ── TWO MODES – sage green bg ──────────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Core Functionality</EyebrowGreen>
            <DeskH2Green>Dual-Mode Lighting</DeskH2Green>

            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                  Table Mode
                </h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px] mb-6" style={{ ...fvs, opacity: 0.88 }}>
                  Orbit's frosted dome head rotates to provide focused task lighting, perfect for studying, reading, or working at your desk.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                  Wall Mode
                </h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px] mb-6" style={{ ...fvs, opacity: 0.88 }}>
                  Rotate the head to project a soft ambient glow onto the wall, creating a warm, relaxing atmosphere for unwinding.
                </p>
              </div>
            </div>

            <div className="max-w-[720px]">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                Analog Dimming Control
              </h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px]" style={{ ...fvs, opacity: 0.88 }}>
                An analog dimming wheel gives smooth, tactile control over brightness levels. No apps, no menus, just intuitive physical interaction that feels natural and immediate.
              </p>
            </div>
          </div>
        </div>

        {/* ── COLOR EXPLORATION – cream bg ───────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>Aesthetic Development</EyebrowCream>
          <DeskH2Cream>Color Exploration</DeskH2Cream>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[19px] leading-[34px] max-w-[780px] mb-12" style={fvs}>
            Exploring materiality and color palettes to ensure Orbit felt approachable, modern, and cohesive across different dorm aesthetics.
          </p>

          <div className="relative pr-[10px] pb-[10px]">
            <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
            <div className="relative z-10 overflow-hidden">
              <img src={imgInSpace} alt="Color exploration" className="w-full object-cover" />
            </div>
          </div>
        </div>

        {/* ── PLACED IN SPACE – sage green bg ────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>In Context</EyebrowGreen>
            <DeskH2Green>Placed in Space</DeskH2Green>

            <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[21px] leading-[38px] max-w-[860px] mb-12" style={{ ...fvs, opacity: 0.9 }}>
              Orbit seamlessly integrates into compact living environments, providing the flexibility students need without overwhelming limited desk or shelf space.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="relative pr-[10px] pb-[10px]">
                <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
                <div className="relative z-10 overflow-hidden">
                  <img src={imgRoom1} alt="Orbit lamp in dorm bedroom" className="w-full object-cover" />
                </div>
              </div>
              <div className="relative pr-[10px] pb-[10px]">
                <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
                <div className="relative z-10 overflow-hidden">
                  <img src={imgRoom2} alt="Orbit lamp on dorm desk" className="w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── IMPACT – cream bg ──────────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>Design Philosophy</EyebrowCream>
          <DeskH2Cream>Impact</DeskH2Cream>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[21px] leading-[38px] max-w-[860px] mb-14" style={fvs}>
            Orbit embodies my design philosophy: people-first, aesthetically mindful, and functional. It solves a real problem with clarity and care, proving that thoughtful design doesn't require complexity. Just an understanding of what people actually need.
          </p>

          <BackButton />
        </div>

        <div className="h-8 bg-[#fff9e7]" />
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE
      ══════════════════════════════════════════════════════ */}
      <div className="min-[900px]:hidden pt-[88px] pb-16">

        {/* ── MOBILE HERO (cream) ────────────────────────────── */}
        <div className="px-6 mb-0">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">
            2025 &nbsp;||&nbsp; Industrial Design
          </p>
          <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[44px] leading-[48px] mb-7">
            ORBIT: LIGHTING REIMAGINED
          </h1>

          {/* Hero Image */}
          <div className="relative pr-[6px] pb-[6px] mb-8">
            <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
            <div className="relative z-10 overflow-hidden">
              <img src={imgColors} alt="Orbit lamp hero" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* ── MOBILE CHALLENGE (green) ────────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2" style={{ opacity: 0.6 }}>Problem Space</p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-6">The Challenge</h2>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px]" style={{ ...fvs, opacity: 0.9 }}>
            Dorm rooms function as bedrooms, study spaces, and social areas, but most lighting doesn't support that flexibility. Overhead fixtures are harsh, desk lamps are static, and students often can't mount anything to walls. The result is uninspired lighting that doesn't adapt to their needs.
          </p>
        </div>

        {/* ── MOBILE DESIGN PROCESS (cream) ──────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Research &amp; Ideation</p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">Design Process</h2>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-8" style={fvs}>
            This solo project began with user research and a persona for a student who wanted one lamp that felt intuitive, looked good, and adapted to different moments.
          </p>

          <div className="space-y-4 mb-8">
            <div className="border-l-4 border-[#ef6351] pl-4">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[18px] leading-[24px] mb-1">Flexibility</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]" style={fvs}>One lamp that adapts to study, work, and relaxation</p>
            </div>
            <div className="border-l-4 border-[#ef6351] pl-4">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[18px] leading-[24px] mb-1">Compactness</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]" style={fvs}>Optimized for small dorm and apartment spaces</p>
            </div>
            <div className="border-l-4 border-[#ef6351] pl-4">
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[18px] leading-[24px] mb-1">Analog Control</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]" style={fvs}>Tactile, intuitive dimming without digital complexity</p>
            </div>
          </div>

          {/* Wide ideation sketches */}
          <div className="relative pr-[6px] pb-[6px] mb-10">
            <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
            <img src={imgSketches} alt="Ideation sketches" className="relative z-10 w-full h-auto border-2 border-[#ef6351]" />
          </div>

          {/* Final concept */}
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-4">Final Concept</p>
          <div className="flex justify-center">
            <div className="relative pr-[6px] pb-[6px] w-full max-w-[340px]">
              <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
              <img src={imgProcess} alt="Final concept sketch" className="relative z-10 w-full h-auto border-2 border-[#ef6351]" />
            </div>
          </div>
        </div>

        {/* ── MOBILE DUAL MODES (green) ───────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2" style={{ opacity: 0.6 }}>Core Functionality</p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-8">Dual-Mode Lighting</h2>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">Table Mode</h3>
          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8" style={{ ...fvs, opacity: 0.88 }}>
            Orbit's frosted dome head rotates to provide focused task lighting, perfect for studying, reading, or working at your desk.
          </p>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">Wall Mode</h3>
          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8" style={{ ...fvs, opacity: 0.88 }}>
            Rotate the head to project a soft ambient glow onto the wall, creating a warm, relaxing atmosphere for unwinding.
          </p>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">Analog Dimming Control</h3>
          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px]" style={{ ...fvs, opacity: 0.88 }}>
            An analog dimming wheel gives smooth, tactile control over brightness levels. No apps, no menus, just intuitive physical interaction that feels natural and immediate.
          </p>
        </div>

        {/* ── MOBILE COLOR EXPLORATION (cream) ────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Aesthetic Development</p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">Color Exploration</h2>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-8" style={fvs}>
            Exploring materiality and color palettes to ensure Orbit felt approachable, modern, and cohesive across different dorm aesthetics.
          </p>

          <div className="relative pr-[6px] pb-[6px]">
            <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
            <img src={imgInSpace} alt="Color exploration" className="relative z-10 w-full h-auto" />
          </div>
        </div>

        {/* ── MOBILE IN SPACE (green) ─────────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2" style={{ opacity: 0.6 }}>In Context</p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-6">Placed in Space</h2>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8" style={{ ...fvs, opacity: 0.9 }}>
            Orbit seamlessly integrates into compact living environments, providing the flexibility students need without overwhelming limited desk or shelf space.
          </p>

          <div className="relative pr-[6px] pb-[6px] mb-6">
            <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
            <img src={imgRoom1} alt="Orbit lamp in dorm bedroom" className="relative z-10 w-full h-auto" />
          </div>
          <div className="relative pr-[6px] pb-[6px]">
            <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
            <img src={imgRoom2} alt="Orbit lamp on dorm desk" className="relative z-10 w-full h-auto" />
          </div>
        </div>

        {/* ── MOBILE IMPACT (cream) ──────────────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Design Philosophy</p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">Impact</h2>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-8" style={fvs}>
            Orbit embodies my design philosophy: people-first, aesthetically mindful, and functional. It solves a real problem with clarity and care, proving that thoughtful design doesn't require complexity. Just an understanding of what people actually need.
          </p>

          <MobileBackButton />
        </div>
      </div>
    </div>
  );
}