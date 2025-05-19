<template>
    <div class="flex flex-wrap justify-start gap-x-[16px] gap-y-[110px] ml-[10px]">
        <div v-for="(item, index) in props.list" :key="index" class="treatment flex flex-col items-start w-[320px] cursor-pointer"
        @click="router.push(item.url)"
        >
            <div class="w-full h-[210px]">
                <img :src="item.img" alt="img" class="w-full h-full" />
            </div>
            <div class="img_title text-[20px] font-[500] pt-[20px]">
                {{ item.title }}
            </div>
            <!-- <div>
                <CommonBtnViewMore />
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

interface Item {
    img: string
    title: string
    url: string
}

const props = defineProps<{
    list: Item[]
}>()
</script>

<style lang="scss">
.treatment {
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        width: 100%;
        height: 210px;
        background-color: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 105px;
        left: 50%;
        width: 152px;
        height: 40px;
        background: url('@/assets/images/main/section03/view_more_w.png') no-repeat center center;
        background-size: contain;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 2;
    }

    &:hover::before,
    &:hover::after {
        opacity: 1;
    }

    &:hover {
        .img_title {
            color: #50BA6E;
        }
    }
}
</style>