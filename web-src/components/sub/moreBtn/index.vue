<template>
    <div
        class="h-[60px] flex justify-center items-center gap-[6px] text-white mx-auto cursor-pointer"
        :class="[bgColor, width]"
        @click="handleClick"
    >
        {{ label }}
        <img src="@/assets/images/sub/about/program_btn.png" alt="화살표 이미지" class="">
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps<{
    label: string
    width?: string
    bgColor?: string
    url?: string
}>()

const handleClick = () => {
    if (props.url) {
        router.push(props.url)
    }
}
</script>

<style scoped></style>
