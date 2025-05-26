<template>
    <div class="w-full flex flex-col justify-start items-start p-[20px]">


        <div class="w-full flex justify-start items-center gap-[10px] border-t border-[#dcdcdc]">
            <label
                class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[30px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] py-[10px]">
                응답필수여부
            </label>
            <label
                class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] gap-[10px]">
                <input type="radio" v-model="props.modelValue.isRequired" :value="true" />예
            </label>
            <label
                class="flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-auto font-[600] gap-[10px]">
                <input type="radio" v-model="props.modelValue.isRequired" :value="false" />아니오
            </label>
        </div>

        <div class="w-full flex justify-start items-center gap-[10px] border-t border-[#dcdcdc]">
            <div class="w-fit shrink-0 flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[30px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] py-[10px]">질문</div>
            <input v-model="props.modelValue.questionText.titleEn" type="text"
                class="h-[30px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-full" placeholder="en" />
            <input v-model="props.modelValue.questionText.titleId" type="text"
                class="h-[30px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-full" placeholder="id" />
        </div>

        <div class="flex justify-start items-center gap-[10px] border-t border-b border-[#dcdcdc] w-full">
            <div class="w-fit shrink-0 flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[30px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] py-[10px]">선택지 유형</div>
            <select v-model="props.modelValue.answerType"
            class="w-[150px] h-[30px] px-2 py-1 border border-[#dcdcdc] rounded bg-white text-sm">
                <option value="1">단답식</option>
                <option value="2">주관식</option>
                <option value="3">단일선택형</option>
                <option value="4">다중선택형</option>
            </select>
        </div>

        <div class="flex flex-col justify-start items-center w-full border-b border-[#dcdcdc]"
            v-for="(item, index) in props.modelValue.option" :key="index">
            <div class="w-full flex justify-start items-center gap-[10px]">
                <div class="w-fit shrink-0 flex justify-center items-center w-[70px] min-w-[70px] sm:w-[120px] sm:min-w-[120px] h-auto min-h-[30px] font-[600] border-r border-[#dcdcdc] bg-[#f5f5f5] py-[10px]">선택지 값</div>
                <input type="text" class="h-[30px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]"
                    placeholder="en" v-model="item.text.titleEn" />
                <input type="text" class="h-[30px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]"
                    placeholder="id" v-model="item.text.titleId" />


                <!-- radio/checkbox -->
                <div v-if="props.modelValue.answerType == '3' || props.modelValue.answerType == '4'"
                    class="flex items-center justify-end w-[100px] gap-[10px]"
                >
                    <div v-if="props.modelValue.answerType == '3' || props.modelValue.answerType == '4'"
                        class="radio_chkbox_area flex justify-start items-start gap-[10px] flex-wrap">
                        <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                            <div class="h-[30px] leading-[26px] px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px]"
                                @click="removeOption(index)">-</div>
                        </div>
                    </div>

                    <div v-if="props.modelValue.answerType === '3' || props.modelValue.answerType === '4'"
                        class="flex justify-center items-center gap-[10px]">
                        <div class="h-[30px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px] text-white bg-black"
                            @click="addOption(index)">+</div>
                    </div>
                </div>
            </div>

            <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                <!-- 단답식 -->
                <div v-if="props.modelValue.answerType == '1'"
                    class="text_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                </div>

                <!-- 주관식 -->
                <div v-if="props.modelValue.answerType == '2'"
                    class="textarea_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                </div>

                
            </div>
        </div>

        <div class="flex justify-end items-center w-full">
            <div 
                class="sub_area_delete_btn h-[36px] leading-[14px] w-[100px] px-2 py-[10px] border border-[#dcdcdc] rounded cursor-pointer text-white bg-black mt-[10px]"
                @click="emit('remove')"
            >
                하위 질문 삭제
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

const addQuestionOption = ref<AddQuestionOption>({
    text: {
        titleEn: "",
        titleId: "",
    },
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
    if (props.modelValue.option.length <= 1) return;
    const newOptions = props.modelValue;
    newOptions.option.splice(index, 1);
    emit('update:modelValue', newOptions);
};
</script>
<style lang="">

</style>