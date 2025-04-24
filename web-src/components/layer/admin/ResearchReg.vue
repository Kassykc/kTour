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
                    <input type="text" v-model="resData.subject"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[30px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0" />
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
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-t border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        시행기간
                    </label>
                    <div class="flex items-center gap-[6px] w-[calc(100%-70px)] sm:w-[calc(100%-120px)]">
                        <input type="date" v-model="startDate"
                            class="h-[30px] bg-white py-0 px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] w-[30%] min-w-[150px]" />
                        <span class="text-[#888]">~</span>
                        <input type="date" v-model="endDate"
                            class="h-[30px] bg-white py-0 px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] w-[30%] min-w-[150px]" />
                    </div>
                </div>


                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">내용</label>
                    <ClientOnly>
                        <AdminCommonBoardQuillEditor :content="resData.content" @update:content="handleContent" />
                    </ClientOnly>
                </div>


                <div
                    class="input_area attach_file flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">첨부파일</label>
                    <AdminCommonBoardFileContainer v-model="files" :isThumbnail="false" />
                </div>

                <div
                    class="input_area attach_file flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">썸네일</label>
                    <div
                        class="input_file_wrap flex flex-row md:flex-col items-start md:items-center justify-start gap-0 md:gap-[10px] !p-[10px] md:!py-[10px] md:!px-0">
                        <AdminCommonBoardFileUploader v-model="thumbnails" :isThumbnail="true" />
                    </div>
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
    boardTypeCd: boardType.research,
    categoryType: '',
    categoryTypeCd: '900',
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

const startDate = ref(null);
const endDate = ref(null);

const files = ref<FileInfo[]>([]);
const thumbnails = ref<FileInfo[]>([]);

const fileDownPath = COMMON_API_URLS.FILE_URL;

const emit = defineEmits();

// 파일 변경 처리
const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        Array.from(target.files).forEach((file) => {
            files.value.push(file);
        });
    }
};

// 파일 제거 처리
const removeFile = (index: number) => {
    files.value.splice(index, 1);
    resData.value.fileInfo.splice(index, 1);
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
    if (!validation(params)) return;

    params.boardType = params.boardTypeCd;
    params.processStatus = params.processStatusCd;
    params.categoryType = params.categoryTypeCd;
    params.subTitle = JSON.stringify({
        startDate: startDate.value,
        endDate: endDate.value
    })

    if (files.value.length > 0) {
        params.file = files.value.map(f => f.file);
    }

    if (thumbnails.value.length > 0) {
        params.thumbnail = thumbnails.value.map(f => f.file);
    }



    try {
        const response = await boardMngStore.insertBoard(params);

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

    if (files.value.length > 0) {
        params.file = files.value.map(f => f.file);
    }

    if (thumbnails.value.length > 0) {
        params.thumbnail = thumbnails.value.map(f => f.file);
    }



    try {
        const response = await boardMngStore.uptBoard(params);

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
            resData.value = response.resultInfo;
            const durations = JSON.parse(response.resultInfo.subTitle)
            startDate.value = durations.startDate;
            endDate.value = durations.endDate;
            
            files.value = response.resultInfo.fileInfo
                .filter((file: any) => file.originTypeCd != 100)
                .map((f: any) => ({ ...f, file: new File([], f.fileName) }));
            thumbnails.value = response.resultInfo.fileInfo
                .filter((file: any) => file.originTypeCd == 100)
                .map((f: any) => ({ ...f, file: new File([], f.fileName) }));
        }
    }
});
</script>

<style lang="scss" scoped></style>
