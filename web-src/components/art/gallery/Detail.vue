<template>
    <div v-if="items" class="galleryView">
        <p class="artbox">
            <img :src="fileBaseUrl + items.thumbnail_info[0].file_path_enc" alt="" data-aos="fade-up"
                data-aos-duration="1000" :class="aosClass" v-if="items.thumbnail_info && items.thumbnail_info[0]" />
        </p>
        <div class="artinfo">
            <h4 class="artist">
                <span>
                    Artist
                    <!-- {{peopleType.find(el => el.code_key === items.people_type_cd)?.code_value_en}} -->
                </span>
                <br />
                <NuxtLink :to="'/artist/' + items.people_idx">
                    {{ items.name_en || items.name_ko }}
                </NuxtLink>
            </h4>
            <ul>
                <li v-if="items && items.main_title_en">
                    <span>Title</span>
                    {{ items.main_title_en || items.main_title_ko }}
                </li>
                <li v-if="items.size_info_show_yn === 'Y'">
                    <span>Size</span>
                    {{ items.size_info_en || items.size_info_ko }}
                </li>
                <li v-if="items.materials_info_show_yn === 'Y'">
                    <span>Materials</span>
                    {{ items.materials_info_en || items.materials_info_ko }}
                </li>
                <li v-if="items.price_info_show_yn === 'Y'">
                    <span>Price</span>
                    <div class="price">{{ items.price_info_en || items.price_info_ko }}</div>
                </li>
            </ul>

            <div v-if="items.people_memo_en || items.people_memo_ko" class="artnote">
                <h4>Artist’s Note</h4>
                <pre class="txt">{{ items.people_memo_en || items.people_memo_ko }}
                </pre>
            </div>
            <ArtGalleryProcess />
            <ArtGalleryInquireForm :props="items" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watchEffect } from "vue";
import type { GalleryDtlResultInfo } from '@/types/art/art'

const props = withDefaults(defineProps<{ items?: GalleryDtlResultInfo }>(), {
    items: () => ({})
});

const fileBaseUrl = apiBase.url() + "/_file/000/";

const aosClass = ref("");

onMounted(() => {
    nextTick(() => {
        setTimeout(() => {
            aosClass.value = "aos-init aos-animate";
        }, 3000);
    });
});

watchEffect(() => {
    if (props.items && Object.keys(props.items).length > 0) {
        nextTick(() => {
            setTimeout(() => {
                aosClass.value = "aos-init aos-animate";
            }, 100);
        });
    }
});
</script>

<style scoped>
.price {
    font-weight: 650;
}
</style>