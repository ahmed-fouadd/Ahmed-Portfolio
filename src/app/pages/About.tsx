import { Navigation } from "../components/Navigation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import photoImg from "figma:asset/0ab568f36097fb3bb2137782108a87708509cf66.png";

export default function About() {
  return (
    <div className="bg-[#fff9e7]">
      <Navigation />

      {/* ════════════════════ DESKTOP ═══════════════════════ */}
      <div className="hidden min-[900px]:block h-screen pt-[100px] pb-[40px]">
        <div className="max-w-[1280px] mx-auto px-[60px] min-[1100px]:px-[106px] h-full">
          <div className="flex items-stretch gap-[64px] h-full">
            {/* LEFT IMAGE */}
            <div
              className="flex-shrink-0 overflow-hidden h-full"
              style={{ width: "clamp(300px, 32%, 420px)" }}
            >
              <ImageWithFallback
                src={photoImg}
                alt="Ahmed Fouad"
                className="w-full h-full object-cover object-[50%_25%]"
              />
            </div>

            {/* RIGHT TEXT */}
            <div
              className="flex-1 min-w-0 flex flex-col justify-center"
              style={{ marginLeft: "32px" }}
            >
              <p
                className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75]"
                style={{
                  fontSize: "44px",
                  lineHeight: "66px",
                  marginBottom: "32px",
                }}
              >
                Hi, I'm
              </p>

              <h1
                className="font-['Zeyada:Regular',sans-serif] text-[#63535b]"
                style={{
                  fontSize: "clamp(130px, 14.6vw, 187px)",
                  lineHeight: 0.85,
                  marginBottom: "-20px",
                }}
              >
                Ahmed
              </h1>

              <div
                style={{
                  maxWidth: "470px",
                  marginBottom: "24px",
                }}
              >
                <p
                  className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75]"
                  style={{
                    fontSize: "17px",
                    lineHeight: "30px",
                    fontVariationSettings:
                      "'YTLC' 500, 'wdth' 100",
                  }}
                >
                  Designer and researcher studying{" "}
                  <span className="font-['Nunito_Sans:Black',sans-serif] font-black">
                    Engineering Psychology and Studio Arts at
                    Tufts University
                  </span>{" "}
                  — which basically means I spend equal time
                  thinking about why things confuse people and
                  making things beautiful.
                </p>
              </div>
              <div>
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
                    className="relative z-10 inline-block px-12 py-3 text-[#fff9e7] font-['Dosis:Bold',sans-serif] font-bold transition-transform duration-200 ease-out group-hover:translate-x-[6px] group-hover:translate-y-[6px]"
                    style={{
                      backgroundColor: "#708b75",
                      fontSize: "17px",
                    }}
                  >
                    Resume
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════ MOBILE ════════════════════════ */}
      <div className="min-[900px]:hidden min-h-screen flex flex-col justify-center pt-20 pb-10">
        <div className="px-6 mb-8">
          <p
            className="font-['Dosis:ExtraBold',sans-serif] font-extrabold text-[#708b75]"
            style={{ fontSize: "20px", marginBottom: "10px" }}
          >
            Hi, I'm
          </p>

          <h1
            className="font-['Zeyada:Regular',sans-serif] text-[#63535b]"
            style={{
              fontSize: "clamp(90px, 24vw, 140px)",
              lineHeight: 0.82,
              marginBottom: "28px",
            }}
          >
            Ahmed
          </h1>

          <p
            className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold text-[#708b75]"
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            }}
          >
            Designer and researcher studying{" "}
            <span className="font-['Nunito_Sans:Black',sans-serif] font-black">
              Engineering Psychology and Studio Arts at Tufts
            </span>{" "}
            — thinking about why things confuse people and
            making them beautiful, simultaneously.
          </p>
        </div>

        <div className="px-6">
          <div
            className="w-full overflow-hidden"
            style={{ height: "clamp(240px, 68vw, 400px)" }}
          >
            <ImageWithFallback
              src={photoImg}
              alt="Ahmed Fouad"
              className="w-full h-full object-cover object-[50%_25%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}