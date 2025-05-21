<template>
    <div>
        <nav
            class="block absolute top-0 right-0 w-[280px] min-w-[280px] text-left"
            :class="isMenuOpen ? 'max-h-[455px] h-[455px]' : 'h-0 max-h-0'"
        >
            <ul id="nav"
                class="transition-all duration-500 ease-in-out overflow-hidden bg-[rgba(0,0,0,0.85)] "
                :class="isMenuOpen ? 'h-fit pointer-events-auto py-[85px] block' : 'h-0 px-0 pointer-events-none'"
            >
                <li v-for="(item, index) in menuItems" :key="index" class="relative">
                    <div v-if="item.link.startsWith('http')">
                        <a :href="item.link" :id="'nav' + index" target="_blank" rel="noopener noreferrer"
                            class="block text-[15px] font-[600] py-[21px] px-[20px] leading-[15px] text-center text-white"
                            :class="[
                                item.isOpen ? '!text-white bg-[#1D43FF]' : ''
                            ]"
                        >
                            {{ t(item.title) }}
                        </a>
                    </div>
                    <div v-else>
                        <NuxtLink :to="item.link" :id="'nav' + index" @click="menuDepth($event, index)"
                            class="block text-[15px] font-[600] py-[21px] px-[20px] leading-[15px] text-center text-white"
                            :class="[
                                item.isOpen ? '!text-white bg-[#1D43FF]' : ''
                            ]"
                            >
                            <!-- :class="{ selected: item.isOpen }" -->
                            {{ t(item.title) }}
                        </NuxtLink>
                    </div>
                    <ul v-if="item.submenu" :id="'nav' + index + '_s'" class="nav_2depth" v-show="item.isOpen">
                        <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex"
                            class="border-t border-[#f3e7ee]"
                        >
                            <NuxtLink :to="subItem.link"
                                class="block text-[#333] text-[14px] bg-white font-[500] py-[16px] pr-[20px] pl-[30px] leading-[15px] text-center"
                                @click.prevent="handleSubmenuClick(subItem)"
                            >{{ t(subItem.title) }}</NuxtLink>
                        </li>
                    </ul>
                </li>

                <CommonNavMobileLanguageSwitch />
            </ul>
        </nav>
        <div id="menu-icon2" class="all_menu ralative w-[30px] h-[20px] transform rotate-0 transition-all duration-500 ease-in-out cursor-pointer z-[9999]" @click="menuClick">
            <span 
                class="block absolute w-full h-[3px] bg-white left-0 opacity-[1]  transform  transition-all duration-250 ease-in-out"
                :class="isMenuOpen ? 'top-[6px] rotate-[-45deg]' : 'top-0 rotate-0'"
            ></span>
            <span 
                class="block absolute w-full h-[3px] bg-white top-[8px] left-0   transform rotate-0 transition-all duration-250 ease-in-out"
                :class="isMenuOpen ? 'opacity-[0]' : 'opacity-[1]'"
            ></span>
            <span 
                class="short block absolute  h-[3px] bg-white opacity-[1] transform transition-all duration-250 ease-in-out"
                :class="isMenuOpen ? 'top-[6px] rotate-[-135deg] w-[30px] left-0' : 'top-[17px] left-[10px] w-[20px] rotate-0'"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const scrollToSection = (tab: string) => {
    nextTick(() => {
        const el = document.getElementById(tab)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    })
}

const routerPath = '';

const isMenuOpen = ref(false)

interface SubMenuItem {
    title: string;
    link: string;
}

interface MenuItem {
    title: string;
    link: string;
    submenu?: SubMenuItem[];
    isOpen?: boolean;
}

const menuItems = ref<MenuItem[]>([
    {
        title: t('menu.1.name'),
        link: '',
        submenu: [
            { title: t('menu.1.2depth.1.name'), link: '/about', tab: 'company' },
            { title: t('menu.1.2depth.2.name'), link: '/about', tab: 'service' },
            { title: t('menu.1.2depth.3.name'), link: '/about', tab: 'korea' },
            { title: t('menu.1.2depth.4.name'), link: '/about', tab: 'meditour' },
        ],
    },
    {
        title: t('menu.2.name'),
        link: '',
        submenu: [
            { title: t('menu.2.2depth.1.name'), link: '/mtc' },
            { title: t('menu.2.2depth.2.name'), link: '/mtc' },
        ],
    },
    {
        title: t('menu.3.name'),
        link: '',
        submenu: [
            { title: t('menu.3.2depth.1.name'), link: '/tour/seoul' },
            { title: t('menu.3.2depth.2.name'), link: '/tour/gangwon' },
        ],
    },
    {
        title: t('menu.6.name'),
        link: '',
        submenu: [
            { title: t('menu.6.2depth.1.name'), link: '/inquiry/news' },
            { title: t('menu.6.2depth.2.name'), link: '/inquiry/faq' },
            { title: t('menu.6.2depth.3.name'), link: '/inquiry/contact' },
            { title: t('menu.6.2depth.4.name'), link: '/inquiry/consultation' },
        ],
    },
]);

const menuClick = () => {
    const navElement = document.getElementById('nav');
    const menuIcon = document.getElementById('menu-icon2');

    isMenuOpen.value = !isMenuOpen.value

    if (navElement && menuIcon) {
        navElement.classList.toggle('open');
        menuIcon.classList.toggle('open');
    }
};

const menuDepth = (e: Event, index: number) => {
    e.preventDefault();

    const wasOpen = menuItems.value[index].isOpen;
    menuItems.value.forEach((item) => {
        item.isOpen = false;
    });

    menuItems.value[index].isOpen = !wasOpen;
    // menuItems.value[index].isOpen = !menuItems.value[index].isOpen;
};

onMounted(() => {
    menuItems.value.forEach((item) => {
        item.isOpen = false;
    });

    document.addEventListener('click', handleClickOutside);

    if (route.query.tab) scrollToSection(route.query.tab.toString())
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

watch(
    () => route.query.tab,
    (newTab) => {
        if (newTab) scrollToSection(newTab.toString())
    }
)

const closeMenu = () => {
    isMenuOpen.value = false;

    const navElement = document.getElementById('nav');
    const menuIcon = document.getElementById('menu-icon2');

    navElement?.classList.remove('open');
    menuIcon?.classList.remove('open');

    menuItems.value.forEach((item) => {
        item.isOpen = false;
    });
};

const router = useRouter();

router.afterEach(() => {
    const navElement = document.getElementById('nav');
    const menuIcon = document.getElementById('menu-icon2');

    if (navElement && navElement.classList.contains('open')) {
        navElement.classList.remove('open');
    }

    if (menuIcon && menuIcon.classList.contains('open')) {
        menuIcon.classList.remove('open');
    }

    // 서브메뉴도 모두 닫기
    menuItems.value.forEach((item) => {
        item.isOpen = false;
    });
});

const handleClickOutside = (event: MouseEvent) => {
    const menu = document.getElementById('nav');
    const menuIcon = document.getElementById('menu-icon2');
    if (
        menu &&
        !menu.contains(event.target as Node) &&
        menuIcon &&
        !menuIcon.contains(event.target as Node)
    ) {
        closeMenu();
    }
};

const handleSubmenuClick = async (subItem: any) => {
    await router.push({ path: subItem.link, query: { tab: subItem.tab } })
    closeMenu()

    nextTick(() => {
        if (subItem.tab) {
        scrollToSection(subItem.tab)
        }
    })
}
</script>

<style scoped></style>