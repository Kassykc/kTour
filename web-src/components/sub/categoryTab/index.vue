<template>
    <div class="cartegory_tab w-full max-w-[1340px] px-[20px] my-0 mx-auto">
        <div class="category_wrap flex justify-center items-center flex-wrap gap-[14px]">
            <div class="category min-w-[40px] md:min-w-[75px] px-[10px] md:px-[30px] py-[8px] md:py-[14px] text-[13px] md:text-[18px] text-center rounded-[18px] md:rounded-[30px] cursor-pointer font-[700] border border-[#AFAFAF]"
                :class="selectedIndex == -1 ? 'bg-[#1F78FF] text-white' : 'bg-white text-[#AFAFAF]'"
                @click="selectCategory(-1, '')" v-if="route.path == '/mtc'">
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
import { boardType } from "@/assets/js/static";

const codeStore = useMenuStore('cate-code');

const categories = ref([]);
const hospitalDepth1En = ref();
const hospitalDepth2En = ref();
const hospitalDepth1Id = ref();
const hospitalDepth2Id = ref();
const selectedChildren = ref([]);

// 현재 경로 가져오기
const route = useRoute();
const router = useRouter();

// const router = useRouter();
const emit = defineEmits(); // 부모에게 전달할 이벤트 정의
const selectedIndex = ref(route.path == '/mtc' ? -1 : 0);
const setCodeKey = ref();


// 카테고리 클릭 시 해당 인덱스를 selectedIndex에 할당
const selectCategory = (index: number, categoryName: string, codeKey?: number | Object) => {

    selectedIndex.value = index;

    if (route.path == '/mtc') {
        const getCodeKey = codeKey ? codeKey : setCodeKey.value ? setCodeKey.value : null;
        setCodeKey.value = getCodeKey;

        router.replace({
            query:{
                tab: index ?? -1,
                key: setCodeKey.value ?? null,
            }
        })

        if (index == -1) {
            selectedChildren.value = [];
            return emit('update:selectedCategory', categoryName, selectedChildren.value, getCodeKey);
        }

        if (getCodeKey && composer.locale == 'en') {
            selectedChildren.value = hospitalDepth2En.value.filter(
                item => item.codeParentKey == getCodeKey
            );
        } else if (getCodeKey && composer.locale == 'id') {
            selectedChildren.value = hospitalDepth2Id.value.filter(
                item => item.codeParentKey == getCodeKey
            );
        } else {
            selectedChildren.value = []; // 없으면 초기화
        }
        return emit('update:selectedCategory', categoryName, selectedChildren.value, getCodeKey); // 카테고리 이름을 부모에게 전달
    } else if (route.path == '/inquiry/news') {
        return emit('update:selectedCategory', categoryName, selectedChildren.value, codeKey);
    } else if (route.path == '/inquiry/faq') {
        return emit('update:selectedCategory', categoryName, selectedChildren.value, codeKey);
    }
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
            {
                category_name: t('board.part1.title'),
                category_key: { type: boardType.contentAll, key: '' }
            },
            {
                category_name: t('board.part2.title'),
                category_key: { type: boardType.video, key: '200' }
            },
            {
                category_name: t('board.part3.title'),
                category_key: { type: boardType.news, key: '100' }
            },
        ];
    } else if (route.path === '/inquiry/faq') {
        categories.value = [
            {
                category_name: "ALL",
                category_key: boardType.faq
            },
            {
                category_name: t('faq.part1.title'),
                category_key: boardType.general
            },
            {
                category_name: t('faq.part2.title'),
                category_key: boardType.visa
            },
            {
                category_name: t('faq.part3.title'),
                category_key: boardType.clinics
            },
            {
                category_name: t('faq.part4.title'),
                category_key: boardType.tour
            },
            {
                category_name: t('faq.part5.title'),
                category_key: boardType.pay
            },
            {
                category_name: t('faq.part6.title'),
                category_key: boardType.after
            },
            {
                category_name: t('faq.part7.title'),
                category_key: boardType.other
            },
        ];
    } else {
        categories.value = []; // 기본값 설정 (필요에 따라 다른 설정 가능)
    }
    selectedIndex.value = selectedIndex.value != null ? selectedIndex.value : -1;
    selectedIndex.value = route.query.tab ? parseInt(route.query.tab) : -1;
    const codeKey = route.query.key ? parseInt(route.query.key) : null;
    selectCategory(selectedIndex.value, '', codeKey);
};

watch(() => composer.locale, (newLang, oldLang) => {
    setCategories(); // 다시 설정
});

// 컴포넌트 마운트 시 경로에 따라 카테고리 설정
onMounted(() => {
    setCategories();
});
</script>

<style scoped></style>
