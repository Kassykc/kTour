<template>
    <div>
        {{ imageFiles }}
        <Banner v-if="mtcDtlData && mtcDtlData.resultInfo.fileInfo && mtcDtlData.resultInfo.fileInfo.length > 0"
            :title="bannerTitle" :bgImage="mtcDtlData.resultInfo.fileInfo.filter(item => item.fileExt == 'webp')"
            :category="category" :selectedTab="selectedTab" />

        <div class="content_area pb-[160px]">
            <div id="mtc_detail" class="w-full max-w-[1340px] mx-auto">
                <!-- 메일 타이틀 -->
                <div class="main_tit text-[65px] font-[700] w-full pt-[160px] pb-[86px] my-0 mx-auto text-center">
                    Hospital Information
                </div>

                <!-- 상세 정보 -->
                <div
                    class="info_area flex flex-col justify-start items-start gap-[36px] w-full py-[36px] px-[44px] border border-black mb-[118px]">
                    <!-- 탭 이름 -->
                    <div
                        class="tab_name w-fit text-[#1F78FF] font-[700] border-[2px] border-[#1F78FF] py-[14px] px-[20px] rounded-[100px]">
                        '탭이름'
                    </div>

                    <div class="info_wrap flex justify-between items-end w-full">
                        <div class="info flex flex-col justify-start items-start gap-[56px] w-[608px]">
                            <!-- 타이틀 -->
                            <div class="title text-[45px] font-[800] text-[#313131] uppercase">
                                {{ composer.locale == 'en' ? mtcDtlData.resultInfo.userNameKo :
                                    mtcDtlData.resultInfo.userNameEn
                                }}
                            </div>

                            <!-- 병원 정보 -->
                            <div class="hospital_info flex flex-col justify-start items-start gap-[10px]">
                                <div
                                    class="info_item tel flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        TEL
                                    </div>
                                    <div class="cont flex-1">
                                        +{{ mtcDtlData.resultInfo.interPhoneNumber }}){{ mtcDtlData.resultInfo.mobile1
                                        }}-{{ mtcDtlData.resultInfo.mobile2 }}-{{ mtcDtlData.resultInfo.mobile3 }}
                                    </div>
                                </div>
                                <div
                                    class="info_item address flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Adrress
                                    </div>
                                    <div class="cont flex-1">
                                        {{ mtcDtlData.resultInfo.email }}
                                    </div>
                                </div>
                                <div
                                    class="info_item website flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Official Website
                                    </div>
                                    <div class="cont flex-1">
                                        {{ parsedMemo.site }}
                                    </div>
                                </div>
                                <div
                                    class="info_item slogan flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Slogan.
                                    </div>
                                    <div class="cont flex-1">
                                        {{ composer.locale == 'en' ? parsedMemo.sloganEn : parsedMemo.sloganId }}
                                    </div>
                                </div>
                                <div
                                    class="info_item category flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        Category (specify)
                                    </div>
                                    <div class="cont flex-1">
                                        <ul class="list-disc">
                                            Plastic Surgery
                                            <li class="ml-[30px]" v-for="(item, index) in parsedMemo.hashtag"
                                                :key="index">
                                                {{ item.codeValue }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    class="info_item sns flex justify-start items-start text-[20px] font-[500] text-[#31313] gap-[10px]">
                                    <div class="tit w-[170px] flex-0">
                                        SNS
                                    </div>
                                    <div class="cont flex-1 flex justify-start items-center gap-[26px]">
                                        <a :href="parsedMemo.instagram" target="blank">
                                            <img src="@/assets/images/sub/mtc/insta.png" alt="">
                                        </a>
                                        <a :href="parsedMemo.youtube" target="blank">
                                            <img src="@/assets/images/sub/mtc/youtube.png" alt="">
                                        </a>
                                        <a :href="parsedMemo.site" target="blank">
                                            <img src="@/assets/images/sub/mtc/language.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!-- 슬라이드 -->
                        <div class="swiper_area h-[432px] w-[608px]">
                            <Swiper :modules="[Autoplay, Pagination, Navigation]"
                                :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="true"
                                :slidesPerView="1" :spaceBetween="30" :navigation="false"
                                class="w-full flex justify-center items-center mx-auto" ref="swiper">
                                <SwiperSlide v-for="(item, idx) in imageFiles" :key="idx">
                                    <div class="w-full h-full">
                                        <img :src="fileBaseUrl + item.filePathEnc" alt="슬라이드 이미지" class="w-full h-full object-cover">
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

                <!-- Hospital Description -->
                <div
                    class="hospital_desc flex flex-col justify-start items-start gap-[30px] w-full max-w-[1340px] mx-auto px-[40px] mb-[125px]">
                    <div class="tit uppercase font-[700] text-[28px] text-[#313131]">
                        Hospital Description
                    </div>
                    <div class="cont text-[18px] leading-[29px]" v-html="composer.locale == 'en' ? parsedMemo.contentEn : parsedMemo.contentId"></div>
                </div>

                <!-- 리스트 버튼 -->
                <SubListBtn />

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t, composer } from '@/plugins/i18n'
import { PROFILEMNG_API_URLS } from '@/apis/admin/peopleMng/urls'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import mts_bg from "@/assets/images/sub/mtc/banner_bg.png";

