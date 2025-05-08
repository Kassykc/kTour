<template>
    <div
        class="floating fixed top-[64%] right-[27px]  md:top-[238px] md:right-[82px] flex flex-col gap-[14px] md:gap-[20px]">
        <!-- <CommonFloatingCardItem theme="pink" title="고객 전용 게시판" />
        <CommonFloatingCardItem theme="white" title="온라인견적/상담" /> -->
        <CommonFloatingCardMobile theme="location" />
        <CommonFloatingCardMobile theme="tel" />
        <CommonFloatingCardMobile theme="mail" />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>