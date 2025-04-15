<template>
    <div class="galleryView">
        <div class="top_name">
            <h5>{{ artistDtl?.name_en }}</h5>
        </div>

        <swiper v-if="artistDtl" class="swiper-container artist_work" :speed="1000" :slides-per-view="3"
            :space-between="40" :loop="false" :navigation="true" :grab-cursor="true" :centered-slides="true"
            effect="coverflow" :coverflow-effect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }"
            :breakpoints="{ 0: { slidesPerView: 2, spaceBetween: 10 }, 1024: { slidesPerView: 3, spaceBetween: 40 } }"
            :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="[Autoplay, EffectCoverflow, Navigation]"
            :pagination="false">
            <swiper-slide v-for="(item, idx) in artistDtl.work_info" :key="idx">
                <img :src="fileBaseUrl + item.thumbnail_info[0].file_path_enc" alt="" class="swiper-image" />
            </swiper-slide>
        </swiper>

        <div class="artinfo artist_info">
            <div class="left">
                <div class="thumb">
                    <img :src="fileBaseUrl + artistDtl?.file_info[0].file_path_enc" alt="" />
                </div>
                <h4 class="artist">
                    <span>
                        {{peopleType.find((el) => el.code_key === artistDtl?.people_type_cd)?.code_value_en
                        }}
                    </span>
                    <br />
                    {{ artistDtl?.name_en }}
                </h4>
                <pre>{{ artistDtl?.people_memo_en || artistDtl?.people_memo_ko }}</pre>
            </div>

            <div class="right">
                <div class="artnote" v-for="(item, idx) in profileSection" :key="idx">
                    <h4>
                        {{profileType.find((el) => el.code_key === item.sectionValue)?.code_value_en}}
                    </h4>
                    <ul>
                        <li v-for="inputItem in selectedProfile.filter((el) => el.parentIdx === item.idx)"
                            :key="inputItem.inputIdx">
                            {{ inputItem.profileContentEn || inputItem.profileContentKo }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import type { ArtistDtlResultInfo } from '@/types/art/art';
import { useArtStore } from '@/stores/artbuddy/artStore'
import { ART_API_URLS } from '@/apis/art/urls'

const artStore = useArtStore('artistDtl');
const codeStore = useArtStore('codes');
const route = useRoute();

const fileBaseUrl = apiBase.url() + "/_file/000/";

const artistInfo = ref<any>({});
const peopleType = ref<any[]>([]);
const profileType = ref<any[]>([]);
const swiperItem = ref<string[]>([]);
const isLoading = ref(false);

const { data: artistDtl, status, error } = await useAsyncData<ArtistDtlResultInfo>(
    `artistDtl`,
    async () => {
        const people_idx = route.params.id;
    return apiRequest.set(ART_API_URLS.ARTIST_DETAIL + people_idx, 'artistDtl', 'get', false, false, null);        
    }, { server: true, default: () => ({}) }
);

watchEffect(() => {
    if (artistDtl.value) {
        useHead({
            title: `${artistDtl.value.name_en ?? ''} - K-Medi ART SERVICE`,
            meta: [
                { name: 'description', content: artistDtl.value.people_memo_en ?? '' },
                { property: 'og:url', content: useRequestURL().href },
                { property: 'og:title', content: `${artistDtl.value.name_en ?? ''} - K-Medi ART SERVICE` },
                { property: 'og:description', content: artistDtl.value.people_memo_en ?? '' },
                {
                    property: 'og:image',
                    content: artistDtl.value.thumbnail_info?.[0]?.file_path_enc
                        ? `https://art.global-medicity.com/_file/000/${artistDtl.value.thumbnail_info[0].file_path_enc}`
                        : '',
                },
                { property: 'og:image:type', content: artistDtl.value.thumbnail_info[0].content_type },
                { property: 'og:image:width', content: '800' },
                { property: 'og:image:height', content: '420' },

                // Twitter 카드 메타 태그 추가
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: `${artistDtl.value.name_en ?? ''} - K-Medi ART SERVICE` },
                { name: 'twitter:description', content: artistDtl.value.people_memo_en ?? '' },
                {
                    name: 'twitter:image', content: artistDtl.value.thumbnail_info?.[0]?.file_path_enc
                        ? `https://art.global-medicity.com/_file/000/${artistDtl.value.thumbnail_info[0].file_path_enc}`
                        : ''
                }
            ],
            // 추가 link 태그: <link itemprop="thumbnailUrl" href="...">
            link: [
                {
                    itemprop: 'thumbnailUrl',
                    href: artistDtl.value.thumbnail_info?.[0]?.file_path_enc
                        ? `https://art.global-medicity.com/_file/000/${artistDtl.value.thumbnail_info[0].file_path_enc}`
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
                        "thumbnailUrl": artistDtl.value.thumbnail_info?.[0]?.file_path_enc
                            ? `https://art.global-medicity.com/_file/000/${artistDtl.value.thumbnail_info[0].file_path_enc}`
                            : ''
                    })
                }
            ]
        });
    }
});

const profileSection = ref<{ idx: number; sectionValue: string }[]>([]);
const selectedProfile = ref<
    { parentIdx: number; profileType: string; profileContentKo: string; profileContentEn: string; inputIdx: number }[]
>([]);

const setCodes = async () => {
    const params = {
        code_types: [],
        exclude_code_types: [
            "INTER_PHONE_TYPE",
            "BANK_TYPE",
            "LANGUAGE_TYPE",
            "CURRENCY_TYPE",
        ],
    }
    const response = await codeStore.getCodes(params);

    peopleType.value = response.result_info.filter((el) => el.code_type === 'PEOPLE_TYPE');
    profileType.value = response.result_info.filter((el) => el.code_type === 'PROFILE_TYPE');
}

const setDefaultProfile = () => {
    if (!artistDtl.value || !artistDtl.value.profile_info) return;

    const defaultProfile = artistDtl.value.profile_info;
    const sortedProfileInfo = [...defaultProfile].sort((a, b) =>
        a.profile_type_cd.localeCompare(b.profile_type_cd)
    );

    profileSection.value = [];
    selectedProfile.value = [];

    sortedProfileInfo.forEach((profile, i) => {
        if (!profileSection.value.some((el) => el.sectionValue === profile.profile_type_cd)) {
            profileSection.value.push({ idx: i, sectionValue: profile.profile_type_cd });
        }
    });

    selectedProfile.value = sortedProfileInfo.map((profile, i) => {
        const parent = profileSection.value.find((el) => el.sectionValue === profile.profile_type_cd);
        return {
            parentIdx: parent?.idx || 0,
            profileType: parent?.sectionValue || '',
            profileContentKo: profile.profile_content_ko,
            profileContentEn: profile.profile_content_en,
            inputIdx: i + 1,
        };
    });
};

// 서버에서 미리 프로필 설정
onServerPrefetch(async () => {
    setDefaultProfile();
});

onMounted(async () => {
    // await getArtistInfo();
    await setCodes();
    setDefaultProfile();

    artistInfo.value = artistDtl;

    swiperItem.value = artistInfo.value.work_info.map(
        (work: any) => fileBaseUrl + work.thumbnail_info[0].file_path_enc
    );
});

watch(artistDtl.value, (newData) => {
    if (newData) {
        artistInfo.value = artistDtl.value;
        setDefaultProfile();
    }
});
</script>

<style scoped>
.skeleton {
    width: 60%;
    height: 1rem;
    background: #e0e0e0;
    margin: auto;
}
</style>
