<template>
    <div>
        <div class="banner_area w-full h-[435px] bg-[url('@/assets/images/sub/banner_bg.png')] bg-cover bg-center">
            <div class="title_area max-w-[1340px] w-full h-[435px] flex flex-col justify-center items-center my-0 mx-auto">
                <div class="title text-white font-[700] text-[80px] mt-[100px]">About Us</div>
                <SubTab v-model="selectedTab" category="about"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedTab = ref('company')
</script>

<style scoped></style>
