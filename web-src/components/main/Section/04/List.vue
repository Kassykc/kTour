<template>
    <div class="flex flex-wrap justify-center gap-[16px]">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start w-[662px]">
            <div>
                <img :src="item.img" alt="img" />
            </div>
            <div class="flex justify-between items-end w-full mt-2">
                <div class="text-[1.8rem] font-[600]">
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