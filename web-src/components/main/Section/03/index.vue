<template>
    <div class="flex flex-col pt-[10rem] items-center h-[100%] max-h-[2400px]">
        <div class="flex flex-col items-start w-[100vw] max-w-[1400px] pb-12 pl-6">
            <div class="text-[500] text-[1.65rem] pb-[1rem]">
                메디씨티는 이런 서비스를 제공합니다.
            </div>
            <div class="pb-[2rem]">
                <MainSectionLinkTitle :title="'Medical Treatment Sevice'" :color="'#5C8F3F'" :link="true" />
            </div>
            <div class="font-[400] text-[1.5rem] text-[#717171]">
                We offer a wide range of medical specialties through our partnered hospitals,
            </div>
            <div class="font-[400] text-[1.5rem] text-[#717171]">
                ensuring personalized care tailored to each patient’s needs.
            </div>
        </div>

        <div class="max-w-[1400px] pt-[6rem] pb-12 border-t border-black">
            <MainSection03List :list="list" />
        </div>

    </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/images/main/section03/img1.png';
import img2 from '@/assets/images/main/section03/img2.png';
import img3 from '@/assets/images/main/section03/img3.png';
import img4 from '@/assets/images/main/section03/img4.png';
import img5 from '@/assets/images/main/section03/img5.png';
import img6 from '@/assets/images/main/section03/img6.png';
import img7 from '@/assets/images/main/section03/img7.png';
import img8 from '@/assets/images/main/section03/img8.png';
import img9 from '@/assets/images/main/section03/img9.png';

const list = [
    {
        img: img1,
        title: 'Health Check-up'
    },
    {
        img: img2,
        title: 'Intensive Care Treatment'
    },
    {
        img: img3,
        title: 'Obstetrics & Gynecology'
    },
    {
        img: img4,
        title: 'Ophthalmology'
    },
    {
        img: img5,
        title: 'Dentistry'
    },
    {
        img: img6,
        title: 'Arthritis (관절염)'
    },
    {
        img: img7,
        title: 'Hair Transplant'
    },
    {
        img: img8,
        title: 'Plastic Surgery'
    },
    {
        img: img9,
        title: 'Dermatology & Aesthetic Care'
    }
]

</script>

<style scoped></style>