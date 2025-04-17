<template>
    <div class="flex flex-wrap justify-center gap-6">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start">
            <div>
                <img :src="item.img" alt="img" />
            </div>
            <div class="text-[1.8rem] font-[600] pt-2 pb-2">
                {{ item.title }}
            </div>
            <div>
                <CommonBtnViewMore />
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