<template>
    <div class="flex justify-center items-center w-fit">
        <div class="text-[30px] sm:text-[40px] lg:text-[70px] font-[700]" :style="`color:${props.color}`">
            {{ props.title ?? '' }}
        </div>
        <div class="w-[4rem] lg:w-[6rem]" v-if="link">
            <CommonLinkArrow :color="color" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    color: String,
    link: Boolean,
})

// const isLink = props.link == false ? false : true;
</script>

<style scoped></style>