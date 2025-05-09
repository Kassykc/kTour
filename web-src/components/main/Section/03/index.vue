<template>
    <div class="flex flex-col py-[120px] items-center ">
        <div class="flex flex-col items-start w-[100vw] max-w-[1340px] pb-12 pl-6">
            <!-- <div class="text-[500] text-[1.65rem] pb-[1rem]">
                메디씨티는 이런 서비스를 제공합니다.
            </div> -->
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

        <div class="max-w-[1328px] pt-[6rem] pb-12 ">
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
import img10 from '@/assets/images/main/section03/img10.png';

const list = [
    {
        img: img1,
        title: 'Health Check-up',
        url: '/'
    },
    {
        img: img2,
        title: 'Stem Cell Therapy',
        url: '/'
    },
    {
        img: img3,
        title: 'Internal Medicine',
        url: '/'
    },
    {
        img: img4,
        title: 'Obstetrics & Gynecology',
        url: '/'
    },
    {
        img: img5,
        title: 'Ophthalmology',
        url: '/'
    },
    {
        img: img6,
        title: 'Dentistry',
        url: '/'
    },
    {
        img: img7,
        title: 'Oncology',
        url: '/'
    },
    {
        img: img8,
        title: 'Oriental Medicine & Alternative Therapies',
        url: '/'
    },
    {
        img: img9,
        title: 'Plastic Surgery',
        url: '/'
    },
    {
        img: img10,
        title: 'Varicose Veins Clinic',
        url: '/'
    }
]

</script>

<style scoped></style>