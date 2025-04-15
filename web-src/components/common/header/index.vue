<template>
    <div>
        <div class="shadow-md" @mouseleave="isSubVisible = false">
            <div
                class="px-[28px] sm:px-[18px] flex justify-between items-center w-full max-w-[1200px] mx-auto min-w-[320px] min-h-[85px] max-h-[85px]">
                <!-- 좌측 끝에 배치된 헤더 -->
                <div>
                    <CommonHeaderHome />
                </div>
                <!-- 우측 끝에 배치된 내비게이션 -->
                <div class="hidden sm:block" @mouseenter="isSubVisible = true">
                    <CommonNav />
                </div>
                <div class="sm:hidden">
                    <CommonNavMobile />
                </div>
                <div>
                    <CommonLanguageSwitch />
                </div>
            </div>
        </div>
        <CommonNavSub class="hidden sm:block" :visible="isSubVisible" @mouseenter="isSubVisible = true"
            @mouseleave="isSubVisible = false" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isSubVisible = ref(false)

let hideTimer: number

const showSubMenu = () => {
    clearTimeout(hideTimer)
    isSubVisible.value = true
}

const hideSubMenu = () => {
    hideTimer = window.setTimeout(() => {
        isSubVisible.value = false
    }, 200) // 0.2초 딜레이로 자연스럽게
}
</script>

<style scoped></style>