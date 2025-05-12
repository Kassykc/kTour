<template>
    <div class="flex flex-col py-[120px] items-center ">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-12 pl-6">
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="t('main.section4-1.part1.title')" :color="'#477FF6'" :link="true" />
            </div>
            <div class="font-[400] text-[1.5rem] text-[#717171] mb-[42px]">
                {{ t('main.section4-1.part1.desc') }}
            </div>
            <div class="swiper_area w-full max-w-[1222px] mx-auto">
                <div class="relative">
                    <div
                        class="absolute top-0 left-0 w-[926px] h-[524px] bg-[#266BFF] rounded-[38px] pointer-events-none ">
                    </div>
                    <Swiper :modules="[Autoplay, Pagination, Navigation]"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="false"
                        :slidesPerView="1" :spaceBetween="30" :navigation="{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }" @swiper="onSwiperInit" @slideChange="onSlideChange"
                        class="w-full flex justify-center items-center  mx-auto" ref="swiper">
                        <SwiperSlide v-for="(item, idx) in slide" :key="idx">
                            <div class="flex justifiy-center items-center">
                                <div
                                    class="slide_item relative w-1/2 h-[524px] flex flex-col justify-start items-start gap-[35px] p-[70px]  bg-cover bg-center">
                                    <div class="font-[800] text-[19px] text-white">
                                        {{ item.subTitle }}

                                    </div>
                                    <div class="font-[800] text-[45px] leading-[58px] text-white uppercase">
                                        {{ item.title }}
                                    </div>

                                    <div class="font-[800] text-[28px] leading-[31px] text-white mt-[35px]">
                                        {{ item.desc }}
                                    </div>

                                    <div class="absolute top-[35px] right-[30px] pointer-event-none">
                                        <img src="@/assets/images/main/section07/slide_arrow.png" alt="화살표">
                                    </div>
                                </div>
                                <div>
                                    <img :src=item.img alt="슬라이드 이미지">
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div class="absolute bottom-[-65px] left-[70px] font-[500] text-[16px] text-[#929292]">
                        {{ String(activeIndex + 1).padStart(2, '0') }}/{{ totalSlides }}
                    </div>

                    <div
                        class="absolute bottom-[-56px] left-[165px] w-full max-w-[772px] h-[4px] bg-[#E3E3E3] overflow-hidden">
                        <div ref="progressBarRef" class="h-full bg-[#477FF6] animate-progress"></div>
                    </div>

                    <div
                        class="flex justify-between items-center w-[150px] mb-4 absolute bottom-[-100px] right-[100px]">
                        <div class="swiper-button-prev-custom">
                            <img :src="isPrevHover ? prevOn : prevOff" @mouseover="isPrevHover = true"
                                @mouseleave="isPrevHover = false" alt="이전 버튼" class="cursor-pointer" />
                        </div>
                        <div class="swiper-button-next-custom">
                            <img :src="isNextHover ? nextOn : nextOff" @mouseover="isNextHover = true"
                                @mouseleave="isNextHover = false" alt="다음 버튼" class="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted } from 'vue'

import img01 from '@/assets/images/main/section07/slide01.png'

const isPrevHover = ref(false)
const isNextHover = ref(false)

const prevOff = new URL('@/assets/images/main/section07/prev_off.png', import.meta.url).href
const prevOn = new URL('@/assets/images/main/section07/prev_on.png', import.meta.url).href

const nextOff = new URL('@/assets/images/main/section07/next_off.png', import.meta.url).href
const nextOn = new URL('@/assets/images/main/section07/next_on.png', import.meta.url).href

const slide = [
    { subTitle: 'Varicose Veins Clinic', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
    { subTitle: 'Varicose Veins Clinic2', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
    { subTitle: 'Varicose Veins Clinic3', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
    { subTitle: 'Varicose Veins Clinic4', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
];

const swiperRef = ref()
const progressBarRef = ref()

const restartProgress = () => {
    if (!progressBarRef.value) return
    const bar = progressBarRef.value
    bar.classList.remove('animate-progress')
    void bar.offsetWidth
    bar.classList.add('animate-progress')
}


const onSwiperInit = (swiper: any) => {
    swiper.on('slideChange', () => {
        restartProgress()
    })
}

onMounted(() => {
    restartProgress()
})

const activeIndex = ref(0)
const totalSlides = String(slide.length).padStart(2, '0')


const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex
    restartProgress()
}
</script>

<style scoped>
@keyframes slideProgress {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}

.animate-progress {
    animation: slideProgress 3s linear forwards;
}
</style>