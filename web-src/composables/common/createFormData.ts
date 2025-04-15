export const createFormData = (data: any, files?: File[] | null) => {
  const formData = new FormData();

  // 일반 데이터 처리: 빈 값, null, undefined 제외
  for (const key in data) {
    if (
      data.hasOwnProperty(key) &&
      data[key] !== "" &&
      data[key] !== null &&
      data[key] !== undefined
    ) {
      formData.append(key, data[key]);
    }
  }

  // 파일 처리: 파일 배열이 있는 경우에만 추가
  if (Array.isArray(files) && files.length > 0) {
    files.forEach((file) => {
      formData.append("file", file);
    });
  } else {
    // 파일이 없으면 'file' 키 제거
    formData.delete("file");
  }

  return formData;
};
