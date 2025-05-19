<template>
    <div class="flex flex-wrap flex-col md:flex-row  justify-start items-center md:justify-center gap-[30px] md:gap-[16px]">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start w-[300px] md:w-[662px]">
            <div class="w-[300px] h-auto md:w-[662px] md:h-[288px]">
                <img :src="item.img" alt="img" class="w-full h-full object-cover"/>
            </div>
            <div class="flex justify-between items-end w-full mt-2">
                <div class="text-[20px] md:text-[30px] font-[600]">
                    {{ item.title }}
                </div>
                <div class="pt-2">
                    <CommonBtnViewMore />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
interface Item {
    img: string
    title: string
}

const props = defineProps<{
    list: Item[]
}>()
</script>