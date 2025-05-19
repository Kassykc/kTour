<template>
    <div class="search_list_tab w-full max-w-[1340px] mx-auto ">
        <div class="tab_area w-full flex border-b border-[#afafaf]">
            <div v-for="(tab, index) in tabs" :key="index"
                class="tab w-full text-[20px] font-[700] text-center py-[22px] cursor-pointer"
                :class="index === selectedIndex ? 'text-[#1F78FF] border-b-[2px] border-[#1F78FF]' : 'text-[#afafaf]'"
                @click="selectTab(index)">
                {{ tab.codeValue }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedIndex = ref(0); // 선택된 탭 인덱스

const props = defineProps<{
    depth2List: {
        codeValue: string;
        codeKey: number;
    }[]
}>();

const tabs = computed(() => props.depth2List ?? []);

// 탭 클릭 시 선택된 인덱스 업데이트
const selectTab = (index: number) => {
    selectedIndex.value = index;
};
</script>

<style lang="">
</style>
