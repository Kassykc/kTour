<template>
    <div v-if="mtcDtlData">
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab" :videoSrc="'/video/sub/mtc_banner.webm'" />

        <div class="content_area pb-[160px]">
            <div id="mtc_detail" class="w-full max-w-[1340px] mx-auto px-[20px]">
                <!-- 메일 타이틀 -->
                <div
                    class="main_tit  text-[30px] lg:text-[65px] font-[700] w-full pt-[160px] pb-[86px] my-0 mx-auto text-center">
                    Hospital Information
                </div>

                <!-- 상세 정보 -->
                <div
                    class="info_area flex flex-col justify-start items-start gap-0 sm:gap-[36px] w-full p-[20px] sm:py-[36px] sm:px-[44px] border border-black mb-[118px]">
                    <!-- 탭 이름 -->
                    <div v-for="(item, index) in parsedMemo.category" :key="index"
                        class="tab_name w-fit text-[14px] sm:text-[16px] text-[#1F78FF] font-[700] border-[2px] border-[#1F78FF] py-[6px] px-[14px] sm:py-[14px] sm:px-[20px] rounded-[100px]">
                        {{ composer.locale == 'en' ? item.codeValue.categoryNameEn : item.codeValue.categoryNameId }}
                    </div>

                    <div class="info_wrap flex flex-col-reverse xl:flex-row justify-between items-end w-full">
                        <div class="info flex flex-col justify-start items-start gap-[24px] sm:gap-[56px] w-full xl:w-[608px]">
                            <!-- 타이틀 -->
                            <div class="title text-[24px] sm:text-[45px] font-[800] text-[#313131] uppercase">
                                {{ composer.locale == 'en' ? mtcDtlData.resultInfo.nameFirstKo :
                                    mtcDtlData.resultInfo.nameFirstEn
                                }}
                            </div>

                            <!-- 병원 정보 -->
                            <div class="hospital_info flex flex-col justify-start items-start gap-[10px]">
                                <div
                                    class="info_item tel flex flex-col sm:flex-row justify-start items-start text-[14px] sm:text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-full sm:w-[170px] font-[700] sm:font-[500] flex-0">
                                        TEL
                                    </div>
                                    <div class="cont flex-1">
                                        +{{ mtcDtlData.resultInfo.interPhoneNumber }}){{ mtcDtlData.resultInfo.mobile1
                                        }}-{{ mtcDtlData.resultInfo.mobile2 }}-{{ mtcDtlData.resultInfo.mobile3 }}
                                    </div>
                                </div>
                                <div
                                    class="info_item address flex flex-col sm:flex-row justify-start items-start text-[14px] sm:text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-full sm:w-[170px] font-[700] sm:font-[500] flex-0">
                                        Adrress
                                    </div>
                                    <div class="cont flex-1">
                                        {{ mtcDtlData.resultInfo.email }}
                                    </div>
                                </div>
                                <div
                                    class="info_item website flex flex-col sm:flex-row justify-start items-start text-[14px] sm:text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-full sm:w-[170px] font-[700] sm:font-[500] flex-0">
                                        Official Website
                                    </div>
                                    <div class="cont flex-1">
                                        {{ parsedMemo.site }}
                                    </div>
                                </div>
                                <div
                                    class="info_item slogan flex flex-col sm:flex-row justify-start items-start text-[14px] sm:text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-full sm:w-[170px] font-[700] sm:font-[500] flex-0">
                                        Slogan.
                                    </div>
                                    <div class="cont flex-1">
                                        {{ composer.locale == 'en' ? parsedMemo.sloganEn : parsedMemo.sloganId }}
                                    </div>
                                </div>
                                <div
                                    class="info_item category flex flex-col sm:flex-row justify-start items-start text-[14px] sm:text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-full sm:w-[170px] font-[700] sm:font-[500] flex-0">
                                        Category (specify)
                                    </div>
                                    <div class="cont flex-1">
                                        <ul class="list-disc" v-for="(item, index) in parsedMemo.category" :key="index">
                                            {{ composer.locale == 'en' ? item.codeValue.categoryNameEn :
                                                item.codeValue.categoryNameId }}
                                            <div v-for="(item2, index) in parsedMemo.categoryChild" :key="index">
                                                <li class="ml-[30px]"
                                                    v-if="item && item2 && item2.codeParentKey == item.codeKey">
                                                    {{ composer.locale == 'en' ? item2.codeValue.categoryNameEn :
                                                        item2.codeValue.categoryNameId }}
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    class="info_item sns flex flex-col sm:flex-row justify-start items-start text-[14px] sm:text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-full sm:w-[170px] font-[700] sm:font-[500] flex-0">
                                        SNS
                                    </div>
                                    <div class="cont flex-1 flex justify-start items-center gap-[26px]">
                                        <a :href="parsedMemo.instagram" target="blank"
                                            v-if="parsedMemo.instagram && parsedMemo.instagram != ''">
                                            <img src="@/assets/images/sub/mtc/insta.png" alt="">
                                        </a>
                                        <a :href="parsedMemo.youtube" target="blank"
                                            v-if="parsedMemo.youtube && parsedMemo.youtube != ''">
                                            <img src="@/assets/images/sub/mtc/youtube.png" alt="">
                                        </a>
                                        <a :href="parsedMemo.site" target="blank">
                                            <img src="@/assets/images/sub/mtc/language.png" alt=""
                                                v-if="parsedMemo.site && parsedMemo.site != ''">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- 슬라이드 -->
                        <div class="swiper_area h-[432px] w-full xl:w-[608px]">
                            <Swiper :modules="[Autoplay, Pagination, Navigation]"
                                :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="true"
                                :slidesPerView="1" :spaceBetween="30" :navigation="false"
                                class="w-full h-full flex justify-center items-center mx-auto" ref="swiper">
                                <SwiperSlide v-for="(item, idx) in imageFiles" :key="idx">
                                    <div class="w-full h-full">
                                        <img :src="fileBaseUrl + item.filePathEnc" alt="슬라이드 이미지"
                                            class="w-full h-full object-contain">
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

                <!-- Hospital Description -->
                <div
                    class="hospital_desc flex flex-col justify-start items-start gap-[30px] w-full max-w-[1340px] mx-auto px-[10px] sm:px-[40px] mb-[125px]">
                    <div class="tit uppercase font-[700] text-[20px] sm:text-[28px] text-[#313131]">
                        Hospital Description
                    </div>
                    <div class="cont text-[16px] sm:text-[18px] leading-[29px]"
                        v-html="composer.locale == 'en' ? parsedMemo.contentEn : parsedMemo.contentId"></div>
                </div>

                <!-- 리스트 버튼 -->
                <div class="flex justify-center items-center gap-[8px]">
                    <SubListBtn @click=" router.back()" />
                    <div @click="getDown(generalFiles[0].filePathEnc)" v-if="generalFiles && generalFiles.length > 0"
                        class="brochure flex justify-center items-center gap-[5px] w-[246px] bg-[#3F3F3F] !text-white px-[20px] py-[12px] h-[60px] cursor-pointer">
                        Brochure
                        <img src="@/assets/images/sub/mtc/down_icon.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t, composer } from '@/plugins/i18n'
