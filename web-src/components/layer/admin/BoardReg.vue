<template>
    <div class="reg_modal_area">
        <div class="reg_modal_wrap">
            <div class="overflow_wrap">
                <div class="input_area board_title">
                    <label>게시판 제목</label>
                    <AdminCommonBoardInputText :title="resData.subjectKo" />
                    <input type="text" v-model="resData.subjectKo" />
                </div>
                <div class="input_area radio_btn">
                    <label>노출 여부</label>
                    <label>
                        <input type="radio" v-model="resData.showYn" value="Y" />예
                    </label>
                    <label>
                        <input type="radio" v-model="resData.showYn" value="N" />아니오
                    </label>
                </div>
                <div class="input_area content">
                    <label>내용</label>
                    <ClientOnly>
                        <AdminCommonQuillEditor :content="resData.contentKo" />
                    </ClientOnly>
                </div>


                <div class="input_area attach_file">
                    <label>첨부파일</label>
                    <AdminCommonBoardFileContainer v-model="files" :isThumbnail="false"/>
                </div>

                <div class="input_area attach_file">
                    <label>썸네일</label>
                    <AdminCommonBoardFileUploader v-model="thumbnails" :isThumbnail="true"/>
                </div>
            </div>
        </div>

        <div class="btn_wrap">
            <div class="common_btn reg_btn" @click="goReg" v-if="props.mode == 'reg'">등록</div>
            <div class="common_btn delete_btn" @click="goDelete" v-if="props.mode == 'mod'">삭제</div>
            <div class="common_btn modify_btn" @click="goUpdate" v-if="props.mode == 'mod'">수정</div>
            <div class="common_btn cancle_btn" @click="emit('close')">취소</div>
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
    boardTypeCd: boardType.notice,
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


const thumbnails = ref<File[]>([]);
const fileDownPath = COMMON_API_URLS.FILE_URL;

const files = ref<File[]>([]);

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

    if (files.value.length > 0) {
        params.file = files.value;
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

    if (files.value.length > 0) {
        params.file = files.value;
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
            files.value = response.resultInfo.fileInfo.filter((file: any) => file.originTypeCd != 100);
            thumbnail.value = response.resultInfo.fileInfo.filter((file: any) => file.originTypeCd == 100);
        }
    }
});
</script>

<style lang="scss" scoped></style>
