<template>
    <div>
<<<<<<< HEAD
        <div class="banner_area w-full h-[435px] bg-[url('@/assets/images/sub/banner_bg.png')] bg-cover bg-center">
            <div
                class="title_area max-w-[1340px] w-full h-[435px] flex flex-col justify-center items-center my-0 mx-auto">
                <div class="title text-white font-[700] text-[80px] mt-[100px]">{{ t('menu.1.name') }}</div>
                <SubTab v-model="selectedTab" category="about" />
            </div>
        </div>
=======
        <Banner :title="bannerTitle" :bgImage="bannerBgImage" :category="category" :selectedTab="selectedTab" />
>>>>>>> 881ec4dc696f5e4603b4360e23b3abf16ea0c425

        <div class="content_area">
            <div id="company">
                <div class="company medicity w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                        {{ t('about.part1.title') }}
                    </h2>
                    <p class="description text-[40px] font-[700] mb-[86px]">
                        {{ t('about.part1.content1.title') }}
                    </p>
                    <div class="about_intro flex flex-wrap justify-center items-center mb-[100px]">
                        <img src="@/assets/images/sub/about/company01.png" alt="About Medi-City"
                            class="mix-blend-multiply">
                        <img src="@/assets/images/sub/about/company02.png" alt="Our Mission"
                            class="ml-[-38px] mix-blend-multiply">
                        <img src="@/assets/images/sub/about/company03.png" alt="What We Offer"
                            class="ml-[-38px] mix-blend-multiply">
                    </div>
                    <SubMoreBtn label="Medi-Tour Program" width="w-[348px]" bgColor="bg-[#001181]" url="/" />
                </div>

                <div id="location" class="bg-[#FAFAFA]">
                    <div class="location w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                        <p class="description text-[40px] font-[700] mb-[48px]">
                            {{ t('about.part1.content2.title') }}
                        </p>
                        <div class="map_area flex justify-center items-center gap-[50px]">
                            <div class="indonesia w-[644px]">
                                <div class="location_name font-[600] text-[30px]">
                                    {{ t('about.part1.content2.1.title') }}
                                </div>
                                <iframe class="my-[20px]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2801510474746!2d106.8076904757315!3d-6.226746060983552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1500e1e0f8f%3A0x22556f795030d081!2sProsperity%20Office%20Tower!5e0!3m2!1sen!2skr!4v1746686854088!5m2!1sen!2skr"
                                    width="640" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <p class="address font-[500] text-[20px]">
                                    {{ t('about.part1.content2.1.desc1') }}<br />
                                    {{ t('about.part1.content2.1.desc2') }}
                                </p>
                            </div>
                            <div class="korea w-[644px]">
                                <div class="location_name font-[600] text-[30px]">
                                    {{ t('about.part1.content2.2.title') }}</div>
                                <iframe class="my-[20px]"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.9720455737743!2d126.76596014993176!3d37.66424970668722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c855b9707d1d3%3A0x17347b2ae75e0217!2s43-55%20Mugunghwa-ro%2C%20Ilsandong-gu%2C%20Goyang-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1746687176074!5m2!1sen!2skr"
                                    width="640" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <p class="address font-[500] text-[20px]">
                                    {{ t('about.part1.content2.2.desc1') }}<br />
                                    {{ t('about.part1.content2.2.desc2') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="certification">
                    <div class="w-full max-w-[1340px] pt-[120px] my-0 mx-auto">
                        <p class="description text-[40px] font-[700] mb-[48px]">
                            {{ t('about.part1.content3.title') }}
                        </p>
                    </div>
                    <SubCertification />
                    <SubMoreBtn :label="t('about.part1.content3.btn')" width="w-[258px]" bgColor="bg-[#5C8F3F]"
                        url="/" />
                </div>
            </div>

            <div id="service">
                <div id="program" class="program w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                        {{ t('about.part2.title') }}
                    </h2>
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('about.part2.content1.title') }}
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        {{ t('about.part2.content1.desc1') }}
                    </p>
                    <div class="tour_program w-full flex justify-center items-center mb-[46px]">
                        <img src="@/assets/images/sub/about/medi_tour.png" alt="Medi Tour" class="">
                    </div>
                    <div
                        class="w-full max-w-[1128px] h-[166px] p-[40px] flex justify-center items-center text-white font-[600] text-[22px] bg-[#001181] mx-auto">
                        {{ t('about.part2.content1.desc2') }}
                    </div>
                </div>

                <div id="works" class="works w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('about.part2.content2.title') }}
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        {{ t('about.part2.content2.desc') }}
                    </p>
                    <table class="table-auto border-collapse w-full">
                        <thead>
                            <tr>
                                <th class="font-[700] text-[18px] bg-[#CCD7FB] h-[50px]">
                                    {{ t('about.part2.content2.grid.header.1') }}
                                </th>
                                <th class="font-[700] text-[18px] bg-[#DFE6FF] border border-white border-t-0 h-[50px]">
                                    {{ t('about.part2.content2.grid.header.2') }}
                                </th>
                                <th class="font-[700] text-[18px] bg-[#E8F3FF] border border-white border-t-0 h-[50px]">
                                    {{ t('about.part2.content2.grid.header.3') }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    class="text-center py-[30px] px-[60px] bg-[#A5B2E0] font-[800] text-[18px] text-white">
                                    <span class="text-[26px]">Step 01</span><br />
                                    <span class="text-[18px] leading-[24px]">
                                        {{ t('about.part2.content2.grid.step1.title') }}
                                    </span>
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#EDF1FF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step1.1') }}
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#F2F8FF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step1.2') }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="text-center py-[30px] px-[60px] bg-[#8594CF] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#A5B2E0] before:rotate-45">
                                    <span class="text-[26px]">Step 02</span><br /><span
                                        class="text-[18px] leading-[24px]">
                                        {{ t('about.part2.content2.grid.step2.title') }}
                                    </span>
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#E4EAFF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step2.1') }}
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#E8F4FF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step2.2') }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="text-center py-[30px] px-[60px] bg-[#6779BC] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#8594CF] before:rotate-45">
                                    <span class="text-[26px]">Step 03</span><br /><span
                                        class="text-[18px] leading-[24px]">
                                        {{ t('about.part2.content2.grid.step3.title') }}
                                    </span>
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#DBE3FF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step3.1') }}
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#DBECFF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step3.2') }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="text-center py-[30px] px-[60px] bg-[#4A5FA5] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#6779BC] before:rotate-45">
                                    <span class="text-[26px]">
                                        Step 04
                                    </span><br /><span class="text-[18px] leading-[24px]">{{
                                        t('about.part2.content2.grid.step4.title')
                                    }}</span>
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#D0DBFF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step4.1') }}</td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white bg-[#CFE6FF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step4.2') }}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    class="text-center py-[30px] px-[60px] bg-[#364C95] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#4A5FA5] before:rotate-45">
                                    <span class="text-[26px]">Step 05</span><br /><span
                                        class="text-[18px] leading-[24px]">{{ t('about.part2.content2.grid.step5.title')
                                        }}</span>
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white border-b-0 bg-[#BECDFF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step5.1') }}
                                </td>
                                <td
                                    class="text-center py-[30px] px-[60px] border border-white border-b-0 bg-[#B8D8FF] text-[18px]">
                                    {{ t('about.part2.content2.grid.step5.2') }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="overview" class="overview w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('about.part2.content3.title') }}
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        {{ t('about.part2.content3.desc1') }}<br />
                        {{ t('about.part2.content3.desc2') }}
                    </p>
                    <SubTreatment />
                    <SubMoreBtn :label="t('about.part2.content3.sub.btn')" width="w-[480px]" bgColor="bg-[#3145A9]"
                        url="/" />
                </div>

                <div id="tour_overview" class="tour_overview w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('about.part2.content4.title') }}
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        {{ t('about.part2.content4.desc1') }}<br />
                        {{ t('about.part2.content4.desc2') }}
                    </p>
                    <div class="flex justify-between items-center gap-[10px] mb-[42px]">
                        <div class="w-[49%] h-[370px] overflow-hidden">
                            <img src="@/assets/images/sub/about/tour_overview01.png" alt=""
                                class="w-full h-full object-cover">
                        </div>
                        <div class="w-[49%] h-[370px] overflow-hidden">
                            <img src="@/assets/images/sub/about/tour_overview02.png" alt=""
                                class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div
                        class="w-[1177px] h-[144px] text-[20px] leading-[32px] py-[40px] px-[70px] mx-auto mb-[40px] border border-[#919191]">
                        {{ t('about.part2.content4.desc3') }} <br />
                        {{ t('about.part2.content4.desc4') }}
                    </div>
                    <SubMoreBtn :label="t('about.part2.content4.btn')" width="w-[334px]" bgColor="bg-[#3145A9]"
                        url="/" />
                </div>
            </div>

            <div id="korea"
                class="bg-[url('@/assets/images/sub/about/korea_bg.png')] bg-no-repeat bg-contain bg-bottom">
                <div class="w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                        {{ t('about.part3.title') }}
                    </h2>
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('about.part3.subtitle') }}
                    </p>
                    <p class="text-[24px] mb-[236px]">
                        {{ t('about.part3.desc1') }}<br />
                        {{ t('about.part3.desc2') }}
                    </p>

                    <div id="ranking">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            {{ t('about.part3.content1.title') }}
                        </p>
                        <p class="text-[24px] mb-[86px]">
                            {{ t('about.part3.content1.desc1') }}<br />
                            {{ t('about.part3.content1.desc2') }}
                        </p>
                        <div class="table_area flex flex-col gap-[50px] mb-[180px]">
                            <h2 class="title font-[700] text-[25px] text-center">
                                {{ t('about.part3.content1.1') }}
                            </h2>
                            <div>
                                <img src="@/assets/images/sub/about/ranking_table.png" alt=""
                                    class="w-full h-full object-cover">
                            </div>
                            <p class="text-right text-[14px] mb-[250px]">
                                <i>{{ t('about.part3.content1.source') }}</i>
                            </p>
                        </div>
                    </div>

                    <div id="meditech">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            {{ t('about.part3.content2.title') }}
                        </p>
                        <p class="text-[24px] mb-[86px]">
                            {{ t('about.part3.content2.desc1') }}<br />
                            {{ t('about.part3.content2.desc2') }}
                        </p>
                        <div class="flex justify-between items-end mb-[60px]">
                            <div>
                                <img src="@/assets/images/sub/about/meditech01.png" alt=""
                                    class="w-full h-full object-cover">
                            </div>
                            <div>
                                <img src="@/assets/images/sub/about/meditech02.png" alt=""
                                    class="w-full h-full object-cover">
                            </div>
                            <div>
                                <img src="@/assets/images/sub/about/meditech03.png" alt=""
                                    class="w-full h-full object-cover">
                            </div>
                        </div>
                        <p class="text-right text-[14px] mb-[250px]">
                            <i>{{ t('about.part3.content2.source') }}</i>
                        </p>
                    </div>

                    <div id="tourism">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            {{ t('about.part3.content3.title') }}
                        </p>
                        <p class="text-[24px] mb-[86px]">
                            {{ t('about.part3.content3.desc1') }}<br />
                            {{ t('about.part3.content3.desc2') }}
                        </p>
                        <div class="flex flex-col justify-center items-center gap-[70px] mb-[60px]">
                            <div>
                                {{ t('about.part3.content3.1') }}
                            </div>
                            <div>
                                <img src="@/assets/images/sub/about/tourism.png" alt=""
                                    class="w-full h-full object-cover">
                            </div>
                        </div>
                        <p class="text-right text-[14px] mb-[100px]">
                            <i>{{ t('about.part3.content3.source') }}</i>
                        </p>
                    </div>

                    <div id="experiences">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            {{ t('about.part3.content4.title') }}
                        </p>
                        <p class="text-[24px] mb-[86px] pb-[100px] border-b border-[#808080]">
                            {{ t('about.part3.content4.desc1') }}<br />
                            {{ t('about.part3.content4.desc2') }}
                        </p>

                        <div class="k_drama px-[50px] border-b border-[#808080] mb-[100px]">
                            <p class="description text-[30px] font-[700] mb-[34px]">
                                {{ t('about.part3.content4.1.title') }}
                            </p>
                            <p class="text-[16px] mb-[52px] ">
                                {{ t('about.part3.content4.1.desc1') }}<br />
                                {{ t('about.part3.content4.1.desc2') }}
                            </p>
                            <div class="flex justify-between items-center mb-[106px]">
                                <div class="w-[602px] h-[372px]">
                                    <img src="@/assets/images/sub/about/tour_overview01.png" alt=""
                                        class="w-full h-full object-cover">
                                </div>
                                <div class="w-[602px] h-[372px]">
                                    <img src="@/assets/images/sub/about/kdrama02.png" alt=""
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>

                        <div class="k_pop px-[50px] border-b border-[#808080] mb-[100px]">
                            <p class="description text-[30px] font-[700] mb-[34px]">
                                {{ t('about.part3.content4.2.title') }}
                            </p>
                            <p class="text-[16px] mb-[52px] ">
                                {{ t('about.part3.content4.2.desc1') }}<br />
                                {{ t('about.part3.content4.2.desc2') }}
                            </p>
                            <div class="flex justify-between items-center mb-[106px]">
                                <div class="w-[602px] h-[372px]">
                                    <img src="@/assets/images/sub/about/kpop01.png" alt=""
                                        class="w-full h-full object-cover">
                                </div>
                                <div class="w-[602px] h-[372px]">
                                    <img src="@/assets/images/sub/about/tour_overview02.png" alt=""
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>

                        <div class="k_beauty px-[50px] mb-[178px]">
                            <p class="description text-[30px] font-[700] mb-[34px]">
                                {{ t('about.part3.content4.3.title') }}
                            </p>
                            <p class="text-[16px] mb-[52px] ">
                                {{ t('about.part3.content4.3.desc1') }}<br />
                                {{ t('about.part3.content4.3.desc2') }}
                            </p>
                            <div class="flex justify-between items-center mb-[106px]">
                                <div class="w-[602px] h-[372px]">
                                    <img src="@/assets/images/sub/about/kbeauty01.png" alt=""
                                        class="w-full h-full object-cover">
                                </div>
                                <div class="w-[602px] h-[372px]">
                                    <img src="@/assets/images/sub/about/kbeauty02.png" alt=""
                                        class="w-full h-full object-cover">
                                </div>
                            </div>
                        </div>

                        <div
                            class="font-[700] text-[56px] text-white text-center flex justify-center items-center mb-[40px]">
                            {{ t('about.part3.content4.banner.1') }}<br />
                            {{ t('about.part3.content4.banner.2') }}<br />
                            {{ t('about.part3.content4.banner.3') }}
                        </div>
                    </div>
                </div>
            </div>

            <div id="meditour" class="mt-[160px] mb-[60px]">
                <div class="w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <h2 class="area_name text-[65px] font-[700] mb-[200px]">
                        {{ t('about.part4.title1') }}<br />
                        {{ t('about.part4.title2') }}
                    </h2>
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        {{ t('about.part4.content1.title') }}
                    </p>
                    <p class="text-[24px] mb-[83px]">
                        {{ t('about.part4.content1.desc1') }}<br />
                        {{ t('about.part4.content1.desc2') }}
                    </p>
                    <div class="flex justify-center items-center gap-[8px]">
                        <div>
                            <img src="@/assets/images/sub/about/meditour01.png" alt="MediTour">
                        </div>
                        <div>
                            <img src="@/assets/images/main/section01/arrow.png" alt="화살표">
                        </div>
                        <div>
                            <img src="@/assets/images/sub/about/meditour02.png" alt="MediTour">
                        </div>
                        <div>
                            <img src="@/assets/images/main/section01/arrow.png" alt="화살표">
                        </div>
                        <div>
                            <img src="@/assets/images/sub/about/meditour03.png" alt="MediTour">
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

import about_bg from "@/assets/images/sub/about/banner_bg.png";

const bannerTitle = ref('About Us');
const bannerBgImage = ref(about_bg); // 배경 이미지 경로
const category = ref('about');
const selectedTab = ref('company');
</script>

<style scoped></style>
