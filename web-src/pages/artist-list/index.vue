<template>
    <div id="subtitle">
        <h3>Artists</h3>
    </div>
    <div class="list_wrap artist_list_wrap">
        <ArtPeopleList :artistList="list" :fileBaseUrl="fileBaseUrl" v-for="list in skelList"
            v-if="status != 'success'" />
        <ArtPeopleList :artistList="list" :fileBaseUrl="fileBaseUrl" v-for="list in groupedArtistList"
            v-if="status == 'success'" />
    </div>
</template>

<script setup lang="ts">
import { useArtStore } from '@/stores/artbuddy/artStore'
import { ART_API_URLS } from '@/apis/art/urls'
definePageMeta({
    layout: 'default',
})

const artStore = useArtStore('artist');

const artistList = ref<any[]>([]);
const fileBaseUrl = apiBase.url();
const windowWidth = ref<number | null>(null);
const groupedArtistList = ref<any[][]>([]);
const skelList = ref([[], [], [], []]);

const { data: peoplesData, status, error, refresh } = useAsyncData('peoplesData', async () => {
    const response = await fetch(ART_API_URLS.ARTIST_LIST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_num: 1, page_size: 0, search_keyword: '', show_yn: 'Y' })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch peoples data');
    }

    const reader = response.body.getReader();
    let result = '';
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += new TextDecoder().decode(value);
    }

    return JSON.parse(result).result_info;
}, { server: false });

// const getArtistList = async () => {
//     const params = {
//         page_num: 1,
//         page_size: 0,
//         search_keyword: '',
//         show_yn: 'Y'
//     };

//     const response = await artStore.getArtistList(params);
//     if (response) {
//         artistList.value = response.result_info;
//         updateGroupedArtistList();
//     }
// }

const updateGroupedArtistList = () => {
    let columns = 1;
    if (windowWidth.value && windowWidth.value >= 1800) columns = 4;
    else if (windowWidth.value && windowWidth.value >= 1330) columns = 3;
    else if (windowWidth.value && windowWidth.value >= 860) columns = 2;

    const grouped = Array.from({ length: columns }, () => []);
    artistList.value.forEach((item, index) => {
        grouped[index % columns].push(item);
    });

    groupedArtistList.value = grouped;
};

// 윈도우 크기 변경 감지 핸들러
const handleResize = () => {
    windowWidth.value = window.innerWidth;
    updateGroupedArtistList();
};

onMounted(() => {
    windowWidth.value = window.innerWidth;
    updateGroupedArtistList();
    window.addEventListener('resize', handleResize);
    refresh();
});

onUnmounted(() => {
    if (import.meta.client) {
        window.removeEventListener('resize', handleResize);
    }
});

watch(peoplesData, (newData) => {
    artistList.value = [];
    groupedArtistList.value = [];
    if (newData) {
        artistList.value = newData;
        updateGroupedArtistList();
    }
});
</script>
