import svgPaths from "./svg-7d6d3hpa4z";
import imgImageWithFallback from "figma:asset/0ab568f36097fb3bb2137782108a87708509cf66.png";

function BettercanvasPortal() {
  return <div className="absolute left-0 size-0 top-0" data-name="Bettercanvas-portal" />;
}

function ImageWithFallback() {
  return (
    <div className="h-[446px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[446px] relative shrink-0 w-[274px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[66px] left-0 top-0 w-[640.883px]" data-name="Paragraph">
      <p className="absolute font-['Dosis:ExtraBold',sans-serif] font-extrabold leading-[66px] left-0 text-[#708b75] text-[44px] top-0 whitespace-nowrap">{`Hi, I'm`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[158.797px] left-0 top-[98px] w-[640.883px]" data-name="Heading 1">
      <p className="absolute font-['Zeyada:Regular',sans-serif] h-[112px] leading-[158.805px] left-0 not-italic text-[#63535b] text-[186.83px] top-[-1px] w-[414px]">Ahmed</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[0] left-0 text-[#708b75] text-[0px] top-[-0.5px] w-[470px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <span className="leading-[30px] text-[17px]">{`Designer and researcher studying `}</span>
        <span className="font-['Nunito_Sans:Black',sans-serif] font-black leading-[30px] text-[17px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Engineering Psychology and Studio Arts at Tufts University
        </span>
        <span className="leading-[30px] text-[17px]">{` — which basically means I spend equal time thinking about why things confuse people and making things beautiful.`}</span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[229px] w-[480px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[#ef6351] h-[49.5px] left-0 top-0 w-[151.609px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute bg-[#708b75] h-[49.5px] left-0 top-0 w-[151.609px]" data-name="Text">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[25.5px] left-[48px] text-[#fff9e7] text-[17px] top-[12px] whitespace-nowrap">Resume</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[55.5px] left-0 top-[381px] w-[157.609px]" data-name="Link">
      <Container6 />
      <Text />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[640.883_0_0] h-[584.297px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph />
        <Heading />
        <Container5 />
        <Link />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[979px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pt-[110px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#ef6351] h-[2px] rounded-[16777200px] shrink-0 w-[979px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="flex-[736.297_0_0] min-h-px min-w-px relative w-[1099px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[60px] relative size-full">
        <Container2 />
        <Container7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[604px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="absolute h-[20.398px] left-0 top-0 w-[529px]" data-name="SectionHeading">
      <p className="absolute font-['Dosis:ExtraBold',sans-serif] font-extrabold leading-[20.4px] left-0 text-[#708b75] text-[13.6px] top-[-0.5px] tracking-[1.36px] uppercase whitespace-nowrap">Experience</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[28.805px] left-0 top-0 w-[132.586px]" data-name="Text">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[28.8px] left-0 text-[#ef6351] text-[19.2px] top-0 whitespace-nowrap">Creative Director</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[144.59px] top-[4.5px] w-[119.375px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#708b75] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        — The Observer
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[28.805px] relative shrink-0 w-full" data-name="Container">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[21.6px] left-0 text-[14.4px] text-[rgba(112,139,117,0.65)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Feb 2024 – Present
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[474px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Designed 4 magazine covers and 30+ layouts in Adobe InDesign for a readership of 7,000+.
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[506px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Led a design team of 20, delivering under tight deadlines while preserving brand identity.
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[25.078px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Partnered across 7 editorial sections to align visuals with content themes.
      </p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[133.391px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function ExperienceEntry() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[199.789px] items-start left-0 top-[44.4px] w-[529px]" data-name="ExperienceEntry">
      <Container11 />
      <Paragraph2 />
      <List />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[28.805px] left-0 top-0 w-[228.227px]" data-name="Text">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[28.8px] left-0 text-[#ef6351] text-[19.2px] top-0 whitespace-nowrap">{`UI/UX Researcher & Designer`}</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[24px] left-[240.23px] top-[4.5px] w-[120.367px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#708b75] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        — The IDEA Lab
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[28.805px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[21.6px] left-0 text-[14.4px] text-[rgba(112,139,117,0.65)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Feb 2024 – Feb 2025
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[504px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Engineered 5 interactive interfaces in Figma with heuristic evaluations and user feedback loops.
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[484px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Led usability testing with 5 participants, surfacing cognitive load issues and improving task efficiency.
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[104.313px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
        <ListItem3 />
        <ListItem4 />
      </div>
    </div>
  );
}

function ExperienceEntry1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[170.711px] items-start left-0 top-[276.19px] w-[529px]" data-name="ExperienceEntry">
      <Container12 />
      <Paragraph3 />
      <List1 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[28.805px] left-0 top-0 w-[205.953px]" data-name="Text">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[28.8px] left-0 text-[#ef6351] text-[19.2px] top-0 whitespace-nowrap">Survey Research Assistant</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[217.95px] top-[4.5px] w-[288.688px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#708b75] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        — Office of Institutional Research, Tufts
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[28.805px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[21.6px] left-0 text-[14.4px] text-[rgba(112,139,117,0.65)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        May 2024 – Present
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[458px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Analyzed survey data from 13,000+ students and faculty, surfacing insights for institutional policy.
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[504px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Coded 500+ questions using NVivo, improving clarity and accuracy in data collection.
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[104.313px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
        <ListItem5 />
        <ListItem6 />
      </div>
    </div>
  );
}

function ExperienceEntry2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[170.711px] items-start left-0 top-[478.9px] w-[529px]" data-name="ExperienceEntry">
      <Container13 />
      <Paragraph4 />
      <List2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[28.805px] left-0 top-0 w-[214.867px]" data-name="Text">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[28.8px] left-0 text-[#ef6351] text-[19.2px] top-0 whitespace-nowrap">Archival Research Assistant</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[24px] left-[226.87px] top-[4.5px] w-[237.297px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#708b75] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`— Dept. of Film & Media Studies`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[28.805px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[21.6px] left-0 text-[14.4px] text-[rgba(112,139,117,0.65)] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        May 2023 – Aug 2024
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[478px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Researched 200+ archival sources from early 20th-century Egypt for a scholarly publication.
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[50.156px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[25.08px] left-0 text-[15.2px] text-[rgba(112,139,117,0.9)] top-0 w-[450px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Translated Arabic-language materials, broadening accessibility for academic audiences.
      </p>
    </div>
  );
}

function List3() {
  return (
    <div className="h-[104.313px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[4px] items-start pl-[16px] relative size-full">
        <ListItem7 />
        <ListItem8 />
      </div>
    </div>
  );
}

function ExperienceEntry3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[170.711px] items-start left-0 top-[681.61px] w-[529px]" data-name="ExperienceEntry">
      <Container14 />
      <Paragraph5 />
      <List3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[529_0_0] h-[852.32px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SectionHeading />
        <ExperienceEntry />
        <ExperienceEntry1 />
        <ExperienceEntry2 />
        <ExperienceEntry3 />
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#708b75] h-full opacity-20 shrink-0 w-[2px]" data-name="Container" />;
}

function SectionHeading1() {
  return (
    <div className="absolute h-[20.398px] left-0 top-0 w-[320px]" data-name="SectionHeading">
      <p className="absolute font-['Dosis:ExtraBold',sans-serif] font-extrabold leading-[20.4px] left-0 text-[#708b75] text-[13.6px] top-[-0.5px] tracking-[1.36px] uppercase whitespace-nowrap">Education</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[28.805px] left-0 top-0 w-[320px]" data-name="Paragraph">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[28.8px] left-0 text-[#ef6351] text-[19.2px] top-0 whitespace-nowrap">Tufts University</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold h-[48px] leading-[24px] left-0 text-[#708b75] text-[14px] top-[28.8px] w-[320px] whitespace-nowrap" data-name="Paragraph">
      <p className="absolute left-0 top-[-0.5px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        B.S. Engineering Psychology (Human Factors)
      </p>
      <p className="absolute left-0 top-[23.5px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Minor in Studio Arts · GPA 3.77
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 opacity-60 top-[80.8px] w-[320px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#708b75] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Medford, MA · Expected May 2026
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[96.805px] left-0 top-[44.4px] w-[320px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[28.805px] left-0 top-0 w-[320px]" data-name="Paragraph">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[28.8px] left-0 text-[#ef6351] text-[19.2px] top-0 whitespace-nowrap">Università di Pavia</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[24px] left-0 top-[28.8px] w-[320px]" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#708b75] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Study Abroad — Italian & Computer Science`}</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 opacity-60 top-[56.8px] w-[320px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#708b75] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Pavia, Italy · May – Jun. 2025
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[72.805px] left-0 top-[153.2px] w-[320px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function SectionHeading2() {
  return (
    <div className="absolute h-[20.398px] left-0 top-[266.01px] w-[320px]" data-name="SectionHeading">
      <p className="absolute font-['Dosis:ExtraBold',sans-serif] font-extrabold leading-[20.4px] left-0 text-[#708b75] text-[13.6px] top-[-0.5px] tracking-[1.36px] uppercase whitespace-nowrap">{`Skills & Tools`}</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[18px] left-0 text-[12px] text-[rgba(112,139,117,0.55)] top-[-1px] tracking-[1.2px] uppercase whitespace-nowrap">{`UX & Design`}</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-0 w-[120.484px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Design Thinking
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[128.48px] rounded-[16777200px] top-0 w-[115.656px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Product Design
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-[37.2px] w-[100.008px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Wireframing
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[108.01px] rounded-[16777200px] top-[37.2px] w-[94.789px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Prototyping
      </p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[210.8px] rounded-[16777200px] top-[37.2px] w-[105.383px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Brand Design
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-[74.39px] w-[132.07px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Data Visualization
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[103.586px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129.586px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
      <Container20 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[18px] left-0 text-[12px] text-[rgba(112,139,117,0.55)] top-[-1px] tracking-[1.2px] uppercase whitespace-nowrap">Research</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-0 w-[117.477px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        User Interviews
      </p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[125.48px] rounded-[16777200px] top-0 w-[123.531px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Usability Testing
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-[37.2px] w-[124.898px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Journey Mapping
      </p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[132.9px] rounded-[16777200px] top-[37.2px] w-[111.625px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Data Analytics
      </p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-[74.39px] w-[109.586px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Storyboarding
      </p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[117.59px] rounded-[16777200px] top-[74.39px] w-[138.234px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        AI-Assisted Design
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[103.586px] relative shrink-0 w-full" data-name="Container">
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
      <Text19 />
      <Text20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129.586px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
      <Container22 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Dosis:Bold',sans-serif] font-bold leading-[18px] left-0 text-[12px] text-[rgba(112,139,117,0.55)] top-[-1px] tracking-[1.2px] uppercase whitespace-nowrap">Tools</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-0 w-[61.773px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Figma
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[69.77px] rounded-[16777200px] top-0 w-[84.961px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Adobe CC
      </p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[162.73px] rounded-[16777200px] top-0 w-[72.031px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Blender
      </p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-[37.2px] w-[113.109px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        TouchDesigner
      </p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[121.11px] rounded-[16777200px] top-[37.2px] w-[90.344px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        HTML/CSS
      </p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[219.45px] rounded-[16777200px] top-[37.2px] w-[84.563px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-0 rounded-[16777200px] top-[74.39px] w-[67.695px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Python
      </p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[75.7px] rounded-[16777200px] top-[74.39px] w-[61.359px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        NVivo
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.12)] border border-[rgba(112,139,117,0.25)] border-solid h-[29.195px] left-[145.05px] rounded-[16777200px] top-[74.39px] w-[58.102px]" data-name="Text">
      <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[12px] text-[#708b75] text-[12.8px] top-[3.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPSS
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[103.586px] relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
      <Text26 />
      <Text27 />
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129.586px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Container24 />
    </div>
  );
}

function SkillTags() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[428.758px] items-start left-0 top-[310.41px] w-[320px]" data-name="SkillTags">
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[852.32px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <SectionHeading1 />
        <Container17 />
        <Container18 />
        <SectionHeading2 />
        <SkillTags />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[64px] h-[852.32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function SectionHeading3() {
  return (
    <div className="h-[20.398px] relative shrink-0 w-full" data-name="SectionHeading">
      <p className="absolute font-['Dosis:ExtraBold',sans-serif] font-extrabold leading-[20.4px] left-0 text-[#708b75] text-[13.6px] top-[-0.5px] tracking-[1.36px] uppercase whitespace-nowrap">Also</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p9109f80} id="Vector" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3d57c80} id="Vector_2" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p36710180} id="Vector_3" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3beaec80} id="Vector_4" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1e196700} id="Vector_5" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#708b75] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Radio Host
        </p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.1)] content-stretch flex gap-[8px] h-[39px] items-center left-0 px-[17px] py-px rounded-[16777200px] top-0 w-[127.688px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,139,117,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon />
      <Text30 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M6.25 1.25V2.5" id="Vector" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M8.75 1.25V2.5" id="Vector_2" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p314eca80} id="Vector_3" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M3.75 1.25V2.5" id="Vector_4" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#708b75] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Barista
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.1)] content-stretch flex gap-[8px] h-[39px] items-center left-[143.69px] px-[17px] py-px rounded-[16777200px] top-0 w-[102.039px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,139,117,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon1 />
      <Text31 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p1e62b070} id="Vector" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#708b75] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Lights Tech
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.1)] content-stretch flex gap-[8px] h-[39px] items-center left-[261.73px] px-[17px] py-px rounded-[16777200px] top-0 w-[129.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,139,117,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon2 />
      <Text32 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_169_673)" id="Icon">
          <path d={svgPaths.p185087f0} id="Vector" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p346a2500} id="Vector_2" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M1.25 7.5H13.75" id="Vector_3" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_169_673">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#708b75] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Arabic Fluency
        </p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.1)] content-stretch flex gap-[8px] h-[39px] items-center left-[407.39px] px-[17px] py-px rounded-[16777200px] top-0 w-[151.359px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,139,117,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon3 />
      <Text33 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p2f69c040} id="Vector" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p24aeb400} id="Vector_2" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p28f1f780} id="Vector_3" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p6d4e810} id="Vector_4" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#708b75] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Global Orientation Advisor
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[rgba(112,139,117,0.1)] content-stretch flex gap-[8px] h-[39px] items-center left-[574.75px] px-[17px] py-px rounded-[16777200px] top-0 w-[228.078px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(112,139,117,0.3)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Icon4 />
      <Text34 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[83.398px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionHeading3 />
      <Container26 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[1175.719px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[70px] items-start pt-[70px] px-[60px] relative size-full">
        <Container9 />
        <Container25 />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="absolute bg-[#fff9e7] content-stretch flex flex-col h-[1912.016px] items-start left-0 top-0 w-[1099px]" data-name="About">
      <Container />
      <Container8 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute h-[670px] left-0 top-0 w-[1099px]" data-name="Body">
      <BettercanvasPortal />
      <About />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[30px] relative shrink-0 w-[54.398px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[30px] left-[27.5px] text-[#63535b] text-[20px] text-center top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Home
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="flex-[1_0_0] h-[30px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[30px] left-[36px] text-[#63535b] text-[20px] text-center top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Projects
        </p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[58.469px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[30px] left-[29px] text-[#63535b] text-[20px] text-center top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Studio
        </p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[56.055px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[30px] left-[28px] text-[#ef6351] text-[20px] text-center top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          About
        </p>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[337.484px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center justify-center left-0 px-[380.758px] top-0 w-[1099px]" data-name="Container">
      <Navigation1 />
    </div>
  );
}

function Af() {
  return (
    <div className="absolute h-[40px] left-0 overflow-clip top-0 w-[56px]" data-name="Af">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 40">
        <g id="AF">
          <path d={svgPaths.p20e64a00} fill="var(--fill-0, #63535B)" id="Vector" />
          <path d={svgPaths.pbb30300} fill="var(--fill-0, #63535B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[40px] left-[22px] top-[12px] w-[56px]" data-name="Link">
      <Af />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p232ebe00} id="Vector" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M8 12H2.66667V28H8V12Z" id="Vector_2" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p25573100} id="Vector_3" stroke="var(--stroke-0, #EF6351)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ConnectButton() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[1045px] size-[32px] top-[16px]" data-name="ConnectButton">
      <Icon5 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[#fff9e7] border-[#63535b] border-b-2 border-solid h-[66px] left-0 top-0 w-[1099px]" data-name="Navigation">
      <Container32 />
      <Link1 />
      <ConnectButton />
    </div>
  );
}

export default function PersonalWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="Personal Website">
      <Body />
      <Navigation />
    </div>
  );
}