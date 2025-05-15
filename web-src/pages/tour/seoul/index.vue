<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />
        
        <div class="content_area">
            <div id="seoul_tour">
                <div class="main_title w-full max-w-[1340px] pt-[160px] pb-[120px] my-0 mx-auto">
                    <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                        {{ t('seoulTour.title') }}
                    </h2>
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('seoulTour.subtitle') }}
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        {{ t('seoulTour.desc1') }}<br/>
                        {{ t('seoulTour.desc2') }}
                    </p>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import tour_bg_seoul from "@/assets/images/sub/tour/banner_bg_seoul.png";

const bannerTitle = ref('Tour');
const bannerBgImage = ref(tour_bg_seoul); // 배경 이미지 경로
const category = ref('tour');
const selectedTab = ref('seoul');

</script>
<style lang="">
    
</style>