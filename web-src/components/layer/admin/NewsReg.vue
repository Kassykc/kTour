<template>
    <div class="reg_modal_area">
        <div
            class="reg_modal_wrap flex justify-start items-start w-full h-[60vh] max-h-[600px] bg-white text-[12px] sm:text-[14px] overflow-y-auto overflow-x-hidden">
            <div class="overflow_wrap w-full">
                <div
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">게시판
                        제목</label>
                    <input type="text" v-model="subjectEn"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0"
                        placeholder="en" />
                    <input type="text" v-model="subjectId"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0"
                        placeholder="id" />
                </div>
                <div
                    class="input_area radio_btn flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">노출
                        여부</label>
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] gap-[10px]">
                        <input type="radio" v-model="resData.showYn" value="Y" />예
                    </label>
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] gap-[10px]">
                        <input type="radio" v-model="resData.showYn" value="N" />아니오
                    </label>
                </div>
                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        카테고리
                    </label>
                    <select v-model="resData.categoryTypeCd"
                        class="w-[150px] h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white text-sm self-center">
                        <option key="1" value="100">뉴스</option>
                        <option key="2" value="200">영상</option>
                    </select>
                </div>
                <div v-if="resData.categoryTypeCd == '200'"
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">영상URL</label>
                    <input type="text" v-model="videoLink"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0"
                        placeholder="Youtube" />
                    <iframe v-if="videoId" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
                        allowfullscreen class="w-full max-w-[500px] aspect-video border rounded"></iframe>
                </div>
                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용(en)</label>
                    <ClientOnly>
                        <AdminCommonBoardQuillEditor v-model="contentEn" />
                    </ClientOnly>
                </div>

                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용(id)</label>
                    <ClientOnly>
                        <AdminCommonBoardQuillEditor v-model="contentId" />
                    </ClientOnly>
                </div>

                <div
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        첨부파일</label>
                    <AdminCommonBoardFileContainer :files="files" @update:files="updateFiles" :isAttFile="true" />
                </div>

                <div
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        썸네일</label>
                    <AdminCommonBoardFileContainer :files="thumbnails" @update:files="updateThumbnails"
                        :isAttFile="false" />
                </div>
            </div>
        </div>

        <div class="btn_wrap flex items-center justify-end gap-[6px]">
            <div class="common_btn reg_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#0047A0]"
                @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn delete_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#C93631]"
                @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="common_btn modify_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#12A0DD]"
                @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn cancle_btn text-[14px] !py-[10px] !px-[20px] !mt-[20px] rounded-[10px] cursor-pointer text-white bg-[#bfbfbf]"
                @click="emit('close')">취소</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, toRaw } from 'vue';
import { useBoardMngStore } from '@/stores/admin/boardStore';
import type { ResultInfo, FileInfo } from '@/types/admin/board';
import { boardType } from "@/assets/js/static";
import { COMMON_API_URLS } from "@/apis/admin/common/urls";
import { AdminCommonBoardFileContainer } from '#components';


const boardMngStore = useBoardMngStore('dtl');

const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();
const resData = ref<ResultInfo>({
    rowNum: 0,
    prevIdx: 0,
    prevTitle: '',
    prevWriter: '',
    prevDate: '',
    nextIdx: 0,
    nextTitle: '',
    nextWriter: '',
    nextDate: '',
    useYn: 'N',
    delYn: 'N',
    showYn: 'Y',
    userIdx: 0,
    userNameKo: '',
    userNameEn: '',
    regUserIdx: 0,
    regUserNameKo: '',
    regUserNameEn: '',
    regDttm: '',
    modUserIdx: 0,
    modUserNameKo: '',
    modUserNameEn: '',
    modDttm: '',
    boardIdx: 0,
    boardType: '',
    boardTypeCd: boardType.news,
    categoryType: '',
    categoryTypeCd: '100',
    processStatus: '',
    processStatusCd: '',
    subject: '',
    subTitle: '',
    content: '',
    viewCount: 0,
    alimYn: 'N',
    importantType: '',
    importantTypeCd: '000',
    openYn: 'Y',
    boardPwd: '',
    userNameFirstKo: '',
    userNameLastKo: '',
    userNameFirstEn: '',
    userNameLastEn: '',
    userName: '',
    localYn: 'N',
    email: '',
    gender: '',
    genderCd: '',
    birthYyyy: '',
    birthMm: '',
    birthDd: '',
    interPhoneNumber: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    mobileAgency: '',
    mobileAgencyCd: '',
    fileInfo: [],
    commentInfo: {},
});

const subjectEn = ref('');
const subjectId = ref('');
const contentEn = ref('');
const contentId = ref('');
const videoLink = ref('');

const videoId = ref<string | null>(null)

const extractYoutubeVideoId = (url: string): string | null => {
    const regExp =
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    const match = url.match(regExp)
    return match ? match[1] : null
}

