<template>
    <div>
        <h1>
            <NuxtLink to="/">
                <img :src="logo" class="w-[130px] h-auto min-w-[130px] md:w-[152px]">
            </NuxtLink>
        </h1>
    </div>
</template>

<script setup lang="ts">
import logo from "@/assets/icons/Logo.svg";

</script>

<style scoped></style>
