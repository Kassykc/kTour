<template>
    <div class="search_list w-full max-w-[1340px] mx-auto flex justify-start items-start gap-[8px] mb-[146px]">

        <div class="hospital_media flex-0 w-[592px] h-[424px] flex flex-col justify-center items-center gap-[6px]">

            <div class="swiper_area w-[592px] h-[360px] border">
                <Swiper 
                    :modules="[Autoplay, Pagination, Navigation]"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="true"
                    :slidesPerView="1" :spaceBetween="30" :navigation="false"
                    class="w-full flex justify-center items-center  mx-auto" ref="swiper">
                    <SwiperSlide v-for="(item, idx) in slide" :key="idx">
                        <div class="w-full h-full object-cover">
                            <img :src=item.img alt="슬라이드 이미지">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="sns flex justify-start items-center gap-[20px] w-full h-[52px] bg-[#F3F3F3] px-[20px] py-[12px]">
                <a href="" target="blank">
                    <img src="@/assets/images/sub/mts/insta.png" alt="">
                </a>
                <a href="" target="blank">
                    <img src="@/assets/images/sub/mts/youtube.png" alt="">
                </a>
                <a href="" target="blank" class="flex justify-start items-center gap-[20px]">
                    <img src="@/assets/images/sub/mts/language.png" alt="">
                    <span class="text-[#313131]">http://www.designprsglobal.com/</span>
                </a>
            </div>
        </div>

        <div class="info flex-1 h-[424px] flex flex-col justify-between items-start gap-[8px]">

            <div class="info_wrap w-full px-[26px] flex-1 flex flex-col justify-centr items-start gap-[10px]">

                <div class="tab_name w-fit text-[#1F78FF] font-[700] border-[2px] border-[#1F78FF] py-[14px] px-[20px] rounded-[100px] mb-[10px]">Gastroenterology</div>
                <div class="tags flex justify-start items-center gap-[10px]">
                    <div class="tag text-[15px] text-[#838383]">
                        #Skin Treatments & Laser Therapy 
                    </div>
                    <div class="tag text-[15px] text-[#838383]">
                        #Cosmetic Procedures
                    </div>
                </div>

                <div class="title text-[36px] font-[700] mb-[20px] text-[#313131]">Design Plastic Surgery</div>

                <div class="slogan w-full h-auto py-[14px] border-t border-black font-[700] text-[22px] text-[#313131] relative">
                    Plastic Surgery Begins with Great Design.
                    <span class="mark absolute top-[-16px] left-[-10px] bg-white text-[14px] font-[700] text-[#313131] px-[8px] py-[4px]">Slogan.</span>
                </div>

                <div class="contact_info flex flex-col justify-center items-start gap-[8px]">

                    <div class="pone flex justify-start items-center text-[18px] text-[#313131] gap-[20px]">
                        <img src="@/assets/images/sub/mts/phone.png" alt="">
                        +82)051-807-0259
                    </div>

                    <div class="address flex justify-start items-center text-[18px] text-[#313131] gap-[20px]">
                        <img src="@/assets/images/sub/mts/distance.png" alt="">
                        10F, 785, Gaya-daero, Busanjin-gu, Busan, Republic of Korea
                    </div>
                </div>

            </div>

            <div class="btns w-full flex justify-center items-center gap-[8px]">

                <a href="" download="" class="brochure flex justify-center items-center gap-[5px] w-full bg-[#3F3F3F] !text-white px-[20px] py-[12px] h-[54px] cursor-pointer">
                        Brochure
                        <img src="@/assets/images/sub/mts/down_icon.png" alt="">
                </a>

                <div class="view_details flex justify-center items-center gap-[5px] w-full bg-[#1F78FF] text-white px-[20px] py-[12px] h-[54px] cursor-pointer">
                    View Details
                    <img src="@/assets/images/sub/mts/move_icon.png" alt="">
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

import img01 from '@/assets/images/sub/mts/interior01.png'

const slide = [
    { img: img01 },
    { img: img01 },
    { img: img01 },
    { img: img01 },
];

</script>
<style lang="">
/* .swiper-pagination-bullet {
    background-color: white !important;
}

.swiper-pagination-bullet-active {
    background-color: white !important;
} */
</style>