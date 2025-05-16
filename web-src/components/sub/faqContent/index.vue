<template>
    <div>
        <div class="faq_contents flex flex-col justify-start items-center gap-[62px]">
            <div 
                v-for="(faq, index) in faqs" 
                :key="index"
                class="faq_content w-full flex flex-col justify-center items-start py-[40px] px-[60px] rounded-[24px] shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
            >
                <div class="q w-full text-[#848484] pb-[28px] border-b border-[#949494] flex justify-start items-center">
                    <div class="tit font-[700] text-[28px] flex-0 w-[60px]">
                        Q.
                    </div>
                    <div class="cont font-[600] text-[22px] flex-1">
                        {{ faq.question }}
                    </div>
                </div>
                <div class="a w-full text-[#1F78FF] pt-[28px] flex justify-start items-center">
                    <div class="tit font-[700] text-[28px] flex-0 w-[60px]">
                        A.
                    </div>
                    <div class="cont font-[600] text-[22px] flex-1">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const faqs = [
    {
        question: "Is it more expensive to receive treatment through K-MediTour compared to booking directly with a hospital?",
        answer: "No, the cost remains the same even when you use K-MediTour."
    },
    {
        question: "Can I have a face-to-face consultation in Indonesia before going to Korea for treatment?",
        answer: "Yes, you can get an offline consultation at our Jakarta office in the KOSME (GBC) meeting room. Please note that this is not a medical consultation, but a guidance session to help you prepare for your treatment in Korea. To book your visit, please fill out the reservation form in the ‘Contact Us’ section."
    },
    {
        question: "Are there any special services available for VIPs or patients with critical conditions?",
        answer: "Yes, we offer customized VIP services including private jet arrangements and dedicated coordinators for airport transfers."
    },

];
</script>

<style lang="">

</style>
