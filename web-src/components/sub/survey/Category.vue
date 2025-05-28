<template>
    <div class="basic_info mt-[-1px]" v-if="list && list.length > 0">
        <div
            class="tit text-[18px] sm:text-[25px] font-[700] w-full p-[20px] sm:py-[30px] sm:px-[50px] bg-[#F9F9F9] border-t border-b  border-[#c8c8c8]">
            {{ composer.locale == 'en' ? list[0].repotTitle.titleEn : list[0].repotTitle.titleId }}
        </div>
        <div v-for="(item, index) in list" :key="index"
            class="cont text-[15px] sm:text-[18px] font-[700] w-full px-[20px] py-[10px] sm:py-[20px] sm:px-[50px] border-b  border-[#c8c8c8]">
            <div class="flex flex-col justify-start items-start  gap-[10px] sm:gap-0" v-if="item.answerType == 1"
                :class="isBasicInfo ? ' sm:flex-row sm:items-center' : 'sm:flex-col'">
                <div class="name flex-0" :class="isBasicInfo ? 'w-[200px]' : 'w-full pb-[10px]'">
                    <span class="text-[#ff0000]" v-if="item.isRequired">√</span>
                    {{ composer.locale == 'en' ? item.questionText.questionTextEn : item.questionText.questionTextId }}
                </div>
                <!-- answerType 1: 텍스트 입력 -->
                <div class="fill flex-1 w-full" v-if="item.answerType == 1">
                    <input type="text"
                        class="w-full  h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]"
                        :class="isBasicInfo ? 'max-w-[500px]' : 'max-w-full'"
                        v-model="reqData[index].answerData[0].value" />
                </div>
            </div>

            <div class="flex flex-col justify-start items-start sm:items-center gap-[10px] sm:gap-0" v-else>
                <div class="name w-full flex-0">
                    <span class="text-[#ff0000]" v-if="item.isRequired">√</span>
                    {{ composer.locale == 'en' ? item.questionText.questionTextEn : item.questionText.questionTextId }}
                </div>


                <!-- answerType 2: 텍스트에어리어 -->
                <div class="fill flex-1 w-full pt-[10px]" v-if="item.answerType == 2">
                    <textarea v-model="reqData[index].answerData[0].value"
                        class="w-full h-[150px] p-[10px] border border-[#C8C8C8] rounded-[5px] resize-none font-[400] text-[16px]"></textarea>
                </div>

                <!-- answerType 3: 라디오 버튼 -->
                <div class="fill flex-1 w-full pt-[10px]" v-if="item.answerType == 3">
                    <div v-for="(choose, idx) in item.answerData" :key="idx" class="mt-[20px]">
                        <label class="cursor-pointer flex items-center gap-2">
                            <input type="radio" :checked="reqData[index].answerData[idx].value == 'selected'"
                                @change="onRadioChange(index, idx)" />
                            {{ composer.locale == 'en' ? choose.text.titleEn : choose.text.titleId }}
                        </label>

                        <!-- 선택된 항목에 addquestion이 있는 경우 -->
                        <div v-if="reqData[index].answerData[idx].value == 'selected' && choose.addquestion?.length"
                            class="mt-2 pl-5 border-l">
                            <div v-for="(sub, subIdx) in choose.addquestion" :key="subIdx" class="mt-[20px]">
                                <div class="text-sm font-medium mb-[10px]">
                                    <span class="text-[#ff0000]" v-if="sub.isRequired">√</span>
                                    {{ composer.locale == 'en' ? sub.questionText.titleEn : sub.questionText.titleId }}
                                </div>

                                <!-- 하위 질문 타입에 따라 입력 -->
                                <div v-if="sub.answerType == 1">
                                    <input type="text"
                                        v-model="reqData[index].answerData[idx].addquestion[subIdx].option[0].value"
                                        class="w-full max-w-[400px] h-[40px] border border-[#C8C8C8] rounded px-2" />
                                </div>
                                <div v-if="sub.answerType == 2">
                                    <textarea
                                        v-model="reqData[index].answerData[idx].addquestion[subIdx].option[0].value"
                                        class="w-full h-[100px] border border-[#C8C8C8] rounded px-2 py-1"></textarea>
                                </div>
                                <div v-if="sub.answerType == 3">
                                    <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-[10px]">
                                        <label class="cursor-pointer flex items-center gap-2">
                                            <input type="radio"
                                                :checked="reqData[index].answerData[idx].addquestion[subIdx].option[optIdx].value == 'selected'"
                                                @change="onRadioChange(index, idx, subIdx, optIdx)" />
                                            {{ composer.locale == 'en' ? opt.text.titleEn : opt.text.titleId }}
                                        </label>
                                    </div>
                                </div>
                                <div v-if="sub.answerType == 4">
                                    <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-[10px]">
                                        <label class="cursor-pointer">
                                            <input type="checkbox"
                                                :checked="reqData[index].answerData[idx].addquestion[subIdx].option[optIdx].value == 'selected'"
                                                @change="toggleCheckbox(index, idx, subIdx, optIdx)" />
                                            {{ composer.locale == 'en' ? opt.text.titleEn : opt.text.titleId }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- answerType 4: 체크박스 -->
            <div class="fill flex-1 w-full pt-[10px]" v-if="item.answerType == 4">
                <div v-for="(choose, idx) in item.answerData" :key="idx" class="mt-[20px]">
                    <label class="cursor-pointer flex items-center gap-2">
                        <input type="checkbox" :value="idx"
                            :checked="reqData[index].answerData[idx].value == 'selected'"
                            @change="toggleCheckbox(index, idx)" />
                        {{ composer.locale == 'en' ? choose.text.titleEn : choose.text.titleId }}
                    </label>

                    <!-- 선택된 항목에 addquestion이 있는 경우 -->
                    <div v-if="reqData[index].answerData[idx].value == 'selected' && choose.addquestion?.length"
                        class="mt-2 pl-5 border-l">

                        <div v-for="(sub, subIdx) in choose.addquestion" :key="subIdx" class="mt-[20px]">
                            <div class="text-sm font-medium mb-[10px]">
                                <span class="text-[#ff0000]" v-if="sub.isRequired">√</span>
                                {{ composer.locale == 'en' ? sub.questionText.titleEn : sub.questionText.titleId }}
                            </div>

                            <!-- 하위 질문 타입에 따라 입력 -->
                            <div v-if="sub.answerType == 1">
                                <input type="text"
                                    v-model="reqData[index].answerData[idx].addquestion[subIdx].option[0].value"
                                    class="w-full max-w-[400px] h-[40px] border border-[#C8C8C8] rounded px-2" />
                            </div>
                            <div v-if="sub.answerType == 2">
                                <textarea class="w-full h-[100px] border border-[#C8C8C8] rounded px-2 py-1"
                                    v-model="reqData[index].answerData[idx].addquestion[subIdx].option[0].value"></textarea>
                            </div>
                            <div v-if="sub.answerType == 3">
                                <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-[10px]">
                                    <label class="cursor-pointer flex items-center gap-2">
                                        <input type="radio"
                                            :checked="reqData[index].answerData[idx].addquestion[subIdx].option[optIdx].value == 'selected'"
                                            @change="onRadioChange(index, idx, subIdx, optIdx)" />
                                        {{ composer.locale == 'en' ? opt.text.titleEn : opt.text.titleId }}
                                    </label>
                                </div>
                            </div>
                            <div v-if="sub.answerType == 4">
                                <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-[10px]">
                                    <label class="cursor-pointer">
                                        <input type="checkbox"
                                            :checked="reqData[index].answerData[idx].addquestion[subIdx].option[optIdx].value == 'selected'"
                                            @change="toggleCheckbox(index, idx, subIdx, optIdx)" />
                                        {{ composer.locale == 'en' ? opt.text.titleEn : opt.text.titleId }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { t, composer } from '@/plugins/i18n'

const props = defineProps({
    list: Array
})

const emit = defineEmits<{
    (e: 'change', value: any[]): void
}>()

const reqData = ref([]);

watch(
    () => props.list,
    (newList) => {
        if (newList && newList.length > 0) {
            const update = [...newList]
            reqData.value = update
        } else {
            reqData.value = []
        }
    },
    { immediate: true }
)

const emitChange = () => {
    emit('change', reqData.value)
}

watch(reqData, () => {
    console.log(`emit triggered`, reqData.value)
    emit('change', reqData.value)
}, { deep: true })

const isBasicInfo = computed(() =>
    props.list?.length > 0 && props.list[0].repotTitle?.titleEn == 'Basic Information'
)

const selectedOptions = ref<Record<number, number>>({})
const selectedCheckboxes = ref<Record<number, number[]>>({})

const toggleCheckbox = (questionIndex: number, optionIndex: number, subIdx?: number, optIdx?: number) => {
    if (optIdx != null && optIdx != undefined) {
        const option = reqData.value[questionIndex].answerData[optionIndex].addquestion[subIdx].option[optIdx]
        option.value = option.value == 'selected' ? '' : 'selected'
    } else {
        const option = reqData.value[questionIndex].answerData[optionIndex]
        option.value = option.value == 'selected' ? '' : 'selected'
    }
}

const onRadioChange = (questionIndex: number, choiceIndex: number, subIdx?: number, optIdx?: number) => {
    if (optIdx != null && optIdx != undefined) {
        reqData.value[questionIndex].answerData[choiceIndex].addquestion[subIdx].option.forEach((choice: any, i: number) => {
            choice.value = i == optIdx ? 'selected' : ''
        })
    } else {
        reqData.value[questionIndex].answerData.forEach((choice: any, i: number) => {
            choice.value = i == choiceIndex ? 'selected' : ''
        })
    }
}



</script>

<style scoped></style>
