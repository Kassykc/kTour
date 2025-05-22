<template>
    <div class="w-full flex flex-col justify-start items-start gap-[10px] p-[20px]">
        <select v-model="question.answerType" class="w-[150px] h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white text-sm">
            <option value="text">text(단답식)</option>
            <option value="textarea">textarea(주관식)</option>
            <option value="radio">radio(단일선택)</option>
            <option value="checkbox">checkbox(다중선택)</option>
        </select>
    
        <div class="flex flex-col justify-start items-center w-full gap-[10px]">
            <div class="w-full flex justify-start items-center gap-[10px]">
                <div class="w-fit shrink-0">질문 :</div>
                <input v-model="question.text" type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-full" placeholder="질문 내용 입력" />
                </div>
        
                <div class="w-full flex justify-start items-center gap-[10px] flex-wrap">
                <div class="w-fit shrink-0">답변 :</div>
        
                <!-- 단답식 -->
                <div v-if="question.answerType === 'text'" class="text_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                    <div class="w-full flex justify-start items-center gap-[10px]">
                    <input type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]" placeholder="en" />
                    <input type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[50%]" placeholder="id" />
                    </div>
                </div>
        
                <!-- 주관식 -->
                <div v-if="question.answerType === 'textarea'" class="textarea_area flex justify-start items-start gap-[10px] flex-wrap w-full">
                    <div class="w-full flex justify-start items-center gap-[10px]">
                    <textarea class="w-[50%] h-[150px] p-[10px] border border-[#C8C8C8] rounded-[5px] resize-none font-[400] text-[16px]" placeholder="en"></textarea>
                    <textarea class="w-[50%] h-[150px] p-[10px] border border-[#C8C8C8] rounded-[5px] resize-none font-[400] text-[16px]" placeholder="id"></textarea>
                    </div>
                </div>
        
                <!-- radio/checkbox -->
                <div v-if="question.answerType === 'radio' || question.answerType === 'checkbox'" class="radio_chkbox_area flex justify-start items-start gap-[10px] flex-wrap w-[80%]">
                    <div
                        class="w-full flex justify-start items-center gap-[10px] flex-wrap"
                        v-for="(item, idx) in question.options"
                        :key="idx"
                    >
                        <input v-model="item.en" type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[38%]" placeholder="en" />
                        <input v-model="item.id" type="text" class="h-[36px] px-2 py-1 border border-[#dcdcdc] rounded bg-white w-[38%]" placeholder="id" />
                        <div class="h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer shrink-0 w-[50px]" @click="addChild(idx)">질문 추가</div>
                        <div class="h-[36px] leading-[26px] px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px]" @click="removeOption(idx)">-</div>

                        <!-- 자식 질문 개별 출력 -->
                        <div v-if="item.children" class="sub_area relative w-full pl-[50px] flex flex-col justify-start items-start">
                            <LayerAdminReportRegItem
                            v-for="(child, i) in item.children"
                            :key="i"
                            v-model="item.children[i]"
                            @remove="() => item.children.splice(i, 1)"
                            />
                        </div>
                    </div>
                </div>
        
                <div v-if="question.answerType === 'radio' || question.answerType === 'checkbox'" class="flex justify-center items-center gap-[10px]">
                    <div class="h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer w-[42px] text-white bg-black" @click="addOption">+</div>
                </div>
        
                <!-- 자식 질문 재귀 출력 -->
                <!-- <div v-if="question.answerType === 'radio' || question.answerType === 'checkbox'" class="sub_area relative w-full pl-[50px] flex flex-col justify-start items-start">
                    <LayerAdminReportRegItem
                        v-for="(child, i) in question.children"
                        :key="i"
                        v-model="question.children[i]"
                        @remove="() => question.children.splice(i, 1)"
                    />
                </div> -->

                <div class="sub_area_delete_btn h-[36px] leading-[26px] flex-1 px-2 py-1 border border-[#dcdcdc] rounded cursor-pointer text-white bg-black" @click="emit('remove')">삭제</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue'

const props = defineProps<{
    modelValue: {
        answerType: string
        text: string
        options: { en: string; id: string; children?: any[] }[]
        children: any[]
    }
}>()

const emit = defineEmits(['update:modelValue', 'remove'])
const question = reactive(props.modelValue)

const addOption = () => {
    question.options.push({ en: '', id: '', children: [] })
}

const removeOption = (index: number) => {
    if (question.options.length > 1) {
        question.options.splice(index, 1)
    }
}

const addChild = (idx: number) => {
    question.options[idx].children = question.options[idx].children || []
    question.options[idx].children.push({
        answerType: 'text',
        text: '',
        options: [{ en: '', id: '' }],
        children: []
    })
}

</script>
<style lang="">
    
</style>