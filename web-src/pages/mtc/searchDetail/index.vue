<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />

        <div class="content_area">
            <div id="mtc_detail" class="w-full max-w-[1340px] mx-auto">

                <div class="main_tit text-[65px] font-[700] w-full pt-[160px] pb-[86px] my-0 mx-auto text-center">
                    Hospital Information
                </div>

                <div class="info_area flex flex-col justify-start items-start gap-[36px] w-full py-[36px] px-[44px] border border-black mb-[118px]"> 

                    <div class="tab_name w-fit text-[#1F78FF] font-[700] border-[2px] border-[#1F78FF] py-[14px] px-[20px] rounded-[100px]">
                        Gastroenterology
                    </div>

                    <div class="info_wrap flex justify-between items-end w-full">
                        <div class="info flex flex-col justify-start items-start gap-[56px] w-[608px]">

                            <div class="title text-[45px] font-[800] text-[#313131] uppercase">
                                Design Plastic Surgery
                            </div>

                            <div class="hospital_info flex flex-col justify-start items-start gap-[10px]">
                                <div class="info_item tel flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        TEL
                                    </div>
                                    <div class="cont flex-1">
                                        +82)051-807-0259
                                    </div>
                                </div>
                                <div class="info_item address flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Adrress
                                    </div>
                                    <div class="cont flex-1">
                                        10F, 785, Gaya-daero, Busanjin-gu, Busan, Republic of Korea
                                    </div>
                                </div>
                                <div class="info_item website flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Official Website
                                    </div>
                                    <div class="cont flex-1">
                                        http://www.designprsglobal.com/
                                    </div>
                                </div>
                                <div class="info_item slogan flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Slogan.
                                    </div>
                                    <div class="cont flex-1">
                                        Plastic Surgery Begins with Great Design.
                                    </div>
                                </div>
                                <div class="info_item category flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Category (specify)
                                    </div>
                                    <div class="cont flex-1">
                                        <ul class="list-disc">
                                            Plastic Surgery
                                            <li class="ml-[30px]">
                                                Skin Treatments & Laser Therapy
                                            </li>
                                            <li class="ml-[30px]">
                                                Cosmetic Procedures
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="info_item sns flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        SNS
                                    </div>
                                    <div class="cont flex-1 flex justify-start items-center gap-[26px]">
                                        <a href="" target="blank">
                                            <img src="@/assets/images/sub/mtc/insta.png" alt="">
                                        </a>
                                        <a href="" target="blank">
                                            <img src="@/assets/images/sub/mtc/youtube.png" alt="">
                                        </a>
                                        <a href="" target="blank">
                                            <img src="@/assets/images/sub/mtc/language.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="swiper_area h-[432px] w-[608px]">
                            <Swiper 
                                :modules="[Autoplay, Pagination, Navigation]"
                                :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="true"
                                :slidesPerView="1" :spaceBetween="30" :navigation="false"
                                class="w-full flex justify-center items-center mx-auto" ref="swiper">
                                <SwiperSlide v-for="(item, idx) in slide" :key="idx">
                                    <div class="w-full h-full">
                                        <img :src=item.img alt="슬라이드 이미지" class="w-full h-full object-cover">
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted } from 'vue'

import img01 from '@/assets/images/sub/mtc/interior01_detail.png'
import mts_bg from "@/assets/images/sub/mtc/banner_bg.png";

const bannerTitle = ref('MTC');
const bannerBgImage = ref(mts_bg); // 배경 이미지 경로
const category = ref('mts');
const selectedTab = ref('mts');

const slide = [
    { img: img01 },
    { img: img01 },
    { img: img01 },
    { img: img01 },
];


</script>
<style lang="">
    
</style> 