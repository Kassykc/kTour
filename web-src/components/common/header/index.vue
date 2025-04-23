<template>
    <div>
        <div
        :class="[ 
            'border-b',
            isHeaderHover || isSubVisible
            ? 'bg-white/90 border-[#ADADAD]'
            : 'border-[#D9D9D9]'
        ]"
        @mouseenter="isHeaderHover = true"
        @mouseleave="handleHeaderLeave"
        >
        <div
            class="px-[28px] sm:px-[18px] flex justify-between items-center w-full max-w-[1400px] mx-auto min-w-[320px] min-h-[85px] max-h-[85px]">
            <div>
            <CommonHeaderHome :isHoveredHeader="isHeaderHover" />
            </div>
            <div class="hidden sm:block h-[85px]">
            <CommonNav
                :isHoveredHeader="isHeaderHover"
                :activeNav="activeNav"
                @select="selectNav"
            />
            </div>
            <div class="sm:hidden">
            <CommonNavMobile />
            </div>
            <div>
            <CommonLanguageSwitch />
            </div>
        </div>
        </div>

        <CommonNavSub
        class="hidden sm:block"
        :visible="isSubVisible"
        :activeNav="activeNav"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isHeaderHover = ref(false)
const isSubVisible = ref(false)
const activeNav = ref<number | null>(null)

const selectNav = (index: number) => {
  activeNav.value = index
  isSubVisible.value = true
}

const handleHeaderLeave = () => {
  if (!isSubVisible.value) {
    isHeaderHover.value = false
  }
}
</script>
