<template>
    <div class="basic_info" v-if="list && list.length > 0">
        <div
            class="tit text-[18px] sm:text-[25px] font-[700] w-full p-[20px] sm:py-[30px] sm:px-[50px] bg-[#F9F9F9] border-t border-b  border-[#c8c8c8]">
            {{ composer.locale == 'en' ? list[0].repotTitle.titleEn : list[0].repotTitle.titleId }}
        </div>
        <div v-for="(item, index) in list" :key="index"
            class="cont text-[15px] sm:text-[18px] font-[700] w-full px-[20px] py-[10px] sm:py-[20px] sm:px-[50px] border-b  border-[#c8c8c8]">
            <div class="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-[10px] sm:gap-0">
                <div class="name w-[200px] flex-0">
                    <span class="text-[#ff0000]" v-if="item.isRequired">√</span>
                    {{ composer.locale == 'en' ? item.questionText.questionTextEn : item.questionText.questionTextId }}
                </div>

                <!-- answerType 1: 텍스트 입력 -->
                <div class="fill flex-1 w-full" v-if="item.answerType == 1">
                    <input type="text"
                        class="w-full max-w-[500px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                </div>

                <!-- answerType 2: 텍스트에어리어 -->
                <div class="fill flex-1 w-full" v-if="item.answerType == 2">
                    <textarea
                        class="w-full h-[150px] p-[10px] border border-[#C8C8C8] rounded-[5px] resize-none font-[400] text-[16px]"></textarea>
                </div>

                <!-- answerType 3: 라디오 버튼 -->
                <div class="fill flex-1 w-full" v-if="item.answerType == 3">
                    <div v-for="(choose, idx) in item.answerData" :key="idx" class="mb-2">
                        <label class="cursor-pointer flex items-center gap-2">
                            <input type="radio" :name="'radio_' + index" :value="idx"
                                v-model="selectedOptions[index]" />
                            {{ composer.locale == 'en' ? choose.text.titleEn : choose.text.titleId }}
                        </label>

                        <!-- 선택된 항목에 addquestion이 있는 경우 -->
                        <div v-if="selectedOptions[index] === idx && choose.addquestion?.length"
                            class="mt-2 pl-5 border-l">
                            <div v-for="(sub, subIdx) in choose.addquestion" :key="subIdx" class="mb-2">
                                <div class="text-sm font-medium mb-1">
                                    <span class="text-[#ff0000]" v-if="sub.isRequired">√</span>
                                    {{ composer.locale == 'en' ? sub.questionText.titleEn : sub.questionText.titleId }}
                                </div>

                                <!-- 하위 질문 타입에 따라 입력 -->
                                <div v-if="sub.answerType == 1">
                                    <input type="text"
                                        class="w-full max-w-[400px] h-[40px] border border-[#C8C8C8] rounded px-2" />
                                </div>
                                <div v-if="sub.answerType == 2">
                                    <textarea
                                        class="w-full h-[100px] border border-[#C8C8C8] rounded px-2 py-1"></textarea>
                                </div>
                                <div v-if="sub.answerType == 3">
                                    <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-1">
                                        <label class="cursor-pointer flex items-center gap-2">
                                            <input type="radio" :name="'subradio_' + index + '_' + subIdx" />
                                            {{ composer.locale == 'en' ? opt.text.titleEn : opt.text.titleId }}
                                        </label>
                                    </div>
                                </div>
                                <div v-if="sub.answerType == 4">
                                    <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-1">
                                        <label class="cursor-pointer">
                                            <input type="checkbox" name="service" value="1" checked />
                                            Health Check-up
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- answerType 4: 체크박스 -->
            <div class="fill flex-1 w-full" v-if="item.answerType == 4">
                <div v-for="(choose, idx) in item.answerData" :key="idx" class="mb-2">
                    <label class="cursor-pointer flex items-center gap-2">
                        <input type="checkbox" :value="idx" :checked="selectedCheckboxes[index]?.includes(idx)"
                            @change="toggleCheckbox(index, idx)" />
                        {{ composer.locale == 'en' ? choose.text.titleEn : choose.text.titleId }}
                    </label>

                    <!-- 선택된 항목에 addquestion이 있는 경우 -->
                    <div v-if="selectedCheckboxes[index]?.includes(idx) && choose.addquestion?.length"
                        class="mt-2 pl-5 border-l">

                        <div v-for="(sub, subIdx) in choose.addquestion" :key="subIdx" class="mb-2">
                            <div class="text-sm font-medium mb-1">
                                <span class="text-[#ff0000]" v-if="sub.isRequired">√</span>
                                {{ composer.locale == 'en' ? sub.questionText.titleEn : sub.questionText.titleId }}
                            </div>

                            <!-- 하위 질문 타입에 따라 입력 -->
                            <div v-if="sub.answerType == 1">
                                <input type="text"
                                    class="w-full max-w-[400px] h-[40px] border border-[#C8C8C8] rounded px-2" />
                            </div>
                            <div v-if="sub.answerType == 2">
                                <textarea class="w-full h-[100px] border border-[#C8C8C8] rounded px-2 py-1"></textarea>
                            </div>
                            <div v-if="sub.answerType == 3">
                                <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-1">
                                    <label class="cursor-pointer flex items-center gap-2">
                                        <input type="radio" :name="'subradio_' + index + '_' + subIdx" />
                                        {{ composer.locale == 'en' ? opt.text.titleEn : opt.text.titleId }}
                                    </label>
                                </div>
                            </div>
                            <div v-if="sub.answerType == 4">
                                <div v-for="(opt, optIdx) in sub.option" :key="optIdx" class="mb-1">
                                    <label class="cursor-pointer">
                                        <input type="checkbox" />
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

const selectedOptions = ref<Record<number, number>>({})
const selectedCheckboxes = ref<Record<number, number[]>>({})

const toggleCheckbox = (questionIndex: number, optionIndex: number) => {
    const current = selectedCheckboxes.value[questionIndex] || []
    const updated = current.includes(optionIndex)
        ? current.filter((v) => v !== optionIndex)
        : [...current, optionIndex]

    selectedCheckboxes.value[questionIndex] = updated
}

</script>

<style scoped></style>
