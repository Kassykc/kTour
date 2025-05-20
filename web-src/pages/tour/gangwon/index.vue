<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />
        
        <div class="content_area">
            <div id="seoul_tour" class="px-[20px]">
                <div class="main_title w-full max-w-[1340px] pt-[160px] my-0 mx-auto">
                    <h2 class="area_name text-[46px] lg:text-[65px] font-[700] mb-[30px] lg:mb-[120px]">
                        {{ t('gangwonTour.title') }}
                    </h2>
                    <p class="description text-[24px] lg:text-[40px] font-[700] mb-[34px]">
                        {{ t('gangwonTour.subtitle') }}
                    </p>
                    <p class="text-[18px] lg:text-[24px] mb-[43px] lg:mb-[86px]">
                        {{ t('gangwonTour.desc1') }}<br/>
                        {{ t('gangwonTour.desc2') }}
                    </p>
                </div> 

                <div class="hallyu_tour w-full max-w-[1340px] pt-[120px] my-0 mx-auto">
                    <p class="description text-[24px] lg:text-[40px] font-[700] mb-[34px]">
                        {{ t('gangwonTour.part1.title') }}
                    </p>
                    <p class="text-[18px] lg:text-[24px] mb-[86px]">
                        {{ t('about.part2.content4.desc1') }}<br />
                        {{ t('about.part2.content4.desc2') }}
                    </p>
                    <div class="flex flex-col sm:flex-row justify-between items-center gap-[10px] mb-[42px]">
                        <div class="w-full h-auto sm:w-[49%] sm:h-[370px] overflow-hidden">
                            <img src="@/assets/images/sub/tour/gangwon01.png" alt=""
                                class="w-full h-full object-cover">
                        </div>
                        <div class="w-full h-auto sm:w-[49%] sm:h-[370px] overflow-hidden">
                            <img src="@/assets/images/sub/tour/gangwon02.png" alt=""
                                class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>

                <div class="itinerary w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[24px] lg:text-[40px] font-[700] mb-[34px]">
                        {{ t('gangwonTour.part2.title') }}
                    </p>

                    <SubTourTimeline 
                        :day="t('gangwonTour.part2.day1.day')"
                        :dayTitle="t('gangwonTour.part2.day1.title')" 
                        :dayImage="gangwon_day1_img" 
                        :dayDesc="day1Desc" 
                        :dayColor="'day1'"
                        class="mb-[40px] sm:mb-0"
                    />
                    <SubTourTimeline 
                        :day="t('gangwonTour.part2.day2.day')"
                        :dayTitle="t('gangwonTour.part2.day2.title')" 
                        :dayImage="gangwon_day2_img" 
                        :dayDesc="day2Desc" 
                        :dayColor="'day2'"
                    />

                    <div class="reference_message flex justify-end items-center text-[14px] mt-[40px]">
                        <i>Images are for reference only.</i>
                    </div>
                </div>
                

            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import tour_bg_gangwon from "@/assets/images/sub/tour/banner_bg_gangwon.png";

import gangwon_day1_img from '@/assets/images/sub/tour/gangwon_tour_day1.png';
import gangwon_day2_img from '@/assets/images/sub/tour/gangwon_tour_day2.png';

const bannerTitle = ref('Tour');
const bannerBgImage = ref(tour_bg_gangwon); // 배경 이미지 경로
const category = ref('tour');
const selectedTab = ref('gangwon');

// Day 1 데이터
const day1Desc = [
    {
        time: t('gangwonTour.part2.day1.desc.1.time'),
        title: t('gangwonTour.part2.day1.desc.1.title'),
        desc: t('gangwonTour.part2.day1.desc.1.desc')
    },
    {
        time: t('gangwonTour.part2.day1.desc.2.time'),
        title: t('gangwonTour.part2.day1.desc.2.title'),
        desc: t('gangwonTour.part2.day1.desc.2.desc')
    },
    {
        time: t('gangwonTour.part2.day1.desc.3.time'),
        title: t('gangwonTour.part2.day1.desc.3.title'),
        desc: t('gangwonTour.part2.day1.desc.3.desc')
    },
    {
        time: t('gangwonTour.part2.day1.desc.4.time'),
        title: t('gangwonTour.part2.day1.desc.4.title'),
        desc: t('gangwonTour.part2.day1.desc.4.desc')
    }
]

// Day 2 데이터
const day2Desc = [
    {
        time: t('gangwonTour.part2.day2.desc.1.time'),
        title: t('gangwonTour.part2.day2.desc.1.title'),
        desc: t('gangwonTour.part2.day2.desc.1.desc')
    },
    {
        time: t('gangwonTour.part2.day2.desc.2.time'),
        title: t('gangwonTour.part2.day2.desc.2.title'),
        desc: t('gangwonTour.part2.day2.desc.2.desc')
    },
    {
        time: t('gangwonTour.part2.day2.desc.3.time'),
        title: t('gangwonTour.part2.day2.desc.3.title'),
        desc: t('gangwonTour.part2.day2.desc.3.desc')
    },
]
</script>
<style lang="">
    
</style>