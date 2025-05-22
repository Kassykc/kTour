<template>
    <div class="w-full flex flex-col justify-start items-start gap-[10px] p-[20px]">

        <div class="w-full flex justify-start items-center gap-[10px]">
            <div class="w-fit shrink-0">질문 :</div>
            <input v-model="props.modelValue.questionText" type="text"
                class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-full" placeholder="질문 내용 입력" />
        </div>

        <select v-model="props.modelValue.answerType"
            class="w-[150px] h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white text-sm">
            <option value="text">단답식</option>
            <option value="textarea">주관식</option>
            <option value="radio">단일선택형</option>
            <option value="checkbox">다중선택형</option>
        </select>

        {{ props.modelValue }}

        <div class="flex flex-col justify-start items-center w-full gap-[10px]"
            v-for="(item, index) in props.modelValue.option" :key="index">
            <div class="w-full flex justify-start items-center gap-[10px]">
                <div class="w-fit shrink-0">선택지 값 :</div>
                <input type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]"
                    placeholder="en" />
                <input type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]"
                    placeholder="id" />
            </div>

            <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                <!-- 단답식 -->
                <div v-if="props.modelValue.answerType == 'text'"
                    class="text_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                </div>

                <!-- 주관식 -->
                <div v-if="props.modelValue.answerType == 'textarea'"
                    class="textarea_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                </div>

                <!-- radio/checkbox -->
                <div v-if="props.modelValue.answerType == 'radio' || props.modelValue.answerType == 'checkbox'"
                    class="radio_chkbox_area flex justify-start items-start gap-[10px] flex-wrap w-[80%]">
                    <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                        <div class="h-[36px] leading-[26px] px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px]"
                            @click="removeOption(index)">-</div>
                    </div>
                </div>

                <div v-if="props.modelValue.answerType === 'radio' || props.modelValue.answerType === 'checkbox'"
                    class="flex justify-center items-center gap-[10px]">
                    <div class="h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px] text-white bg-black"
                        @click="addOption(index)">+</div>
                </div>
            </div>
        </div>

        <div class="sub_area_delete_btn h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer text-white bg-black"
            @click="emit('remove')">삭제</div>
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
    text: '',
    value: '',
    addquestion: [],
});

const addQuestion = ref<AddQuestion>({
    questionText: '',
    answerType: 'text',
    isRequired: false,
    option: [{
        text: '',
        value: '',
    }],
});

const addQuestionOption = ref<AddQuestionOption>({
    text: '',
    value: '',
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

const addOption = (index: number) => {
    props.modelValue.option.push({ ...toRaw(addQuestionOption.value) });
    emit('update:modelValue', props.modelValue);
};

const removeOption = (index: number) => {
    if (props.modelValue.length <= 1) return;
    const newOptions = [...toRaw(props.modelValue)];
    newOptions.splice(index, 1);
    emit('update:modelValue', newOptions);
};
</script>
<style lang="">

</style>