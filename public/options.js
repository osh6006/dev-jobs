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
