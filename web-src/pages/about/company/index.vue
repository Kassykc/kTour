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
        <div id="service">
            <div id="program" class="program w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                    Service
                </h2>
                <p class="description text-[40px] font-[700] mb-[34px]">
                    ✈️ K-MediTour Program
                </p>
                <p class="text-[24px] mb-[86px]">
                    K-MediTour Program is a fully integrated medical travel program designed to make both your treatment and travel in South Korea smooth, safe, and unforgettable.
                </p>
                <div class="tour_program w-full flex justify-center items-center mb-[46px]">
                    <img src="@/assets/images/sub/about/medi_tour.png" alt="Medi Tour" class="">
                </div>
                <div class="w-full max-w-[1128px] h-[166px] p-[40px] flex justify-center items-center text-white font-[600] text-[22px] bg-[#001181] mx-auto">
                    From initial consultation to post-treatment follow-up, Medi-City coordinates every detail—so you can focus on what matters most: your health, recovery, and memorable experiences in Korea.
                </div>
            </div>
            <div id="works" class="works w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                <p class="description text-[40px] font-[700] mb-[34px]">
                    🔄 How It Works
                </p>
                <p class="text-[24px] mb-[86px]">
                    Our streamlined process ensures a hassle-free experience from start to finish.
                </p>
                <table class="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            <th class="font-[700] text-[18px] bg-[#CCD7FB] border border-white h-[50px]">STEP</th>
                            <th class="font-[700] text-[18px] bg-[#DFE6FF] border border-white h-[50px]">Your Step (Client)</th>
                            <th class="font-[700] text-[18px] bg-[#E8F3FF] border border-white h-[50px]">Our Support (Medi-City)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#A5B2E0] font-[800] text-[18px] text-white"><span class="text-[26px]">Step 01</span><br/><span class="text-[18px] leading-[24px]">Request & Document Submission</span></td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#EDF1FF] text-[18px]">Please click the ‘Contact Us’ button to begin your consultation and submit the required documents as guided.</td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#F2F8FF] text-[18px]">Please click the ‘Contact Us’ button to begin your consultation and submit the required documents as guided.</td>
                        </tr>
                        <tr>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#8594CF] font-[800] text-[18px] text-white"><span class="text-[26px]">Step 02</span><br/><span class="text-[18px] leading-[24px]">Schedule & Cost Confirmation</span></td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#E4EAFF] text-[18px]">Review the suggested treatment and tour schedule, and confirm your availability.</td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#E8F4FF] text-[18px]">Provide a customized itinerary including treatment, accommodation, and tour options, along with a detailed cost estimate.</td>
                        </tr>
                        <tr>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#6779BC] font-[800] text-[18px] text-white"><span class="text-[26px]">Step 03</span><br/><span class="text-[18px] leading-[24px]">Make Payment & Pre-departure Preparation</span></td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#DBE3FF] text-[18px]">Complete the payment and get ready for departure.</td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#DBECFF] text-[18px]">Arrange visa, book flights and accommodation, and finalize all pre-departure preparations.</td>
                        </tr>
                        <tr>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#4A5FA5] font-[800] text-[18px] text-white"><span class="text-[26px]">Step 04</span><br/><span class="text-[18px] leading-[24px]">Travel & Receive Treatment</span></td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#D0DBFF] text-[18px]">Travel to Korea and receive medical treatment, enjoy the tour.</td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#CFE6FF] text-[18px]">Pick you up at the airport, escort to hospital, support interpretation and tour activities.</td>
                        </tr>
                        <tr>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#364C95] font-[800] text-[18px] text-white"><span class="text-[26px]">Step 05</span><br/><span class="text-[18px] leading-[24px]">Return & Aftercare Support</span></td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#BECDFF] text-[18px]">Return home and join follow-up care if needed.</td>
                            <td class="text-center py-[30px] px-[60px] border border-white bg-[#B8D8FF] text-[18px]">Arrange airport drop-off, coordinate rehab and check-up schedules.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedTab = ref('company')
</script>

<style scoped></style>
