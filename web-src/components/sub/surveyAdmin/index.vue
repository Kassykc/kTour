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

                    <SubSurveyAdminCategory :list="basicInfo" @change="updateAnswers('basicInfo', $event)" />
                    <SubSurveyAdminCategory :list="medicalService" @change="updateAnswers('medicalService', $event)" />
                    <SubSurveyAdminCategory :list="medicalHistory" @change="updateAnswers('medicalHistory', $event)" />
                    <SubSurveyAdminCategory :list="schedule" @change="updateAnswers('schedule', $event)" />
                    <SubSurveyAdminCategory :list="tour" @change="updateAnswers('tour', $event)" />
                    <SubSurveyAdminCategory :list="additional" @change="updateAnswers('additional', $event)" />
                    <SubSurveyAdminCategory :list="preference" @change="updateAnswers('preference', $event)" />
                </div>
            </div>
        </div>

        <div class="h-[60px] flex justify-center items-center gap-[6px] text-white mx-auto cursor-pointer w-[260px] bg-[#1F78FF]"
            @click="goSurvey()">
            {{ '등록 버튼' }}
            <img src="@/assets/images/sub/about/program_btn.png" alt="화살표 이미지" class="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useReportStore } from '~/stores/admin/reportStore';
import { t } from '@/plugins/i18n';
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
    answers: Array
});

const reportMngStore = useReportStore('cli-report');

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
    preference: []
});

// boardList 로딩 완료 여부 플래그
const isBoardLoaded = ref(false);

// answers 반영 처리 함수
function applyAnswers(newAnswers: any[]) {
    if (!Array.isArray(newAnswers)) return;

    newAnswers.forEach((answerItem: any) => {
        const target = boardList.value.find(b => b.repotIdx === answerItem.repotIdx);
        if (target) {
            try {
                target.answerData = JSON.parse(answerItem.answerText ?? '[]');
            } catch (e) {
                console.warn(`answerText 파싱 오류: repotId=${answerItem.repotIdx}`, e);
                target.answerData = [];
            }
        }
    });

    basicInfo.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Basic Information');
    medicalService.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Medical Services');
    medicalHistory.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Medical History');
    schedule.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Schedule & Accompaniment');
    tour.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Tour');
    additional.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Additional Information');
    preference.value = boardList.value.filter(item => item.repotTitle.titleEn === 'Consultation Preference');
}

// props.answers 감지 watcher
watch(
    () => props.answers,
    (newVal) => {
        if (!isBoardLoaded.value) {
            // boardList가 준비되지 않은 상태면 처리하지 않고 대기
            console.log('boardList 로딩 대기 중, answers 반영 지연');
            return;
        }
        applyAnswers(newVal);
    },
    { immediate: true }
);

// answers 업데이트 콜백
const updateAnswers = (key: string, value: any[]) => {
    allAnswers.value[key] = value;
    console.log(`[${key}] 변경됨`, value);
};

const getType = (type: number) => {
    switch (type) {
        case 1:
            return 'text';
        case 2:
            return 'textarea';
        case 3:
            return 'radio';
        case 4:
            return 'checkbox'; // 오타 수정
        default:
            return 'text';
    }
};

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
        alert('필수 응답 항목이 비어 있습니다.');
        console.warn('유효하지 않은 항목들:', invalidItems);
        return;
    }

    const params = {
        repotAnswerInfo: transformedAnswers
    };

    const response = await reportMngStore.insertBoardAnswer(params);
    if (response) {
        console.log('응답 전송 성공');
    }
};

const getBoardList = async (pageNum: number, pageSize: number) => {
    const data = {
        pageNum,
        pageSize,
        repotId: "report_01"
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
                    answerData: parsedAnswer
                };
            })
            .sort((a, b) => a.order - b.order);

        boardList.value = parsedList;

        // boardList 로딩 완료 플래그 true
        isBoardLoaded.value = true;

        // 로딩 완료 후 props.answers가 이미 있으면 강제로 반영
        if (props.answers) {
            applyAnswers(props.answers);
        }
    }
};

onMounted(async () => {
    await getBoardList(1, 9999);
});
</script>
<style lang="">

</style>