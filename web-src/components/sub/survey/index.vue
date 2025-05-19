<template>
    <div>
        <div class="content_area">
            <div id="consultation" class="w-full max-w-[1340px] my-0 mx-auto">
                <div class="main_tit text-[65px] font-[700] pt-[160px] text-center mb-[50px]">
                    {{ t('consultation.title') }}
                </div>
                <div class="sub_title text-[20px] text-center mb-[50px]">
                    {{ t('consultation.subtitle') }}
                </div>

                <div class="input_area w-full max-w-[1340px] mb-[80px] mx-auto">
                    <div class="essential text-right text-[16px] font-[500] mb-[16px]">
                        <span class="text-[#ff0000]">√</span> Full Name
                    </div>
                    
                    <div class="basic_info">
                        <div class="tit text-[25px] font-[700] w-full py-[30px] px-[50px] bg-[#F9F9F9] border-t border-b  border-[#c8c8c8]">
                            Basic Information
                        </div>
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b  border-[#c8c8c8]">
                            <div class="flex justify-start items-center">
                                <div class="name w-[200px] flex-0">
                                    <span class="text-[#ff0000]">√</span> Full Name
                                </div>
                                <div class="fill flex-1">
                                    <input type="text" class="w-full max-w-[500px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                </div>
                            </div>
                        </div>
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b  border-[#c8c8c8]">
                            <div class="flex justify-start items-center">
                                <div class="name w-[200px] flex-0">
                                    <span class="text-[#ff0000]">√</span> Phone Number
                                </div>
                                <div class="fill flex-1">
                                    <input type="text" class="w-full max-w-[500px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                </div>
                            </div>
                        </div>
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b  border-[#c8c8c8]">
                            <div class="flex justify-start items-center">
                                <div class="name w-[200px] flex-0">
                                    <span class="text-[#ff0000]">√</span> Email Address
                                </div>
                                <div class="fill flex-1">
                                    <input type="text" class="w-full max-w-[500px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                </div>
                            </div>
                        </div>
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b  border-[#c8c8c8]">
                            <div class="flex justify-start items-center">
                                <div class="name w-[200px] flex-0">
                                    <span class="text-[#ff0000]">√</span> Address
                                </div>
                                <div class="fill flex-1">
                                    <input type="text" class="w-full max-w-[984px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="services">
                            <div class="tit text-[25px] font-[700] w-full py-[30px] px-[50px] bg-[#F9F9F9] border-b  border-[#c8c8c8]">
                                Medical Services
                            </div>
    
                            <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#c8c8c8]">
                                <div class="mb-[30px]">
                                    <span class="text-[#ff0000]">√</span> What type of medical service are you interested in?
                                </div>
    
                                <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="1" checked/>
                                        Health Check-up
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="2"/>
                                        Stem Cell Therapy
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="3"/>
                                        Internal Medicine
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="4"/>
                                        Obstetrics & Gynecology
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="5"/>
                                        Ophthalmology
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="6"/>
                                        Dentistry
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="7"/>
                                        Oncology
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="8"/>
                                        Oriental Medicine & Alternative Therapies
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="9"/>
                                        Plastic Surgery
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="10"/>
                                        Varicose Veins Clinic
                                    </label>
                                    <label class="cursor-pointer">
                                        <input type="checkbox" name="service" value="11"/>
                                        Others - Please Specify
                                    </label>
                                </div>
                            </div>
    
                            <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                                <div class="mb-[30px]">
                                    <span class="text-[#ff0000]">√</span> What medical concerns or symptoms would you like to discuss? (Please describe your condition in detail)
                                </div>
                                <textarea class="w-full h-[150px] p-[10px] border border-[#C8C8C8] rounded-[5px] resize-none font-[400] text-[16px]"></textarea>
                            </div>
                            <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                                <div class="mb-[30px]">
                                    Which medical institution on our website would you prefer for your treatment?
                                </div>
                                <input type="text" class="w-full h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                            </div>
    
    
                            <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                                <div class="mb-[30px]">
                                    <span class="text-[#ff0000]">√</span> Have you been diagnosed with any medical condition(s)?
                                </div>
    
                                <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                    <label class="cursor-pointer">
                                        <input type="radio" name="condition" value="1" checked class="font-[500]"/>
                                        Yes (If yes, please answer the following)
    
                                        <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                            <div class="font-[700]">
                                                <span class="text-[#ff0000]">√</span> Diagnosis
                                            </div>
                                            <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                        </div>
    
                                        <div class="pl-[40px] pb-[20px] flex flex-col justify-start items-start gap-[20px]">
                                            <div class="font-[700]">
                                                <span class="text-[#ff0000]">√</span> Do you have medical records related to your diagnosis?
                                            </div>
                                            <label class="cursor-pointer">
                                                <input type="radio" name="condition2" value="1" checkedclass="font-[500]" />
                                                Yes
                                            </label>
                                            <label class="cursor-pointer">
                                                <input type="radio" name="condition2" value="2" class="font-[500]" />
                                                No
                                            </label>
                                        </div>
    
                                        <div class="pl-[40px] pb-[20px] flex flex-col justify-start items-start gap-[20px]">
                                            <div class="font-[700]">
                                                Name of the hospital where the diagnosis was made
                                            </div>
                                            <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                        </div>
    
                                        <div class="pl-[40px] pb-[20px] flex flex-col justify-start items-start gap-[20px]">
                                            <div class="font-[700]">
                                                Name of the diagnosing doctor
                                            </div>
                                            <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                        </div>
                                
                                    </label>
    
                                    <label class="cursor-pointer">
                                        <input type="radio" name="condition" value="2" />
                                        No
                                    </label>
                                </div>
                            </div>
    
                            <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                                <div class="mb-[30px]">
                                    <span class="text-[#ff0000]">√</span> Do you have any additional health conditions or chronic diseases?
                                </div>
    
                                <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px] w-full">
                                    <label class="cursor-pointer w-full">
                                        <input type="radio" name="additional" value="1" checked class="font-[500]"/>
                                        Yes (If yes, please answer the following)
    
                                        <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                            <div class="font-[700]">
                                                Please specify
                                            </div>
                                            <input type="text" class="w-full h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                        </div>
                                    </label>
    
                                    <label class="cursor-pointer">
                                        <input type="radio" name="additional" value="2" />
                                        No
                                    </label>
                                </div>
                            </div>
    
                            
                    </div>
    
                    <div class="schedule">
                        <div class="tit text-[25px] font-[700] w-full py-[30px] px-[50px] bg-[#F9F9F9] border-b  border-[#c8c8c8]">
                            Schedule & Accompaniment
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> How long do you plan to stay in Korea for your treatment?
                            </div>
                            <div class="flex justify-start items-center gap-[20px]">
                                <input type="text" class="w-full max-w-[80px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                Days
                            </div>
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> Will you be accompanied by anyone
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                <label class="cursor-pointer">
                                    <input type="radio" name="schedule" value="1" checked class="font-[500]"/>
                                    Yes (If yes, please answer the following)
    
                                    <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Number of accompanying persons
                                        </div>
                                        <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                            
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="schedule" value="2" />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
    
                    <div class="tour">
                        <div class="tit text-[25px] font-[700] w-full py-[30px] px-[50px] bg-[#F9F9F9] border-b  border-[#c8c8c8]">
                            Tour
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                Which cities or regions in Seoul or Gangwon are you interested in visiting?
                            </div>
                            <input type="text" class="w-full h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                What experiences would you like to try in Korea?
                            </div>
                            <input type="text" class="w-full h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                        </div>
                    </div>
    
                    <div class="additional_info">
                        <div class="tit text-[25px] font-[700] w-full py-[30px] px-[50px] bg-[#F9F9F9] border-b  border-[#c8c8c8]">
                            Additional Information
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> How long do you plan to stay in Korea for your treatment?
                            </div>
                            <div class="flex justify-start items-center gap-[20px]">
                                <input type="text" class="w-full max-w-[80px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                Days
                            </div>
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> Have you received treatment in Korea?
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                <label class="cursor-pointer">
                                    <input type="radio" name="additional_info" value="1" checked class="font-[500]"/>
                                    Yes (If yes, please answer the following)
    
                                    <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Name of the hospital
                                        </div>
                                        <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                                    <div class="pl-[40px] pb-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Type of treatment received
                                        </div>
                                        <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                            
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="additional_info" value="2" />
                                    No
                                </label>
                            </div>
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> Have you received medical treatment abroad, outside of Korea?
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                <label class="cursor-pointer">
                                    <input type="radio" name="additional_info2" value="1" checked class="font-[500]"/>
                                    Yes (If yes, please answer the following)
    
                                    <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Country
                                        </div>
                                        <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                                    <div class="pl-[40px] pb-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Name of the hospital
                                        </div>
                                        <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                                    <div class="pl-[40px] pb-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Type of treatment received
                                        </div>
                                        <input type="text" class="w-full max-w-[300px] h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                            
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="additional_info2" value="2" />
                                    No
                                </label>
                            </div>
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> Do you require Halal food during your stay?
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                <label class="cursor-pointer">
                                    <input type="radio" name="halal" value="1" checked class="font-[500]"/>
                                    Yes                        
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="halal" value="2" />
                                    No
                                </label>
                            </div>
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> Do you have any allergies?
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px] w-full">
                                <label class="cursor-pointer w-full">
                                    <input type="radio" name="allergies" value="1" checked class="font-[500]"/>
                                    Yes (If yes, please answer the following)
    
                                    <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Please specify
                                        </div>
                                        <input type="text" class="w-full h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="allergies" value="2" />
                                    No
                                </label>
                            </div>
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> Do you have international health insurance coverage?
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px] w-full">
                                <label class="cursor-pointer w-full">
                                    <input type="radio" name="international" value="1" checked class="font-[500]"/>
                                    Yes (If yes, please answer the following)
    
                                    <div class="pl-[40px] py-[20px] flex flex-col justify-start items-start gap-[20px]">
                                        <div class="font-[700]">
                                            Please specify
                                        </div>
                                        <input type="text" class="w-full h-[50px] border border-[#C8C8C8] font-[400] rounded-[5px] px-[10px]" />
                                    </div>
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="international" value="2" />
                                    No
                                </label>
                            </div>
                        </div>    
                    </div>
    
                    <div class="preferences">
                        <div class="tit text-[25px] font-[700] w-full py-[30px] px-[50px] bg-[#F9F9F9] border-b  border-[#c8c8c8]">
                            Consultation Preferences
                        </div>
    
                        <div class="cont text-[18px] font-[700] w-full py-[20px] px-[50px] border-b border-[#C8C8C8]">
                            <div class="mb-[30px]">
                                <span class="text-[#ff0000]">√</span> How would you prefer to receive your consultation?
                            </div>
    
                            <div class="flex flex-col justify-start items-start gap-[20px] font-[500] text-[16px]">
                                <label class="cursor-pointer">
                                    <input type="radio" name="consultation" value="1" checked class="font-[500]"/>
                                    Visit to Jakarta Office                        
                                </label>
    
                                <label class="cursor-pointer">
                                    <input type="radio" name="consultation" value="2" />
                                    Phone Call
                                </label>
                                <label class="cursor-pointer">
                                    <input type="radio" name="consultation" value="2" />
                                    WhatsApp Chat
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { t } from '@/plugins/i18n'

</script>
<style lang="">
    
</style>