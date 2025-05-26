<template>
    <div class="flex flex-col items-center h-full bg-[#fff] py-[100px] px-[20px]">
        <div class="flex flex-col items-start w-full max-w-[1340px] pb-2 lg:pb-10 border-b border-black">
            <div class="flex flex-col justify-center items-start pb-[2rem]">
                <div class="text-[16px] sm:text-[20px] lg:text-[30px] text-[#F05056] font-[700]">{{
                    t('main.section5.part1.subtitle') }}</div>
                <MainSectionLinkTitle :title="t('main.section5.part1.title')" :color="'#F05056'" :link="true"
                    @click="router.push('/inquiry/news')" />
            </div>
        </div>

        <div class="w-[100vw] max-w-[1340px]">
            <MainSection05List :list="mainBoardData.resultInfo" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';
import { BOARDMNG_API_URLS } from "~/apis/admin/boardMng/urls";

const router = useRouter();

const { data: mainBoardData, pending, error, refresh } = await useAsyncData(
    `mainBoardData`,
    async () => {
        try {
            const response = await fetch(BOARDMNG_API_URLS.POST_LIST_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageNum: 1, pageSize: 4, boardType: '350', searchKeyword: '', show_yn: 'Y' }),
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
</script>

<style scoped></style>