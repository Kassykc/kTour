<template>
  <div :class="['listbox', { artistbox: activePeopleIdx !== 0 }]">
    <ArtGalleryItem
      v-for="(item, idx) in boardList.length > 0 ? boardList : skeletonItems"
      :key="'boardList_' + idx"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps<{
  boardList: Array<any>;
  activePeopleIdx: number;
}>();

// 스켈레톤용 빈 데이터 배열
const skeletonItems = ref(new Array(12).fill(null)); // 12개의 스켈레톤 로드
</script>
