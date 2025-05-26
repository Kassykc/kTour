<template>
    <div class="flex flex-col py-[100px] items-center" v-if="mainPeopleData">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-12 px-6">
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="t('main.section4-1.part1.title')" :color="'#477FF6'" :link="true" @click="router.push('/mtc')"/>
            </div>
            <div class="font-[400] text-[20px] md:text-[26px] text-[#717171] mb-[42px]">
                {{ t('main.section4-1.part1.desc') }}
            </div>
            <div class="swiper_area w-full max-w-[1222px] mx-auto">
                <div class="relative">
                    <div
                        class="absolute top-0 left-0 w-full max-w-full lg:max-w-[926px] h-[80%] lg:h-[524px] bg-[#266BFF] rounded-[38px] pointer-events-none">
                    </div>
                    <Swiper :modules="[Autoplay, Pagination, Navigation]"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="false"
                        :slidesPerView="1" :spaceBetween="30" :navigation="{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom'
                        }" @swiper="onSwiperInit" @slideChange="onSlideChange"
                        class="w-full flex justify-center items-center  mx-auto" ref="swiper">
                        <SwiperSlide v-for="(item, idx) in mainPeopleData.resultInfo" :key="idx">
                            <div class="flex justifiy-center items-center flex-col lg:flex-row">
                                <!-- {{ item }} -->
                                <div
                                    class="slide_item relative w-full lg:w-1/2 h-full lg:h-[524px] flex flex-col justify-start items-start gap-[17px] sm:gap-[20px] lg:gap-[35px] px-[30px] pt-[80px] pb-[15px] xl:p-[70px] bg-cover bg-center">
                                    <div class="font-[800] text-[14px] lg:text-[19px] text-white mb-[13px] sm:mb-[3px]">
                                        {{ getCategoryLabel(item) }}
                                    </div>
                                    <div
                                        class="font-[800] text-[22px] sm:text-[30px] lg:text-[45px] leading-[30px] sm:leading-[42px] lg:leading-[58px] text-white uppercase">
                                        {{ composer.locale == 'en' ? item.nameFirstKo : item.nameFirstEn }}
                                    </div>

                                    <div
                                        class="font-[800] text-[15px] lg:text-[28px] leading-[22px] lg:leading-[31px] text-white mt-0 lg:mt-[35px]">
                                        {{ composer.locale == 'en' ? decodeHtmlEntities(item.peopleMemo).sloganEn :
                                            decodeHtmlEntities(item.peopleMemo).sloganId }}
                                    </div>

                                    <div
                                        class="absolute top-[25px] right-[20px] lg:top-[35px] lg:right-[30px] w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] pointer-event-none">
                                        <img src="@/assets/images/main/section07/slide_arrow.png" alt="화살표"
                                            class="w-full h-full object-cover" @click="router.push(`/mtc/${item.peopleIdx}`)">
                                    </div>
                                </div>
                                <div>
                                    <img :src="fileBaseUrl + getThumbs(item)" alt="슬라이드 이미지">
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div
                        class="absolute left-[20px] bottom-[-65px] xl:left-[70px] font-[500] text-[16px] text-[#929292]">
                        {{ String(activeIndex + 1).padStart(2, '0') }}/{{ totalSlides }}
                    </div>

                    <div
                        class="absolute bottom-[-56px] left-1/2 -translate-x-1/2 xl:left-[165px] xl:-translate-x-0 w-[40%] max-w-[40%] xl:w-full xl:max-w-[772px] h-[4px] bg-[#E3E3E3] overflow-hidden">
                        <div ref="progressBarRef" class="w-full h-full bg-[#477FF6] animate-progress"></div>
                    </div>

                    <div
                        class="flex justify-end sm:justify-between items-center w-[150px] mb-4 absolute bottom-[-84px] sm:bottom-[-100px] right-0 xl:right-[100px] gap-[10px]">
                        <div class="swiper-button-prev-custom w-[30px] h-[30px] sm:w-full sm:h-full">
                            <img :src="isPrevHover ? prevOn : prevOff" @mouseover="isPrevHover = true"
                                @mouseleave="isPrevHover = false" alt="이전 버튼"
                                class="cursor-pointer w-full h-full object-cover" />
                        </div>
                        <div class="swiper-button-next-custom w-[30px] h-[30px] sm:w-full sm:h-full">
                            <img :src="isNextHover ? nextOn : nextOff" @mouseover="isNextHover = true"
                                @mouseleave="isNextHover = false" alt="다음 버튼"
                                class="cursor-pointer w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t, composer } from '@/plugins/i18n';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PROFILEMNG_API_URLS } from '@/apis/admin/peopleMng/urls'

