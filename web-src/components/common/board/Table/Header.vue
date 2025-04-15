<template>
    <div class="table_header">
        <div class="table_cell" :style="{ flex: '2' }">
            <input type="checkbox" @change="toggleAll" :checked="allSelected" />
        </div>
        <div v-for="(column, index) in columns" :key="index" class="table_cell">
            {{ column.label }}
        </div>
        <div v-if="isDtl" class="table_cell" :style="{ flex: '5' }">
            상세
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Column {
    label: string;
    key: string;
    type?: string;
    options?: { value: string | number; label: string }[];
    action?: (item: any) => void;
}

const props = defineProps<{
    columns: Column[];
    isDtl: boolean;
    allSelected: boolean;
}>();

const emit = defineEmits(["toggle-all"]);

const toggleAll = (event: Event) => {
    const target = event.target as HTMLInputElement;
    emit("toggle-all", target.checked);
};
</script>

<style scoped>
.table_header {
    display: flex;
    font-weight: bold;
    background-color: #f4f4f4;
}

.table_cell {
    padding: 10px;
    text-align: center;
    border-right: 1px solid #ddd;
}
</style>