<template lang="">
    <div class="pb-[220px]">
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab" :videoSrc="'/video/main/banner.webm'" />

        <SubSurvey />
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import inquiry_bg from "@/assets/images/sub/inquiry/banner_bg.png";

const bannerTitle = ref('Inquiry');
const bannerBgImage = ref(inquiry_bg); // 배경 이미지 경로
const category = ref('inquiry');
const selectedTab = ref('consultation');

</script>
<style lang="">
    
</style>