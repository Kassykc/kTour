<template>
    <div class="flex flex-col justify-center items-center bg-[#FAFAFA] py-[120px]">
        <div class="flex flex-col justify-center items-center max-w-[1340px]">
            <div class="font-[700] text-[#000] text-[4.5rem] pb-[1rem]">
                Why Korea?
            </div>
            <div class="font-[500] text-[1.5rem] mb-[42px] max-h-[1.5rem]">
                Where Medical Excellence Meets K-Culture
            </div>
            <div class="mb-[100px]">
                <CommonBtnViewMore />
            </div>
            <div class="chart_area w-full max-w-[1340px] flex justify-between items-start mb-[126px]">
                <div class="rank w-[632px] h-[780px] flex flex-col justify-between items-center">
                    <div class="flex flex-col justify-center items-start w-full">
                        <h1 class="title font-[700] text-[26px] mb-[20px]">
                            🏆 World-Class Healthcare, Globally Recognized
                        </h1>
                        <p class="font-[700] text-[20px] mb-[10px]">
                            Countries With The Best Health Care Systems, 2024
                        </p>
                    </div>
                    <div>
                        <img src="@/assets/images/main/section02/rank.png" alt="rank" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="tourism w-[632px] h-[780px] flex flex-col justify-between items-center">
                    <div class="flex flex-col justify-center items-start w-full">
                        <h1 class="title font-[700] text-[26px] mb-[20px]">
                            🧳 Asia’s Rising Star in Medical Tourism
                        </h1>
                        <p class="font-[700] text-[20px] mb-[10px]">
                            Number of Foreign Patients Visiting South Korea (2021–2024)
                        </p>
                    </div>
                    <div>
                        <img src="@/assets/images/main/section02/tourism.png" alt="rank" class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
            <div class="font-[400] text-[1.5rem]">
                <h1 class="font-[700] text-[26px] mb-[45px]">
                    🗺️ Unique Travel Experiences
                </h1>
                <MainSection02List />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>