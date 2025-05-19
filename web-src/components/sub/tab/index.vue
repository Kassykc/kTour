<template>
    <div>
        <div class="sub_tab_area flex gap-[30px]">
            <div v-for="tab in filteredTabs" :key="tab.key"
                class="sub_tab cursor-pointer py-[10px] text-[20px] border-b" :class="{
                    'text-white border-white': activeTab === tab.key,
                    'text-[#FFFFFF99] border-transparent': activeTab !== tab.key
                }" @click="handleClick(tab.key)">
                {{ t(tab.label) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

// Props 받기
const props = defineProps<{
    modelValue: string
    category: 'about' | 'tour' | 'mtc' | 'inquiry'
}>()

// Emit으로 부모와 동기화
const emit = defineEmits(['update:modelValue'])

// 카테고리별 탭 리스트
const allTabs = {
    about: [
        { key: 'company', label: 'tabs.about.company' },
        { key: 'service', label: 'tabs.about.service' },
        { key: 'korea', label: 'tabs.about.korea' },
        { key: 'meditour', label: 'tabs.about.meditour' },
    ],
    tour: [
        { key: 'seoul', label: 'menu.3.2depth.1.name', url: '/tour/seoul' },
        { key: 'gangwon', label: 'menu.3.2depth.2.name', url: '/tour/gangwon' },
    ],
    mtc: [
        { key: 'mts', label: 'Medical Treatment Center' },
    ],
    inquiry: [
        { key: 'news', label: 'menu.6.2depth.1.name', url: '/inquiry/news' },
        { key: 'faq', label: 'menu.6.2depth.2.name', url: '/inquiry/faq' },
        { key: 'contact', label: 'menu.6.2depth.3.name', url: '/inquiry/contact' },
        { key: 'consultation', label: 'menu.6.2depth.4.name', url: '/inquiry/consultation' },
    ],
}

// 카테고리에 맞는 탭만 필터링
const filteredTabs = computed(() => allTabs[props.category] ?? [])

// 선택된 탭
const activeTab = ref(props.modelValue)

const handleClick = (key: string) => {
    activeTab.value = key
    emit('update:modelValue', key)

    // 만약 카테고리가 'tour'이면 URL로 이동
    if (props.category === 'tour' || props.category === 'inquiry' ) {
        const selectedTab = filteredTabs.value.find(tab => tab.key === key);
        if (selectedTab && selectedTab.url) {
            window.location.href = selectedTab.url;
        }
    } else {
        // 그렇지 않으면 스크롤 이동
        const target = document.getElementById(key)
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
</script>

<style scoped></style>
