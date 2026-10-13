import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import imgLoftCapstone from "../../imports/Frame_1__2_.jpg";
import imgVisualAsset1 from "../../imports/image.png";
import imgVisualAsset3 from "../../imports/IMG_3752.jpeg";
import imgVisualAsset3b from "../../imports/IMG_3803-1.jpeg";
import imgAsset6a from "../../imports/image-7.png";
import imgAsset6b from "../../imports/image__1_.png";
import imgAsset7 from "../../imports/image__2_.png";
import imgAsset8 from "../../imports/image__3_.png";
import imgAsset9a from "../../imports/image__4_.png";
import imgAsset9b from "../../imports/image__5_.png";
import imgAsset10 from "../../imports/IMG_3889.jpeg";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const fvs = { fontVariationSettings: "'YTLC' 500, 'wdth' 100" };

// ── Shared helpers ─────────────────────────────────────────────────────────────

function BackButton() {
  return (
    <Link
      to="/"
      onClick={() => window.scrollTo(0, 0)}
      className="relative inline-block pr-[6px] pb-[6px] group no-underline"
    >
      <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
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
      <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
      <span className="relative z-10 inline-block px-5 py-1.5 bg-[#fff9e7] text-[#63535b] font-['Dosis:Bold',sans-serif] font-bold text-[17px] transition-all duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]">
        ← Back to projects
      </span>
    </Link>
  );
}

function MediaPlaceholder({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center`}
      style={{ backgroundColor: "rgba(99,83,91,0.07)", border: "2px dashed rgba(99,83,91,0.22)" }}
    >
      <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[12px] tracking-wider uppercase opacity-40 px-6 text-center leading-5">
        {label}
      </p>
    </div>
  );
}

function MediaPlaceholderGreen({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center`}
      style={{ backgroundColor: "rgba(255,249,231,0.07)", border: "2px dashed rgba(255,249,231,0.28)" }}
    >
      <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[12px] tracking-wider uppercase opacity-40 px-6 text-center leading-5">
        {label}
      </p>
    </div>
  );
}

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

// ── Meta strip ────────────────────────────────────────────────────────────────
// Two-column editorial band: team left, credits right — coral top rule, thin divider.

