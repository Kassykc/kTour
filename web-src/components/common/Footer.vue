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
                    <option value="headquarters">본사</option>
                    <option value="indonesia">인도네시아</option>
                    <option value="gangwon">강원지사</option>
                  </select>
                </div>

                <!-- 선택된 정보 표시 -->
                <div class="info flex flex-col gap-[10px] text-white">
                  <div v-for="info in filteredCompanyInfo" :key="info.key">
                    <div class="business flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">사업자</div>
                      <div class="cont flex-1">{{ info.business }}</div>
                    </div>
                    <div class="representative flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">대표자</div>
                      <div class="cont flex-1">{{ info.representative }}</div>
                    </div>
                    <div class="registration flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">사업자등록번호</div>
                      <div class="cont flex-1">{{ info.registration }}</div>
                    </div>
                    <div class="address flex justify-start items-center text-[16px] md:text-[18px]">
                      <div class="tit w-[110px] md:w-[130px] flex-0">주소</div>
                      <div class="cont flex-1">{{ info.address }}</div>
                    </div>
                  </div>
                </div>

              </div>    

              <div class="sns_area w-full max-w-[380px] md:max-w-[168px] flex flex-row md:flex-col justify-center items-start md:items-end gap-[20px]">
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
                      @click.prevent="selectItem('회사소개서 EN', '/file/Introduction_en_v2.pdf')"  
                    >
                      회사소개서 EN
                    </a>
                    <a 
                      href="/file/Introduction_id_v2.pdf" 
                      download="Introduction_id_v2.pdf" 
                      class="intro_item text-[16px] md:text-[18px] w-full px-[10px] py-[6px] h-full block hover:bg-white hover:text-[#001181]"
                      @click.prevent="selectItem('회사소개서 ID', '/file/Introduction_id_v2.pdf')"  
                    >
                      회사소개서 ID
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright pt-[20px] text-left border-t border-[#ddd] text-[12px] md:text-[14px] text-white">
              Copyright Medicity. All rights reserved.<br/>
              자사의 사이트에 게시된 모든 컨텐츠등 외 저작권은 ㈜메디씨티에게 있습니다. 자사의 사이트의 무단적인 수집을 엄격히 금합니다.
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
    business: '㈜메디씨티',
    representative: '박종인',
    registration: '588-86-02555',
    address: '경기도 고양시 일산동구 무궁화로 43-55, 302호'
  },
  {
    key: 'indonesia',
    business: 'PT. Medi City Indonesia',
    representative: '박성민',
    registration: '2305230037834',
    address: 'Prosperity Tower, Lt. 56, KOSME(GBC) Room 4.1. Jl. Jend. Sudirman No.Kav. 52-53, Jakarta Selatan 12190'
  },
  {
    key: 'gangwon',
    business: '㈜메디씨티강원',
    representative: '박종인',
    registration: '363-86-03256',
    address: '강원도 강릉시 경강로 2165, 3층 3호'
  }
]

// 필터된 정보만 표시하도록 computed 사용
const filteredCompanyInfo = computed(() => {
  return companyInfo.filter(info => info.key === selectedOption.value);
});

const isOpen = ref(false)
const selectedTitle = ref('회사소개서 EN') // 기본값

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