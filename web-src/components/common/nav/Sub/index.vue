<template>
    <div>
        <div
        class="absolute top-[85px] left-0 w-screen z-50 bg-[#3D0C21cc]"
        v-if="visible"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
        >
            <div class="px-[20px] flex justify-end items-center w-full max-w-[1202px] mx-auto min-w-[320px] h-[250px] md:h-[280px] lg:h-[320px] py-4">
                <div class="submenu_area flex items-start gap-0 min-w-[250px] h-[250px] md:h-[280px] lg:h-[320px] pt-[30px]">
                    <div
                        v-for="(group, index) in submenus"
                        :key="index"
                        class="w-[97px] md:w-[110px] lg:w-[125px] text-center"
                    >
                        <div
                        v-for="(item, idx) in group"
                        :key="idx"
                        class="text-[#ffffffcc] cursor-pointer hover:text-[#fff] text-[13px] md:text-[14px] lg:text-[16px] py-1"
                        @click="router.push(item.url)"
                        >
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    visible: boolean
}>()
const router = useRouter();
const submenus = [
  [
    { title: '회사소개', url: '/' },
    { title: '조직구성', url: '/' },
    { title: '연혁', url: '/' },
    { title: '대표이사 경력사항', url: '/' },
  ],
  [
    { title: '업무분야', url: '/' },
    { title: 'PORTFOLIO', url: '/' },
  ],
  [
    { title: '업무분야', url: '/' },
    { title: 'PORTFOLIO', url: '/' },
  ],
  [
    { title: '업무분야', url: '/' },
    { title: 'PORTFOLIO', url: '/' },
  ],
  [
    { title: '공지사항', url: '/' },
    { title: '견적/상담문의', url: '/' },
    { title: '연구비 및 사업공고', url: '/' },
    { title: '기업관련 공고', url: '/' },
    { title: '고객센터', url: '/' },
  ]
]
</script>

<style scoped>

</style>