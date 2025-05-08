<template>
    <div>
        <div class="banner_area w-full h-[435px] bg-[url('@/assets/images/sub/banner_bg.png')] bg-cover bg-center">
            <div class="title_area max-w-[1340px] w-full h-[435px] flex flex-col justify-center items-center my-0 mx-auto">
                <div class="title text-white font-[700] text-[80px] mt-[100px]">About Us</div>
                <SubTab v-model="selectedTab" category="about"/>
            </div>
        </div>
        <div class="content_area">
            <div id="company" class="company medicity w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                    MediCity
                </h2>
                <p class="description text-[40px] font-[700] mb-[86px]">
                    🌐 MediCity Co., Ltd. - A Global Integrated Medical Platform
                </p>
                <div class="about_intro flex flex-wrap justify-center items-center mb-[100px]">
                    <img src="@/assets/images/sub/about/company01.png" alt="About Medi-City" class="mix-blend-multiply">
                    <img src="@/assets/images/sub/about/company02.png" alt="Our Mission" class="ml-[-38px] mix-blend-multiply">
                    <img src="@/assets/images/sub/about/company03.png" alt="What We Offer" class="ml-[-38px] mix-blend-multiply">
                </div>
                <div class="program_btn w-[348px] h-[60px] bg-[#001181] flex justify-center items-center gap-[6px] text-white my-0 mx-auto cursor-pointer">
                    Medi-Tour Program <img src="@/assets/images/sub/about/program_btn.png" alt="화살표 이미지" class="">
                </div>
            </div>
            <div id="location" class="bg-[#FAFAFA]">
                <div class="location w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[48px]">
                        📍 Location
                    </p>
                    <div class="map_area flex justify-center items-center gap-[50px]">
                        <div class="indonesia w-[644px]">
                            <div class="location_name font-[600] text-[30px]">Indonesia Branch Office</div>
                            <iframe class="my-[20px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2801510474746!2d106.8076904757315!3d-6.226746060983552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1500e1e0f8f%3A0x22556f795030d081!2sProsperity%20Office%20Tower!5e0!3m2!1sen!2skr!4v1746686854088!5m2!1sen!2skr" width="640" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <p class="address font-[500] text-[20px]">
                                Prosperity Tower, Lt. 56, Jl. Jend. Sudirman No.Kav. 52-53,<br/>Jakarta Selatan 12190
                            </p>
                        </div>
                        <div class="korea w-[644px]">
                            <div class="location_name font-[600] text-[30px]">Korea Headquarters</div>
                            <iframe class="my-[20px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.9720455737743!2d126.76596014993176!3d37.66424970668722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c855b9707d1d3%3A0x17347b2ae75e0217!2s43-55%20Mugunghwa-ro%2C%20Ilsandong-gu%2C%20Goyang-si%2C%20Gyeonggi-do!5e0!3m2!1sen!2skr!4v1746687176074!5m2!1sen!2skr" width="640" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <p class="address font-[500] text-[20px]">
                                43-55 Mugunghwa-ro, Ilsandong-gu, Goyang-si,<br/>Gyeonggi-do, South Korea
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="certification">
                <div class="w-full max-w-[1340px] pt-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[48px]">
                        ✅ Certification Status
                    </p>
                </div>
                <SubCertification />
                <div class="program_btn w-[258px] h-[60px] bg-[#5C8F3F] flex justify-center items-center gap-[6px] text-white mt-0 mb-[120px] mx-auto cursor-pointer">
                    Contact Us <img src="@/assets/images/sub/about/program_btn.png" alt="화살표 이미지" class="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedTab = ref('company')
</script>

<style scoped></style>
