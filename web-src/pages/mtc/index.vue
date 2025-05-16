<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />

        <div class="content_area">
            <div id="mtc">
                <div class="main_tit text-[65px] font-[700] w-full max-w-[1340px] pt-[160px] my-0 mx-auto text-center">
                    {{ t('mts.title') }}
                </div>

                <SubCategoryTab @update:selectedCategory="updateSelectedCategory" class="py-[60px]"/>

                <SubSearchBar class="mb-[74px]" />

                <div class="sub_tit w-full max-w-[1340px] mb-[32px] mx-auto text-[55px] font-[700]">
                    {{ selectedCategory }}
                </div>

                <!-- <SubSearchListTab :selectedCategory="selectedCategory" /> -->
                <SubSearchListTab class="mb-[116px]" />

                <SubSearchList />
                <SubSearchList />

            </div>
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
const selectedCategory = ref(t('mts.tab.1')); // 선택된 카테고리 이름을 저장

const updateSelectedCategory = (categoryName: string) => {
    selectedCategory.value = categoryName;  // selectedCategory 업데이트
};

</script>

<style scoped></style>
