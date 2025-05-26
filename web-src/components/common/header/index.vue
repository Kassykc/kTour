<template>
    <div class="header-wrapper" @mouseenter="handleHeaderEnter" @mouseleave="handleHeaderLeave">
        <div
        :class="[ 
            'border-b',
            isHeaderActive 
            ? 'bg-white/90 border-[#ADADAD]'
            : 'border-[transparent]'
        ]"
        @mouseenter="handleHeaderEnter"
        @mouseleave="handleHeaderLeave"
        @touchstart="onTouchStart"
        >
        <div
            class="px-[28px] sm:px-[18px] flex justify-between items-center w-full max-w-[1340px] mx-auto min-w-[320px] min-h-[85px] max-h-[85px]">
            <div>
            <CommonHeaderHome :isHoveredHeader="isHeaderHover" />
            </div>
            <div class="hidden lg:block h-[85px]">
              <CommonNav
                :isHoveredHeader="isHeaderHover"
                :activeNav="activeNav"
                @hover="handleNavHover"
                @leave="handleNavLeave"
              />
            </div>
            
            
            <div class="flex justify-end items-center gap-[20px] lg:gap-[40px] ">
              <div class="hidden lg:block">
                <CommonLanguageSwitch :isHeaderActive="isHeaderActive" />
              </div>
              <div class="block lg:hidden">
                <CommonNavMobile />
              </div>
            </div>
        </div>
        </div>

        <CommonNavSub
          class="hidden lg:block"
          :activeNav="activeNav"
          :visible="activeNav !== null"
          @submenu-enter="handleSubmenuEnter"
          @submenu-leave="handleSubmenuLeave"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isHeaderHover = ref(false)
const isTouchActive = ref(false)
const activeNav = ref<number | null>(null)
const submenuHover = ref(false)
const windowWidth = ref(0)

const isSubVisible = computed(() => activeNav.value !== null || submenuHover.value)
const isHeaderActive = computed(() =>
  (isDesktop.value && (isHeaderHover.value || isSubVisible.value)) ||
  (isTouchActive.value && isDesktop.value)
)

const isDesktop = computed(() => windowWidth.value >= 1024)

let hideTimer: number

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('resize', updateWindowWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})

const handleNavHover = (index: number) => {
  if (!isDesktop.value) return
  clearTimeout(hideTimer)
  activeNav.value = index
  isTouchActive.value = false
}

const handleNavLeave = (event: MouseEvent) => {
  if (!isDesktop.value) return

  const relatedTarget = event.relatedTarget as HTMLElement | null
  const headerEl = document.querySelector('.header-wrapper') as HTMLElement

  if (!relatedTarget || !headerEl.contains(relatedTarget)) {
    hideTimer = window.setTimeout(() => {
      if (!submenuHover.value) {
        activeNav.value = null
        isTouchActive.value = false
      }
    }, 200)
  }
}

const handleSubmenuEnter = () => {
  if (!isDesktop.value) return
  clearTimeout(hideTimer)
  submenuHover.value = true
}

const handleSubmenuLeave = () => {
  if (!isDesktop.value) return
  submenuHover.value = false
  hideTimer = window.setTimeout(() => {
    resetHeaderState()
  }, 200)
}

const resetHeaderState = () => {
  if (isTouchActive.value) return  // 👈 터치 중이면 무시
  isHeaderHover.value = false
  activeNav.value = null
}

const handleHeaderLeave = (event: MouseEvent) => {
  if (!isDesktop.value) return

  const relatedTarget = event.relatedTarget as HTMLElement | null
  const headerEl = (event.currentTarget as HTMLElement)

  if (!relatedTarget || !headerEl.contains(relatedTarget)) {
    hideTimer = window.setTimeout(() => {
      if (!submenuHover.value) {
        resetHeaderState()
      }
    }, 200)
  }
}
const handleHeaderEnter = () => {
  if (!isDesktop.value) return
  isHeaderHover.value = true
  if (activeNav.value === null) {
    activeNav.value = 0 // ← 기본으로 보여줄 서브메뉴 인덱스 (0번 메뉴)
  }
}


// 👇 터치 이벤트 추가 (1024 이상에서 탭 시 헤더 활성화)
const onTouchStart = () => {
  if (isDesktop.value) {
    isTouchActive.value = true
    isHeaderHover.value = false
  }
}

</script>
