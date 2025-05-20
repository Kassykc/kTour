<template>
    <div>
        <div class="news_list_area w-full max-w-[1380px] px-[20px] mx-auto flex flex-col sm:flex-row justify-center sm:justify-start items-start pb-[270px] gap-x-[25px] gap-y-[25px] flex-wrap">
            <!-- v-for로 news_list 반복 -->
            <div v-for="(item, index) in newsList" :key="index" class="new_list w-full sm:w-[428px] h-[528px] shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                <div class="img_wrap w-full h-[320px]">
                    <img :src="item.img" alt="" class="w-full h-full object-cover">
                </div>

                <div class="cont_area p-[15px] sm:py-[20px] sm:px-[30px] flex flex-col justify-between items-start h-[208px]">
                    <div class="title w-full h-[60px] sm:h-[70px] text-[#2A2A2A] text-[18px] sm:text-[24px] font-[600] overflow-hidden 
                        text-ellipsis block -webkit-line-clamp-2 -webkit-box-orient-vertical">
                        {{ item.title }}
                    </div>

                    <div class="btn max-w-[160px] opacity-25">
                        <CommonBtnViewMore />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import news01 from '@/assets/images/sub/inquiry/news01.png'

const newsList = [
    {
        img: news01,
        title: 'Medi-City Co., Ltd. Visits National University Hospital Director and...',
    },
    {
        img: news01,
        title: 'New Medical Treatments Available at Design Plastic Surgery.',
    },
    {
        img: news01,
        title: 'Advanced Cosmetic Procedures at Your Fingertips.',
    },
    {
        img: news01,
        title: 'Medi-City Co., Ltd. Visits National University Hospital Director and...',
    },
    {
        img: news01,
        title: 'New Medical Treatments Available at Design Plastic Surgery.',
    },
    {
        img: news01,
        title: 'Advanced Cosmetic Procedures at Your Fingertips.',
    },
    {
        img: news01,
        title: 'Medi-City Co., Ltd. Visits National University Hospital Director and...',
    },
    {
        img: news01,
        title: 'New Medical Treatments Available at Design Plastic Surgery.',
    },
    {
        img: news01,
        title: 'Advanced Cosmetic Procedures at Your Fingertips.',
    },
];
</script>

<style>
.title {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 두 줄로 제한 */
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
