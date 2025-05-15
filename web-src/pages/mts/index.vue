<template>
    <div>
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />

        <div class="content_area">
            <div id="mts">
                <div class="main_tit text-[65px] font-[700] w-full max-w-[1340px] pt-[160px] my-0 mx-auto text-center">
                    {{ t('mts.title') }}
                </div>

                <div class="category_tab w-full max-w-[1340px] my-0 mx-auto py-[60px]">
                    <SubCategoryTab @update:selectedCategory="updateSelectedCategory"/>
                </div>

                <div class="search_area w-full bg-[#FAFAFA] mb-[74px]">
                    <SubSearchBar  />
                </div>

                <div class="sub_tit w-full max-w-[1340px] mb-[32px] mx-auto text-[55px] font-[700]">
                    <input type="text" v-model="selectedCategory">
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

import mts_bg from "@/assets/images/sub/mts/banner_bg.png";

const bannerTitle = ref('MTS');
const bannerBgImage = ref(mts_bg); // 배경 이미지 경로
const category = ref('mts');
const selectedTab = ref('mts');
const selectedCategory = ref(''); // 선택된 카테고리 이름을 저장

const updateSelectedCategory = (categoryName: string) => {
    console.log("Category received in parent:", categoryName);  // 카테고리 이름 확인
    selectedCategory.value = categoryName;  // selectedCategory 업데이트
    console.log("Updated selectedCategory:", selectedCategory.value);  // 값 확인
};
</script>

<style scoped></style>