import { PROFILEMNG_API_URLS } from '@/apis/admin/peopleMng/urls'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import mts_bg from "@/public/img/mtc/banner_bg.png";

const router = useRouter();

const movePage = (page: string) => {

    router.push(page);
};

const fileBaseUrl = apiBase.url() + "/_file/000/";

const bannerTitle = ref('MTC');
const bannerBgImage = ref(mts_bg); // 배경 이미지 경로
const category = ref('mtc');
const selectedTab = ref('mtc');

const decodeHtmlEntities = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

const parsedTab = computed(() => {
    try {
        const rawMemo = mtcDtlData.value.resultInfo?.categoryChildNameKo;

        if (!rawMemo || rawMemo === 'null') return {};

        const decoded = decodeHtmlEntities(rawMemo);
        return JSON.parse(decoded);
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
});

const parsedMemo = computed(() => {
    try {
        const rawMemo = mtcDtlData.value.resultInfo?.peopleMemo;

        if (!rawMemo || rawMemo === 'null') return {};

        const decoded = decodeHtmlEntities(rawMemo);
        return JSON.parse(decoded);
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
});

const imageFiles = computed(() => {
    try {
        return mtcDtlData.value.resultInfo.fileInfo.filter(item => item.fileExt == 'webp') ?? []
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
})

const generalFiles = computed(() => {
    try {
        return mtcDtlData.value.resultInfo.fileInfo?.filter(file => file.fileExt?.toLowerCase() != 'webp') ?? []
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
})


const route = useRoute();
const getDown = (path: string) => {
    console.log(apiBase.url() + "/_file/000/" + path)
    window.location.href = apiBase.url() + "/_file/000/" + path
};

const { data: mtcDtlData, pending, error, refresh } = await useAsyncData(
    `mtcDtlData-${route.params.id}`,
    async () => {
        try {
            const response = await fetch(PROFILEMNG_API_URLS.SET_PEOPLE_URL2 + "/" + route.params.id, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) throw new Error('Failed to fetch people data');

            const reader = response.body.getReader();
            let result = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                result += new TextDecoder().decode(value);
            }

            console.log('result : ' + result)

            return JSON.parse(result);
        } catch (err) {
            console.error('SSR fetch 실패, CSR fallback 준비:', err);
            return null;
        }
    },
    {
        server: true,
        default: () => null,
    }
);

onMounted(async () => {
    if (!mtcDtlData.value) {
        await refresh();
    }
    console.log('mounted: ', mtcDtlData.value);
});


</script>
<style lang="">

</style>