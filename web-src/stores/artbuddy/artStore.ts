import {
  postCodes,
  postArtistList,
  getArtistDtl,
  postGalleryList,
  getGalleryDtl,
  postComment,
} from "@/apis/art/control";
import type {
  CodeResponse,
  ArtistResponse,
  GallertListApiResponse,
  ArtistListResultInfo,
  GalleryDtlResultInfo,
  ArtistDtlResponse,
  Board,
} from "@/types/art/art";

export function useArtStore(storeName: string) {
  const store = defineStore(storeName, () => {
    const getCodes = async (data: any) => {
      const response = await postCodes(data);
      return response.data as CodeResponse;
    };

    const getArtistList = async (data: any) => {
      const response = await postArtistList(data);
      return response.data as ArtistResponse;
    };

    const dtlArtist = async (data: any) => {
      const response = await getArtistDtl(data);
      return response.data as ArtistDtlResponse;
    };

    const getGalleryList = async (data: any) => {
      const response = await postGalleryList(data);
      return response.data as GallertListApiResponse;
    };

    const dtlGallery = async (data: any) => {
      const response = await getGalleryDtl(data);
      return response.data.result_info as GalleryDtlResultInfo;
    };

    const sendComment = async (data: any) => {
      const response = await postComment(data);
      return response.data as GallertListApiResponse;
    };

    return {
      getCodes,
      getArtistList,
      dtlArtist,
      getGalleryList,
      dtlGallery,
      sendComment,
    };
  });

  return store();
}
