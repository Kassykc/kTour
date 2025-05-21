<template>
    <div class="search_list w-full max-w-[1340px] mx-auto flex flex-col xl:flex-row justify-start items-center xl:items-start gap-[30px] xl:gap-[8px] mb-[146px]">
        <!-- {{ props.data.fileInfo }} -->
        <div class="hospital_media flex-0 w-full sm:w-[80%] xl:w-[592px] h-fit flex flex-col justify-between items-center gap-[8px] px-[20px] xl:px-0">
            <!-- 슬라이드 영역  -->
            <div ref="swiperRef" class="swiper_area w-full xl:w-[592px] min-h-[360px] border">
                <Swiper :modules="[Autoplay, Pagination, Navigation]"
                    :autoplay="{ delay: 3000, disableOnInteraction: false }" :loop="true" :pagination="true"
                    :slidesPerView="1" :spaceBetween="30" :navigation="false"
                    class="w-full h-full flex justify-center items-center  mx-auto" ref="swiper">
                    <SwiperSlide v-for="(item, idx) in imageFiles" :key="idx">
                        <div class="w-full h-full">
                            <img :src="fileBaseUrl + item.filePathEnc" alt="슬라이드 이미지"
                                class="w-full h-full object-contain">
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <!-- sns 영역 -->
            <div
                class="sns flex justify-center sm:justify-start items-center gap-[20px] w-full h-[54px] bg-[#F3F3F3] px-[20px] py-[12px]">
                <a href="" target="blank" v-if="parsedMemo.instagram && parsedMemo.instagram != ''">
                    <img src="@/assets/images/sub/mtc/insta.png" alt="" @click="router.push(parsedMemo.instagram)">
                </a>
                <a href="" target="blank" v-if="parsedMemo.youtube && parsedMemo.youtube != ''">
                    <img src="@/assets/images/sub/mtc/youtube.png" alt="" @click="router.push(parsedMemo.youtube)">
                </a>
                <a href="" target="blank" class="flex justify-start items-center gap-[20px]"
                    v-if="parsedMemo.site && parsedMemo.site != ''">
                    <img src="@/assets/images/sub/mtc/language.png" alt="" @click="router.push(parsedMemo.site)">
                    <span class="text-[#313131] hidden sm:block" @click="router.push(parsedMemo.site)">{{ parsedMemo.site }}</span>
                </a>
            </div>
        </div>

        <!-- 리스트 정보 -->
        <div class="info_area flex-1 min-h-[424px] h-full w-full max-w-full sm:max-w-[80%] xl:max-w-[740px] flex flex-col justify-between items-start gap-[8px]">
            <div ref="infoRef" class="info w-full px-[26px] flex-1 flex flex-col justify-centr items-start gap-[10px]">

                <!-- 탭 이름 -->
                <div
                    ref="tabWrap" 
                    class="tab_wrap w-full flex justify-start items-center gap-[10px] mb-[10px] overflow-x-auto scrollbar-hide"
                    style="-webkit-overflow-scrolling: touch;"
                >
                    <div v-for="(item, index) in parsedMemo.category" :key="index"
                    class="tab_name w-fit text-[14px] sm:text-[16px] text-[#1F78FF] font-[700] border-[2px] border-[#1F78FF] py-[6px] px-[14px] sm:py-[14px] sm:px-[20px] rounded-[100px] shrink-0">
                        {{ composer.locale == 'en' ? item.codeValue.categoryNameEn : item.codeValue.categoryNameId }}
                    </div>
                </div>

                <!-- 태그 -->
                <div 
                    ref="tagWrap" 
                    class="tags flex justify-start items-center gap-[20px] w-full overflow-x-auto scrollbar-hide"
                    style="-webkit-overflow-scrolling: touch;"
                >
                    <div class="tag  text-[13px] sm:text-[15px] text-[#838383] w-fit shrink-0" v-for="(item, index) in parsedMemo.categoryChild"
                        :key="index">
                        #{{ composer.locale == 'en' ?
                            item.codeValue.categoryNameEn : item.codeValue.categoryNameId }}
                    </div>
                </div>

                <!-- 타이틀 -->
                <div class="title text-[24px] sm:text-[36px] font-[700] mb-[20px] text-[#313131]">{{ composer.locale == 'en' ?
                    props.data.nameFirstKo : props.data.nameFirstEn }}</div>

                <!-- 슬로건 -->
                <div
                    class="slogan w-full h-auto py-[14px] border-t border-black font-[700] text-[18px] sm:text-[22px] text-[#313131] relative">
                    {{ composer.locale == 'en' ?
                        parsedMemo.sloganEn : parsedMemo.sloganId }}
                    <span
                        class="mark absolute top-[-16px] left-[-10px] bg-white text-[12px] sm:text-[14px] font-[700] text-[#313131] px-[8px] py-[4px]">Slogan.</span>
                </div>

                <!-- 콘택트 -->
                <div class="contact_info flex flex-col justify-center items-start gap-[8px]">

                    <div class="pone flex justify-start items-center text-[14px] sm:text-[18px] text-[#313131] gap-[20px]">
                        <img src="@/assets/images/sub/mtc/phone.png" alt="">
                        +{{ props.data.interPhoneNumber }}){{ props.data.mobile1 }}-{{ props.data.mobile2 }}-{{
                            props.data.mobile3 }}
                    </div>

                    <div class="address flex justify-start items-center text-[14px] sm:text-[18px] text-[#313131] gap-[20px]">
                        <img src="@/assets/images/sub/mtc/distance.png" alt="">
                        {{ props.data.email }}
                    </div>
                </div>

            </div>

            <!-- 버튼 -->
            <div class="btns w-full flex justify-center items-center gap-[8px] px-[20px] sm:px-0 mt-[20px] sm:mt-0">
                <a v-if="generalFiles && generalFiles.length > 0" :href="fileBaseUrl + generalFiles[0].filePathEnc"
                    download=""
                    class="brochure flex justify-center items-center gap-[5px] w-[45%] sm:w-full bg-[#3F3F3F] text-[12px] sm:text-[16px] !text-white p-[10px] sm:px-[20px] sm:py-[12px] h-[54px] cursor-pointer">
                    Brochure
                    <img src="@/assets/images/sub/mtc/down_icon.png" alt="">
                </a>

                <div class="view_details flex justify-center items-center gap-[5px] w-[45%] sm:w-full bg-[#1F78FF] text-[12px] sm:text-[16px] text-white p-[10px] sm:px-[20px] sm:py-[12px] h-[54px] cursor-pointer"
                    @click="movePage(`/mtc/${props.data.peopleIdx}`)">
                    View Details
                    <img src="@/assets/images/sub/mtc/move_icon.png" alt="">
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { t, composer } from '@/plugins/i18n';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ref, onMounted, onUnmounted } from 'vue'

