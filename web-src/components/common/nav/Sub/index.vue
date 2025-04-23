<template>
  <div
    v-if="visible && activeNav !== null && submenus[activeNav]"
    class="absolute top-[86px] left-0 w-screen z-50 bg-white/90"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  >
    <div class="px-[20px] flex justify-start items-center w-full max-w-[1400px] mx-auto min-w-[320px] h-[250px] md:h-[280px] lg:h-[320px]">
      <div class="submenu_title_area w-[20%] h-full pr-[100px] font-[700] text-[34px] border-r border-[#ADADAD] flex items-center justify-end">
        About Us
      </div>
      <div class="submenu_area flex flex-wrap items-start gap-0 min-w-[250px] w-[500px] h-full pt-[30px]">
        <div
          v-for="(item, idx) in submenus[activeNav]"
          :key="idx"
          class="w-[97px] md:w-[110px] lg:w-[249px] text-center"
        >
          <div
            class="text-black cursor-pointer hover:text-[#F57E1F] text-[13px] md:text-[14px] lg:text-[20px] font-[700] py-1 "
            @click="router.push(item.url)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  visible: boolean
  activeNav: number | null
}>()

const router = useRouter()

// 각 nav에 대응하는 서브메뉴 데이터
const submenus = [
  [
    { title: '회사소개', url: '/' },
    { title: '조직구성', url: '/' },
    { title: '연혁', url: '/' },
    { title: '대표이사 경력사항', url: '/' }
  ],
  [
    { title: '업무분야', url: '/' },
    { title: 'PORTFOLIO', url: '/' }
  ],
  [
    { title: '서비스1', url: '/' },
    { title: '서비스2', url: '/' }
  ],
  [
    { title: '프로젝트1', url: '/' },
    { title: '프로젝트2', url: '/' }
  ],
  [
    { title: '공지사항', url: '/' },
    { title: '견적/상담문의', url: '/' },
    { title: '연구비 및 사업공고', url: '/' },
    { title: '기업관련 공고', url: '/' },
    { title: '고객센터', url: '/' }
  ]
]
</script>

<style scoped></style>
