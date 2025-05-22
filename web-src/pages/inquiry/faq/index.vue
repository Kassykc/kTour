<template lang="">
    <div>
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab" :videoSrc="'/video/main/banner.webm'" />

        <div class="content_area pb-[260px]">
            <div id="faq">
                <div class="main_tit  text-[30px] lg:text-[65px] font-[700] w-full max-w-[1340px] pt-[160px] my-0 mx-auto text-center">
                    {{ t('faq.title') }}
                </div>
            
                <SubCategoryTab class="py-[60px]" @update:selectedCategory="getList"/>

                <div class="faq_content_area w-full max-w-[1340px] px-[20px] mx-auto text-[26px] sm:text-[40px] lg:text-[55px] font-[700]">
                    <div class="title mb-[30px] sm:mb-[62px]">
                        {{ selectedCategory }}
                    </div>

                    <SubFaqContent :list="listData" v-if="listData && listData.length"/>
                </div>


            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'
import { useBoardMngStore } from '@/stores/admin/boardStore';
import inquiry_bg from "@/assets/images/sub/inquiry/banner_bg.png";

const bannerTitle = ref('Inquiry');
const bannerBgImage = ref(inquiry_bg); // 배경 이미지 경로
const category = ref('inquiry');
const selectedTab = ref('faq');
const selectedCategory = ref(t('faq.tab.1')); // 선택된 카테고리 이름을 저장

const listData = ref([]);
const faqBoard = useBoardMngStore('faq-cli');

const getList = async (categoryName: string, depth2?: any, keys?: any) => {
    if (keys) {
        const params = {
            pageNum: 1,
            pageSize: 999,
            searchKeyword: '',
            boardType: keys,
        }

        const response = await faqBoard.getBoardList(params);
        if (response) {
            listData.value = response.resultInfo;
        }
    } else {
        const params = {
            pageNum: 1,
            pageSize: 999,
            searchKeyword: '',
            boardType: '100',
        }

        const response = await faqBoard.getBoardList(params);
        if (response) {
            listData.value = response.resultInfo;
        }
    }
}

</script>
<style lang="">

</style>