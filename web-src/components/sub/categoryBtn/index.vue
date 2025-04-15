<template>
    <div>
        <div class="category_wrap flex gap-[14px]">
            <div 
                class="category min-w-[40px] md:min-w-[75px] px-[10px] md:px-[20px] py-[8px] md:py-[14px] text-[13px] md:text-[20px] text-center rounded-[18px] md:rounded-[30px] cursor-pointer" 
                :class="index === selectedIndex ? 'bg-[#E61673] text-white font-[700] ' : 'bg-[#F4F4F4] text-[#C7C7C7] font-[400] '"
                v-for="(category, index) in categories" :key="index"
                @click="movePage(category.link)"
            >
                <div>{{ category.category_name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const selectedIndex = ref(0);

const movePage = (page:string, index: number) => {
    selectedIndex.value = index
    router.push(page);
};


const categories = ref([
    {
        category_name: 'ALL',
        link: '/'
    },
    {
        category_name: 'IT',
        link: '/'

    },
    {
        category_name: 'DESIGN',
        link: '/'

    },
    {
        category_name: 'MICE',
        link: '/'

    },
])
</script>

<style scoped>

</style>
