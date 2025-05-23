<template>
    <div>
        <div class="flex flex-col items-center h-full py-[100px] ">
            <!-- bg-[#FAFAFA] -->
            <div class="flex flex-col items-start w-full max-w-[1340px] px-[20px] pb-2 lg:pb-10">
                <div class="flex flex-col justify-center items-start">
                    <MainSectionLinkTitle :title="t('main.section6.part1.title')" :color="'#7A5083'" />
                </div>
            </div>

            <div class="w-full">
                <!-- sponsors -->
                <div class="py-16">
                    <Swiper :modules="[Autoplay, Navigation]" :autoplay="{ delay: 0, disableOnInteraction: false }" :speed="3000"
                    :loop="true" :freeMode="true"  :spaceBetween="30" slidesPerGroupAuto: true
                    :breakpoints="{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                        1536: { slidesPerView: 6 }
                    }"
                    class="w-full max-w-[1920px] flex justify-center items-center">
                        <SwiperSlide v-for="(item, idx) in spon" :key="idx">
                            <div class="text-center flex justify-center items-center w-[130px] h-[100px] sm:w-[200px] sm:h-[150px] mx-auto">
                                <img :src="item.img" class="w-full object-contain" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
        
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import spon01 from '@/assets/images/main/spon/01.png'
import spon02 from '@/assets/images/main/spon/02.png'
import spon03 from '@/assets/images/main/spon/03.png'
import spon04 from '@/assets/images/main/spon/04.png'
import spon05 from '@/assets/images/main/spon/05.png'
import spon06 from '@/assets/images/main/spon/06.jpg'
import spon07 from '@/assets/images/main/spon/07.png'
import spon08 from '@/assets/images/main/spon/08.png'
import spon09 from '@/assets/images/main/spon/09.png'
import spon10 from '@/assets/images/main/spon/10.png'
import spon11 from '@/assets/images/main/spon/11.png'
import spon12 from '@/assets/images/main/spon/12.png'
import spon13 from '@/assets/images/main/spon/13.png'
import spon14 from '@/assets/images/main/spon/14.png'
import spon15 from '@/assets/images/main/spon/15.png'
import spon16 from '@/assets/images/main/spon/16.png'
import spon17 from '@/assets/images/main/spon/17.png'
import spon18 from '@/assets/images/main/spon/18.png'
import spon19 from '@/assets/images/main/spon/19.png'

const spon = [
    { img: spon01 },
    { img: spon02 },
    { img: spon03 },
    { img: spon04 },
    { img: spon05 },
    { img: spon06 },
    { img: spon07 },
    { img: spon08 },
    { img: spon09 },
    { img: spon10 },
    { img: spon11 },
    { img: spon12 },
    { img: spon13 },
    { img: spon14 },
    { img: spon15 },
    { img: spon16 },
    { img: spon17 },
    { img: spon18 },
    { img: spon19 },
];
</script>
<style>
    
</style>