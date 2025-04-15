<template>
  <figure v-if="item">
    <a @click="router.push(`/gallery/${item.work_idx}`)">
      <p class="thumb">
        <img :src="fileBaseUrl +
          item.file_info[0].file_path_enc" />
      </p>
      <p class="name">{{ item.name_en }}</p>
      <div class="info">
        <p><span>Title</span> {{ item.main_title_en }}</p>
        <p v-if="item.size_info_show_yn === 'Y'"><span>Size</span> {{ item.size_info_en || item.size_info_ko }}</p>
        <p v-if="item.materials_info_show_yn === 'Y'"><span>Materials</span> {{ item.materials_info_en ||
          item.materials_info_ko }}</p>
        <p v-if="item.price_info_show_yn === 'Y'"><span>Price</span> {{ item.price_info_en ||
          item.price_info_ko }}</p>
      </div>
    </a>
  </figure>
  <!-- Skeleton Loader -->
  <figure v-else class="skeleton">
    <div class="thumb">
      <img src="@/assets/images/no_image.png" alt="no image">
    </div>
    <p class="name"></p>
    <div class="info">
      <p><span></span></p>
      <p><span></span></p>
      <p><span></span></p>
    </div>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  item: any | null;  // null 허용
}>();
const fileBaseUrl = apiBase.url() + "/_file/000/";
const router = useRouter();
</script>

<style lang="scss" scoped>
.skeleton {
  width: 390px;
  height: 600px;
  overflow: hidden;
  flex-shrink: 0;

  .thumb {
    width: 390px;
    height: 390px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .name {
    height: 30px;
    background: $medi_qna_grey_border;
    margin: 20px 0 10px;
  }

  .info {
    height: 90px;

    p {
      height: 30px;
      background: $medi_qna_grey_border;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    min-height: 480px;
    height: auto;
    overflow: visible;

    .thumb {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 430px) {
    min-height: 480px;
  }
}
</style>