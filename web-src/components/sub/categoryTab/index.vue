<template>
    <div class="cartegory_tab w-full max-w-[1340px] my-0 mx-auto">
        <div class="category_wrap flex justify-center items-center flex-wrap gap-[14px]">
            <div class="category min-w-[40px] md:min-w-[75px] px-[10px] md:px-[30px] py-[8px] md:py-[14px] text-[13px] md:text-[18px] text-center rounded-[18px] md:rounded-[30px] cursor-pointer font-[700] border border-[#AFAFAF]"
                :class="selectedIndex == -1 ? 'bg-[#1F78FF] text-white' : 'bg-white text-[#AFAFAF]'"
                @click="selectCategory(-1, '')">
                <div>ALL</div>
            </div>
            <div class="category min-w-[40px] md:min-w-[75px] px-[10px] md:px-[30px] py-[8px] md:py-[14px] text-[13px] md:text-[18px] text-center rounded-[18px] md:rounded-[30px] cursor-pointer font-[700] border border-[#AFAFAF]"
                :class="index === selectedIndex ? 'bg-[#1F78FF] text-white' : 'bg-white text-[#AFAFAF]'"
                v-for="(category, index) in categories" :key="index"
                @click="selectCategory(index, category.category_name, category.category_key)">
                <div>{{ category.category_name }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t, composer } from '@/plugins/i18n'
import { useMenuStore } from "@/stores/admin/common/menuStore";
const codeStore = useMenuStore('cate-code');

const categories = ref([]);
const hospitalDepth1En = ref();
const hospitalDepth2En = ref();
const hospitalDepth1Id = ref();
const hospitalDepth2Id = ref();
const selectedChildren = ref([]);

// 현재 경로 가져오기
const route = useRoute();

// const router = useRouter();
const emit = defineEmits(); // 부모에게 전달할 이벤트 정의
const selectedIndex = ref(-1);
const selectedIdx = ref(0);


// 카테고리 클릭 시 해당 인덱스를 selectedIndex에 할당
const selectCategory = (index: number, categoryName: string, codeKey?: number) => {
    selectedIndex.value = index;

    if (index == 0) {
        return emit('update:selectedCategory', categoryName, selectedChildren.value, codeKey);
    }

    if (codeKey && composer.locale == 'en') {
        selectedChildren.value = hospitalDepth2En.value.filter(
            item => item.codeParentKey == codeKey
        );
    } else if (codeKey && composer.locale == 'id') {
        selectedChildren.value = hospitalDepth2Id.value.filter(
            item => item.codeParentKey == codeKey
        );
    } else {
        selectedChildren.value = []; // 없으면 초기화
    }
    return emit('update:selectedCategory', categoryName, selectedChildren.value, codeKey); // 카테고리 이름을 부모에게 전달
};


// 카테고리 배열 설정 함수
const setCategories = async () => {
    if (route.path === '/mtc') {
        const codeParams = { page_num: 1, page_size: 999 };
        const response2 = await codeStore.setCodes(codeParams);
        sessionStorage.setItem('medicalCodes', JSON.stringify(response2));
        const codes = response2.resultInfo || [];

        hospitalDepth1En.value = codes.filter(item => (item.codeType === 'CONTENT_CATEGORY'));
        hospitalDepth2En.value = codes.filter(item => item.codeType === "CONTENT_CATEGORY_CHILD");

        hospitalDepth1Id.value = codes.filter(item => (item.codeType === 'CONTENT_CATEGORY'));
        hospitalDepth2Id.value = codes.filter(item => item.codeType === "CONTENT_CATEGORY_CHILD");

        hospitalDepth1En.value = hospitalDepth1En.value.map(item => {
            return {
                ...item,
                codeValue: JSON.parse(item.codeValue)?.categoryNameEn,
                codeKey: JSON.parse(item.codeKey)
            };
        });

        hospitalDepth2En.value = hospitalDepth2En.value.map(item => {
            return {
                ...item,
                codeValue: JSON.parse(item.codeValue)?.categoryNameEn,
                codeKey: JSON.parse(item.codeKey)
            };
        });

        hospitalDepth1Id.value = hospitalDepth1Id.value.map(item => {
            return {
                ...item,
                codeValue: JSON.parse(item.codeValue)?.categoryNameId,
                codeKey: JSON.parse(item.codeKey)
            };
        });

        hospitalDepth2Id.value = hospitalDepth2Id.value.map(item => {
            return {
                ...item,
                codeValue: JSON.parse(item.codeValue)?.categoryNameId,
                codeKey: JSON.parse(item.codeKey)
            };
        });

        if (common.getLang() == 'en') {
            categories.value = hospitalDepth1En.value.map(item => {
                return {
                    category_name: item.codeValue ?? '',
                    category_key: item.codeKey
                };
            });
        } else {
            categories.value = hospitalDepth1Id.value.map(item => {
                return {
                    category_name: item.codeValue ?? '',
                    category_key: item.codeKey
                };
            });
        }
    } else if (route.path === '/inquiry/news') {
        categories.value = [
            { category_name: t('news.tab.1') },
            { category_name: t('news.tab.2') },
            { category_name: t('news.tab.3') },
        ];
    } else if (route.path === '/inquiry/faq') {
        categories.value = [
            { category_name: t('faq.tab.1') },
            { category_name: t('faq.tab.2') },
            { category_name: t('faq.tab.3') },
            { category_name: t('faq.tab.4') },
            { category_name: t('faq.tab.5') },
            { category_name: t('faq.tab.6') },
            { category_name: t('faq.tab.7') },
        ];
    } else {
        categories.value = []; // 기본값 설정 (필요에 따라 다른 설정 가능)
    }

    // if (categories.value.length > 0) {
    //     const first = categories.value[0];
    //     selectedIndex.value = 0;
    //     selectCategory(0, first.category_name, first?.category_key);
    // }
    selectedIndex.value = -1;
    selectCategory(-1, '');
};

watch(() => composer.locale, (newLang, oldLang) => {
    setCategories(); // 다시 설정
});

// 컴포넌트 마운트 시 경로에 따라 카테고리 설정
onMounted(() => {
    setCategories();
});
// const categories = ref([
//     {
//         category_name: t('mts.tab.1'),
//     },
//     {
//         category_name: t('mts.tab.2'),
//     },
//     {
//         category_name: t('mts.tab.3'),
//     },
//     {
//         category_name: t('mts.tab.4'),
//     },
//     {
//         category_name: t('mts.tab.5'),
//     },
//     {
//         category_name: t('mts.tab.6'),
//     },
//     {
//         category_name: t('mts.tab.7'),
//     },
//     {
//         category_name: t('mts.tab.8'),
//     },
//     {
//         category_name: t('mts.tab.9'),
//     },
//     {
//         category_name: t('mts.tab.10'),
//     },
//     {
//         category_name: t('mts.tab.other'),
//     },

// ])
</script>

<style scoped></style>
