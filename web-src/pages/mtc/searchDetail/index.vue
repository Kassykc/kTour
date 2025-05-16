<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />

        <div>

            서치 디테일
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

import mts_bg from "@/assets/images/sub/mtc/banner_bg.png";

const bannerTitle = ref('MTC');
const bannerBgImage = ref(mts_bg); // 배경 이미지 경로
const category = ref('mts');
const selectedTab = ref('mts');

</script>
<style lang="">
    
</style>