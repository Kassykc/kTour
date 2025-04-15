<template>
    <div class="search-bar">
        <div v-for="(filter, index) in filters" :key="index" class="search-item">
            <label>{{ filter.label }}</label>
            <template v-if="filter.type === 'text'">
                <input v-model="searchValues[filter.key]" type="text" class="search_item_text"
                    @change="emitSearch(searchValues[filter.key])" />
            </template>
            <template v-else-if="filter.type === 'combo'">
                <select v-model="searchValues[filter.key]" class="search_item_combo"
                    @change="emitSearch(searchValues[filter.key])">
                    <option v-for="option in filter.options" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </template>
            <template v-else-if="filter.type === 'date'">
                <input v-model="targetDay" type="date" class="search_item_date"
                    @change="emitSearch(searchValues[filter.key])" />
            </template>
            <template v-else-if="filter.type === 'search'">
                <select v-model="searchValues[filter.key]" class="search_item_search search_item_search_combo"
                    @change="emitSearch" v-if="filter.options">
                    <option v-for="option in filter.options" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
                <input v-model="searchValues[filter.key]" type="text" class="search_item_search search_item_search_text"
                    @change="emitSearch" />
                <button class="search_btn" @click="emitSearch(searchValues[filter.key])">검색</button>
            </template>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
    filters: {
        type: Array,
        default: () => []
    },
    initialValues: {
        type: Object,
        default: () => ({})
    }
});

const emit = defineEmits(['search']);

const searchValues = ref({});
const today = new Date().toISOString().split('T')[0];
const targetDay = ref('');

watch(
    () => props.initialValues,
    (newInitialValues) => {
        searchValues.value = { ...newInitialValues };

        if (!searchValues.value.date) {
            targetDay.value = today;
        }

        props.filters.forEach((filter) => {
            if (
                filter.type === 'combo' &&
                filter.options &&
                Array.isArray(filter.options) &&
                filter.options.length > 0 &&
                !searchValues.value[filter.key]
            ) {
                searchValues.value[filter.key] = filter.options[0].value;
            }
        });
    },
    { immediate: true, deep: true }
);

// 상위 컴포넌트로 검색 이벤트 전달
const emitSearch = () => {
    emit('search', { searchKey: searchValues.value, targetDay: targetDay.value });
};
</script>


<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
}

.search-item {
    display: flex;
    align-items: center;

    font-size: 18px;
}

.search-item label {
    margin-right: 10px;
}

.search-item select {
    padding: 10px 15px;
    border-radius: 10px;
}

.search-item input[type=text] {
    border: 1px solid #A4A4A4;
    padding: 10px 15px;
    border-radius: 10px;
}

.search_item_search_text {
    margin: 0 10px;
}

.search_btn {
    color: #fff;
    background: #A4A4A4;
    padding: 10px 15px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
}
</style>
