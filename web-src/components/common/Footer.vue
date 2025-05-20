<template>
  <div>
    <!-- Footer -->
    <div id="footer" class="bg-[#001181] w-full h-full">
      <div id="footer_content"
        class="w-full max-w-[1340px] h-fit ml-[0] mr-[auto] sm:mx-auto min-w-[320px] max-h-auto px-[28px] sm:px-[18px] pt-[75px] pb-[28px] h-auto lg:h-[337px]">
        <address
          class="flex justify-center items-start sm:justify-around flex-col lg:flex-row lg:justify-between items-start sm:items-center h-fit  gap-[10px]">

          <div class="brand_info flex flex-col gap-[24px] items-start pr-[4rem]">
            <img src="/img/common/logo/footer_logo.png" class="w-[90px] h-auto min-w-[90px] md:w-[220px] pb-[4rem]">
            <div class="rights text-[13px] font-[400] text-white pb-[2rem]">
              Copyright Medicity. All rights reserved.
            </div>
          </div>


          <!-- korea -->
          <div>
            <div class="business_info max-w-[400px]">
              <div class="text-[16px] text-white font-[700] pb-[1rem]">
                {{ t('footer.koreaBranch.name') }}
              </div>
              <div class="text-[13px] text-[#6B77C7] font-[400] leading-[20px]">
                <div>
                  {{ t('footer.koreaBranch.registrated') }}
                </div>
                <div>
                  {{ t('footer.koreaBranch.owner') }}
                </div>
                <div>
                  {{ t('footer.koreaBranch.registNumber') }}
                </div>
                <div>
                  {{ t('footer.koreaBranch.address') }}
                </div>
              </div>
            </div>
          </div>
          <!-- inni -->
          <div>
            <div class="business_info max-w-[400px]">
              <div class="text-[16px] text-white font-[700] pb-[1rem]">
                {{ t('footer.inniBranch.name') }}
              </div>
              <div class="text-[13px] text-[#6B77C7] font-[400] leading-[20px]">
                <div>
                  {{ t('footer.inniBranch.registrated') }}
                </div>
                <div>
                  {{ t('footer.inniBranch.owner') }}
                </div>
                <div>
                  {{ t('footer.inniBranch.registNumber') }}
                </div>
                <div>
                  {{ t('footer.inniBranch.address') }}
                </div>
              </div>
            </div>
          </div>

          <div class="company_info flex flex-col gap-[20px] lg:gap-[30px]">
            <div class="sns flex gap-[32px] justify-end items-center">
              <div class="facebook"><a href="/" target="_blank"><img src="@/assets/images/facebook.png"></a></div>
              <div class="twitter"><a href="/" target="_blank"><img src="@/assets/images/twitter.png"></a></div>
              <div class="instagram"><a href="/" target="_blank"><img src="@/assets/images/instagram.png"></a></div>
            </div>
            <!-- <div class="contact flex  gap-[0px] lg:gap-[20px] items-start sm:items-center justify-end text-white">
              <div class="email text-[12px] sm:text-[14px] font-[400]"><span
                  class="font-[700] pr-[10px] mr-[10px] border-r-2 border-white">E-mail</span>ogago6747@naver.com</div>
              <div class="tell text-[12px] sm:text-[14px] font-[400]"><span
                  class="font-[700] pr-[10px] mr-[10px] border-r-2 border-white">Tel</span>+82-2-2647-6747</div>
              <div class="fax text-[12px] sm:text-[14px] font-[400]"><span
                  class="font-[700] pr-[10px] mr-[10px] border-r-2 border-white">Fax</span>+82-50-4019-6747</div>
              <div class="policy text-[12px] sm:text-[14px] font-[700]">개인정보처리방침</div>
            </div> -->
          </div>
        </address>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
// import logo2 from "@/assets/icons/logo2.png";

</script>

<style scoped></style>