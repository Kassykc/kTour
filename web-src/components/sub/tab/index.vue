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

const props = defineProps<{
    modelValue: string
    category: 'about' | 'info'
}>()

const emit = defineEmits(['update:modelValue'])

const allTabs = {
    about: [
        { key: 'company', label: 'tabs.about.company' },
        { key: 'service', label: 'tabs.about.service' },
        { key: 'korea', label: 'tabs.about.korea' },
        { key: 'meditour', label: 'tabs.about.meditour' },
    ],
    // 페이지 이름, 메뉴명 추가 및 변경 해야 됨
    info: [
        { key: 'info', label: 'tabs.about.info' },
        { key: 'text', label: 'tabs.about.text' },
        { key: 'login', label: 'tabs.about.login' },
    ]
}

const filteredTabs = computed(() => allTabs[props.category] ?? [])

const activeTab = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
    activeTab.value = val
})

const handleClick = (key: string) => {
    activeTab.value = key
    emit('update:modelValue', key)

    const target = document.getElementById(key)
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped></style>
