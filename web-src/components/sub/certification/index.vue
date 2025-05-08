<template>
    <div>
        <div class="certification_area w-full max-w-[1340px] my-0 mx-auto pb-[100px] flex justify-start items-center flex-wrap gap-x-[8px] gap-y-[38px]">
            <div
                v-for="(item, index) in certifications"
                :key="index"
                class="w-[216px] flex flex-col gap-[8px]"
            >
                <img :src="item.image" alt="certification" />
                <div class="w-full h-[66px] bg-[#EAE8DD] flex justify-center items-center font-[500] text-[14px] text-center">
                    {{ item.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import certification01 from "@/assets/images/sub/about/certification01.png";
import certification02 from "@/assets/images/sub/about/certification02.png";
import certification03 from "@/assets/images/sub/about/certification03.png";
import certification04 from "@/assets/images/sub/about/certification04.png";
import certification05 from "@/assets/images/sub/about/certification05.png";
import certification06 from "@/assets/images/sub/about/certification06.png";
import certification07 from "@/assets/images/sub/about/certification07.png";
import certification08 from "@/assets/images/sub/about/certification08.png";
import certification09 from "@/assets/images/sub/about/certification09.png";
import certification10 from "@/assets/images/sub/about/certification10.png";
import certification11 from "@/assets/images/sub/about/certification11.png";
import certification12 from "@/assets/images/sub/about/certification12.png";

const certifications  = [
    {
        image: certification01,
        text: 'MediCity Co., Ltd. Business Registration Certificate',
    },
    {
        image: certification02,
        text: 'MediCity Co., Ltd. Business Registration Certificate',
    },
    {
        image: certification03,
        text: 'Establishment of Corporation in Indonesia',
    },
    {
        image: certification04,
        text: 'Trademark Registration Application',
    },
    {
        image: certification05,
        text: 'Patent Application',
    },
    {
        image: certification06,
        text: 'Patent Application',
    },
    {
        image: certification07,
        text: 'Tourism Business Registration Certificate',
    },
    {
        image: certification08,
        text: 'Foreign Patient Invitation Business Registration Certificate',
    },
    {
        image: certification09,
        text: 'Small and Medium-Sized Enterprise Certification',
    },
    {
        image: certification10,
        text: 'International Patent Application (PCT)',
    },
    {
        image: certification11,
        text: 'Trademark Registration in Indonesia',
    },
    {
        image: certification12,
        text: 'ARSPTN Sponsor Certification',
    },
]
</script>

<style scoped>

</style>
