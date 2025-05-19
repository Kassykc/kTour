// WebP 변환 유틸
const convertImageToWebP = async (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) return resolve(file); // 이미지가 아니면 그대로

    const img = new Image();
    const reader = new FileReader();

    reader.onload = () => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context is null"));

        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            const webpFile = new File(
              [blob],
              file.name.replace(/\.\w+$/, ".webp"),
              {
                type: "image/webp",
                lastModified: Date.now(),
              }
            );
            resolve(webpFile);
          } else {
            reject(new Error("WebP 변환 실패"));
          }
        }, "image/webp");
      };
      img.src = reader.result as string;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const createFormData = async (
  data: any,
  attachmentFile?: File[],
  attachmentThumbFile?: File[]
): Promise<FormData> => {
  const formData = new FormData();

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }

  // attachmentFile 처리 (이미지일 경우 webp 변환)
  if (attachmentFile && attachmentFile.length) {
    for (let i = 0; i < attachmentFile.length; i++) {
      const file = attachmentFile[i] as any;

      if (file.fileIdx) {
        formData.append(`attachmentOrgFile[${i}].fileIdx`, file.fileIdx);
      } else {
        const isImage = file.type?.startsWith("image/");
        const isWebP = file.type === "image/webp";
        const converted =
          isImage && !isWebP ? await convertImageToWebP(file) : file;

        formData.append(`attachmentOrgFile[${i}].attachmentFile`, converted);
      }
    }
  }

  // attachmentThumbFile 처리 (무조건 webp 변환)
  if (attachmentThumbFile && attachmentThumbFile.length) {
    for (let i = 0; i < attachmentThumbFile.length; i++) {
      const file = attachmentThumbFile[i];
      const converted = await convertImageToWebP(file); // 무조건 webp 변환
      formData.append(`attachmentThumbFile[${i}]`, converted);
    }
  }

  // 디버깅 출력
  console.log("===== FormData Entries =====");
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(
        `${key}: File { name: ${value.name}, type: ${value.type}, size: ${value.size} }`
      );
    } else {
      console.log(`${key}: ${value}`);
    }
  }
  console.log("============================");

  return formData;
};
