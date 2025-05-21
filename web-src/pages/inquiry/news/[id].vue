<template>
    <div>
        <Banner :title="bannerTitle" :category="category" :selectedTab="selectedTab"
            :videoSrc="'/video/main/banner.webm'" />

        <div class="content_area pb-[220px]">
            <div id="new_details" class="w-full max-w-[1340px] px-[20px] my-0 mx-auto">
                <div
                    class="main_tit text-[28px] sm:text-[40px] font-[700] pt-[160px] leading-[36px] sm:leading-[56px] text-center mb-[114px] break-keep">
                    Medi-City Co., Ltd. Visits National University Hospital<br />Director and National Cancer Center in
                    Indonesia.
                </div>

                <div class="w-full flex justify-between items-center pb-[20px] border-b-[2px] border-black">
                    <div class="date text-[14px]">2025-02-24 16:44:19</div>
                    <div class="attach flex justify-end items-center gap-[10px] text-[16px]">
                        2025메디씨티 신년카드_최종.jpg
                        <img src="@/assets/images/sub/inquiry/attach_file.png" alt="">
                    </div>
                </div>

                <div class="content py-[80px] text-center">
                    <div class="img_wrap flex justify-center items-center mb-[68px]">
                        <img src="@/assets/images/sub/inquiry/detail01.png" alt="">
                    </div>

                    <div class="text-[16px] leading-[29px]">
                        Medi-City Co., Ltd. announced on the 19th that it visited the National University Hospital of
                        Indonesia,<br />
                        RSUI (Rumah Sakit Universitas Indonesia), and the National Cancer Center in Korea, which leads
                        international medical cooperation projects.<br />
                        During this visit, hosted by Medi-City Co., Ltd., RSUI's Director Astuti met with National
                        Cancer Center Director Seo Hong-Gwan<br />
                        to discuss ways to enhance medical technology and service levels, as well as to explore
                        cooperation for development in various fields.<br />
                        In response, the National Cancer Center introduced Korea's advanced medical technology and
                        infrastructure to Indonesia.<br />
                        RSUI's Director Astuti remarked, "I am deeply impressed by Korea's medical technology and
                        systems,<br />
                        and I look forward to innovating Indonesia's medical system through cooperation with the
                        National Cancer Center."<br />
                        Medi-City Chairman Lee Ji-Sun said, "Through continuous international medical cooperation and
                        technological exchanges,<br />
                        we will contribute to the medical development of both countries, starting with the successful
                        launch of the global medical platform K-Medi in<br />
                        Indonesia this coming July.<br />
                        " She added, "These efforts will be an important step in promoting the health of the people and
                        improving the quality of medical services in<br />
                        both countries."<br /><br /><br /><br /><br />
                        Reporter Yoo Ji-Young, molly97@docdocdoc.co.kr<br />
                        Source: Young Doctor (http://www.docdocdoc.co.kr)
                    </div>
                </div>

                <div class="flex flex-col justify-start items-start w-full max-w-[924px] mx-auto">
                    <div class="prev border-t border-b border-[#DADADA] flex justify-start items-center w-full">
                        <div class="font-[700] text-[17px] bg-[#EFEFEF] py-[10px] px-[20px] flex-0 w-[154px]">Previous
                        </div>
                        <div class="font-[400] text-[15px] py-[10px] px-[20px] flex-1 cursor-pointer truncate"
                            @click="movePage('/')">
                            Medi-City Co., Ltd. Indonesia Branch successfully concludes the K-AESTHETIC & ART Medical
                            Showcase!
                        </div>
                    </div>
                    <div class="next border-b border-[#DADADA] flex justify-start items-center w-full">
                        <div class="font-[700] text-[17px] bg-[#EFEFEF] py-[10px] px-[20px] flex-0 w-[154px]">Next</div>
                        <div class="font-[400] text-[15px] py-[10px] px-[20px] flex-1 cursor-pointer truncate"
                            @click="movePage('/')">
                            [K-Art Serise] Seniman yang Mendukung Semua Mimpi di Dunia: Can N Chur
                        </div>
                    </div>
                </div>
            </div>

            <SubListBtn class="mt-[120px] mx-auto" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'
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

const decodeHtmlEntities = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

const parsedTab = computed(() => {
    try {
        const rawMemo = boardDtlData.value.resultInfo?.categoryChildNameKo;

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
        const rawMemo = boardDtlData.value.resultInfo?.peopleMemo;

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
            const response = await fetch(BOARDMNG_API_URLS.SET_BOARD_URL + "/" + route.params.id, {
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
    if (!boardDtlData.value) {
        await refresh();
    }
    console.log('mounted: ', boardDtlData.value);
});

</script>
<style lang="">

</style>