<template>
    <div
        class="floating fixed top-[64%] right-[27px] z-[20] md:top-[238px] md:right-[82px] flex flex-col gap-[14px] md:gap-[20px]">
        <!-- <CommonFloatingCardItem theme="pink" title="고객 전용 게시판" />
        <CommonFloatingCardItem theme="white" title="온라인견적/상담" /> -->
        <CommonFloatingCardMobile to="/inquiry/contact" theme="location" />
        <CommonFloatingCardMobile to="https://api.whatsapp.com/send?phone=6281188810374" theme="whats" />
        <CommonFloatingCardMobile to="/inquiry/consultation" theme="mail" />
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>