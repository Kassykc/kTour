<template>
    <div>
        <div class="faq_contents flex flex-col justify-start items-center gap-[62px]">
            <div v-if="props.list && props.list.length > 0" v-for="(faq, index) in props.list" :key="index"
                class="faq_content w-full flex flex-col justify-center items-start py-[40px] px-[30px] sm:px-[60px] rounded-[24px] shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
                <div
                    class="q w-full text-[#848484] pb-[28px] border-b border-[#949494] flex flex-col sm:flex-row justify-start items-center">
                    <div class="tit font-[700] text-[20px] sm:text-[28px] flex-0 w-full sm:w-[60px]">
                        Q.
                    </div>
                    <div class="cont font-[600] text-[16px] sm:text-[22px] flex-1">
                        {{ composer.locale == 'en' ? parsedTitle(faq).subjectEn : parsedTitle(faq).subjectId }}
                    </div>
                </div>
                <div class="a w-full text-[#1F78FF] pt-[28px] flex flex-col sm:flex-row justify-start items-center">
                    <div class="tit font-[700] text-[20px] sm:text-[28px] flex-0 w-full sm:w-[60px]">
                        A.
                    </div>
                    <div class="cont font-[600] text-[16px] sm:text-[22px] flex-1"
                        v-html="composer.locale == 'en' ? parsedContent(faq).contentEn : parsedContent(faq).contentId">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t, composer } from '@/plugins/i18n';

const props = defineProps({
    list: Array
})

const decodeHtmlEntities = (str: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
}

const parsedTitle = (item: any) => {
    const title = decodeHtmlEntities(item.subject)
    return JSON.parse(title);
};

const parsedContent = (item: any) => {
    const title = decodeHtmlEntities(item.content)
    return JSON.parse(title) ?? {};
};
</script>

<style lang="">

</style>
