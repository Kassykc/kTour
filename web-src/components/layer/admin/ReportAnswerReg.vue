<template>
    <div class="reg_modal_area">
        <SubSurveyAdmin :answers="resData" />
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
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, onMounted, toRaw } from 'vue';
import { useReportStore } from '~/stores/admin/reportStore';
import type { AddQuestion, AnswerOption, Report } from '@/types/report/requestQuestion';

const reportMngStore = useReportStore('adm-report-dtl');

const props = defineProps<{ mode: string, idx: string, cancel: () => void }>();

const emit = defineEmits();

const resData = ref([]);

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
            pageNum: 1,
            pageSize: 9999,
            uuid: props.idx,
        }
        const response = await reportMngStore.getBoardAnswerList(params);
        if (response) {
            resData.value = response.resultInfo;
        }
    }
});
</script>

<style lang="scss" scoped></style>
