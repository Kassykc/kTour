<template>
    <div class="flex flex-col py-[120px] items-center ">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-12 pl-6">
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="'Affiliated Treatment Centers'" :color="'#477FF6'" :link="true" />
            </div>
            <div class="font-[400] text-[1.5rem] text-[#717171] mb-[42px]">
                A nationwide network of reliable care.
            </div>
            <div class="swiper_area w-full max-w-[1222px] mx-auto">
                <div class="relative">
                    <div class="absolute top-0 left-0 w-[926px] h-[524px] bg-[#266BFF] rounded-[38px] pointer-events-none "></div>
                    <Swiper :modules="[Autoplay, Pagination, Navigation]" :autoplay="{ delay: 3000, disableOnInteraction: false }"
                    :loop="true" :pagination="false" :slidesPerView="1" :spaceBetween="30"
                    class="w-full flex justify-center items-center  mx-auto" ref="swiper">
                    <!-- :navigation="{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom'
                    }" -->
                        <SwiperSlide v-for="(item, idx) in people" :key="idx">
                            <div class="flex justifiy-center items-center">
                                <div class="slide_item relative w-1/2 h-[524px] flex flex-col justify-start items-start gap-[35px] p-[70px]  bg-cover bg-center">
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
                    <!-- <div class="flex justify-between items-center w-[1580px] max-w-[1580px] mb-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div class="swiper-button-prev-custom">
                            <img src="@/assets/images/main/committee/prev.png" alt="이전 버튼" class="cursor-pointer" />
                            </div>
                        <div class="swiper-button-next-custom">
                            <img src="@/assets/images/main/committee/next.png" alt="다음 버튼" class="cursor-pointer" />
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img01 from '@/assets/images/main/section07/slide01.png'

const people = [
    { subTitle: 'Varicose Veins Clinic', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01},
    { subTitle: 'Varicose Veins Clinic2', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01},
    { subTitle: 'Varicose Veins Clinic3', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01},
    { subTitle: 'Varicose Veins Clinic4', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01},
];

</script>

<style scoped></style>