const router = useRouter();

const movePage = (page: string) => {

    router.push(page);
};

const bannerTitle = ref('MTC');
const bannerBgImage = ref(mts_bg); // 배경 이미지 경로
const category = ref('mtc');
const selectedTab = ref('mtc');

const decodeHtmlEntities = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}
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

const slide = [
    // { img: img01 },
    // { img: img01 },
    // { img: img01 },
    // { img: img01 },
];


const hospitalDescription = ref(`
    Located in Seomyeon, Busan, Design Plastic Surgery offers personalized care with two board-certified plastic surgeons who handle everything from consultations to surgeries and post-operative management on a 1:1 basis. Specializing in breast augmentation, we also provide a wide range of procedures, including facelifts, eyelid surgery, rhinoplasty, fillers, and skin treatments, to help you achieve the ultimate beauty. 

    <ul class="list-disc">
        <li class="ml-[30px]">
            Equipped with 3D-CT for preoperative rhinoplasty examinations
        </li>
        <li class="ml-[30px]">
            3D virtual plastic surgery consultations using the Crisalix program
        </li>
        <li class="ml-[30px]">
            Comprehensive breast surgery care, including pre/post-operative ultrasound exams, shampoo services, and a structured aftercare program extending up to six months
        </li>
        <li class="ml-[30px]">
            Quick adoption of advanced equipment
        </li>
        <li class="ml-[30px]">
            Safe and efficient procedures using endoscopy
        </li>
    </ul>

    Our duo of experienced plastic surgeons, who have worked together seamlessly for many years, is committed to designing natural beauty with heartfelt dedication.
`);

const treatmentDescription = ref(`
    <ul class="list-disc">
        Breast Surgery 
        <li>
            Breast Augmentation: We use high-quality implants like Motiva and Mentor, primarily through a transaxillary (armpit) incision to minimize scarring. 
        </li>
        <li>
            Breast Lift: Customized techniques such as periareolar, vertical, and anchor incisions are used based on the degree of sagging. 
        </li>
        <li>
            Breast Reduction: Focused on reducing volume safely while enhancing symmetry and minimizing scarring. 
        </li>
    </ul>

    <ul class="list-disc">
        Facial Surgery 
        <li>
            Facelift: Includes both full and mini lifts, as well as endoscopic forehead lifts using our specialized dual triple-point fixation method without Endotine. 
        </li>
        <li>
            Rhinoplasty: Customized nose reshaping with a focus on natural results that suit each patient’s facial balance. 
        </li>
        <li>
            Eyelid Surgery: Upper and lower blepharoplasty to improve sagging, puffiness, and tired-looking eyes. 
        </li>
        <li>
            Otoplasty: Surgical correction for protruding or misshapen ears, creating natural and balanced contours. 
        </li>
    </ul>

    <ul class="list-disc">
        Non-Surgical Procedures 
        <li>
            Lifting (Laser, Thread): We offer thread lifting as well as advanced energy-based lifting treatments like Titanium Lift and Ulthera Prime for non-invasive skin tightening. 
        </li>
        <li>
            Fillers: Personalized filler treatments to enhance facial contours, volume, and harmony. 
        </li>
    </ul>

    Skin Boosters: Skin hydration and elasticity improvement treatments tailored to individual skin needs.
`);

const route = useRoute();
const fileBaseUrl = apiBase.url() + "/_file/000/";

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