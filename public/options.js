export const COUNTRIES = [
  { name: "미국", value: "미국" },
  { name: "캐나다", value: "캐나다" },
  { name: "프랑스", value: "프랑스" },
  { name: "독일", value: "독일" },
  { name: "한국", value: "한국" },
  { name: "일본", value: "일본" },
  { name: "중국", value: "중국" },
  { name: "영국", value: "영국" },
  { name: "인도", value: "인도" },
];

export const TIMETYPES = [
  { name: "정규직", value: "정규직" },
  { name: "계약직", value: "계약직" },
];

export const POSITIONS = [
  { name: "프론트엔드 개발자 신입", value: "프론트엔드 개발자 신입" },
  { name: "프론트엔드 개발자 경력", value: "프론트엔드 개발자 경력" },
  { name: "백엔드 개발자 신입", value: "백엔드 개발자 신입" },
  { name: "백엔드 개발자 경력", value: "백엔드 개발자 경력" },
  { name: "풀 스택 개발자 신입", value: "풀 스택 신입" },
  { name: "풀 스택 개발자 경력", value: "풀 스택 경력" },
  { name: "웹 디자이너 신입", value: "웹 디자이너 신입" },
  { name: "그래픽 디자이너 경력", value: "그래픽 디자이너 경력" },
  { name: "모바일 개발자 신입", value: "모바일 개발자 신입" },
  { name: "모바일 개발자 경력", value: "모바일 개발자 경력" },
];

export const REQUIREMENTS = [];

export const PICKERCOLORS = [
  "#ea9310",
  "#e54b24",
  "#9acd32",
  "#2f4fc6",
  "#132034",
  "#4e1853",
  "#4721c4",
  "#21437d",
  "#f2ddca",
  "#1f1f1f",
  "#37c890",
];

export const timeAgoKo = (number, index) => {
  return [
    ["방금", "곧"],
    ["%s초 전", "%s초 후"],
    ["1분 전", "1분 후"],
    ["%s분 전", "%s분 후"],
    ["1시간 전", "1시간 후"],
    ["%s시간 전", "%s시간 후"],
    ["1일 전", "1일 후"],
    ["%s일 전", "%s일 후"],
    ["1주일 전", "1주일 후"],
    ["%s주일 전", "%s주일 후"],
    ["1개월 전", "1개월 후"],
    ["%s개월 전", "%s개월 후"],
    ["1년 전", "1년 후"],
    ["%s년 전", "%s년 후"],
  ][index];
};

export const userMenu = [
  { href: "/api/users/logout", name: "로그아웃" },
  { href: "/profile", name: "프로필" },
  { href: "/api/users/logout", name: "로그아웃" },
];

export const SCHOOLOPTS = [
  { name: "고졸", value: "고졸" },
  { name: "전문대", value: "전문대" },
  { name: "학사", value: "학사" },
  { name: "석사", value: "석사" },
  { name: "박사", value: "박사" },
];

export const COMPANYOPTS = [
  { name: "1년 이하", value: "1년 이하" },
  { name: "2년 이상", value: "2년 이하" },
  { name: "3년 이하", value: "3년 이하" },
  { name: "4년 이하", value: "4년 이하" },
  { name: "5년 이상", value: "5년 이상" },
];

export const SKILLOPTS = [
  { id: 1, name: "React" },
  { id: 2, name: "Next.js" },
  { id: 3, name: "CSS" },
  { id: 4, name: "HTML" },
  { id: 5, name: "Angular" },
  { id: 6, name: "TailWindcss" },
  { id: 7, name: "GraphGL" },
  { id: 8, name: "Jest" },
  { id: 9, name: "Koa" },
  { id: 10, name: "NodeJS" },
  { id: 11, name: "Express" },
  { id: 12, name: "SpringFrameWork" },
  { id: 13, name: "Ruby" },
  { id: 14, name: "C++" },
  { id: 15, name: "C#" },
  { id: 16, name: "Java" },
  { id: 18, name: "JavaScript" },
  { id: 19, name: "Springboot" },
  { id: 20, name: "Unity" },
  { id: 21, name: "Android" },
  { id: 22, name: "IOS" },
  { id: 23, name: "MongoDB" },
  { id: 24, name: "SQL" },
];

export const HOPEJOBS = [
  { name: "프론트엔드 개발자 ", value: "프론트엔드 개발자 " },
  { name: "백엔드 개발자", value: "백엔드 개발자" },
  { name: "풀 스택 개발자", value: "풀 스택 개발자" },
  { name: "웹 디자이너", value: "웹 디자이너" },
  { name: "그래픽 디자이너", value: "그래픽 디자이너" },
];
