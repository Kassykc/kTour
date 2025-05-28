<template>
    <div>
        <div class="step_area flex flex-col sm:flex-row justify-center items-center flex-wrap gap-[10px] sm:gap-0">
            <template v-for="(step, index) in steps" :key="index">
                <!-- STEP 카드 -->
                <div :class="[
                    'w-full max-w-[300px] h-[270px] max-h-[270px] sm:w-[243px] sm:max-w-[243px] sm:h-[372px] sm: max-h-[372px] rounded-[30px] sm:rounded-[260px] py-[26px] sm:py-[58px] px-[30px] flex flex-col justify-center sm:justify-start items-center gap-[22px] text-center',
                    step.bgColor
                ]">
                    <div class="tit text-[18px] font-[700]">{{ step.step }}</div>
                    <div class="text-[30px] font-[700]">{{ step.title }}</div>
                    <div class="text-[15px] font-[500]">{{ step.desc }}</div>
                </div>

                <!-- 화살표: 마지막은 제외 -->
                <img v-if="index < steps.length - 1" src="@/assets/images/main/section01/arrow.png" alt="화살표"
                    class="hidden sm:block transform rotate-90 sm:rotate-0 transition-all duration-500 ease-in-out" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';

const steps = [
    {
        step: t('main.section1.part2.step1.step'),
        title: t('main.section1.part2.step1.title'),
        desc: t('main.section1.part2.step1.desc'),
        bgColor: 'bg-[#FFE3E3]',
    },
    {
        step: t('main.section1.part2.step2.step'),
        title: t('main.section1.part2.step2.title'),
        desc: t('main.section1.part2.step2.desc'),
        bgColor: 'bg-[#FFF1E3]',
    },
    {
        step: t('main.section1.part2.step3.step'),
        title: t('main.section1.part2.step3.title'),
        desc: t('main.section1.part2.step3.desc'),
        bgColor: 'bg-[#EEFFE3]',
    },
    {
        step: t('main.section1.part2.step4.step'),
        title: t('main.section1.part2.step4.title'),
        desc: t('main.section1.part2.step4.desc'),
        bgColor: 'bg-[#E3F7FF]',
    },
    {
        step: t('main.section1.part2.step5.step'),
        title: t('main.section1.part2.step5.title'),
        desc: t('main.section1.part2.step5.desc'),
        bgColor: 'bg-[#E3E8FF]',
    },
]

</script>
<style lang="">

</style>