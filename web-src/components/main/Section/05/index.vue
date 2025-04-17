<template>
    <div class="flex flex-col pt-[10rem] items-center h-[100%] max-h-[2400px] bg-[#fff] pb-[5rem]">
        <div class="flex flex-col items-start w-[100vw] max-w-[1400px] pb-10 border-b border-black">
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="'News & Updates'" :color="'#F05056'" :link="true" />
            </div>
        </div>

        <div class="w-[100vw] max-w-[1400px]">
            <MainSection05List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">

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