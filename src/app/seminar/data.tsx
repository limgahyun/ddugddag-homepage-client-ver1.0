import { ReactNode } from "react";

export interface Seminar {
  id: string;
  organization: string;
  title: ReactNode;
  thumbnail: string;
  date: string; // format: YYYY-MM-DD
  time: string;
  url: string;
  description: ReactNode;
  hasVOD?: boolean;
}

export const seminars: Seminar[] = [
  {
    id: "offTheRecord",
    organization: "BAYA",
    title: (
      <>
        <span className="font-extrabold">[오프더레코드]</span> 주관기관이 절대
        <br /> 알려주지 않는{" "}
        <span className="font-extrabold">지원사업 실전</span>
      </>
    ),
    thumbnail: "/seminar/offTheRecord.png",
    date: "2025-06-22",
    time: "20:00",
    url: "https://tally.so/r/mVBxLy",
    description: (
      <>
        선착순 마감!{" "}
        <span className="text-white/80 font-semibold text-sm sm:text-2xl md:text-lg xl:text-xl">
          무료 라이브
        </span>
      </>
    ),
    hasVOD: false,
  },
  {
    id: "withNothing",
    organization: "BAYA",
    title: (
      <>
        맨땅에서 <span className="font-extrabold">2억받고</span> <br />
        창업 <span className="font-extrabold">지름길</span> 타기
      </>
    ),
    thumbnail: "/seminar/withNothing.png",
    date: "2025-07-11",
    time: "20:00",
    url: "https://tally.so/r/wLj5O1",
    description: (
      <>
        선착순 마감!{" "}
        <span className="text-white/80 font-semibold text-sm sm:text-2xl md:text-lg xl:text-xl">
          무료 라이브
        </span>
      </>
    ),
    hasVOD: false,
  },
  {
    id: "seminar3",
    organization: "BAYA",
    title: (
      <>
        정부지원사업
        <br />
        <span className="font-extrabold">불패의 법칙</span>
      </>
    ),
    thumbnail: "/seminar/seminar3.png",
    date: "2025-07-16",
    time: "20:00",
    url: "https://tally.so/r/wdGrdK",
    description: <>정원 30명</>,
    hasVOD: false,
  },
  {
    id: "offTheRecord2",
    organization: "BAYA",
    title: (
      <>
        <span className="font-extrabold">[오프더레코드2]</span> 주관기관이 절대
        <br /> 알려주지 않는{" "}
        <span className="font-extrabold">지원사업 실전</span>
      </>
    ),
    thumbnail: "/seminar/offTheRecord.png",
    date: "2025-07-31",
    time: "21:30",
    url: "https://tally.so/r/wz5eZZ",
    description: (
      <>
        신청자 전원 가이드백서 제공{" "}
        <span className="text-white/80 font-semibold text-sm sm:text-2xl md:text-lg xl:text-xl">
          무료 라이브
        </span>
      </>
    ),
    hasVOD: false,
  },
];
