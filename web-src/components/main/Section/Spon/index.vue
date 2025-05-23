<template>
    <div>
        <div class="flex flex-col items-center h-full bg-[#fff] py-[100px] ">
            <div class="flex flex-col items-start w-full max-w-[1340px] px-[20px] pb-2 lg:pb-10">
                <div class="flex flex-col justify-center items-start">
                    <MainSectionLinkTitle :title="t('main.section6.part1.title')" :color="'#7A5083'" />
                </div>
            </div>

            <div class="w-full">
                <!-- sponsors -->
                <div class="py-16">
                    <Swiper :modules="[Autoplay, Navigation]" :autoplay="{ delay: 0, disableOnInteraction: false }" :speed="3000"
                    :loop="true" :freeMode="true" :slidesPerView="6" :spaceBetween="30" slidesPerGroupAuto: true
                    class="w-full max-w-[1920px] flex justify-center items-center">
                        <SwiperSlide v-for="(item, idx) in spon" :key="idx">
                            <div class="text-center flex justify-center items-center h-[60px] shrink-0">
                                <img :src="item.img" class="shrink-0" />
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
import spon06 from '@/assets/images/main/spon/06.png'
import spon07 from '@/assets/images/main/spon/07.png'
import spon08 from '@/assets/images/main/spon/08.png'

const spon = [
    { img: spon01 },
    { img: spon02 },
    { img: spon03 },
    { img: spon04 },
    { img: spon05 },
    { img: spon06 },
    { img: spon07 },
    { img: spon08 },
];
</script>
<style>
    
</style>