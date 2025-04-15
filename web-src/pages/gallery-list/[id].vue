<template>
    <div id="subtitle">
        <h3>Gallery</h3>
    </div>
    <div class="galleryList">
        <ArtGalleryFilter :artistList="artistList" :activePeopleIdx="activePeopleIdx" @changeArtist="changeArtist" />
        <div class="list_wrap">
            <ArtGalleryList :boardList="list" :activePeopleIdx="activePeopleIdx" v-for="list in skelList"
                v-if="!boardList || boardList.length == 0" />
            <ArtGalleryList :boardList="list" :activePeopleIdx="activePeopleIdx" v-for="list in groupedBoardList"
                v-if="boardList" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useArtStore } from '@/stores/artbuddy/artStore';
import { ref, onMounted, onUnmounted } from 'vue';

definePageMeta({
    layout: 'default',
});

const artStore = useArtStore('gallery');

const skelList = ref([[], [], [], []]);
const boardList = ref<any[]>([]);
const artistList = ref<any[]>([]);
const activePeopleIdx = ref(0);
const windowWidth = ref<number | null>(null);
const groupedBoardList = ref<any[][]>([]);

const router = useRouter();
const route = useRoute();

const updateGroupedBoardList = () => {
    let columns = 1;
    if (windowWidth.value && windowWidth.value >= 1800) columns = 4;
    else if (windowWidth.value && windowWidth.value >= 1330) columns = 3;
    else if (windowWidth.value && windowWidth.value >= 860) columns = 2;

    if (boardList.value.length < columns) {
        columns = boardList.value.length;
    }

    const grouped = Array.from({ length: columns }, () => []);
    boardList.value.forEach((item, index) => {
        grouped[index % columns].push(item);
    });

    groupedBoardList.value = grouped;
};

const { data: artistResponse, pending: artistPending } = await useAsyncData(
    `get-artist-list-${new Date().toISOString()}`,
    async () => {
        const params = { page_num: 1, page_size: 0, search_keyword: '', show_yn: 'Y' };
        const response = await artStore.getArtistList(params);
        if (response) {
            artistList.value = response.result_info;
            const urlParam = route.params.id;
            activePeopleIdx.value = parseInt(urlParam);
            return response.result_info;
        }
        return [];
    },
);

const getGalleryList = async (people_idx: number) => {
    const params = {
        page_num: 1, page_size: 0, search_keyword: '',
        all_yn: people_idx === 0 ? 'Y' : '',
        people_idx: people_idx !== 0 ? people_idx : '',
        show_yn: 'Y'
    };
    const response = await artStore.getGalleryList(params);
    if (response) {
        boardList.value = response.result_info;
        updateGroupedBoardList();
    }
};

const changeArtist = (people_idx: number) => {
    if (people_idx == 0) {
        router.push('/');
    } else {
        router.push('/gallery-list/' + people_idx);
    }
};

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    updateGroupedBoardList();
};

onMounted(() => {
    if (import.meta.client) {
        windowWidth.value = window.innerWidth;
        window.addEventListener('resize', handleResize);
    }
});

onUnmounted(() => {
    if (import.meta.client) {
        window.removeEventListener('resize', handleResize);
    }
});

watchEffect(async () => {
    if (artistList.value.length > 0) {
        const urlParam = route.params.id;
        await getGalleryList(urlParam);
    }
});
</script>