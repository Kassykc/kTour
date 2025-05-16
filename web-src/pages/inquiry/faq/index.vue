<template lang="">
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />

        <div class="content_area">
            <div id="news">
                <div class="main_tit text-[65px] font-[700] w-full max-w-[1340px] pt-[160px] my-0 mx-auto text-center">
                    {{ t('faq.title') }}
                </div>
            
                <SubCategoryTab class="py-[60px]"/>

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
const selectedTab = ref('faq');

</script>
<style lang="">
    
</style>