function MetaStrip() {
  return (
    <div style={{ borderTop: "3px solid #ef6351" }}>
      <div className="flex pt-7 pb-8">

        {/* ── Left: The Team ── */}
        <div className="w-[48%] pr-14">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-4" style={{ opacity: 0.45 }}>
            The Team
          </p>
          <div className="space-y-2.5">
            {["Ahmed Fouad", "Andres Ruvalcaba", "Fatima Tahir", "William Bornmann"].map((name) => (
              <p key={name} className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[20px] leading-[28px]">
                {name}
              </p>
            ))}
          </div>
        </div>

        {/* Vertical rule */}
        <div className="w-px shrink-0" style={{ backgroundColor: "rgba(99,83,91,0.13)" }} />

        {/* ── Right: Partner + Faculty combined ── */}
        <div className="flex-1 pl-14 flex gap-14">

          {/* Loft Design */}
          <div>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-4" style={{ opacity: 0.45 }}>
              Industry Partner
            </p>
            <div className="space-y-2.5">
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[20px] leading-[28px] whitespace-nowrap">
                Loft Design
              </p>
            </div>
          </div>

          {/* Faculty */}
          <div>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[11px] tracking-widest uppercase mb-4" style={{ opacity: 0.45 }}>
              Faculty Lead
            </p>
            <div className="space-y-2.5">
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[20px] leading-[28px] whitespace-nowrap">
                Prof. Nick Katis
              </p>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[20px] leading-[28px] whitespace-nowrap">
                Tufts University
              </p>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[20px] leading-[28px] whitespace-nowrap" style={{ opacity: 0.35 }}>
                Spring 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function ProjectLoftCapstone() {
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
            <EyebrowCream>Spring 2026 &nbsp;||&nbsp; UX Research + Product Design</EyebrowCream>

            <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[72px] leading-[76px] mb-4">
              LOFT × TUFTS CAPSTONE
            </h1>
            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[22px] leading-[32px] mb-10"
              style={fvs}
            >
              Reimagining Recovery Tech for the Next Generation of Wearables
            </p>

            {/* Hero image */}
            <div className="relative pr-[10px] pb-[10px] mb-12">
              <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "10px", bottom: "10px" }} />
              <img
                src={imgLoftCapstone}
                alt="LOFT × Tufts Capstone"
                className="relative z-10 w-full object-cover"
              />
            </div>

            {/* Meta strip */}
            <MetaStrip />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SECTION 1: DEFINING THE PROBLEM — green
        ══════════════════════════════════════════════════════ */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>User &amp; Market Insights</EyebrowGreen>
            <DeskH2Green>Defining the Problem</DeskH2Green>

            <div className="grid grid-cols-2 gap-16 mb-14 items-stretch">
              {/* Left — narrative */}
              <div className="flex flex-col">
                {/* Target cohort — emphasized callout */}
                <div className="mb-8 p-6" style={{ backgroundColor: "rgba(255,249,231,0.08)", border: "1px solid rgba(255,249,231,0.18)" }}>
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[11px] tracking-widest uppercase mb-3" style={{ color: "rgba(255,249,231,0.5)" }}>
                    Target User
                  </p>
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[26px] leading-[34px]">
                    Fitness-focused young adults, ages 18–24, who regularly use wearables to track fitness and recovery.
                  </p>
                </div>

                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[30px] mb-8"
                  style={{ ...fvs, opacity: 0.8 }}
                >
                  This cohort exhibits high health awareness but is distinctly prone to overtraining and anxiety surrounding daily performance scores, because those scores directly determine whether they push through a workout, rest, or change their routine.
                </p>

                {/* Flow — steps connected by arrows, pinned to bottom */}
                <div className="mt-auto">
                  {[
                    { label: "Cold Biometrics Captured", sub: "HRV, sleep stages, resting HR. Raw numbers with no empathetic context." },
                    { label: "Burden Shifts to the User", sub: "The device dumps data. The user is left to interpret what it means for their day." },
                    { label: "Data Anxiety & Avoidance", sub: "Overwhelm, uncertainty, and eventual abandonment of the wearable entirely.", final: true },
                  ].map(({ label, sub, final }, i) => (
                    <div key={label}>
                      <div
                        className="px-5 py-4"
                        style={{
                          backgroundColor: final ? "#ef6351" : "rgba(255,249,231,0.08)",
                          border: `1px solid ${final ? "#ef6351" : "rgba(255,249,231,0.18)"}`,
                        }}
                      >
                        <p
                          className="font-['Dosis:Bold',sans-serif] font-bold text-[17px] leading-[24px] mb-1"
                          style={{ color: "#fff9e7" }}
                        >
                          {label}
                        </p>
                        <p
                          className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[14px] leading-[22px]"
                          style={{ ...fvs, color: "#fff9e7", opacity: final ? 0.85 : 0.6 }}
                        >
                          {sub}
                        </p>
                      </div>
                      {i < 2 && (
                        <div className="flex justify-center py-1">
                          <span className="font-['Dosis:Bold',sans-serif] font-bold text-[22px] leading-none" style={{ color: "rgba(255,249,231,0.5)" }}>↓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — media */}
              <div className="relative flex flex-col pr-[8px] pb-[8px]" style={{ minHeight: "500px" }}>
                <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "8px", bottom: "8px", opacity: 0.15 }} />
                <div className="relative z-10 flex-1 min-h-0">
                  <ImageWithFallback
                    src={imgVisualAsset1}
                    alt="Watch face sequence showing 'Recovery: 59 Hours' despite user feeling fine"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SECTION 2: FIELD RESEARCH — cream
        ══════════════════════════════════════════════════════ */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>Human Factors Field Research</EyebrowCream>
          <DeskH2Cream>Discovery</DeskH2Cream>

          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[19px] leading-[34px] max-w-[780px] mb-12"
            style={fvs}
          >
            To uncover the core usability friction points of modern wearables, we
            executed a robust three-tier research methodology across the Tufts campus.
          </p>

          {/* Three method cards */}
          <div className="grid grid-cols-3 gap-8 mb-14">
            {[
              {
                num: "01",
                title: "Gym Field Studies",
                body: "Contextual inquiry and user observation at the Tufts Gym revealed that only 3 out of 8 people consistently track recovery metrics, and usage is highly unstable because scores directly trigger negative emotional swings like discouragement.",
              },
              {
                num: "02",
                title: "Qualitative Interviews",
                body: "Deep-dive user interviews gathered sentiments on how current app ecosystems treat behavioral tracking, exposing the emotional weight behind a data point that should be supportive.",
              },
              {
                num: "03",
                title: "Storyboard Concept Testing",
                body: "Explicit narrative scenarios stress-tested four distinct design pathways: Recovery Trends, Body Awareness Input, Abstracted Readiness, and Context-Aware Prompts.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="relative pr-[6px] pb-[6px]">
                <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                <div className="relative z-10 bg-[#fff9e7] p-7 h-full" style={{ border: "1.5px solid rgba(99,83,91,0.15)" }}>
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">
                    Method {num}
                  </p>
                  <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[22px] leading-[28px] mb-4">
                    {title}
                  </h3>
                  <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[27px]" style={fvs}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* User quotes */}
          <div className="mb-14">
            <EyebrowCream>Ground-Level User Insights</EyebrowCream>
            <div className="grid grid-cols-3 gap-8">
              {[
                { quote: "Sometimes it says I need 96 hours of recovery, but I feel fine... it can be frustrating because it doesn't always align with how I feel. I trust my body more than the data.", name: "Miguel", age: "23", tag: "The Disconnect" },
                { quote: "I ignore the recovery data when it doesn't make sense to me.", name: "Aayat", age: "23", tag: "The Avoidance" },
                { quote: "This makes me feel awful.", name: "Will", age: "22", tag: "The Emotional Toll" },
              ].map(({ quote, name, age, tag }) => (
                <div key={name} className="border-l-[4px] border-[#ef6351] pl-6 py-2">
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">
                    {tag}
                  </p>
                  <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[17px] leading-[30px] mb-4 italic" style={fvs}>
                    "{quote}"
                  </p>
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[14px]">
                    — {name}, {age}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Media assets */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative pr-[6px] pb-[6px]">
                <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                <ImageWithFallback
                  src={imgVisualAsset3}
                  alt="Field research at the Tufts Gym — team tracking user-device interactions"
                  className="relative z-10 w-full object-cover aspect-[3/4]"
                />
              </div>
              <div className="relative pr-[6px] pb-[6px]">
                <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                <ImageWithFallback
                  src={imgVisualAsset3b}
                  alt="Field research at the Tufts Gym — observing user wearable interactions"
                  className="relative z-10 w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SECTION 3: SYNTHESIS & PIVOTS — green
        ══════════════════════════════════════════════════════ */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Ideation Synthesis &amp; Evidence-Based Pivots</EyebrowGreen>
            <DeskH2Green>What the Data Told Us</DeskH2Green>

            <p
              className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[19px] leading-[34px] max-w-[820px] mb-12"
              style={{ ...fvs, opacity: 0.88 }}
            >
              By running testing on our concept storyboards, we generated four crucial
              pillars that completely reshaped our design architecture.
            </p>

            {/* Four insight cards */}
            <div className="grid grid-cols-2 gap-6 mb-14">
              {[
                {
                  verdict: "Keep & Prioritize",
                  coral: false,
                  num: "01",
                  title: "Patterns Over Daily Scores",
                  body: 'Users place the highest value on long-term structural trends, not fluctuating daily numbers. Long-term data supports healthy reflection rather than panic. "I would check this every week." - Jack',
                },
                {
                  verdict: "Keep & Build Out",
                  coral: false,
                  num: "02",
                  title: "Habit Optimization Over Modified Workouts",
                  body: "Active young adults use tracking data to optimize lifestyle choices like sleep and hydration, not to skip pre-planned training. Student-athletes cannot change workouts because their schedules are fixed by coaches.",
                },
                {
                  verdict: "Pivot: Keep the Numbers",
                  coral: true,
                  num: "03",
                  title: "Credible Numbers vs. Vague Abstraction",
                  body: 'Users actively distrust abstracted indicators like "Take it Easy." They view hard numerical metrics as more scientific, transparent, and credible, so we kept the numbers and improved their framing.',
                },
                {
                  verdict: "Kill Completely",
                  coral: true,
                  num: "04",
                  title: "Intrusive Context Alerts Backfire",
                  body: "Automated notifications telling users to back off or modify workout intensity were strongly disliked, viewed as an annoying interruption to personal autonomy.",
                },
              ].map(({ verdict, coral, num, title, body }) => (
                <div key={num} className="relative pr-[6px] pb-[6px]">
                  <div
                    className="absolute"
                    style={{ top: 0, left: 0, right: "6px", bottom: "6px", backgroundColor: coral ? "rgba(239,99,81,0.5)" : "rgba(255,249,231,0.2)" }}
                  />
                  <div
                    className="relative z-10 p-7 h-full"
                    style={{ backgroundColor: "rgba(255,249,231,0.08)", border: "1.5px solid rgba(255,249,231,0.16)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase opacity-45">
                        Pillar {num}
                      </p>
                      <span
                        className="font-['Dosis:Bold',sans-serif] font-bold text-[10px] tracking-wider uppercase px-3 py-1"
                        style={{
                          color: coral ? "#fff9e7" : "rgba(255,249,231,0.85)",
                          backgroundColor: coral ? "#ef6351" : "rgba(255,249,231,0.12)",
                          border: `1px solid ${coral ? "#ef6351" : "rgba(255,249,231,0.25)"}`,
                        }}
                      >
                        {verdict}
                      </span>
                    </div>
                    <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[22px] leading-[28px] mb-4">
                      {title}
                    </h3>
                    <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[15px] leading-[27px]" style={{ ...fvs, opacity: 0.82 }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SECTION 4: THE SOLUTION — cream
        ══════════════════════════════════════════════════════ */}
        <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
          <EyebrowCream>The Interface Ecosystem</EyebrowCream>
          <DeskH2Cream>The Solution</DeskH2Cream>

          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[19px] leading-[34px] max-w-[820px] mb-14"
            style={fvs}
          >
            We engineered a personalized, human-centered mobile interface that
            transforms passive wearable tracking into an interactive, supportive system
            replacing automated tracking judgment with collaborative user input
            through a seamless, intentional interaction arc.
          </p>

          {/* Four alternating features */}
          <div className="space-y-16 mb-16">

            {/* Feature 1 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Feature 01</p>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-5">
                  The Body Literacy Check-In
                </h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[17px] leading-[32px]" style={fvs}>
                  To account for subjective physical reality, the system triggers a
                  daily check-in prompt. Users utilize fluid slider mechanics to report
                  internal perceptions, specifically logging muscle soreness and sleep
                  quality on intuitive scales before any raw data is surfaced.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative pr-[6px] pb-[6px]">
                  <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback
                      src={imgAsset6a}
                      alt="High-fidelity Check-In UI — muscle soreness slider screen"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
                <div className="relative pr-[6px] pb-[6px]">
                  <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback
                      src={imgAsset6b}
                      alt="High-fidelity Check-In UI — live interaction blob screen"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div className="order-1 flex justify-center">
                <div className="relative pr-[8px] pb-[8px]" style={{ width: "60%" }}>
                  <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "8px", bottom: "8px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback
                      src={imgAsset7}
                      alt="Calibrated Balance Score — score breakdown screens with dynamic feedback text"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
              </div>
              <div className="order-2">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Feature 02</p>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-5">
                  The Calibrated Balance Score
                </h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[17px] leading-[32px] mb-6" style={fvs}>
                  Instead of a single device-generated score, our system builds a
                  balanced breakdown. If hardware metrics drop but your body feels
                  fully charged, the system balances the outputs with empathetic
                  microcopy that shifts dynamically:
                </p>
                <div className="space-y-3">
                  {[
                    '"Your body feels better than the data suggests. Trust that energy today."',
                    '"You\'re feeling more fatigued than metrics show. Follow that signal."',
                  ].map((line) => (
                    <div key={line} className="border-l-[3px] border-[#708b75] pl-4 py-1">
                      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[15px] leading-[26px] italic" style={fvs}>
                        {line}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Feature 03</p>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-5">
                  Context-Adaptive Action Planning
                </h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[17px] leading-[32px] mb-6" style={fvs}>
                  A Flexible Day vs. Fixed Schedule Toggle maximizes utility for
                  competitive athletes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Fixed Schedule", body: "Recognizes that training is mandatory. Surfaces active injury-reduction strategies like dynamic warm-ups, foam rolling, and breathing techniques, instead of useless rest warnings." },
                    { label: "Flexible Day", body: "Pivots toward habit optimization: morning sunlight, cold shower finishes, generating tasks that maximize tomorrow's baseline recovery." },
                  ].map(({ label, body }) => (
                    <div key={label} className="p-5" style={{ backgroundColor: "rgba(112,139,117,0.1)", border: "1.5px solid rgba(112,139,117,0.2)" }}>
                      <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[14px] leading-[20px] mb-2">{label}</p>
                      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[14px] leading-[24px]" style={fvs}>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative pr-[8px] pb-[8px]" style={{ width: "60%" }}>
                  <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "8px", bottom: "8px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback
                      src={imgAsset8}
                      alt="Insights & Action Screens — Fixed/Flexible selector and task list"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-2 gap-16 items-start">
              <div className="order-1 grid grid-cols-2 gap-4">
                <div className="relative pr-[6px] pb-[6px]">
                  <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback
                      src={imgAsset9a}
                      alt="Recovery Dashboard — HRV, Resting HR, Sleep metric blocks"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
                <div className="relative pr-[6px] pb-[6px]">
                  <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback
                      src={imgAsset9b}
                      alt="Recovery Dashboard — historical trend line overlaying check-in records"
                      className="w-full object-contain block"
                    />
                  </div>
                </div>
              </div>
              <div className="order-2">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">Feature 04</p>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-5">
                  Visual Strategy &amp; Cognitive Offloading
                </h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[17px] leading-[32px]" style={fvs}>
                  To reduce cognitive load, we designed a dynamic visual that changes
                  color and shape to show daily recovery status at a glance, giving users instant semantic understanding without forcing them to parse numbers.
                  Directly below it, a simple trend chart compares tracked biometric
                  data against the user's subjective check-in history over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            SECTION 5: IMPACT — green
        ══════════════════════════════════════════════════════ */}
        <div className="w-full bg-[#708b75]">
          <div className="max-w-[1280px] mx-auto px-[100px] py-[80px]">
            <EyebrowGreen>Key Takeaways &amp; Impact</EyebrowGreen>
            <DeskH2Green>What We Built</DeskH2Green>

            <div className="grid grid-cols-2 gap-16 mb-14">
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[19px] leading-[34px]" style={{ ...fvs, opacity: 0.88 }}>
                Partnering with Loft Design helped us bridge the gap between
                research and real product design. Designing around real constraints like an athlete's fixed practice schedule allowed us to transform
                a stressful tracking app into a genuinely supportive experience.
              </p>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[19px] leading-[34px]" style={{ ...fvs, opacity: 0.88 }}>
                Ultimately, this project demonstrates the ability to take complex
                technical data and make it clear, simple, and empowering: a scalable blueprint for wellness technology that respects the user's lived experience as much as the data.
              </p>
            </div>

            <div className="flex justify-center mb-14">
              <div className="relative pr-[10px] pb-[10px]" style={{ width: "65%" }}>
                <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "10px", bottom: "10px", opacity: 0.15 }} />
                <ImageWithFallback
                  src={imgAsset10}
                  alt="Team group shot — concluding project presentation with client credits and team links"
                  className="relative z-10 w-full object-cover block"
                />
              </div>
            </div>

            <BackButton />
          </div>
        </div>

        <div className="h-8 bg-[#fff9e7]" />
      </div>

      {/* ══════════════════════════════════════════════════════
          MOBILE
      ══════════════════════════════════════════════════════ */}
      <div className="min-[900px]:hidden pt-[88px] pb-16">

        {/* ── MOBILE HERO ────────────────────────────────────── */}
        <div className="px-6 mb-0">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-3">
            Spring 2026 &nbsp;||&nbsp; UX Research + Product Design
          </p>
          <h1 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[40px] leading-[46px] mb-3">
            LOFT × TUFTS CAPSTONE
          </h1>
          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[17px] leading-[28px] mb-7" style={fvs}>
            Reimagining Recovery Tech for the Next Generation of Wearables
          </p>

          <div className="relative pr-[6px] pb-[6px] mb-8">
            <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "6px", bottom: "6px" }} />
            <img src={imgLoftCapstone} alt="LOFT × Tufts Capstone" className="relative z-10 w-full object-cover" />
          </div>

          {/* Mobile meta — stacked rows */}
          <div className="mb-10" style={{ borderTop: "3px solid #ef6351" }}>
            {[
              {
                label: "The Team",
                primary: "Ahmed Fouad · Andres Ruvalcaba · Fatima Tahir · William Bornmann",
                secondary: null,
              },
              {
                label: "Industry Partner & Faculty",
                primary: "Loft Design · Prof. Nick Katis",
                secondary: "Tufts University · Spring 2026",
              },
            ].map(({ label, primary, secondary }) => (
              <div key={label} className="py-4" style={{ borderBottom: "1px solid rgba(99,83,91,0.12)" }}>
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[10px] tracking-widest uppercase mb-1.5" style={{ opacity: 0.45 }}>
                  {label}
                </p>
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[17px] leading-[24px]">
                  {primary}
                </p>
                {secondary && (
                  <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75] text-[13px] leading-[20px] mt-1" style={fvs}>
                    {secondary}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE SECTION 1 (green) ───────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2" style={{ opacity: 0.6 }}>
            User &amp; Market Insights
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-6">
            Defining the Problem
          </h2>

          {/* Target cohort callout */}
          <div className="mb-7 p-5" style={{ backgroundColor: "rgba(255,249,231,0.08)", border: "1px solid rgba(255,249,231,0.18)" }}>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[10px] tracking-widest uppercase mb-2" style={{ color: "rgba(255,249,231,0.5)" }}>
              Target User
            </p>
            <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[20px] leading-[28px]">
              Fitness-focused young adults, ages 18–24, who regularly use wearables to track fitness and recovery.
            </p>
          </div>

          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[15px] leading-[27px] mb-7" style={{ ...fvs, opacity: 0.8 }}>
            This cohort exhibits high health awareness but is distinctly prone to overtraining and anxiety surrounding daily performance scores.
          </p>

          {/* Flow steps */}
          <div className="mb-7">
            {[
              { label: "Cold Biometrics Captured", sub: "HRV, sleep stages, resting HR. Raw numbers with no empathetic context." },
              { label: "Burden Shifts to the User", sub: "The device dumps data. The user must interpret what it means for their day." },
              { label: "Data Anxiety & Avoidance", sub: "Overwhelm, uncertainty, and eventual abandonment of the wearable.", final: true },
            ].map(({ label, sub, final }, i) => (
              <div key={label}>
                <div
                  className="px-4 py-3"
                  style={{
                    backgroundColor: final ? "#ef6351" : "rgba(255,249,231,0.08)",
                    border: `1px solid ${final ? "#ef6351" : "rgba(255,249,231,0.18)"}`,
                  }}
                >
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[16px] leading-[22px] mb-0.5" style={{ color: "#fff9e7" }}>
                    {label}
                  </p>
                  <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[13px] leading-[20px]" style={{ ...fvs, color: "#fff9e7", opacity: final ? 0.85 : 0.6 }}>
                    {sub}
                  </p>
                </div>
                {i < 2 && (
                  <div className="flex justify-center py-1">
                    <span className="font-['Dosis:Bold',sans-serif] font-bold text-[20px] leading-none" style={{ color: "rgba(255,249,231,0.5)" }}>↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <ImageWithFallback
            src={imgVisualAsset1}
            alt="Watch face sequence showing 'Recovery: 59 Hours' despite user feeling fine"
            className="w-full object-cover"
          />
        </div>

        {/* ── MOBILE SECTION 2 (cream) ───────────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">
            Field Research
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">
            Discovery
          </h2>
          <div className="space-y-5 mb-10">
            {[
              { num: "01", title: "Gym Field Studies", body: "Contextual inquiry at the Tufts Gym revealed only 3 of 8 people consistently track recovery. Scores directly trigger negative emotional swings." },
              { num: "02", title: "Qualitative Interviews", body: "Deep-dive interviews exposed the emotional weight behind a data point that should be supportive." },
              { num: "03", title: "Storyboard Testing", body: "Stress-tested four design pathways: Recovery Trends, Body Awareness Input, Abstracted Readiness, and Context-Aware Prompts." },
            ].map(({ num, title, body }) => (
              <div key={num} className="border-l-4 border-[#ef6351] pl-5">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-1">Method {num}</p>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[19px] leading-[25px] mb-2">{title}</h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[15px] leading-[26px]" style={fvs}>{body}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6 mb-8">
            {[
              { quote: "Sometimes it says I need 96 hours of recovery, but I feel fine... I trust my body more than the data.", name: "Miguel, 23", tag: "The Disconnect" },
              { quote: "I ignore the recovery data when it doesn't make sense to me.", name: "Aayat, 23", tag: "The Avoidance" },
              { quote: "This makes me feel awful.", name: "Will, 22", tag: "The Emotional Toll" },
            ].map(({ quote, name, tag }) => (
              <div key={name} className="border-l-[3px] border-[#ef6351] pl-5">
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[10px] tracking-widest uppercase mb-2">{tag}</p>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[28px] italic mb-2" style={fvs}>"{quote}"</p>
                <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#708b75] text-[13px]">— {name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative pr-[5px] pb-[5px]">
              <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
              <ImageWithFallback
                src={imgVisualAsset3}
                alt="Field research at the Tufts Gym — team tracking user-device interactions"
                className="relative z-10 w-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="relative pr-[5px] pb-[5px]">
              <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
              <ImageWithFallback
                src={imgVisualAsset3b}
                alt="Field research at the Tufts Gym — observing user wearable interactions"
                className="relative z-10 w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>

        {/* ── MOBILE SECTION 3 (green) ───────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2" style={{ opacity: 0.6 }}>
            Ideation Synthesis
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-8">
            What the Data Told Us
          </h2>
          <div className="space-y-5 mb-8">
            {[
              { num: "01", coral: false, verdict: "Keep & Prioritize", title: "Patterns Over Daily Scores", body: 'Users value long-term structural trends, not fluctuating daily numbers. "I would check this every week." - Jack' },
              { num: "02", coral: false, verdict: "Keep & Build Out", title: "Habit Optimization Over Modified Workouts", body: "Active young adults track to optimize sleep and hydration, not to skip pre-planned training." },
              { num: "03", coral: true, verdict: "Pivot: Keep the Numbers", title: "Credible Numbers vs. Vague Abstraction", body: 'Users distrust abstractions like "Take it Easy." Raw metrics feel more scientific and credible.' },
              { num: "04", coral: true, verdict: "Kill Completely", title: "Intrusive Context Alerts Backfire", body: "Automated notifications were strongly disliked as annoying interruptions to personal autonomy." },
            ].map(({ num, coral, verdict, title, body }) => (
              <div key={num} className="border-l-4 pl-5" style={{ borderColor: coral ? "#ef6351" : "rgba(255,249,231,0.4)" }}>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[10px] tracking-widest uppercase opacity-45">Pillar {num}</p>
                  <span className="font-['Dosis:Bold',sans-serif] font-bold text-[10px] tracking-wider uppercase px-2 py-0.5" style={{ color: coral ? "#ef6351" : "rgba(255,249,231,0.8)", backgroundColor: coral ? "rgba(239,99,81,0.15)" : "rgba(255,249,231,0.12)", border: `1px solid ${coral ? "rgba(239,99,81,0.35)" : "rgba(255,249,231,0.25)"}` }}>
                    {verdict}
                  </span>
                </div>
                <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[18px] leading-[24px] mb-2">{title}</h3>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[15px] leading-[26px]" style={{ ...fvs, opacity: 0.82 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE SECTION 4 (cream) ───────────────────────── */}
        <div className="px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">
            The Interface Ecosystem
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[32px] leading-[38px] mb-6">
            The Solution
          </h2>
          <div className="space-y-10">
            {/* Feature 01 — real images */}
            <div>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Feature 01</p>
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[22px] leading-[28px] mb-3">The Body Literacy Check-In</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-5" style={fvs}>Fluid slider mechanics let users log muscle soreness and sleep quality before any raw data is surfaced, accounting for subjective physical reality.</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative pr-[5px] pb-[5px]">
                  <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback src={imgAsset6a} alt="Check-In UI — muscle soreness slider" className="w-full object-contain block" />
                  </div>
                </div>
                <div className="relative pr-[5px] pb-[5px]">
                  <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback src={imgAsset6b} alt="Check-In UI — interaction blob screen" className="w-full object-contain block" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 02 — real image */}
            <div>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Feature 02</p>
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[22px] leading-[28px] mb-3">The Calibrated Balance Score</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-5" style={fvs}>50% Sensor Data + 50% User Perception. If hardware metrics drop but your body feels charged, the system balances outputs with empathetic microcopy.</p>
              <div className="relative pr-[5px] pb-[5px]">
                <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
                <div className="relative z-10 bg-[#fff9e7]">
                  <ImageWithFallback src={imgAsset7} alt="Calibrated Balance Score screens" className="w-full object-contain block" />
                </div>
              </div>
            </div>

            {/* Feature 03 — real image */}
            <div>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Feature 03</p>
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[22px] leading-[28px] mb-3">Context-Adaptive Action Planning</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-5" style={fvs}>A Fixed vs. Flexible toggle shifts from useless rest warnings to active injury-reduction strategies for athletes with non-negotiable schedules.</p>
              <div className="relative pr-[5px] pb-[5px]">
                <div className="absolute bg-[#ef6351]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
                <div className="relative z-10 bg-[#fff9e7]">
                  <ImageWithFallback src={imgAsset8} alt="Insights & Action Screens — Fixed/Flexible selector" className="w-full object-contain block" />
                </div>
              </div>
            </div>

            {/* Feature 04 — real images */}
            <div>
              <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#ef6351] text-[11px] tracking-widest uppercase mb-2">Feature 04</p>
              <h3 className="font-['Dosis:Bold',sans-serif] font-bold text-[#63535b] text-[22px] leading-[28px] mb-3">Visual Strategy & Cognitive Offloading</h3>
              <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#63535b] text-[16px] leading-[29px] mb-5" style={fvs}>A dynamic visual changes color and shape to show recovery status at a glance. A trend chart below compares biometric data against subjective check-in history over time.</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative pr-[5px] pb-[5px]">
                  <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback src={imgAsset9a} alt="Recovery Dashboard — metric blocks" className="w-full object-contain block" />
                  </div>
                </div>
                <div className="relative pr-[5px] pb-[5px]">
                  <div className="absolute bg-[#708b75]" style={{ top: 0, left: 0, right: "5px", bottom: "5px" }} />
                  <div className="relative z-10 bg-[#fff9e7]">
                    <ImageWithFallback src={imgAsset9b} alt="Recovery Dashboard — trend chart" className="w-full object-contain block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE SECTION 5 (green) ───────────────────────── */}
        <div className="bg-[#708b75] px-6 py-10">
          <p className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[11px] tracking-widest uppercase mb-2" style={{ opacity: 0.6 }}>
            Takeaways &amp; Impact
          </p>
          <h2 className="font-['Dosis:Bold',sans-serif] font-bold text-[#fff9e7] text-[32px] leading-[38px] mb-6">
            What We Built
          </h2>
          <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#fff9e7] text-[16px] leading-[29px] mb-8" style={{ ...fvs, opacity: 0.9 }}>
            Partnering with Loft Design helped us bridge research and real product
            design. Designing around real user constraints turned a stressful tracking
            app into a genuinely supportive experience, demonstrating the ability to
            take complex technical data and make it clear, simple, and empowering.
          </p>
          <div className="relative pr-[5px] pb-[5px] mb-8">
            <div className="absolute bg-[#fff9e7]" style={{ top: 0, left: 0, right: "5px", bottom: "5px", opacity: 0.15 }} />
            <ImageWithFallback
              src={imgAsset10}
              alt="Team group shot — concluding project presentation"
              className="relative z-10 w-full object-cover block"
            />
          </div>
          <MobileBackButton />
        </div>
      </div>
    </div>
  );
}
