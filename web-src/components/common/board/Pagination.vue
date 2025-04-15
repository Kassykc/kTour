<template>
    <div class="pagination">
        <button @click="goToPage(1)" :disabled="isFirstPage">
            <img src="@/assets/images/front.png" alt="맨앞 아이콘" class="front_icon">
        </button>
        <button @click="goToPage(currentIndex - 1)" :disabled="isFirstPage">
            <img src="@/assets/images/prev.png" alt="이전 아이콘" class="prev_icon">
        </button>

        <button 
            v-for="page in pageRange" 
            :key="page" 
            @click="goToPage(page)" 
            :class="{ active: page === currentIndex }"
            class="pagination_num"
        >
            {{ page }}
        </button>

        <button @click="goToPage(currentIndex + 1)" :disabled="isLastPage">
            <img src="@/assets/images/next.png" alt="다음 아이콘" class="next_icon">
        </button>
        <button @click="goToPage(totalPages)" :disabled="isLastPage">
            <img src="@/assets/images/back.png" alt="맨뒤 아이콘" class="back_icon">
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    pageSize: { type: Number, required: true },
    currentIndex: { type: Number, required: true },
    totalRows: { type: Number, required: true },
    totalPages: { type: Number, required: true },
    pagesToShow: { type: Number, default: 5 },
});

const emit = defineEmits(['update:currentIndex']);

const isFirstPage = computed(() => props.currentIndex === 1);
const isLastPage = computed(() => props.currentIndex === props.totalPages && props.totalPages !== 0);

const pageRange = computed(() => {
    const startPage = Math.floor((props.currentIndex - 1) / props.pagesToShow) * props.pagesToShow + 1;
    const endPage = Math.min(startPage + props.pagesToShow - 1, props.totalPages);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

const goToPage = (page: number) => {
    if (page >= 1 && page <= props.totalPages) {
        emit('update:currentIndex', page);
    }
};
</script>

<style lang="scss" scoped>
.pagination {
    @include flexCenter;
    margin-top: 30px;
}

.pagination .pagination_num {
    font-weight: 400;
    border-radius: 4px;
    background-color: $color_white_200;
    color: $color_black_900;
}

.pagination button {
    padding: 5px 10px;
    margin: 0 2px;
    cursor: pointer;
}

.pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.pagination .active {
    background-color: $color_pagination_active;
    color: $color_white_000;
}
</style>
