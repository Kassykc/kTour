<template>
    <div>
        <div class="more_btnd border border-[#E61673] text-[#E61673] bg-whtie hover:border-white hover:text-white hover:bg-[#E61673] font-[600] text-[16px] xl:text-[25px] px-[20px] py-[10px] xl:px-[60px] xl:py-[20px] mb-[60px] xl:mb-[100px] cursor-pointer"
            @click="movePage('/')"
        >
            VIEW MORE
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();


const movePage = (page:string) => {

    router.push(page);
};


</script>

<style scoped>

</style>
