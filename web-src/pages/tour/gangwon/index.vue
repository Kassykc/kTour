<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />
        
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import tour_bg_gangwon from "@/assets/images/sub/tour/banner_bg_gangwon.png";

const bannerTitle = ref('Tour');
const bannerBgImage = ref(tour_bg_gangwon); // 배경 이미지 경로
const category = ref('tour');
const selectedTab = ref('gangwon');

</script>
<style lang="">
    
</style>