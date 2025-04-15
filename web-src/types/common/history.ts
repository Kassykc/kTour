export interface BackupData {
  data?: {
    list: Array<any> | null; // 목록 데이터 (예: favoriteList)
    scroll: {
      scrollTop?: number | null; // 스크롤 위치
      clientHeight?: number | null; // 클라이언트 높이
      scrollHeight?: number | null; // 전체 스크롤 높이
    };
    page: {
      page?: number | null; // 현재 페이지 인덱스
      totalRows?: number | null; // 페이지 크기
    };
    custom?: any;
  };
}
