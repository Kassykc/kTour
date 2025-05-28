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
                        <span class="text-[#ff0000]">√</span> {{ t('consultation.required') }}
                    </div>

                    <SubSurveyCategory :list="basicInfo" @change="updateAnswers('basicInfo', $event)" />
                    <SubSurveyCategory :list="medicalService" @change="updateAnswers('medicalService', $event)" />
                    <SubSurveyCategory :list="medicalHistory" @change="updateAnswers('medicalHistory', $event)" />
                    <SubSurveyCategory :list="schedule" @change="updateAnswers('schedule', $event)" />
                    <SubSurveyCategory :list="tour" @change="updateAnswers('tour', $event)" />
                    <SubSurveyCategory :list="additional" @change="updateAnswers('additional', $event)" />
                    <SubSurveyCategory :list="preference" @change="updateAnswers('preference', $event)" />

                </div>
            </div>

        </div>
    </div>

    <div class="h-[60px] flex justify-center items-center gap-[6px] text-white mx-auto cursor-pointer w-[260px] bg-[#1F78FF]"
        @click="goSurvey()">
        {{ t('report.alert.request.btn') }}
        <img src="@/assets/images/sub/about/program_btn.png" alt="화살표 이미지" class="">
    </div>
</template>
<script setup lang="ts">
import { useReportStore } from '~/stores/admin/reportStore';
import { t, composer } from '@/plugins/i18n'

const reportMngStore = useReportStore('cli-report');
const router = useRouter();

const boardList = ref([]);
const basicInfo = ref([]);
const medicalService = ref([]);
const medicalHistory = ref([]);
const schedule = ref([]);
const tour = ref([]);
const additional = ref([]);
const preference = ref([]);

const allAnswers = ref({
    basicInfo: [],
    medicalService: [],
    medicalHistory: [],
    schedule: [],
    tour: [],
    additional: [],
    preference: [],
})

const updateAnswers = (key: string, value: any[]) => {
    allAnswers.value[key] = value
    console.log(`[${key}] 변경됨`, value)
}

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

const goSurvey = async () => {
    const mergedAnswers = [
        ...allAnswers.value.basicInfo,
        ...allAnswers.value.medicalService,
        ...allAnswers.value.medicalHistory,
        ...allAnswers.value.schedule,
        ...allAnswers.value.tour,
        ...allAnswers.value.additional,
        ...allAnswers.value.preference
    ];

    const isValidValue = (val: any) => val !== null && val !== undefined && val.toString().trim() !== '';

    const invalidItems: any[] = [];

    const transformedAnswers = mergedAnswers.map(item => {
        const answerText = item.answerData ?? [];

        if (item.isRequired) {
            const hasValid = answerText.some(ans => isValidValue(ans.value));
            if (!hasValid) {
                console.log(item);
                invalidItems.push(item);
                return { ...item, answerText };
            }
        }

        answerText.forEach(ans => {
            if (!isValidValue(ans.value)) return;

            if (Array.isArray(ans.addquestion)) {
                ans.addquestion.forEach((subQ: any) => {
                    if (!subQ.isRequired) return;

                    const hasValid = (subQ.option || []).some(opt => isValidValue(opt.value));
                    if (!hasValid) {
                        console.log(subQ);
                        invalidItems.push({
                            ...item,
                            errorType: 'addquestion',
                            subQuestion: subQ
                        });
                    }
                });
            }
        });

        return {
            ...item,
            answerText: JSON.stringify(answerText)
        };
    });

    if (invalidItems.length > 0) {
        SysAlert({
            type: 'alert',
            message: t('report.alert.required.text'),
            okText: t('report.alert.required.btn')
        });
    }

    const params = {
        repotAnswerInfo: transformedAnswers
    };

    try {
        const response = await reportMngStore.insertBoardAnswer(params);
        if (response) {
            SysAlert({
                type: 'alert',
                message: t('report.alert.finish.text'),
                okText: t('report.alert.finish.btn'),
                callback: () => { router.push('/') }
            });
        }
    } catch {
        SysAlert({
            type: 'confirm',
            message: t('report.alert.error.text'),
            okText: t('report.alert.finish.btn'),
            callback: () => { window.location.reload() }
        });
    }
};



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