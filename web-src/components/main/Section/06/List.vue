<template>
    <div class="flex flex-col justify-center w-full px-[20px] xl:px-0">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start w-full">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full py-[20px] lg:py-[30px] border-b border-black">
                <div class="text-[20px] lg:text-[26px] font-[400] pl-2 w-full sm:w-[400px] lg:w-fit h-[60px] sm:h-auto line-clamp-2">
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