import img01 from '@/assets/images/main/section07/slide01.png'

const router = useRouter();

const { data: mainPeopleData, pending, error, refresh } = await useAsyncData(
    `mainPeopleData`,
    async () => {
        try {
            const response = await fetch(PROFILEMNG_API_URLS.SET_PEOPLE_URL2 + "s", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageNum: 1, pageSize: 4, searchKeyword: '', show_yn: 'Y' }),
            });

            if (!response.ok) throw new Error('Failed to fetch people data');

            const reader = response.body.getReader();
            let result = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                result += new TextDecoder().decode(value);
            }

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

const isPrevHover = ref(false)
const isNextHover = ref(false)

const prevOff = new URL('@/assets/images/main/section07/prev_off.png', import.meta.url).href
const prevOn = new URL('@/assets/images/main/section07/prev_on.png', import.meta.url).href

const nextOff = new URL('@/assets/images/main/section07/next_off.png', import.meta.url).href
const nextOn = new URL('@/assets/images/main/section07/next_on.png', import.meta.url).href

const slide = [
    { subTitle: 'Varicose Veins Clinic', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
    { subTitle: 'Varicose Veins Clinic2', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
    { subTitle: 'Varicose Veins Clinic3', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
    { subTitle: 'Varicose Veins Clinic4', title: 'Kim Byoung Joon LEDAS Varicose Vein Clinic', desc: 'Global standard in Varicose Vein Treatment', img: img01 },
];

const swiperRef = ref()
const progressBarRef = ref()

const restartProgress = () => {
    if (!progressBarRef.value) return
    const bar = progressBarRef.value
    bar.classList.remove('animate-progress')
    void bar.offsetWidth
    bar.classList.add('animate-progress')
}

const onSwiperInit = (swiper: any) => {
    swiper.on('slideChange', () => {
        restartProgress()
    })
}

const getThumbs = (item: any): string => {
    return item.fileInfo.filter(file => file.fileExt == 'webp')[0].filePathEnc;
}

const getCategoryLabel = (item: any): string => {
    if (!item || !item.peopleMemo) return '';
    try {
        const decoded = decodeHtmlEntities(item.peopleMemo);
        if (!decoded || !Array.isArray(decoded.category)) return '';
        return decoded.category
            .map(ct => composer.locale === 'en' ? ct.codeValue.categoryNameEn : ct.codeValue.categoryNameId)
            .join(', ');
    } catch (e) {
        console.error('카테고리 파싱 실패:', e);
        return '';
    }
}

const fileBaseUrl = apiBase.url() + "/_file/000/";

const decodeHtmlEntities = (str: string) => {
    if (!str || typeof str !== 'string') return {}; // 예외 처리
    try {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return JSON.parse(txt.value);
    } catch (e) {
        console.error('decodeHtmlEntities 파싱 실패:', e);
        return {};
    }
}

onMounted(() => {
    restartProgress()
})

const activeIndex = ref(0)
const totalSlides = String(slide.length).padStart(2, '0')


const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex
    restartProgress()
}
</script>

<style scoped>
@keyframes slideProgress {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}

.animate-progress {
    animation: slideProgress 3s linear forwards;
}
</style>