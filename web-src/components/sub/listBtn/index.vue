<template>
    <div>
        <div 
            class="go_list flex justify-center items-center gap-[12px] w-[246px] h-[60px] py-[16px] border border-[#1F78FF] text-[#1F78FF] bg-white hover:border-white hover:text-white hover:bg-[#1F78FF] mx-auto text-[18px] font-[600] cursor-pointer"
            @mouseover="isHovered = true" 
            @mouseleave="isHovered = false"
        >
            <img :src="isHovered ? list_w : list_b" alt="" />
            List
        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'
import { ref } from 'vue'

import list_b from '@/assets/images/sub/mtc/list_b.png'
import list_w from '@/assets/images/sub/mtc/list_w.png'

const router = useRouter();

const movePage = (page: string) => {

    router.push(page);
};

const isHovered = ref(false);

</script>
<style lang="">
    
</style>