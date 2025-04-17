<template>
    <div class="flex justify-center items-center">
        <div class="text-[4.5rem] font-[700] pr-[1.5rem]" :style="`color:${props.color}`">
            {{ props.title ?? '' }}
        </div>
        <div class="w-[6rem]" v-if="link">
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