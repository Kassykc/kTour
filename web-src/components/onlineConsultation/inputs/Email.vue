<template>
    <div class="flex items-center w-full">
        <!-- 이메일 아이디 입력 필드 -->
        <div class="flex items-center w-[60%] border border-[#cacaca] p-4 rounded min-h-[60px]">
            <div class="flex items-center pr-6 whitespace-nowrap">
                <img :src="props.icon" alt="다음 아이콘" class="pr-4 pl-4 shrink-0" />
                <span class="text-base font-medium">{{ props.title }}</span>
            </div>
            <div>
                <input type="text" v-model="emailId" maxlength="40" placeholder="" class="border px-2 py-1 w-full" />
            </div>
        </div>

        <!-- @ 아이콘 -->
        <div class="flex items-center p-4 w-[40%]">
            <span>@</span>
        </div>

        <!-- 도메인 입력 필드 -->
        <div class="flex items-center w-[60%] border border-[#cacaca] p-4 rounded min-h-[60px]">
            <input type="text" v-model="domainInput" :readonly="!isCustomDomain" maxlength="50" placeholder="도메인"
                class="border px-2 py-1 rounded w-full" />
        </div>

        <!-- 드롭다운 메뉴 -->
        <div class="flex-grow flex justify-end p-4 w-[40%]">
            <select v-model="selectedDomain" @change="onDomainChange" class="border p-4 rounded w-full min-h-[60px]">
                <option value="">직접 입력</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
                <option value="kakao.com">kakao.com</option>
            </select>
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

const emailId = ref('');
const selectedDomain = ref('');
const domainInput = ref('');

const isCustomDomain = computed(() => selectedDomain.value === '');

const onDomainChange = () => {
    if (!isCustomDomain.value) {
        domainInput.value = selectedDomain.value;
    } else {
        domainInput.value = '';
    }
};

// 전체 이메일 emit
watch([emailId, domainInput], () => {
    if (emailId.value && domainInput.value) {
        emit('update', `${emailId.value}@${domainInput.value}`);
    }
});
</script>
