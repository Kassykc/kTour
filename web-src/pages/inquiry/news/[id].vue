<template>
    <div>
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab"
            :videoSrc="'/video/main/banner.webm'" />

        <div class="content_area pb-[220px]">
            <div id="new_details" class="w-full max-w-[1340px] px-[20px] my-0 mx-auto">
                <div
                    class="main_tit text-[28px] sm:text-[40px] font-[700] pt-[160px] leading-[36px] sm:leading-[56px] text-center mb-[114px] break-keep">
                    {{ composer.locale == 'en' ? parsedTitle.subjectEn : parsedTitle.subjectId }}
                </div>

                <div class="w-full flex justify-between items-center pb-[20px] border-b-[2px] border-black">
                    <div class="date text-[14px]">{{ boardDtlData.resultInfo.regDttm }}</div>
                    <div class="attach flex justify-end items-center gap-[10px] text-[16px]"
                        v-for="(item, index) in boardDtlData.resultInfo.fileInfo" v-if="getFile(item)">
                        {{ item }}
                        <img src="@/assets/images/sub/inquiry/attach_file.png" alt="">
                    </div>
                </div>

                <div class="content py-[80px]">
                    <div class="text-[16px] leading-[29px]" v-html="parsedContent.contentEn"
                        v-if="composer.locale == 'en'">
                    </div>

                    <div class="text-[16px] leading-[29px]" v-html="parsedContent.contentId"
                        v-if="composer.locale == 'id'">
                    </div>
                </div>

                <div class="flex flex-col justify-start items-start w-full max-w-[924px] mx-auto">
                    <div class="prev border-t border-b border-[#DADADA] flex justify-start items-center w-full"
                        v-if="boardDtlData.resultInfo?.prevTitle != '' && boardDtlData.resultInfo?.prevTitle != null">
                        <div class="font-[700] text-[17px] bg-[#EFEFEF] py-[10px] px-[20px] flex-0 w-[154px]">Previous
                        </div>
                        <div class="font-[400] text-[15px] py-[10px] px-[20px] flex-1 cursor-pointer truncate"
                            @click="movePage(`/inquiry/news/${boardDtlData.resultInfo?.prevIdx}`)">
                            {{ composer.locale == 'en' ? parsedPrevTitle.subjectEn : parsedPrevTitle.subjectId }}
                        </div>
                    </div>
                    <div class="next border-b border-[#DADADA] flex justify-start items-center w-full"
                        v-if="boardDtlData.resultInfo?.nextTitle != '' && boardDtlData.resultInfo?.nextTitle != null">
                        <div class="font-[700] text-[17px] bg-[#EFEFEF] py-[10px] px-[20px] flex-0 w-[154px]">Next</div>
                        <div class="font-[400] text-[15px] py-[10px] px-[20px] flex-1 cursor-pointer truncate"
                            @click="movePage(`/inquiry/news/${boardDtlData.resultInfo?.nextIdx}`)">
                            {{ composer.locale == 'en' ? parsedNextTitle.subjectEn : parsedNextTitle.subjectId }}
                        </div>
                    </div>
                </div>
            </div>

            <SubListBtn class="mt-[120px] mx-auto" @click="router.push('/inquiry/news')" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { t, composer } from '@/plugins/i18n'
import { BOARDMNG_API_URLS } from '@/apis/boardMng/urls'

import inquiry_bg from "@/assets/images/sub/inquiry/banner_bg.png";

const router = useRouter();

const movePage = (page: string) => {

    router.push(page);
};

const bannerTitle = ref('Inquiry');
const bannerBgImage = ref(inquiry_bg); // 배경 이미지 경로
const category = ref('inquiry');
const selectedTab = ref('consultation');


const fileBaseUrl = apiBase.url() + "/_file/000/";

const getFile = (item: any) => {
    console.log('item : ' + item)
    if (item && item.originTypeCd && item.originTypeCd == '000') {
        return true;
    } else {
        return false;
    }
}

const decodeHtmlEntities = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

const parsedContent = computed(() => {
    try {
        const rawMemo = boardDtlData.value.resultInfo?.content;

        if (!rawMemo || rawMemo === 'null') return {};

        const decoded = decodeHtmlEntities(rawMemo);
        return JSON.parse(decoded);
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
});

const parsedTitle = computed(() => {
    try {
        const rawMemo = boardDtlData.value.resultInfo?.subject;

        if (!rawMemo || rawMemo === 'null') return {};

        const decoded = decodeHtmlEntities(rawMemo);
        return JSON.parse(decoded);
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
});

const parsedPrevTitle = computed(() => {
    try {
        const rawMemo = boardDtlData.value.resultInfo?.prevTitle;

        if (!rawMemo || rawMemo === 'null') return {};

        const decoded = decodeHtmlEntities(rawMemo);
        return JSON.parse(decoded);
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
});

const parsedNextTitle = computed(() => {
    try {
        const rawMemo = boardDtlData.value.resultInfo?.nextTitle;

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
        return boardDtlData.value.resultInfo.fileInfo.filter(item => item.fileExt == 'webp') ?? []
    } catch (e) {
        console.error('peopleMemo 파싱 오류:', e);
        return {};
    }
})

const generalFiles = computed(() => {
    try {
        return boardDtlData.value.resultInfo.fileInfo?.filter(file => file.fileExt?.toLowerCase() != 'webp') ?? []
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

const { data: boardDtlData, pending, error, refresh } = await useAsyncData(
    `boardDtlData-${route.params.id}`,
    async () => {
        try {
            const response = await fetch(BOARDMNG_API_URLS.INSERT_BOARD_URL + "/" + route.params.id, {
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
    if (!boardDtlData.value) {
        await refresh();
    }
    console.log('mounted: ', boardDtlData.value);
});

</script>
<style lang="scss">
.ql-align-center {
    img {
        margin: 0px auto !important;
    }
}
</style>