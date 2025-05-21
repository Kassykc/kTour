<template lang="">
    <div>
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab" :videoSrc="'/video/main/banner.webm'" />

        <div class="content_area">
            <div id="news">
                <div class="main_tit  text-[30px] lg:text-[65px] font-[700] w-full max-w-[1340px] pt-[160px] my-0 mx-auto text-center">
                    {{ t('news.title') }}
                </div>
            
                <SubCategoryTab class="py-[60px]" @update:selectedCategory="getList"/>

                <SubSearchBar class="mb-[74px]" />

                <SubNewsList :list="listData" v-if="listData && listData.length"/>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'
import { useBoardMngStore } from '@/stores/admin/boardStore';
import inquiry_bg from "@/assets/images/sub/inquiry/banner_bg.png";

const newsBoard = useBoardMngStore('news-cli');

const bannerTitle = ref('Inquiry');
const bannerBgImage = ref(inquiry_bg); // 배경 이미지 경로
const category = ref('inquiry');
const selectedTab = ref('news');
const listData = ref([]);

const getList = async (categoryName: string, depth2?: any, keys?: any) => {
    if (keys) {
        const params = {
            pageNum: 1,
            pageSize: 999,
            searchKeyword: '',
            boardType: keys.type,
        }

        const response = await newsBoard.getBoardList(params);
        if (response) {
            listData.value = response.resultInfo;
        }
    } else {
        const params = {
            pageNum: 1,
            pageSize: 999,
            searchKeyword: '',
            boardType: '350',
        }

        const response = await newsBoard.getBoardList(params);
        if (response) {
            listData.value = response.resultInfo;
        }
    }
}

</script>
<style lang="">

</style>