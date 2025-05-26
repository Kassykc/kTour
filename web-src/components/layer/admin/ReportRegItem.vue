<template>
    <div class="w-full flex flex-col justify-start items-start gap-[10px] p-[20px]">
        <div class="flex flex-col justify-start items-center w-full gap-[10px]"
            v-for="(item, index) in props.modelValue" :key="index">
            <div class="w-full flex justify-start items-center gap-[10px]">
                <div class="w-fit shrink-0">선택지 값 :</div>
                <input type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]"
                    placeholder="en" v-model="item.text.titleEn" />
                <input type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]"
                    placeholder="id" v-model="item.text.titleId" />
            </div>

            <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                <!-- 단답식 -->
                <div v-if="props.answerType == '1'"
                    class="text_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                </div>

                <!-- 주관식 -->
                <div v-if="props.answerType == '2'"
                    class="textarea_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                </div>

                <!-- radio/checkbox -->
                <div v-if="props.answerType == '3' || props.answerType == '4'"
                    class="radio_chkbox_area flex justify-start items-start gap-[10px] flex-wrap w-[80%]">
                    <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                        <div class="h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer shrink-0 w-[50px]"
                            @click="addChild(index)">하위질문 추가</div>
                        <div class="h-[36px] leading-[26px] px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px]"
                            @click="removeOption(index)">-</div>

                        <!-- 자식 질문 개별 출력 -->
                        <!-- <div v-if="item.children"
                            class="sub_area relative w-full pl-[50px] flex flex-col justify-start items-start">
                            <LayerAdminReportRegItem v-for="(child, i) in item.children" :key="i"
                                v-model="item.children[i]" @remove="() => item.children.splice(i, 1)" />
                        </div> -->
                    </div>
                </div>

                <div v-if="props.answerType == '3' || props.answerType == '4'"
                    class="flex justify-center items-center gap-[10px]">
                    <div class="h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px] text-white bg-black"
                        @click="addOption(index)">+</div>
                </div>

                <!-- 자식 질문 재귀 출력 -->
                <div v-if="(props.answerType == '3' || props.answerType == '4') && props.modelValue[index].addquestion && props.modelValue[index].addquestion.length > 0"
                    v-for="(child, i) in props.modelValue[index].addquestion" :key="i"
                    class="sub_area relative w-full ml-[30px] flex flex-col justify-start items-start border">
                    <LayerAdminReportRegItem2 v-model="props.modelValue[index].addquestion[i]"
                        @remove="removeItem2(index, i)" :depth="2" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { AddQuestion, AnswerOption, AddQuestionOption } from '@/types/report/requestQuestion';

const props = defineProps<{
    modelValue: AnswerOption[] | AddQuestionOption
    answerType: String
    depth: number
}>()

const answerOption = ref<AnswerOption>({
    text: {
        titleEn: "",
        titleId: "",
    },
    value: '',
    addquestion: [],
});

const addQuestion = ref<AddQuestion>({
    questionText: {
        titleEn: "",
        titleId: "",
    },
    answerType: '1',
    isRequired: false,
    option: [{
        text: {
            titleEn: "",
            titleId: "",
        },
        value: '',
    }],
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const addOption = (index: number) => {
    const newOptions = [...toRaw(props.modelValue)];

    const deepCopy = JSON.parse(JSON.stringify(answerOption.value));

    newOptions.splice(index + 1, 0, deepCopy);

    emit('update:modelValue', newOptions);
};


const removeOption = (index: number) => {
    if (props.modelValue.length <= 1) return;
    const newOptions = [...toRaw(props.modelValue)];
    newOptions.splice(index, 1);
    emit('update:modelValue', newOptions);
};

const addChild = (idx: number) => {
    const newOptions = [...toRaw(props.modelValue)];
    if (!newOptions[idx].addquestion) newOptions[idx].addquestion = [];

    // 깊은 복사
    const deepCopy = JSON.parse(JSON.stringify(addQuestion.value));
    newOptions[idx].addquestion.push(deepCopy);

    emit('update:modelValue', newOptions);
};


const removeItem2 = (index: number, i: number) => {
    const newOptions = [...toRaw(props.modelValue)];
    newOptions[index].addquestion.splice(i, 1);
    emit('update:modelValue', newOptions);
}
</script>
<style lang="">

</style>