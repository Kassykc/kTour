<template>
    <div>
        <div class="banner_area w-full h-[435px] bg-[url('@/assets/images/sub/banner_bg.png')] bg-cover bg-center">
            <div class="title_area max-w-[1340px] w-full h-[435px] flex flex-col justify-center items-center my-0 mx-auto">
                <div class="title text-white font-[700] text-[80px] mt-[100px]">About Us</div>
                <SubTab v-model="selectedTab" category="about"/>
            </div>
        </div>

        <div class="content_area">
            <div id="company" >
                <div class="company medicity w-full max-w-[1340px] py-[120px] my-0 mx-auto">
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
                    <SubMoreBtn label="Medi-Tour Program" width="w-[348px]" bgColor="bg-[#001181]" url="/" />
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
                    <SubMoreBtn label="Contact Us" width="w-[258px]" bgColor="bg-[#5C8F3F]" url="/" />
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
                                <th class="font-[700] text-[18px] bg-[#CCD7FB] h-[50px]">STEP</th>
                                <th class="font-[700] text-[18px] bg-[#DFE6FF] border border-white border-t-0 h-[50px]">Your Step (Client)</th>
                                <th class="font-[700] text-[18px] bg-[#E8F3FF] border border-white border-t-0 h-[50px]">Our Support (Medi-City)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center py-[30px] px-[60px] bg-[#A5B2E0] font-[800] text-[18px] text-white"><span class="text-[26px]">Step 01</span><br/><span class="text-[18px] leading-[24px]">Request & Document Submission</span></td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#EDF1FF] text-[18px]">Please click the ‘Contact Us’ button to begin your consultation and submit the required documents as guided.</td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#F2F8FF] text-[18px]">Please click the ‘Contact Us’ button to begin your consultation and submit the required documents as guided.</td>
                            </tr>
                            <tr>
                                <td class="text-center py-[30px] px-[60px] bg-[#8594CF] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#A5B2E0] before:rotate-45"><span class="text-[26px]">Step 02</span><br/><span class="text-[18px] leading-[24px]">Schedule & Cost Confirmation</span></td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#E4EAFF] text-[18px]">Review the suggested treatment and tour schedule, and confirm your availability.</td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#E8F4FF] text-[18px]">Provide a customized itinerary including treatment, accommodation, and tour options, along with a detailed cost estimate.</td>
                            </tr>
                            <tr>
                                <td class="text-center py-[30px] px-[60px] bg-[#6779BC] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#8594CF] before:rotate-45"><span class="text-[26px]">Step 03</span><br/><span class="text-[18px] leading-[24px]">Make Payment & Pre-departure Preparation</span></td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#DBE3FF] text-[18px]">Complete the payment and get ready for departure.</td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#DBECFF] text-[18px]">Arrange visa, book flights and accommodation, and finalize all pre-departure preparations.</td>
                            </tr>
                            <tr>
                                <td class="text-center py-[30px] px-[60px] bg-[#4A5FA5] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#6779BC] before:rotate-45"><span class="text-[26px]">Step 04</span><br/><span class="text-[18px] leading-[24px]">Travel & Receive Treatment</span></td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#D0DBFF] text-[18px]">Travel to Korea and receive medical treatment, enjoy the tour.</td>
                                <td class="text-center py-[30px] px-[60px] border border-white bg-[#CFE6FF] text-[18px]">Pick you up at the airport, escort to hospital, support interpretation and tour activities.</td>
                            </tr>
                            <tr>
                                <td class="text-center py-[30px] px-[60px] bg-[#364C95] font-[800] text-[18px] text-white relative before:content-[''] before:absolute before:top-[-10px] before:left-1/2 before:w-[20px] before:h-[20px] before:bg-[#4A5FA5] before:rotate-45"><span class="text-[26px]">Step 05</span><br/><span class="text-[18px] leading-[24px]">Return & Aftercare Support</span></td>
                                <td class="text-center py-[30px] px-[60px] border border-white border-b-0 bg-[#BECDFF] text-[18px]">Return home and join follow-up care if needed.</td>
                                <td class="text-center py-[30px] px-[60px] border border-white border-b-0 bg-[#B8D8FF] text-[18px]">Arrange airport drop-off, coordinate rehab and check-up schedules.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div id="overview" class="overview w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        🩺 Medical Treatment Program Overview
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        We offer a wide range of medical specialties through our partnered hospitals,<br/>
                        ensuring personalized care tailored to each patient’s needs.
                    </p>
                    <SubTreatment />
                    <SubMoreBtn label="Explore Medical Treatment Program" width="w-[480px]" bgColor="bg-[#3145A9]" url="/" />
                </div>

                <div id="tour_overview" class="tour_overview w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        🏞️ Tour(Seoul Tour, Gangwon Tour) Overview
                    </p>
                    <p class="text-[24px] mb-[86px]">
                        More than just treatment—immerse yourself in the charm of Korea with Drako,<br/>
                        by visiting the most iconic K-drama and K-pop landmarks.
                    </p>
                    <div class="flex justify-between items-center gap-[10px] mb-[42px]">
                        <div class="w-[49%] h-[370px] overflow-hidden">
                            <img src="@/assets/images/sub/about/tour_overview01.png" alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[49%] h-[370px] overflow-hidden">
                            <img src="@/assets/images/sub/about/tour_overview02.png" alt="" class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="w-[1177px] h-[144px] text-[20px] leading-[32px] py-[40px] px-[70px] mx-auto mb-[40px] border border-[#919191]">
                        - K-drama filming locations: “Business Proposal”, “Our Beloved Summer”, “Guardian: The Lonely and Great God” <br/>
                        - K-pop spots: BLACKPINK & BTS MV locations, idol-favorite hot places
                    </div>
                    <SubMoreBtn label="Explore K-MediTour" width="w-[334px]" bgColor="bg-[#3145A9]" url="/" />
                </div>
            </div>

            <div id="korea" class="bg-[url('@/assets/images/sub/about/korea_bg.png')] bg-no-repeat bg-contain bg-bottom">
                <div class="w-full max-w-[1340px] py-[120px] my-0 mx-auto">
                    <h2 class="area_name text-[65px] font-[700] mb-[120px]">
                        Why Korea?
                    </h2>
                    <p class="description text-[40px] font-[700] mb-[34px]">
                        World-Class Medical Excellence
                    </p>
                    <p class="text-[24px] mb-[236px]">
                        South Korea is globally recognized for its world-class healthcare system,<br/>
                        advanced medical technology, and increasing trust from international patients.
                    </p>

                    <div id="ranking">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            🏆 World-Class Healthcare, Globally Recognized
                        </p>
                        <p class="text-[24px] mb-[86px]">
                            Korea has been ranked as the country with the second best healthcare system in the world.<br/>
                            This index ranks 110 countries based on various factors contributing to overall health.
                        </p>
                        <div class="table_area flex flex-col gap-[50px] mb-[180px]">
                            <h2 class="title font-[700] text-[25px] text-center">
                                Countries With The Best Health Care Systems, 2024
                            </h2>
                            <div>
                                <img src="@/assets/images/sub/about/ranking_table.png" alt="" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>

                    <div id="meditech">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            🖥️ Leading in Early Diagnosis & Medical Tech
                        </p>
                        <p class="text-[24px] mb-[86px]">
                            Korea leads globally in the availability of mammographs and maintains above-OECD-average access to CT scanners<br/>
                            and MRI units, underscoring its strength in early diagnosis and advanced medical infrastructure.
                        </p>
                        <div class="flex justify-between items-end mb-[60px]">
                            <div>
                                <img src="@/assets/images/sub/about/meditech01.png" alt="" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <img src="@/assets/images/sub/about/meditech02.png" alt="" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <img src="@/assets/images/sub/about/meditech03.png" alt="" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <p class="text-right text-[14px] mb-[250px]">
                            <i>Source: OECD Health Statistics 2024; WHO Global atlas of medical devices 2022.</i>
                        </p>
                    </div>
                    
                    <div id="tourism">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            🧳 Asia’s Rising Star in Medical Tourism
                        </p>
                        <p class="text-[24px] mb-[86px]">
                            The number of foreign patients in Korea surged to 1.17 million in 2024, marking a 93.2% increase from the previous year<br/>
                            and solidifying the country's status as a leading medical tourism hub in Asia.
                        </p>
                        <div class="flex flex-col justify-center items-center gap-[70px] mb-[60px]">
                            <div>
                                Number of Foreign Patients Visiting South Korea (2021-2024)
                            </div>
                            <div>
                                <img src="@/assets/images/sub/about/tourism.png" alt="" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <p class="text-right text-[14px] mb-[100px]">
                            <i>Source: Ministry of Health and Welfare, Republic of Korea</i>
                        </p>
                    </div>

                    <div id="experiences">
                        <p class="description text-[40px] font-[700] mb-[34px]">
                            🗺️ Unique Travel Experiences
                        </p>
                        <p class="text-[24px] mb-[86px] pb-[100px] border-b border-[#808080]">
                            Beyond treatment, Korea offers unforgettable cultural and travel experiences<br/>
                            —blending the vibrant charm of Seoul and the natural beauty of Gangwon into a healing experience like no other.
                        </p>

                        <div class="k_drama px-[50px] border-b border-[#808080] mb-[100px]">
                                <p class="description text-[30px] font-[700] mb-[34px]">
                                    🎬 Be the Star of Your Own K-Drama 
                                </p>
                                <p class="text-[16px] mb-[52px] ">
                                    From the romantic views of Namsan Tower to the peaceful scenery of Gangwon’s beaches, walk through the iconic filming locations of your favorite K-dramas.<br/>
                                    Imagine recovering while enjoying the same sights you've seen on screen.
                                </p>
                                <div class="flex justify-between items-center mb-[106px]">
                                    <div class="w-[602px] h-[372px]">
                                        <img src="@/assets/images/sub/about/tour_overview01.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                    <div class="w-[602px] h-[372px]">
                                        <img src="@/assets/images/sub/about/kdrama02.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                </div>
                        </div>

                        <div class="k_pop px-[50px] border-b border-[#808080] mb-[100px]">
                                <p class="description text-[30px] font-[700] mb-[34px]">
                                    🎤 K-Pop & K-Lifestyle Experiences
                                </p>
                                <p class="text-[16px] mb-[52px] ">
                                    Explore the heart of K-pop culture—visit entertainment agencies and the hotspots your favorite idols have visited.<br/> 
                                    Feel closer to the stars you love while getting the care you need.
                                </p>
                                <div class="flex justify-between items-center mb-[106px]">
                                    <div class="w-[602px] h-[372px]">
                                        <img src="@/assets/images/sub/about/kpop01.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                    <div class="w-[602px] h-[372px]">
                                        <img src="@/assets/images/sub/about/tour_overview02.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                </div>
                        </div>

                        <div class="k_beauty px-[50px] mb-[178px]">
                                <p class="description text-[30px] font-[700] mb-[34px]">
                                    💄 K-Beauty & Wellness 
                                </p>
                                <p class="text-[16px] mb-[52px] ">
                                    Korea is also the birthplace of the world-renowned K-beauty trend.<br/>
                                    Enjoy personalized skincare consultations, aesthetic treatments, and wellness retreats that blend modern science with traditional Korean techniques.
                                </p>
                                <div class="flex justify-between items-center mb-[106px]">
                                    <div class="w-[602px] h-[372px]">
                                        <img src="@/assets/images/sub/about/kbeauty01.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                    <div class="w-[602px] h-[372px]">
                                        <img src="@/assets/images/sub/about/kbeauty02.png" alt="" class="w-full h-full object-cover">
                                    </div>
                                </div>
                        </div>

                        <div class="font-[700] text-[56px] text-white text-center flex justify-center items-center mb-[40px]">
                            K-MediTour brings you<br/>
                            Healing Korea—where body<br/>
                            and mind find peace.
                        </div>
                    </div>
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
