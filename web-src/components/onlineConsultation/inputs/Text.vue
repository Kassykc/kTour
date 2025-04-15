<template>
    <div class="w-full border border-[#cacaca] px-4 py-2 rounded">
        <div class="flex items-center p-4">
            <div class="pr-4">
                <img :src="props.icon" alt="다음 아이콘" class="pr-4 pl-4">
            </div>
            <div class="pr-4 min-w-[100px]">{{ props.title }}</div>
            <div>
                <input type="text" :value="inputValue" @input="handleInput" class="w-auto sm:w-32" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: String,
    title: String,
});

const emit = defineEmits<{
    (e: 'update', value: string): void;
}>();

const inputValue = ref('');

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    inputValue.value = target.value;
    emit('update', inputValue.value);
};
</script>
