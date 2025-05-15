<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />
        
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