<template>
    <div class="flex flex-col justify-center w-full px-[20px] xl:px-0" v-if="props.list && props.list.length > 0">
        <div v-for="(item, index) in props.list" :key="index" class="flex flex-col items-start w-full">
            <div
                class="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full py-[20px] lg:py-[30px] border-b border-black">
                <div
                    class="text-[20px] lg:text-[26px] font-[400] pl-2 w-full sm:w-[400px] lg:w-fit h-[60px] sm:h-auto line-clamp-2">
                    {{ composer.locale == 'en' ? JSON.parse(item.subject).subjectEn : JSON.parse(item.subject).subjectId
                    }}
                </div>
                <div class="pt-2 pr-2">
                    <CommonBtnViewMore :to="`/inquiry/news/${item.boardIdx}`" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { t, composer } from '@/plugins/i18n';

const router = useRouter();

const props = defineProps<{
    list: any[];
}>()
</script>