<template>
    <div class="flex flex-col items-center h-full bg-[#fff] py-[100px] px-[20px]">
        <div class="flex flex-col items-start w-full max-w-[1340px] pb-2 lg:pb-10 border-b border-black">
            <div class="flex flex-col justify-center items-start pb-[2rem]">
                <MainSectionLinkTitle :title="t('main.section6.part1.title')" :color="'#7A5083'" />
            </div>
        </div>

        <div class="w-[100vw] max-w-[1340px]">
            <MainSection06List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
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