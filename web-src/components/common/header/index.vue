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
                @hover="handleNavHover"
                @leave="handleNavLeave"
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
        :activeNav="activeNav"
        :visible="activeNav !== null"
        @submenu-enter="handleSubmenuEnter"
        @submenu-leave="handleSubmenuLeave"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isHeaderHover = ref(false)
const activeNav = ref<number | null>(null)
const submenuHover = ref(false)

const isSubVisible = computed(() => activeNav.value !== null || submenuHover.value)

let hideTimer: number

const handleNavHover = (index: number) => {
  clearTimeout(hideTimer)
  activeNav.value = index
}

const handleNavLeave = () => {
  hideTimer = window.setTimeout(() => {
    if (!submenuHover.value) {
      resetHeaderState()
    }
  }, 200)
}

const handleSubmenuEnter = () => {
  clearTimeout(hideTimer)
  submenuHover.value = true
}

const handleSubmenuLeave = () => {
  submenuHover.value = false
  hideTimer = window.setTimeout(() => {
    resetHeaderState()
  }, 200)
}

const resetHeaderState = () => {
  isHeaderHover.value = false
  activeNav.value = null
}

const handleHeaderLeave = () => {
  hideTimer = window.setTimeout(() => {
    if (!submenuHover.value && activeNav.value === null) {
      resetHeaderState()
    }
  }, 200)
}

</script>
