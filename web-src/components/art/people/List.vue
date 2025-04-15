<template>
    <div class="listbox artist_list">
        <figure v-for="(item, idx) in artistList" :key="item.people_idx">
            <a @click="router.push('/artist/' + item.people_idx)">
                <ArtPeopleThumb v-if="item.thumbnail_info && item.thumbnail_info[0]"
                    :imageUrl="fileBaseUrl + item.thumbnail_info[0].file_path_enc"
                    :altText="item.name_en || item.name_ko" />
            </a>
            <p class="name">{{ item.name_en || item.name_ko }}</p>
        </figure>

        <!-- 스켈레톤 로딩 (데이터가 없을 때 표시) -->
        <figure v-for="idx in skeletonCount" :key="'skeleton-' + idx" class="skeleton">
            <a href="#none">
                <div class="tumb">
                    <img src="@/assets/images/no_image.png" alt="no image">
                </div>
            </a>
            <p class="name"></p>
        </figure>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ArtistListResultInfo } from '@/types/art/art';

const router = useRouter();

const props = defineProps({
    artistList: {
        type: Array as () => ArtistListResultInfo[],
        required: true,
        default: () => [],  // 기본값을 빈 배열로 설정
    },
});
const fileBaseUrl = apiBase.url() + "/_file/000/";

// 스켈레톤 개수 (데이터가 없을 때만 보이도록 설정)
const skeletonCount = computed(() => (props.artistList.length === 0 ? 10 : 0));
</script>

<style scoped>
.skeleton {
    width: 390px;
    min-height: 560px;
}

.skeleton .tumb {
    width: 390px;
    height: 390px;
}

.skeleton .tumb img {
    width: 100%;
}

.skeleton .name {
    width: 100%;
    height: 30px;
    background: #f8f8f8;
    margin-top: 16px;
}
</style>