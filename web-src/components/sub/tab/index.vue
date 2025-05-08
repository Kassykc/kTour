<template>
    <div>
        <div class="sub_tab_area flex gap-[30px]">
            <div
                v-for="tab in filteredTabs"
                :key="tab.key"
                class="sub_tab cursor-pointer py-[10px] text-[20px] border-b"
                :class="{
                'text-white border-white': activeTab === tab.key,
                'text-[#FFFFFF99] border-transparent': activeTab !== tab.key
                }"
                @click="selectTab(tab.key)"
            >
                {{ tab.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from 'vue'

const props = defineProps<{
    modelValue: string
    category: 'about' | 'info'
}>()

const emit = defineEmits(['update:modelValue'])

const allTabs = {
    about: [
        { key: 'company', label: 'Company' },
        { key: 'service', label: 'Service' },
        { key: 'korea', label: 'Why Korea' },
        { key: 'meditour', label: 'K-MediTour' },
    ],
    // 페이지 이름, 메뉴명 추가 및 변경 해야 됨
    info: [
        { key: 'info', label: 'Info' },
        { key: 'text', label: 'Text' },
        { key: 'login', label: 'Login' },
    ]
}

const filteredTabs = computed(() => allTabs[props.category] ?? [])

const activeTab = ref(props.modelValue)

watch(() => props.modelValue, (val) => {
    activeTab.value = val
})

const selectTab = (key: string) => {
    activeTab.value = key
    emit('update:modelValue', key)
}
</script>

<style scoped>
</style>
