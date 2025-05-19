<template>
  <div v-if="visible && activeNav !== null && submenus[activeNav]"
    class="absolute top-[86px] left-0 w-screen z-50 bg-white/90" @mouseenter="$emit('submenu-enter')"
    @mouseleave="$emit('submenu-leave')">
    <div
      class="px-[20px] flex justify-start items-center w-full mx-auto min-w-[320px] h-[250px] md:h-[280px] lg:h-[320px]">
      <div
        class="submenu_title_area w-[28%] h-full pr-[100px] font-[700] text-[34px] border-r border-[#ADADAD] flex items-center justify-end bg-[url('/img/common/nav/submenu_bg.png')] bg-[50%] bg-[position:75%_center] bg-no-repeat text-right"
        v-html="menus[activeNav]?.title">
      </div>
      <div
        class="submenu_area flex flex-wrap items-center min-w-[250px] w-[50%] h-[180px] pl-[20px] gap-x-[8px] gap-y-[4px]">
        <div v-for="(item, idx) in submenus[activeNav]" :key="idx" class="w-[48%] text-left">
          <div
            class="text-black cursor-pointer hover:text-[#F57E1F] text-[13px] md:text-[14px] lg:text-[20px] font-[700] px-[10px]"
            @click="router.push({ path: item.url, query: { tab: item.tab } })">
            {{ t(item.title) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

const props = defineProps<{
  visible: boolean
  activeNav: number | null
}>()

const router = useRouter()

const menus = [
  { title: t('menu.1.name'), url: '/about' },
  { title: t('menu.2.name'), url: '/mtc' },
  { title: t('menu.3.name'), url: '/tour/seoul' },
  // { title: t('menu.4.name'), url: '/' },
  // { title: t('menu.5.name'), url: '/' },
  { title: t('menu.6.name'), url: '/inquiry/news' },
]

// 각 nav에 대응하는 서브메뉴 데이터
const submenus = [
  [
    { title: 'menu.1.2depth.1.name', url: '/about', tab: 'company' },
    { title: 'menu.1.2depth.2.name', url: '/about', tab: 'service' },
    { title: 'menu.1.2depth.3.name', url: '/about', tab: 'korea' },
    { title: 'menu.1.2depth.4.name', url: '/about', tab: 'meditour' }
  ],
  [
    { title: 'menu.2.2depth.1.name', url: '/mtc' },
    { title: 'menu.2.2depth.2.name', url: '/mtc' },
  ],
  [
    { title: 'menu.3.2depth.1.name', url: '/tour/seoul' },
    { title: 'menu.3.2depth.2.name', url: '/tour/gangwon' },
  ],
  // [
  //   { title: '프로젝트1', url: '/' },
  //   { title: '프로젝트2', url: '/' }
  // ],
  // [
  //   { title: '프로젝트1', url: '/' },
  //   { title: '프로젝트2', url: '/' }
  // ],
  [
    { title: 'menu.6.2depth.1.name', url: '/inquiry/news' },
    { title: 'menu.6.2depth.2.name', url: '/inquiry/faq' },
    { title: 'menu.6.2depth.3.name', url: '/inquiry/contact' },
    { title: 'menu.6.2depth.4.name', url: '/inquiry/consultation' }
  ],
]
</script>

<style scoped></style>
