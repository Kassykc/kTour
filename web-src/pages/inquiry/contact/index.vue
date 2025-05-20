<template lang="">
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />

        <div class="content_area pb-[260px]">
            <div id="contact w-full max-w-[1340px] px-[20px] mx-auto">
                <div class="title_area w-full max-w-[1340px] mx-auto text-center mb-[130px]">
                    <div class="main_tit  text-[46px] lg:text-[65px] font-[700] pt-[160px] mb-[50px]">
                        {{ t('contactUs.title') }}
                    </div>
                    <div class="sub_title text-[18px] lg:text-[20px] ">
                        {{ t('contactUs.subtitle') }}
                    </div>
                </div>

                <div class="map_area w-full max-w-[1340px] px-[20px] mx-auto flex flex-col xl:flex-row justify-center xl:justify-between items-start mb-[166px] gap-[100px] xl:gap-0">
                    <SubMapList />
                </div>

                <SubMoreBtn :label="t('menu.6.2depth.4.name')" width="w-[280px] sm:w-[364px]" bgColor="bg-[#1F78FF]" :showIcon="false"
                url="/" />

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import inquiry_bg from "@/assets/images/sub/inquiry/banner_bg.png";

const bannerTitle = ref('Inquiry');
const bannerBgImage = ref(inquiry_bg); // 배경 이미지 경로
const category = ref('inquiry');
const selectedTab = ref('contact');

</script>
<style lang="">
    
</style>