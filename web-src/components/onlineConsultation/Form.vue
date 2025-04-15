<template>
    <div class="flex flex-col gap-8 items-center px-4">
        <div class="w-full">
            <OnlineConsultationInputsText :icon="Company" title="기관 (업체명)" @update="onInputUpdate" />
        </div>

        <div class="w-full">
            <OnlineConsultationInputsText :icon="Person" title="성명" @update="onInputUpdate" />
        </div>

        <div class="w-full">
            <OnlineConsultationInputsEmail :icon="Email" title="이메일" @update="onInputUpdate" />
        </div>

        <div class="w-full">
            <OnlineConsultationInputsText :icon="Phone" title="연락처" @update="onInputUpdate" />
        </div>

        <div class="w-full">
            <OnlineConsultationInputsText :icon="File" title="파일첨부" @update="onInputUpdate" />
        </div>

        <div class="w-full">
            <OnlineConsultationInputsText :icon="Company" title="메모" @update="onInputUpdate" />
        </div>
    </div>
</template>


<script setup lang="ts">
import Company from '@/assets/images/onlineConsultationForm/company.png';
import Person from '@/assets/images/onlineConsultationForm/person.png';
import Email from '@/assets/images/onlineConsultationForm/mail.png';
import Phone from '@/assets/images/onlineConsultationForm/phone.png';
import File from '@/assets/images/onlineConsultationForm/file.png';
import Memo from '@/assets/images/onlineConsultationForm/memo.png';
import SendWhite from '@/assets/images/onlineConsultationForm/send_white.png';
import SendPink from '@/assets/images/onlineConsultationForm/send_pink.png';

const formData = ref({});

const onInputUpdate = (value: string) => {
    console.log('입력값:', value);
    // 필요한 로직 추가
};
</script>

<style scoped></style>