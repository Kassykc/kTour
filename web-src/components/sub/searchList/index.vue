<template>
    <div class="search_list w-full max-w-[1340px] mx-auto flex justify-start items-start gap-[8px] mb-[146px]">

        <div class="hospital_media flex-0 w-[592px] h-[424px] flex flex-col justify-center items-center gap-[6px]">
            <!-- 슬라이드 영역  -->
            <div class="swiper_area w-[592px] h-[360px] border">
                <Swiper :modules="[Autoplay, Pagination, Navigation]"
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

            <!-- sns 영역 -->
            <div
                class="sns flex justify-start items-center gap-[20px] w-full h-[52px] bg-[#F3F3F3] px-[20px] py-[12px]">
                <a href="" target="blank">
                    <img src="@/assets/images/sub/mtc/insta.png" alt="" @click="router.push(parsedMemo.instagram)">
                </a>
                <a href="" target="blank">
                    <img src="@/assets/images/sub/mtc/youtube.png" alt="" @click="router.push(parsedMemo.youtube)">
                </a>
                <a href="" target="blank" class="flex justify-start items-center gap-[20px]">
                    <img src="@/assets/images/sub/mtc/language.png" alt="" @click="router.push(parsedMemo.site)">
                    <span class="text-[#313131]" @click="router.push(parsedMemo.site)">{{ parsedMemo.site }}</span>
                </a>
            </div>
        </div>

        <!-- 리스트 정보 -->
        <div class="info_area flex-1 h-[424px] flex flex-col justify-between items-start gap-[8px]">
            <div class="info w-full px-[26px] flex-1 flex flex-col justify-centr items-start gap-[10px]">

                <!-- 탭 이름 -->
                <div
                    class="tab_name w-fit text-[#1F78FF] font-[700] border-[2px] border-[#1F78FF] py-[14px] px-[20px] rounded-[100px] mb-[10px]">
                    {{ props.selectedCategory }}</div>

                <!-- 태그 -->
                <div class="tags flex justify-start items-center gap-[10px]">
                    <div class="tag text-[15px] text-[#838383]" v-for="(item, index) in parsedMemo.hashtag"
                        :key="index">
                        #{{ item.codeValue }}
                    </div>
                </div>

                <!-- 타이틀틀 -->
                <div class="title text-[36px] font-[700] mb-[20px] text-[#313131]">{{ composer.locale == 'en' ?
                    props.data.userNameKo : props.data.userNameEn }}</div>

                <!-- 슬로건 -->
                <div
                    class="slogan w-full h-auto py-[14px] border-t border-black font-[700] text-[22px] text-[#313131] relative">
                    {{ composer.locale == 'en' ?
                        parsedMemo.sloganEn : parsedMemo.sloganId }}
                    <span
                        class="mark absolute top-[-16px] left-[-10px] bg-white text-[14px] font-[700] text-[#313131] px-[8px] py-[4px]">Slogan.</span>
                </div>

                <!-- 콘택트 -->
                <div class="contact_info flex flex-col justify-center items-start gap-[8px]">

                    <div class="pone flex justify-start items-center text-[18px] text-[#313131] gap-[20px]">
                        <img src="@/assets/images/sub/mtc/phone.png" alt="">
                        +{{ props.data.interPhoneNumber }}){{ props.data.mobile1 }}-{{ props.data.mobile2 }}-{{
                            props.data.mobile3 }}
                    </div>

                    <div class="address flex justify-start items-center text-[18px] text-[#313131] gap-[20px]">
                        <img src="@/assets/images/sub/mtc/distance.png" alt="">
                        {{ props.data.email }}
                    </div>
                </div>

            </div>

            <!-- 버튼 -->
            <div class="btns w-full flex justify-center items-center gap-[8px]">
                <a href="" download=""
                    class="brochure flex justify-center items-center gap-[5px] w-full bg-[#3F3F3F] !text-white px-[20px] py-[12px] h-[54px] cursor-pointer">
                    Brochure
                    <img src="@/assets/images/sub/mtc/down_icon.png" alt="">
                </a>

                <div class="view_details flex justify-center items-center gap-[5px] w-full bg-[#1F78FF] text-white px-[20px] py-[12px] h-[54px] cursor-pointer"
                    @click="movePage(`/mtc/${props.data.categoryIdx}`)">
                    View Details
                    <img src="@/assets/images/sub/mtc/move_icon.png" alt="">
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t, composer } from '@/plugins/i18n';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted } from 'vue'

import img01 from '@/assets/images/sub/mtc/interior01.png'

const props = defineProps({
    data: Object,
    selectedCategory: String
})

const parsedMemo = computed(() => {
    return JSON.parse(props.data?.peopleMemo || '{}');
});

const slide = [
    { img: img01 },
    { img: img01 },
    { img: img01 },
    { img: img01 },
];

const router = useRouter();

const movePage = (page: string) => {

    router.push(page);
};


</script>
<style lang="">

</style>