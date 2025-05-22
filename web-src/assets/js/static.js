const maxRowNum = {
  basic: 10,
  people: 20,
  category: 40,
  function: 50,
};

const boardType = {
  notice: "050", // 공지사항
  faq: "100", // FAQ 전체
  // faq - category
  general: "110",
  visa: "120",
  clinics: "130",
  tour: "140",
  pay: "150",
  after: "160",
  other: "170",
  // faq - category
  dataroom: "200", // 자료실
  news: "300", // 뉴스
  contentAll: "350",
  video: "400", // 영상
  extracurricular: "500",
  aa: "600",
  patent: "700",
  awards: "800",
  etc: "900",
};

export { maxRowNum, boardType };
