<template>
  <div>
      <!-- Footer -->
      <div id="footer" class="bg-[#001181]">
          <div id="footer_content" class="w-full max-w-[1200px] h-auto ml-[0] mr-[auto] sm:mx-auto min-w-[320px] min-h-[354px] py-[30px] px-[28px] sm:px-[18px]">
            <div class="logo_area pb-[30px] border-b border-[#ddd]">
              <img :src="logo" alt="" class="w-[180px]  mx-auto md:mx-0">
            </div>

            <div class="info_area py-[20px] md:py-[30px] px-0 flex flex-col md:flex-row justify-between items-center gap-[20px] md:gap-0">

              <div class="company max-w-full sm:max-w-[380px] md:max-w-[450px]">
                <div class="combobox mb-[20px]">
                  <select v-model="selectedOption" class="dropdown text-[16px] md:text-[18px] w-full px-[10px] cursor-pointer">
                    <option value="headquarters">Head Office</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="gangwon">Gangwon Office</option>
                  </select>
                </div>

                <!-- 선택된 정보 표시 -->
                <div class="info flex flex-col gap-[10px] text-white">
                  <div v-for="info in filteredCompanyInfo" :key="info.key">
                    <div class="business flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">Registrated business</div>
                      <div class="cont flex-1">{{ info.business }}</div>
                    </div>
                    <div class="representative flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">Owner's name</div>
                      <div class="cont flex-1">{{ info.representative }}</div>
                    </div>
                    <div class="registration flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">Business Registration Number</div>
                      <div class="cont flex-1">{{ info.registration }}</div>
                    </div>
                    <div class="address flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">Address</div>
                      <div class="cont flex-1">{{ info.address }}</div>
                    </div>
                  </div>
                </div>

              </div>    

              <div class="sns_area w-full max-w-[380px] md:max-w-[268px] flex flex-row md:flex-col justify-center items-start md:items-end gap-[20px]">
                <div class="sns flex gap-[20px]">
                  <a href="https://www.instagram.com/medicitykorea" target="_blank">
                    <img src="@/assets/images/f_insta.png" alt="">
                  </a>
                  <a href="https://www.youtube.com/@medi-city" target="_blank">
                    <img src="@/assets/images/f_youtube.png" alt="">
                  </a>
                </div>
                <div class="introduction_area w-full text-white relative  mt-[4px] md:mt-0">
                  <div 
                    class="selected_intro text-[16px] md:text-[18px] w-full px-[10px] py-[6px] border border-white absolute cursor-pointer bg-white text-[#001181]"
                    @click="isOpen = !isOpen"
                  >
                    {{ selectedTitle }}
                    <span class="absolute right-[8px] top-1/2 -translate-y-1/2 text-[14px]">
                      {{ isOpen ? '▲' : '▼' }}
                    </span>
                  </div>
                  <div 
                    v-show="isOpen"  
                    class="intro_items absolute top-[48px] w-full border border-white bg-[#001181]"
                  >
                    <a 
                      href="/file/Introduction_en_v2.pdf" 
                      download="Introduction_en_v2.pdf" 
                      class="intro_item text-[16px] md:text-[18px] w-full px-[10px] py-[6px] h-full block hover:bg-white hover:text-[#001181]"
                      @click.prevent="selectItem('Company Introduction ENG', '/file/Introduction_en_v2.pdf')"  
                    >
                      Company Introduction ENG
                    </a>
                    <a 
                      href="/file/Introduction_id_v2.pdf" 
                      download="Introduction_id_v2.pdf" 
                      class="intro_item text-[16px] md:text-[18px] w-full px-[10px] py-[6px] h-full block hover:bg-white hover:text-[#001181]"
                      @click.prevent="selectItem('Company Introduction IDN', '/file/Introduction_id_v2.pdf')"  
                    >
                      Company Introduction IDN
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright pt-[20px] text-left border-t border-[#ddd] text-[12px] md:text-[14px] text-white">
              Copyright Medicity. All rights reserved.<br/>
              The copyrights of all content posted on our site belong to Medi-City Co., Ltd. Unauthorized collection of our site is strictly prohibited.
            </div>
          </div>
      </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
// import logo from "@/assets/images/main_logo.png";
import logo from "/img/common/logo/logo_white.png";

// 선택된 옵션을 추적하는 변수
const selectedOption = ref('headquarters')

// 회사 정보 배열
const companyInfo = [
  {
    key: 'headquarters',
    business: 'Medi-City Co., Ltd.',
    representative: 'Park Sung-Min',
    registration: '588-86-02555',
    address: '43-55, Mugunghwa-ro, Ilsandong-gu, Goyang-si, Gyeonggi-do'
  },
  {
    key: 'indonesia',
    business: 'PT. Medi City Indonesia',
    representative: 'Park Sung-Min',
    registration: '2305230037834',
    address: 'Prosperity Tower, Lt. 56, KOSME(GBC) Room 4.1. Jl. Jend. Sudirman No.Kav. 52-53, Jakarta Selatan 12190'
  },
  {
    key: 'gangwon',
    business: 'Medi-City Gangwon Co., Ltd.',
    representative: 'Park Jong-In',
    registration: '363-86-03256',
    address: '3rd Floor, Unit 3, 2165 Gyeonggang-ro, Gangneung-si, Gangwon-do'
  }
]

// 필터된 정보만 표시하도록 computed 사용
const filteredCompanyInfo = computed(() => {
  return companyInfo.filter(info => info.key === selectedOption.value);
});

const isOpen = ref(false)
const selectedTitle = ref('Company Introduction ENG') // 기본값

const selectItem = (title: string, url: string) => {
  selectedTitle.value = title
  isOpen.value = false
  // 파일 다운로드 트리거
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  a.click()
}

</script>

<style scoped></style>