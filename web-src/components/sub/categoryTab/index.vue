<template>
    <div>
        <div class="category_wrap flex justify-center items-center flex-wrap gap-[14px]">
            <div 
                class="category min-w-[40px] md:min-w-[75px] px-[10px] md:px-[30px] py-[8px] md:py-[14px] text-[13px] md:text-[18px] text-center rounded-[18px] md:rounded-[30px] cursor-pointer font-[700] border border-[#AFAFAF]" 
                :class="index === selectedIndex ? 'bg-[#1F78FF] text-white' : 'bg-white text-[#AFAFAF]'"
                v-for="(category, index) in categories" :key="index"
                @click="selectCategory(index, category.category_name)"
                >
                <div>{{ category.category_name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
import { defineEmits, ref } from 'vue';

// const router = useRouter();
const emit = defineEmits(); // 부모에게 전달할 이벤트 정의
const selectedIndex = ref(0);


// 카테고리 클릭 시 해당 인덱스를 selectedIndex에 할당
const selectCategory = (index: number, categoryName: string) => {
    console.log("Category Selected:", categoryName); // 카테고리 이름 확인
    selectedIndex.value = index;
    emit('update:selectedCategory', categoryName); // 카테고리 이름을 부모에게 전달
    console.log("Emitted category:", categoryName); // emit 후에 호출되는지 확인
};

const categories = ref([
    {
        category_name: t('mts.tab.1'),
    },
    {
        category_name: t('mts.tab.2'),
    },
    {
        category_name: t('mts.tab.3'),
    },
    {
        category_name: t('mts.tab.4'),
    },
    {
        category_name: t('mts.tab.5'),
    },
    {
        category_name: t('mts.tab.6'),
    },
    {
        category_name: t('mts.tab.7'),
    },
    {
        category_name: t('mts.tab.8'),
    },
    {
        category_name: t('mts.tab.9'),
    },
    {
        category_name: t('mts.tab.10'),
    },
    {
        category_name: t('mts.tab.other'),
    },

])
</script>

<style scoped>

</style>
