<template>
    <div class="mb-[60px]">
        <div class="font-[700] text-[18px] sm:text-[25px] text-center mb-[28px] sm:mb-[56px]">Medical Treatment Field</div>
        <div class="treatment_area flex justify-center items-start gap-[12px] flex-wrap">
            <div v-for="(item, index) in treatments" :key="index" class="w-[120px]">
                <div class="img_area w-[120px] h-[120px] flex justify-center items-center rounded-[20px] mb-[18px] hover:rounded-full transition-all duration-200 ease-in-out cursor-pointer hover:shadow-[0_3px_14px_rgba(0,0,0,0.6)]"
                    :class="item.bg" @click="router.push(item.url)">
                    <img :src="item.image" alt="treatment 이미지" />
                </div>
                <div class="desc text-[15px] font-[500] px-[10px] text-center">
                    {{ item.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

import treatment01 from '@/assets/images/sub/about/treatment01.png'
import treatment02 from '@/assets/images/sub/about/treatment02.png'
import treatment03 from '@/assets/images/sub/about/treatment03.png'
import treatment04 from '@/assets/images/sub/about/treatment04.png'
import treatment05 from '@/assets/images/sub/about/treatment05.png'
import treatment06 from '@/assets/images/sub/about/treatment06.png'
import treatment07 from '@/assets/images/sub/about/treatment07.png'
import treatment08 from '@/assets/images/sub/about/treatment08.png'
import treatment09 from '@/assets/images/sub/about/treatment09.png'
import treatment10 from '@/assets/images/sub/about/treatment10.png'

const router = useRouter()

const treatments = [
    { image: treatment01, text: t('about.part2.content3.sub.1'), bg: 'bg-[#EDF5F0]', url: '/' },
    { image: treatment02, text: t('about.part2.content3.sub.2'), bg: 'bg-[#FFE5CE]', url: '/' },
    { image: treatment03, text: t('about.part2.content3.sub.3'), bg: 'bg-[#FFCED6]', url: '/' },
    { image: treatment04, text: t('about.part2.content3.sub.4'), bg: 'bg-[#E8CEFF]', url: '/' },
    { image: treatment05, text: t('about.part2.content3.sub.5'), bg: 'bg-[#F0FFCE]', url: '/' },
    { image: treatment06, text: t('about.part2.content3.sub.6'), bg: 'bg-[#FFF4CE]', url: '/' },
    { image: treatment07, text: t('about.part2.content3.sub.7'), bg: 'bg-[#E5E4FF]', url: '/' },
    { image: treatment08, text: t('about.part2.content3.sub.8'), bg: 'bg-[#FFECE2]', url: '/' },
    { image: treatment09, text: t('about.part2.content3.sub.9'), bg: 'bg-[#F3ECF4]', url: '/' },
    { image: treatment10, text: t('about.part2.content3.sub.10'), bg: 'bg-[#E9F5FF]', url: '/' },
]

</script>

<style lang="scss">
.img_area {
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        background: url('@/assets/images/sub/about/arrow_outward.png') no-repeat center center;
        background-size: contain;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 2;
    }

    &:hover::before,
    &:hover::after {
        opacity: 1;
    }
}
</style>
