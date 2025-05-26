<template>
    <div>
        <div class="content_area">
            <div id="consultation" class="w-full max-w-[1340px] my-0 mx-auto">
                <div
                    class="main_tit w-full text-[30px] lg:text-[65px] font-[700] pt-[160px] px-[20px] text-center mb-[50px]">
                    {{ t('consultation.title') }}
                </div>
                <div class="sub_title text-[18px] lg:text-[20px] w-full px-[20px] text-center mb-[50px]">
                    {{ t('consultation.subtitle') }}
                </div>

                <div class="input_area w-full max-w-[1340px] px-[20px] mb-[80px] mx-auto">
                    <div class="essential text-right text-[16px] font-[500] mb-[16px]">
                        <span class="text-[#ff0000]">√</span> Full Name
                    </div>

                    <SubSurveyCategory :list=basicInfo />
                    <SubSurveyCategory :list=medicalService />
                    <SubSurveyCategory :list=medicalHistory />
                    <SubSurveyCategory :list=schedule />
                    <SubSurveyCategory :list=tour />
                    <SubSurveyCategory :list=additional />
                    <SubSurveyCategory :list=preference />

                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { useReportStore } from '~/stores/admin/reportStore';
import { t, composer } from '@/plugins/i18n'

const reportMngStore = useReportStore('cli-report');

const boardList = ref([]);
const basicInfo = ref([]);
const medicalService = ref([]);
const medicalHistory = ref([]);
const schedule = ref([]);
const tour = ref([]);
const additional = ref([]);
const preference = ref([]);

const getType = (type: number) => {
    switch (type) {
        case 1:
            return 'text';
        case 2:
            return 'textarea';
        case 3:
            return 'radio';
        case 4:
            return 'chechbox';
        default:
            return 'text';
    }
}

const getBoardList = async (pageNum: number, pageSize: number) => {
    const data = {
        pageNum: pageNum,
        pageSize: pageSize,
        repotId: "report_01",
    };

    const response = await reportMngStore.getBoardList(data);

    if (response) {
        const parsedList = response.resultInfo
            .map(item => {
                const parsedTitle = JSON.parse(item.repotTitle || '{}');
                const parsedQuestion = JSON.parse(item.questionText || '{}');
                const parsedAnswer = JSON.parse(item.answerData || '[]');

                return {
                    ...item,
                    repotTitle: parsedTitle,
                    questionText: parsedQuestion,
                    answerData: parsedAnswer,
                };
            })
            .sort((a, b) => a.order - b.order);

        boardList.value = parsedList;

        basicInfo.value = parsedList.filter(item => item.repotTitle.titleEn === 'Basic Information');
        medicalService.value = parsedList.filter(item => item.repotTitle.titleEn === 'Medical Services');
        medicalHistory.value = parsedList.filter(item => item.repotTitle.titleEn === 'Medical History');
        schedule.value = parsedList.filter(item => item.repotTitle.titleEn === 'Schedule & Accompaniment');
        tour.value = parsedList.filter(item => item.repotTitle.titleEn === 'Tour');
        additional.value = parsedList.filter(item => item.repotTitle.titleEn === 'Additional Information');
        preference.value = parsedList.filter(item => item.repotTitle.titleEn === 'Consultation Preference');
    }
};

onMounted(async () => {
    await getBoardList(1, 9999);
})

</script>
<style lang="">

</style>