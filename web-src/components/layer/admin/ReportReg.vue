<template>
    <div class="reg_modal_area">
        <div
            class="reg_modal_wrap flex justify-start items-start w-full h-[60vh] max-h-[600px] bg-white text-[12px] sm:text-[14px] overflow-y-auto overflow-x-hidden border-t border-b border-[#dcdcdc]">
            <div class="overflow_wrap w-full">

                <div
                    class="input_area radio_btn flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        응답필수여부
                    </label>
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] gap-[10px]">
                        <input type="radio" v-model="report.isRequired" :value="true" />예
                    </label>
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] gap-[10px]">
                        <input type="radio" v-model="report.isRequired" :value="false" />아니오
                    </label>
                </div>

                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        선택지 유형
                    </label>

                    <div class="flex items-center justify-start">
                        <select class="w-[150px] px-2 py-1 border border-[#dcdcdc] rounded bg-white text-sm"
                        v-model="report.answerType">
                            <option value="1">단답식</option>
                            <option value="2">주관식</option>
                            <option value="3">단일선택형</option>
                            <option value="4">다중선택형</option>
                        </select>
                    </div>
                </div>

                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        질문 카테고리
                    </label>

                    <div class="flex items-center justify-start"> 
                        <select class="w-auto h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white text-sm"
                            v-model="report.repotTitle">
                            <option v-for="(item, index) in category" :key="index" :value="item">{{ item.titleEn }}</option>
                        </select>
                    </div>
                </div>

                <div
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] border-b border-[#dcdcdc]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        질문</label>
                    <input type="text" v-model="report.questionText.questionTextEn"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[36px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0"
                        placeholder="en" />
                    <input type="text" v-model="report.questionText.questionTextId"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[36px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0"
                        placeholder="id" />
                </div>

                <div
                    class="input_area board_title flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px]">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        질문순서</label>
                    <input type="text" v-model="report.order"
                        class="w-[calc(100%-70px)] sm:w-[calc(100%-120px)] h-[36px] bg-white !py-0 !px-[10px] border border-solid border-[#dcdcdc] rounded-[6px] !my-auto !mx-0"
                        placeholder="en" />
                </div>

                <div
                    class="input_area content flex items-stretch justify-start gap-[10px] sm:w-full h-auto min-h-[60px] ">
                    <label
                        class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5]">
                        선택지
                    </label>
                    <LayerAdminReportRegItem :depth="1" :answerType="report.answerType" v-model="answerOption" />

                    <!-- <div
                        v-for="(child, i) in rootQuestion.children"
                        :key="i"
                        
                    >
                        <LayerAdminReportRegItem  :data="rootQuestion.children[i]" />
                    </div> -->

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
import { useReportStore } from '~/stores/admin/reportStore';
import type { AddQuestion, AnswerOption, Report } from '@/types/report/requestQuestion';

const answerOption = ref<AnswerOption[]>([{
    text: {
        titleEn: "",
        titleId: "",
    },
    value: '',
    addquestion: [],
}]);

const report = ref<Report>({
    repotIdx: 0,
    repotId: 'report_01',
    repotLang: 'id',
    repotTitle: '',
    questionText: {},
    answerType: '1',
    answerData: '',
    isRequired: false,
    useYn: 'Y',
    order: 1,
    regUserIdx: 0,
    modUserIdx: 0,
    repotIdxs: '',
});

const reportMngStore = useReportStore('adm-report-dtl');

const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();

const originThumb = ref();

const subjectEn = ref('');
const subjectId = ref('');
const contentEn = ref('');
const contentId = ref('');

const files = ref<File[]>([]);
const thumbnails = ref<File[]>([]);

const category = ref([
    { titleEn: "Basic Information", titleId: "Informasi Dasar" },
    { titleEn: "Medical Services", titleId: "Layanan Medis" },
    { titleEn: "Medical History", titleId: "Riwayat Medis" },
    { titleEn: "Schedule & Accompaniment", titleId: "Jadwal & Pendamping" },
    { titleEn: "Tour", titleId: "Wisata" },
    { titleEn: "Additional Information", titleId: "Informasi Tambahan" },
    { titleEn: "Consultation Preference", titleId: "Preferensi Konsultasi" },
]);

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
    const params = toRaw(report.value);

    params.questionText = JSON.stringify(params.questionText);
    params.repotTitle = JSON.stringify(params.repotTitle);
    params.answerData = JSON.stringify(answerOption.value);

    // if (!validation(params)) return;
    const data = common.cleanObject(params);

    try {
        const response = await reportMngStore.insertBoard(data);

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
            message: '등록 중 오류가 발생했습니다.',
        });
    }
};

// 수정 처리
const goUpdate = async () => {
    const params = toRaw(report.value);

    params.questionText = JSON.stringify(params.questionText);
    params.repotTitle = JSON.stringify(params.repotTitle);
    params.answerData = JSON.stringify(answerOption.value);

    // if (!validation(params)) return;
    const data = common.cleanObject(params);

    try {
        const response = await reportMngStore.uptBoard(data);

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
            message: '수정 중 오류가 발생했습니다.',
        });
    }
};

// 삭제 처리
const goDelete = () => {
    // 삭제 처리 로직 (필요시 구현)
};

onMounted(async () => {
    if (props.mode == 'mod') {
        const params = {
            repotIdx: props.idx,
        }
        const response = await reportMngStore.dtlBoard(params);
        if (response) {

            report.value = response.resultInfo;

            report.value.answerData = JSON.parse(report.value.answerData);
            report.value.repotTitle = JSON.parse(report.value.repotTitle);
            report.value.questionText = JSON.parse(report.value.questionText);

            if (report.value.answerData) {
                answerOption.value = report.value.answerData
            }
        }
    }
});
</script>

<style lang="scss" scoped></style>