watch(videoLink, (val: string) => {
    console.log('fdfd')
    videoId.value = extractYoutubeVideoId(val)
})

const files = ref<File[]>([]);
const thumbnails = ref<File[]>([]);
const fileDownPath = COMMON_API_URLS.FILE_URL;

const emit = defineEmits();

const updateFiles = (updatedFiles: File[]) => {
    files.value = updatedFiles;
};

const updateThumbnails = (updatedFiles: File[]) => {
    thumbnails.value = updatedFiles;
};

const validation = (params: any) => {
    const validationRules = [
        { field: 'subject', message: '게시판 제목을 입력해주세요.' },
        { field: 'showYn', message: '노출여부를 선택해주세요.' },
        { field: 'content', message: '내용을 입력해주세요.' }
    ];

    for (const rule of validationRules) {
        if (!params[rule.field]) {
            SysAlert({
                type: 'alert',
                message: rule.message,
            });
            return false;
        }
    }

    return true;
};

// 등록 처리
const goReg = async () => {
    const params = toRaw(resData.value);

    params.boardType = params.boardTypeCd;
    params.processStatus = params.processStatusCd;
    params.categoryType = params.categoryTypeCd;
    params.mobileAgency = params.mobileAgencyCd;

    const subject = {
        subjectEn: subjectEn.value,
        subjectId: subjectId.value,
    }

    params.subject = JSON.stringify(subject);

    const content = {
        contentEn: contentEn.value,
        contentId: contentId.value,
    }

    params.content = JSON.stringify(content);
    params.email = videoLink.value ?? '';

    if (files.value.length > 0) {
        params.file = files.value;
    }

    if (thumbnails.value.length > 0) {
        params.thumbnail = thumbnails.value;
    }

    if (!validation(params)) return;
    const data = common.cleanObject(params);

    try {
        const response = await boardMngStore.insertBoard(data);

        if (response) {
            SysAlert({
                type: 'alert',
                message: '등록되었습니다.',
                callback: () => { emit('close') }
            });
        }
    } catch (error) {
        SysAlert({
            type: 'alert',
            message: '게시판 등록 중 오류가 발생했습니다.',
        });
    }
};

// 수정 처리
const goUpdate = async () => {
    const params = toRaw(resData.value);
    if (!validation(params)) return;

    params.boardType = params.boardTypeCd;
    params.processStatus = params.processStatusCd;
    params.categoryType = params.categoryTypeCd;
    params.importantType = params.importantTypeCd;
    params.gender = params.genderCd;
    params.mobileAgency = params.mobileAgencyCd;

    const subject = {
        subjectEn: subjectEn.value,
        subjectId: subjectId.value,
    }

    params.subject = JSON.stringify(subject);

    const content = {
        contentEn: contentEn.value,
        contentId: contentId.value,
    }

    params.content = JSON.stringify(content);
    params.email = videoLink.value ?? '';

    if (files.value.length > 0) {
        params.file = files.value;
    }

    if (thumbnails.value.length > 0) {
        params.thumbnail = thumbnails.value;
    }

    const data = common.cleanObject(params);

    try {
        const response = await boardMngStore.uptBoard(data);

        if (response) {
            SysAlert({
                type: 'alert',
                message: '수정되었습니다.',
                callback: () => { emit('close') }
            });
        }
    } catch (error) {
        SysAlert({
            type: 'alert',
            message: '게시판 수정 중 오류가 발생했습니다.',
        });
    }
};

// 삭제 처리
const goDelete = () => {
    // 삭제 처리 로직 (필요시 구현)
};

// 내용 변경 처리
const handleContent = (content: any) => {

    resData.value.content = content;
}

onMounted(async () => {
    if (props.mode == 'mod') {
        const params = {
            boardIdx: props.idx,
        }
        const response = await boardMngStore.dtlBoard(params);
        if (response) {

            const decodeHtmlEntities = (str: string) => {
                const txt = document.createElement('textarea');
                txt.innerHTML = str;
                return txt.value;
            }

            const subject = decodeHtmlEntities(response.resultInfo.subject);
            subjectEn.value = JSON.parse(subject).subjectEn ?? '';
            subjectId.value = JSON.parse(subject).subjectId ?? '';


            const content = decodeHtmlEntities(response.resultInfo.content);
            contentEn.value = JSON.parse(content).contentEn ?? '';
            contentId.value = JSON.parse(content).contentId ?? '';

            videoLink.value = response.resultInfo.email ?? '';

            resData.value = response.resultInfo;
            files.value = response.resultInfo.fileInfo.filter(file => file.originTypeCd == '000');
            thumbnails.value = response.resultInfo.fileInfo.filter(file => file.originTypeCd == '100');
        }
    }
});
</script>

<style lang="scss" scoped></style>
