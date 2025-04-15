<template>
    <div class="gfilter" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" :class="aosClass">
      <NuxtLink :to="''" :class="{ active: activePeopleIdx === 0 }" @click.prevent="changeArtist(0)">ALL</NuxtLink>
      <NuxtLink
        v-for="(item, idx) in artistList"
        :key="idx"
        :to="''"
        :class="{ active: activePeopleIdx === item.people_idx }"
        @click.prevent="changeArtist(item.people_idx)"
      >
        {{ item.name_en }}
      </NuxtLink>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    artistList: Array<{ people_idx: number; name_en: string }>;
    activePeopleIdx: number;
  }>();

  const emit = defineEmits<{
    (e: 'changeArtist', people_idx: number): void;
  }>();

  const changeArtist = (people_idx: number) => {
    emit('changeArtist', people_idx);
  };

  const aosClass = ref(""); // 초기 상태: 클래스 없음
  onMounted(() => {
      setTimeout(() => {
          aosClass.value = "aos-init aos-animate"; // 페이지 진입 후 클래스 추가
      }, 100); 
  });
  </script>
  