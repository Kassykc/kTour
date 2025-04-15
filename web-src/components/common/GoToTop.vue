<template>
    <img class="go_to_top" src="@/assets/images/go_to_top.png" alt="탑 이동 이미지" v-show="showButton" @click="scrollToTop">
</template>

<script lang="ts" setup>
const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > 200;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style lang="scss" scoped>
.go_to_top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px; 
  height: 60px;
  cursor: pointer;
  z-index: 1000;


  @media (max-width: 1200px) {
    // width: 100px;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
}
</style>