import img01 from '@/assets/images/sub/mtc/interior01.png'

const swiperRef = ref<HTMLElement | null>(null)
const infoRef = ref<HTMLElement | null>(null)

const syncInfoHeight = () => {
    if (swiperRef.value && infoRef.value) {
        const height = infoRef.value.offsetHeight
        swiperRef.value.style.height = `${height}px`
    }
}

onMounted(() => {
    syncInfoHeight()
    window.addEventListener('resize', syncInfoHeight)
})

onUnmounted(() => {
    window.removeEventListener('resize', syncInfoHeight)
})

const props = defineProps({
    data: Object,
    selectedCategory: String
})

const fileBaseUrl = apiBase.url() + "/_file/000/";

const decodeHtmlEntities = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

const parsedMemo = computed(() => {
    try {
        const rawMemo = props.data?.peopleMemo;

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
        return props.data?.fileInfo?.filter(file => file.fileExt?.toLowerCase() == 'webp') ?? []
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
})

const generalFiles = computed(() => {
    try {
        return props.data?.fileInfo?.filter(file => file.fileExt?.toLowerCase() != 'webp') ?? []
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
})

const router = useRouter();

const movePage = (page: string) => {

    router.push(page);
};

const tabWrap = ref<HTMLElement | null>(null)
const tagWrap = ref<HTMLElement | null>(null)

let isDown = false
let startX = 0
let scrollLeft = 0

onMounted(() => {
    const tab_item = tabWrap.value
    if (!tab_item) return

    tab_item.addEventListener('mousedown', (e) => {
        isDown = true
        tab_item.classList.add('grabbing')
        startX = e.pageX - tab_item.offsetLeft
        scrollLeft = tab_item.scrollLeft
    })

    tab_item.addEventListener('mouseleave', () => {
        isDown = false
        tab_item.classList.remove('grabbing')
    })

    tab_item.addEventListener('mouseup', () => {
        isDown = false
        tab_item.classList.remove('grabbing')
    })

    tab_item.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - tab_item.offsetLeft
        const walk = (x - startX) * 1.5 // 드래그 감도
        tab_item.scrollLeft = scrollLeft - walk
    })


    const tag_item = tagWrap.value
    if (!tag_item) return

    tag_item.addEventListener('mousedown', (e) => {
        isDown = true
        tag_item.classList.add('grabbing')
        startX = e.pageX - tag_item.offsetLeft
        scrollLeft = tag_item.scrollLeft
    })

    tag_item.addEventListener('mouseleave', () => {
        isDown = false
        tag_item.classList.remove('grabbing')
    })

    tag_item.addEventListener('mouseup', () => {
        isDown = false
        tag_item.classList.remove('grabbing')
    })

    tag_item.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - tag_item.offsetLeft
        const walk = (x - startX) * 1.5 // 드래그 감도
        tag_item.scrollLeft = scrollLeft - walk
    })
    
})

</script>
<style scoped >
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.tab_wrap.grabbing,
.tags.grabbing {
    cursor: grabbing !important;
}
</style>