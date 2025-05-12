<template>
    <div class="flex flex-col pt-[10rem] items-center h-[100%] max-h-[2400px] bg-[#fff] pb-[5rem]">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-10 border-b border-black">
            <div class="flex flex-col justify-center items-start pb-[2rem]">
                <div class="text-[1.8rem] text-[#F05056] font-[700]">{{ t('main.section5.part1.subtitle') }}</div>
                <MainSectionLinkTitle :title="t('main.section5.part1.title')" :color="'#F05056'" :link="true" />
            </div>
        </div>

        <div class="w-[100vw] max-w-[1340px]">
            <MainSection05List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n';

const list = [
    {
        title: '[K-Art Series] 희망을 전달하는 작가, 씩씩'
    }, {
        title: '[K-Art Series] 희망을 전달하는 작가, 씩씩'
    }, {
        title: '[K-Art Series] 희망을 전달하는 작가, 씩씩'
    }, {
        title: '[K-Art Series] 희망을 전달하는 작가, 씩씩'
    }
]
</script>

<style scoped></style>