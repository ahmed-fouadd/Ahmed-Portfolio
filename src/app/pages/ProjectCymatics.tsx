import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import imgImage1 from "figma:asset/53f95c8acce783dc53eb9750520107c8cc1d9afc.png";
import imgInterface from "figma:asset/2967e7819a02840d9814430f02f8cdb99a00528c.png";
import imgMayaPatel from "figma:asset/45b170f77503aca399d84b682831f35c55ed857d.png";
import imgEngine from "figma:asset/387ba08b47c926b765f4e2afadf50e5d128977be.png";

const fvs = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// ── Offset-shadow back button (matches site style) ────────────────────────────
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
      <span className="relative z-10 inline-block px-6 py-1.5 bg-[#fff9e7] text-[#708B75] font-['Dosis:Bold',sans-serif] font-bold text-[19px] transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
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
      <span className="relative z-10 inline-block px-5 py-1.5 bg-[#fff9e7] text-[#63535b] font-['Dosis:Bold',sans-serif] font-bold text-[17px] transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
        ← Back to projects
      </span>
    </Link>
  );
}

// ── Dashed placeholder for future media ───────────────────────────────────────
function MediaPlaceholder({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center`}
      style={{
        backgroundColor: "rgba(99,83,91,0.08)",
        border: "2px dashed rgba(99,83,91,0.25)",
      }}
    >
      <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[14px] tracking-wider uppercase opacity-50 px-6 text-center">
        {label}
      </p>
    </div>
  );
}

// ── Section eyebrow labels ─────────────────────────────────────────────────────
// On cream background → coral
function EyebrowCream({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[12px] tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}
// On green background → cream (low opacity so it doesn't clash)
function EyebrowGreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[12px] tracking-widest uppercase mb-3"
      style={{ opacity: 0.6 }}
    >
      {children}
    </p>
  );
}

function DeskH2Cream({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[42px] leading-[50px] mb-8">
      {children}
    </h2>
  );
}
function DeskH2Green({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[42px] leading-[50px] mb-8">
      {children}
    </h2>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function ProjectCymatics() {
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
            <EyebrowCream>
              2025 &nbsp;||&nbsp; Product Design + Human Factors
            </EyebrowCream>

            {/* Title + tagline */}
            <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[72px] leading-[76px] mb-4">
              RESONANCE
            </h1>
            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[22px] leading-[32px] mb-10 whitespace-nowrap"
              style={fvs}
            >
              Visualizing the Unseen Beauty of Sound through
              Cymatics
            </p>

            {/* ── LIVE DEMO — first hero visual ──────────────── */}
            <div className="relative pr-[10px] pb-[10px] mb-12">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "10px",
                  bottom: "10px",
                }}
              />
              <div
                className="relative z-10 overflow-hidden"
                style={{
                  paddingBottom: "56.25%",
                  position: "relative",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/B-iIjs3qg2o?loop=1&playlist=B-iIjs3qg2o&modestbranding=1&rel=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ── META STRIP ─────────────────────────────────── */}
            {/* Each column has a coral top-rule and generous padding */}
            <div className="grid grid-cols-3">
              {/* Role */}
              <div className="border-t-[3px] border-[#ef6351] pt-6 pr-12">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-3">
                  Role
                </p>
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[18px] leading-[26px] mb-1">
                  Human Factors Designer
                </p>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[24px]"
                  style={fvs}
                >
                  User Research · Note Detection · UI Design
                </p>
              </div>

              {/* Collaborators */}
              <div
                className="border-t-[3px] border-[#ef6351] pt-6 px-12"
                style={{
                  borderLeftColor: "#ef6351",
                  borderLeftWidth: 3,
                  borderLeftStyle: "solid",
                }}
              >
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-3">
                  Collaborators
                </p>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[28px]"
                  style={fvs}
                >
                  Carmen Bechtel
                  <br />
                  Dilanur Bayraktar
                </p>
              </div>

              {/* Faculty Leads */}
              <div
                className="border-t-[3px] border-[#ef6351] pt-6 pl-12"
                style={{
                  borderLeftColor: "#ef6351",
                  borderLeftWidth: 3,
                  borderLeftStyle: "solid",
                }}
              >
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-3">
                  Faculty Leads
                </p>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[28px]"
                  style={fvs}
                >
                  Prof. James Intrilligator
                  <br />
                  Prof. Laura Ritchie
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── OVERVIEW – sage green bg ───────────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Overview</EyebrowGreen>
            <DeskH2Green>The Project</DeskH2Green>

            <div className="grid grid-cols-2 gap-16">
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                  The Problem
                </h3>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px]"
                  style={{ ...fvs, opacity: 0.88 }}
                >
                  Dr. Laura Ritchie, a professional cellist and
                  professor, was manually editing videos to
                  synchronize cymatic patterns with her music.
                  This was a labor-intensive process that lacked
                  the spontaneity of live performance.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                  The Solution
                </h3>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px]"
                  style={{ ...fvs, opacity: 0.88 }}
                >
                  Our team developed a real-time web application
                  that analyzes live audio frequencies and
                  instantly generates corresponding cymatic
                  images — serving as both a performance tool
                  and an accessibility feature for the
                  hearing-impaired community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── USER RESEARCH – cream bg ───────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>Deep-Dive Research</EyebrowCream>
          <DeskH2Cream>User Analysis</DeskH2Cream>

          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[19px] leading-[34px] max-w-[780px] mb-12"
            style={fvs}
          >
            We tailored our research to three distinct user
            groups, each requiring a different lens for
            understanding how sound translates to visual
            meaning.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              {
                num: "01",
                title: "Composers",
                body: 'Interviewed to understand how pitch, tension, and harmony should be translated into visual "jaggedness" or "flow."',
              },
              {
                num: "02",
                title: "Concert-Goers",
                body: "Analyzed data from 270 attendees to find the balance between mesmerizing visuals and musical coherence.",
              },
              {
                num: "03",
                title: "Hearing-Impaired",
                body: "Focused on how visual-tactile correspondence (like image scaling for volume) can enhance the emotional connection to music.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="relative pr-[6px] pb-[6px]"
              >
                <div
                  className="absolute bg-[#708b75]"
                  style={{
                    top: 0,
                    left: 0,
                    right: "6px",
                    bottom: "6px",
                  }}
                />
                <div
                  className="relative z-10 bg-[#fff9e7] p-7"
                  style={{
                    border: "1.5px solid rgba(99,83,91,0.15)",
                  }}
                >
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">
                    Group {num}
                  </p>
                  <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[24px] leading-[30px] mb-4">
                    {title}
                  </h3>
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[28px]"
                    style={fvs}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* User Persona Card */}
          <div className="mb-12">
            <EyebrowCream>Featured User Persona</EyebrowCream>
            <div className="relative pr-[8px] pb-[8px] max-w-[900px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "8px",
                  bottom: "8px",
                }}
              />
              <div
                className="relative z-10 bg-[#fff9e7] p-10 grid grid-cols-[300px_1fr] gap-10"
                style={{
                  border: "2px solid rgba(99,83,91,0.2)",
                }}
              >
                {/* Left - Photo */}
                <div
                  className="overflow-hidden"
                  style={{ border: "3px solid #63535b" }}
                >
                  <img
                    src={imgMayaPatel}
                    alt="Maya Patel"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right - Details */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[36px] mb-6">
                    Maya Patel
                  </h3>

                  <div className="space-y-3 mb-6">
                    <p
                      className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[16px]"
                      style={fvs}
                    >
                      <span className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] mr-2">
                        Age:
                      </span>
                      24
                    </p>
                    <p
                      className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[16px]"
                      style={fvs}
                    >
                      <span className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] mr-2">
                        Occupation:
                      </span>
                      Graduate Student in Visual Arts
                    </p>
                    <p
                      className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[16px]"
                      style={fvs}
                    >
                      <span className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] mr-2">
                        Location:
                      </span>
                      Brighton, UK
                    </p>
                  </div>

                  <div
                    className="pt-4"
                    style={{
                      borderTop:
                        "2px solid rgba(239,99,81,0.3)",
                    }}
                  >
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[13px] tracking-widest uppercase mb-2">
                      Background
                    </p>
                    <p
                      className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]"
                      style={fvs}
                    >
                      Maya attends local concerts monthly,
                      particularly those with experimental or
                      electronic music. She values immersive art
                      and often shares visual snippets on social
                      media. Maya has no hearing impairments and
                      typically uses music as a form of
                      emotional release or artistic inspiration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── TECHNICAL – sage green bg ──────────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>
              Technical Hurdles &amp; Pivots
            </EyebrowGreen>
            <DeskH2Green>Building the Engine</DeskH2Green>

            <div className="grid grid-cols-2 gap-16 mb-12">
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                  The Pivot
                </h3>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px]"
                  style={{ ...fvs, opacity: 0.88 }}
                >
                  When licensing for third-party visualizers
                  fell through, we pivoted to building a custom
                  engine using Python, Aubio, and PyAudio.
                </p>
              </div>
              <div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[30px] mb-4">
                  The Challenge of Accuracy
                </h3>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[18px] leading-[34px]"
                  style={{ ...fvs, opacity: 0.88 }}
                >
                  We faced a major trade-off between speed and
                  accuracy. To keep visuals responsive to fast
                  cello pieces, we utilized a 4096-sample chunk
                  size. While this provided the necessary speed,
                  it required significant fine-tuning to
                  accurately detect low-frequency notes in the
                  cello's bottom octave.
                </p>
              </div>
            </div>

            {/* Technical diagram/image */}
            <div className="relative pr-[10px] pb-[10px]">
              <div
                className="absolute bg-[#fff9e7]"
                style={{
                  top: 0,
                  left: 0,
                  right: "10px",
                  bottom: "10px",
                }}
              />
              <div className="relative z-10 overflow-hidden">
                <img
                  src={imgEngine}
                  alt="Technical architecture diagram"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── DESIGN & UX – cream bg ─────────────────────────── */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>
            Design &amp; User Experience
          </EyebrowCream>
          <DeskH2Cream>Making it Readable</DeskH2Cream>

          <div className="grid grid-cols-2 gap-16 mb-14">
            <div>
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[22px] leading-[30px] mb-4">
                The Landing Page
              </h3>
              <p
                className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[18px] leading-[34px]"
                style={fvs}
              >
                Usability testing showed that users were often
                confused by cymatics. I designed an educational
                landing page that explains the science of
                visible sound, which significantly improved user
                engagement and comprehension scores during
                testing.
              </p>
            </div>
            <div className="relative pr-[6px] pb-[6px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "6px",
                  bottom: "6px",
                }}
              />
              <div className="relative z-10">
                <img
                  src={imgImage1}
                  alt="Resonance project screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[22px] leading-[30px] mb-6">
            Visual Logic
          </h3>
          <div className="grid grid-cols-3 gap-0 mb-14">
            {[
              {
                label: "Note Mapping",
                body: "Specific notes trigger unique, mathematically-derived patterns.",
              },
              {
                label: "Dynamic Motion",
                body: 'Images follow a slow, musical spiral (1 degree per second) to mimic the "breath" of the cello.',
              },
              {
                label: "Intensity Scaling",
                body: "The patterns expand and contract based on real-time volume data.",
              },
            ].map(({ label, body }, i) => (
              <div
                key={label}
                className="border-t-[3px] border-[#ef6351] pt-5 pb-6"
                style={{
                  paddingRight: i < 2 ? "2.5rem" : 0,
                  paddingLeft: i > 0 ? "2.5rem" : 0,
                  borderLeft:
                    i > 0
                      ? "1px solid rgba(99,83,91,0.12)"
                      : "none",
                }}
              >
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[19px] leading-[24px] mb-2">
                  {label}
                </p>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[28px]"
                  style={fvs}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="relative pr-[10px] pb-[10px]">
            <div
              className="absolute bg-[#708b75]"
              style={{
                top: 0,
                left: 0,
                right: "10px",
                bottom: "10px",
              }}
            />
            <img
              src={imgInterface}
              alt="Resonance interface — landing page"
              className="relative z-10 w-full object-cover"
            />
          </div>
        </div>

        {/* ── FINAL IMPACT – sage green bg ──────────────────── */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Final Impact</EyebrowGreen>
            <DeskH2Green>What We Built</DeskH2Green>

            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[21px] leading-[38px] max-w-[860px] mb-14"
              style={{ ...fvs, opacity: 0.9 }}
            >
              We delivered a functional MVP that accurately
              identifies notes in real-time. Resonance proved
              that technical constraints — like low-frequency
              detection hurdles — can be solved through
              iterative human-factors testing. This platform
              lays the groundwork for more inclusive,
              multi-sensory musical experiences.
            </p>

            <BackButton />
          </div>
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
            2025 &nbsp;||&nbsp; Product Design + Human Factors
          </p>
          <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[44px] leading-[48px] mb-3">
            RESONANCE
          </h1>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[17px] leading-[28px] mb-7"
            style={fvs}
          >
            Visualizing the Unseen Beauty of Sound through
            Cymatics
          </p>

          {/* Live demo — first visual on mobile too */}
          <div className="relative pr-[6px] pb-[6px] mb-8">
            <div
              className="absolute bg-[#ef6351]"
              style={{
                top: 0,
                left: 0,
                right: "6px",
                bottom: "6px",
              }}
            />
            <div
              className="relative z-10 overflow-hidden"
              style={{
                paddingBottom: "56.25%",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/B-iIjs3qg2o?loop=1&playlist=B-iIjs3qg2o&modestbranding=1&rel=0"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Meta — stacked with coral top-rule per item */}
          <div
            className="mb-10 pb-8"
            style={{
              borderBottom: "1.5px solid rgba(99,83,91,0.15)",
            }}
          >
            {[
              {
                label: "Role",
                content: (
                  <>
                    <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[17px] leading-[24px] mb-0.5">
                      Human Factors Designer
                    </p>
                    <p
                      className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[23px]"
                      style={fvs}
                    >
                      User Research · Note Detection · UI Design
                    </p>
                  </>
                ),
              },
              {
                label: "Collaborators",
                content: (
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[25px]"
                    style={fvs}
                  >
                    Carmen Bechtel · Dilanur Bayraktar
                  </p>
                ),
              },
              {
                label: "Faculty Leads",
                content: (
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[25px]"
                    style={fvs}
                  >
                    Prof. James Intrilligator &amp; Prof. Laura
                    Ritchie
                  </p>
                ),
              },
            ].map(({ label, content }) => (
              <div
                key={label}
                className="border-t-[2px] border-[#ef6351] pt-4 pb-5"
              >
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-2">
                  {label}
                </p>
                {content}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE OVERVIEW (green) ────────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p
            className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2"
            style={{ opacity: 0.6 }}
          >
            Overview
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-8">
            The Project
          </h2>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">
            The Problem
          </h3>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8"
            style={{ ...fvs, opacity: 0.88 }}
          >
            Dr. Laura Ritchie, a professional cellist and
            professor, was manually editing videos to
            synchronize cymatic patterns with her music. This
            was a labor-intensive process that lacked the
            spontaneity of live performance.
          </p>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">
            The Solution
          </h3>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px]"
            style={{ ...fvs, opacity: 0.88 }}
          >
            Our team developed a real-time web application that
            analyzes live audio frequencies and instantly
            generates corresponding cymatic images — serving as
            both a performance tool and an accessibility feature
            for the hearing-impaired community.
          </p>
        </div>

        {/* ── MOBILE USER RESEARCH (cream) ──────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">
            Deep-Dive Research
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">
            User Analysis
          </h2>

          <div className="space-y-6 mb-10">
            {[
              {
                num: "01",
                title: "Composers",
                body: 'Interviewed to understand how pitch, tension, and harmony should be translated into visual "jaggedness" or "flow."',
              },
              {
                num: "02",
                title: "Concert-Goers",
                body: "Analyzed data from 270 attendees to find the balance between mesmerizing visuals and musical coherence.",
              },
              {
                num: "03",
                title: "Hearing-Impaired",
                body: "Focused on how visual-tactile correspondence (like image scaling for volume) can enhance the emotional connection to music.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="border-l-4 border-[#ef6351] pl-5"
              >
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-1">
                  Group {num}
                </p>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[20px] leading-[26px] mb-2">
                  {title}
                </h3>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[27px]"
                  style={fvs}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* User Persona Card - Mobile */}
          <div className="mb-8">
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-4">
              Featured User Persona
            </p>
            <div className="relative pr-[6px] pb-[6px]">
              <div
                className="absolute bg-[#ef6351]"
                style={{
                  top: 0,
                  left: 0,
                  right: "6px",
                  bottom: "6px",
                }}
              />
              <div
                className="relative z-10 bg-[#fff9e7] p-6"
                style={{
                  border: "2px solid rgba(99,83,91,0.2)",
                }}
              >
                {/* Photo */}
                <div
                  className="mb-5 overflow-hidden mx-auto"
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "3px solid #63535b",
                  }}
                >
                  <img
                    src={imgMayaPatel}
                    alt="Maya Patel"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[26px] leading-[32px] mb-4 text-center">
                  Maya Patel
                </h3>

                <div className="space-y-2 mb-5">
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[15px]"
                    style={fvs}
                  >
                    <span className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] mr-2">
                      Age:
                    </span>
                    24
                  </p>
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[15px]"
                    style={fvs}
                  >
                    <span className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] mr-2">
                      Occupation:
                    </span>
                    Graduate Student in Visual Arts
                  </p>
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[15px]"
                    style={fvs}
                  >
                    <span className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] mr-2">
                      Location:
                    </span>
                    Brighton, UK
                  </p>
                </div>

                <div
                  className="pt-4"
                  style={{
                    borderTop: "2px solid rgba(239,99,81,0.3)",
                  }}
                >
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[12px] tracking-widest uppercase mb-2">
                    Background
                  </p>
                  <p
                    className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]"
                    style={fvs}
                  >
                    Maya attends local concerts monthly,
                    particularly those with experimental or
                    electronic music. She values immersive art
                    and often shares visual snippets on social
                    media. Maya has no hearing impairments and
                    typically uses music as a form of emotional
                    release or artistic inspiration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE TECHNICAL (green) ───────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p
            className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2"
            style={{ opacity: 0.6 }}
          >
            Technical Hurdles &amp; Pivots
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-8">
            Building the Engine
          </h2>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">
            The Pivot
          </h3>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8"
            style={{ ...fvs, opacity: 0.88 }}
          >
            When licensing for third-party visualizers fell
            through, we pivoted to building a custom engine
            using Python, Aubio, and PyAudio.
          </p>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[19px] leading-[26px] mb-3">
            The Challenge of Accuracy
          </h3>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8"
            style={{ ...fvs, opacity: 0.88 }}
          >
            We faced a major trade-off between speed and
            accuracy. To keep visuals responsive to fast cello
            pieces, we utilized a 4096-sample chunk size — which
            required significant fine-tuning to accurately
            detect low-frequency notes in the cello's bottom
            octave.
          </p>

          {/* Technical diagram/image */}
          <div className="relative pr-[6px] pb-[6px]">
            <div
              className="absolute bg-[#fff9e7]"
              style={{
                top: 0,
                left: 0,
                right: "6px",
                bottom: "6px",
              }}
            />
            <div className="relative z-10 overflow-hidden">
              <img
                src={imgEngine}
                alt="Technical architecture diagram"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE DESIGN & UX (cream) ────────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">
            Design &amp; User Experience
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">
            Making it Readable
          </h2>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[19px] leading-[26px] mb-3">
            The Landing Page
          </h3>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-7"
            style={fvs}
          >
            Usability testing showed that users were often
            confused by cymatics. I designed an educational
            landing page that explains the science of visible
            sound, which significantly improved user engagement
            and comprehension scores during testing.
          </p>

          <div className="relative pr-[6px] pb-[6px] mb-8">
            <div
              className="absolute bg-[#ef6351]"
              style={{
                top: 0,
                left: 0,
                right: "6px",
                bottom: "6px",
              }}
            />
            <img
              src={imgImage1}
              alt="Resonance project screenshot"
              className="relative z-10 w-full object-cover"
            />
          </div>

          <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[19px] leading-[26px] mb-4">
            Visual Logic
          </h3>
          <div className="space-y-0 mb-8">
            {[
              {
                label: "Note Mapping",
                body: "Specific notes trigger unique, mathematically-derived patterns.",
              },
              {
                label: "Dynamic Motion",
                body: 'Images follow a slow, musical spiral (1 degree per second) to mimic the "breath" of the cello.',
              },
              {
                label: "Intensity Scaling",
                body: "The patterns expand and contract based on real-time volume data.",
              },
            ].map(({ label, body }) => (
              <div
                key={label}
                className="border-t-[2px] border-[#ef6351] pt-4 pb-5"
              >
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[18px] leading-[24px] mb-1">
                  {label}
                </p>
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]"
                  style={fvs}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="relative pr-[6px] pb-[6px]">
            <div
              className="absolute bg-[#708b75]"
              style={{
                top: 0,
                left: 0,
                right: "6px",
                bottom: "6px",
              }}
            />
            <img
              src={imgInterface}
              alt="Resonance interface — landing page"
              className="relative z-10 w-full object-cover"
            />
          </div>
        </div>

        {/* ── MOBILE FINAL IMPACT (green) ───────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p
            className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2"
            style={{ opacity: 0.6 }}
          >
            Final Impact
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-6">
            What We Built
          </h2>
          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8"
            style={{ ...fvs, opacity: 0.9 }}
          >
            We delivered a functional MVP that accurately
            identifies notes in real-time. Resonance proved that
            technical constraints — like low-frequency detection
            hurdles — can be solved through iterative
            human-factors testing. This platform lays the
            groundwork for more inclusive, multi-sensory musical
            experiences.
          </p>
          <MobileBackButton />
        </div>
      </div>
    </div>
  );
}