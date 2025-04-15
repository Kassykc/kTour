<template>
    <div>
        <div id="menu-icon2" class="all_menu" @click="menuClick">
            <span></span>
            <span></span>
            <span class="short"></span>
        </div>
        <nav>
            <ul id="nav">
                <li v-for="(item, index) in menuItems" :key="index">
                    <div v-if="item.link.startsWith('http')">
                        <a :href="item.link" :id="'nav' + index" target="_blank" rel="noopener noreferrer">
                            {{ item.title }}
                        </a>
                    </div>
                    <div v-else>
                        <NuxtLink :to="item.link" :id="'nav' + index" @click="menuDepth($event, index)" :class="{ selected: item.isOpen }">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                    <ul v-if="item.submenu" :id="'nav' + index + '_s'" class="nav_2depth" v-show="item.isOpen">
                        <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                            <NuxtLink :to="subItem.link">{{ subItem.title }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const routerPath = '';

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
        title: 'WE ARE',
        link: '',
        submenu: [
            { title: '회사소개', link:'/' },
            { title: '조직구성', link:'/' },
            { title: '연혁', link:'/' },
            { title: '대표이사 경력사항', link:'/' },
        ],
    },
    {
        title: 'IT',
        link: '',
        submenu: [
            { title: '업무분야', link:'/' },
            { title: 'PORTFOLIO', link:'/' },
        ],
    },
    {
        title: 'DESIGN',
        link: '',
        submenu: [
            { title: '업무분야', link:'/' },
            { title: 'PORTFOLIO', link:'/' },
        ],
    },
    {
        title: 'MICE',
        link: '',
        submenu: [
            { title: '업무분야', link:'/' },
            { title: 'PORTFOLIO', link:'/' },
        ],
    },
    {
        title: 'INFORMATION',
        link: '',
        submenu: [
            { title: '공지사항', link: '/' },
            { title: '견적/상담문의', link: '/' },
            { title: '연구비 및 사업공고', link: '/' },
            { title: '기업관련 공고', link: '/' },
            { title: '고객센터', link: '/' },
        ],
    },
    // { title: 'Gallery', link: '/' },
    // { title: 'Artist', link: '/artist-list' },
    // { title: 'Global-Medicity.com', link: 'https://global-medicity.com/' },
]);

const menuClick = () => {
    const navElement = document.getElementById('nav');
    const menuIcon = document.getElementById('menu-icon2');
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
});
</script>

<style scoped></style>