<template>
    <div class="flex flex-col justify-center w-full">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start w-full">
            <div class="flex justify-between items-end w-full pt-6 pb-6 border-b border-black">
                <div class="text-[1.8rem] font-[600] pl-2">
                    {{ item.title }}
                </div>
                <div class="pt-2 pr-2">
                    <CommonBtnViewMore />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
interface Item {
    title: string
}

const props = defineProps<{
    list: Item[]
}>()
</script>