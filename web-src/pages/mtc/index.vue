<template>
    <div>
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab" :videoSrc="'/video/sub/mtc_banner.webm'"/>

        <div class="content_area">
            <div id="mtc">
                <div class="main_tit text-[65px] font-[700] w-full max-w-[1340px] pt-[160px] my-0 mx-auto text-center">
                    {{ t('mts.title') }}
                </div>

                <SubCategoryTab @update:selectedCategory="updateSelectedCategory" class="py-[60px]" />

                <SubSearchBar class="mb-[74px]" />

                <div class="sub_tit w-full max-w-[1340px] mb-[32px] mx-auto text-[55px] font-[700]">
                    {{ selectedCategory }}
                </div>

                <!-- <SubSearchListTab :selectedCategory="selectedCategory" /> -->
                <SubSearchListTab class="mb-[116px]" :depth2List="depth2List" />

                <div v-for="(item, index) in listData" :key="index">
                    <SubSearchList :data="item" :selectedCategory="selectedCategory" />
                </div>

                <!-- <SubSearchList /> -->

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
import mts_bg from "@/assets/images/sub/mtc/banner_bg.png";
import { useMemberMngStore } from '~/stores/admin/peopleStore';

const memberMngStore = useMemberMngStore('people-mtc');

const bannerTitle = ref('MTC');
const bannerBgImage = ref(mts_bg); // 배경 이미지 경로
const category = ref('mtc');
const selectedTab = ref('mtc');
const selectedCategory = ref(''); // 선택된 카테고리 이름을 저장
const depth2List = ref();
const listData = ref();

const updateSelectedCategory = async (categoryName: string, depth2?: any, idx?: any) => {
    selectedCategory.value = categoryName;  // selectedCategory 업데이트

    if (depth2) {
        depth2List.value = [];
        depth2List.value = depth2;
    }

    const data = {
        showYn: 'Y',
        pageNum: 1,
        pageSize: 9999,
        searchKeyword: '',
        categoryIdx: idx,
    };

    const response = await memberMngStore.getPeopleList(data);
    if (response) {
        listData.value = response.resultInfo;
    }
};

</script>

<style scoped></style>
