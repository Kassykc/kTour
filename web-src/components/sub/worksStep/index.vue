<template>
    <div>
        <div class="step_area flex flex-col sm:flex-row justify-center items-center flex-wrap gap-[10px] sm:gap-0">
            <template v-for="(step, index) in steps" :key="index">
                <!-- STEP 카드 -->
                <div
                    :class="[
                    'w-full max-w-[300px] h-[270px] max-h-[270px] sm:w-[243px] sm:max-w-[243px] sm:h-[372px] sm: max-h-[372px] rounded-[30px] sm:rounded-[260px] py-[26px] sm:py-[58px] px-[30px] flex flex-col justify-center sm:justify-start items-center gap-[22px] text-center',
                    step.bgColor
                    ]"
                >
                    <div class="tit text-[18px] font-[700]">{{ step.step }}</div>
                    <div class="text-[30px] font-[700]">{{ step.title }}</div>
                    <div class="text-[15px] font-[500]">{{ step.desc }}</div>
                </div>
        
                <!-- 화살표: 마지막은 제외 -->
                <img
                    v-if="index < steps.length - 1"
                    src="@/assets/images/main/section01/arrow.png"
                    alt="화살표"
                    class="hidden sm:block transform rotate-90 sm:rotate-0 transition-all duration-500 ease-in-out"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';

const steps = [
    {
        step: 'STEP 01',
        title: 'Contact & Consultation',
        desc: 'Submit your info — we’ll guide you to the right program based on your needs.',
        bgColor: 'bg-[#FFE3E3]',
    },
    {
        step: 'STEP 02',
        title: 'Plan & Confirm',
        desc: 'Review your personalized schedule and complete your payment.',
        bgColor: 'bg-[#FFF1E3]',
    },
    {
        step: 'STEP 03',
        title: 'Book & Prepare',
        desc: 'We arrange your visa, flights, hotel and finalize all preparation.',
        bgColor: 'bg-[#EEFFE3]',
    },
    {
        step: 'STEP 04',
        title: 'Travel & Heal',
        desc: 'Receive treatment and enjoy K-content tours.',
        bgColor: 'bg-[#E3F7FF]',
    },
    {
        step: 'STEP 05',
        title: 'Return & Recover',
        desc: 'Get aftercare support even after you’re home.',
        bgColor: 'bg-[#E3E8FF]',
    },
]

</script>
<style lang="">
    
</style>