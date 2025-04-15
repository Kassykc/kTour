<template>
    <div id="con_area">
        <div id="subtitle">
            <h3>Gallery</h3>
        </div>
        <ArtGalleryDetail :items="galleryItem" v-if="status == 'success'" />
    </div>
</template>

<script setup lang="ts">
import { useArtStore } from '@/stores/artbuddy/artStore';
import type { GalleryDtlResultInfo } from '@/types/art/art'
import { ART_API_URLS } from '@/apis/art/urls'

const galleryStore = useArtStore('galleryDtl');
const route = useRoute();
const fileBaseUrl = apiBase.url() + "/_file/000/";

const { data: galleryItem, status, error, refresh } = await useAsyncData<GalleryDtlResultInfo>(
    `galleryInfo`,
    async () => {
        const params = { workIdx: route.params.id };
        const response = await fetch(ART_API_URLS.GALLERY_DETAIL + params.workIdx, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch gallery data');
        }

        const reader = response.body.getReader();
        let result = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += new TextDecoder().decode(value);
        }

        result = JSON.parse(result).result_info;

        // galleryItem.value = response;

        return result;
    }, { server: true }
);

watchEffect(() => {
    if (galleryItem.value) {
        useHead({
            title: `${galleryItem.value.main_title_en ?? ''} - K-Medi ART SERVICE`,
            meta: [
                { name: 'description', content: galleryItem.value.people_memo_en ?? '' },
                { property: 'og:url', content: useRequestURL().href },
                { property: 'og:title', content: `${galleryItem.value.main_title_en ?? ''} - K-Medi ART SERVICE` },
                { property: 'og:description', content: galleryItem.value.people_memo_en ?? '' },
                {
                    property: 'og:image',
                    content: galleryItem.value.thumbnail_info?.[0]?.file_path_enc
                        ? `https://art.global-medicity.com/_file/000/${galleryItem.value.thumbnail_info[0].file_path_enc}`
                        : '',
                },
                { property: 'og:image:type', content: galleryItem.value.thumbnail_info[0].content_type },
                { property: 'og:image:width', content: '800' },
                { property: 'og:image:height', content: '420' },

                // Twitter 카드 메타 태그 추가
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: `${galleryItem.value.main_title_en ?? ''} - K-Medi ART SERVICE` },
                { name: 'twitter:description', content: galleryItem.value.people_memo_en ?? '' },
                {
                    name: 'twitter:image', content: galleryItem.value.thumbnail_info?.[0]?.file_path_enc
                        ? `https://art.global-medicity.com/_file/000/${galleryItem.value.thumbnail_info[0].file_path_enc}`
                        : ''
                }
            ],
            // 추가 link 태그: <link itemprop="thumbnailUrl" href="...">
            link: [
                {
                    itemprop: 'thumbnailUrl',
                    href: galleryItem.value.thumbnail_info?.[0]?.file_path_enc
                        ? `https://art.global-medicity.com/_file/000/${galleryItem.value.thumbnail_info[0].file_path_enc}`
                        : ''
                }
            ],
            // JSON‑LD 스크립트로 구조화된 데이터 제공
            script: [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "ImageObject",
                        "url": useRequestURL().href,
                        "thumbnailUrl": galleryItem.value.thumbnail_info?.[0]?.file_path_enc
                            ? `https://art.global-medicity.com/_file/000/${galleryItem.value.thumbnail_info[0].file_path_enc}`
                            : ''
                    })
                }
            ]
        });
    }
});

</script>

<style scoped></style>
