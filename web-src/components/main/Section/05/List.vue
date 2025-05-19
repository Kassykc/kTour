<template>
    <div class="flex flex-col justify-center w-full px-[20px] xl:px-0">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start w-full">
            <div class="flex justify-between items-center w-full py-[20px] lg:py-[30px] border-b border-black">
                <div class="text-[20px] lg:text-[26px] font-[400] pl-2 w-[250px] sm:w-[400px] lg:w-fit truncate">
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