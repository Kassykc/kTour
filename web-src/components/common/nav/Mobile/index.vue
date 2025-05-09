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
                            {{ t(item.title) }}
                        </a>
                    </div>
                    <div v-else>
                        <NuxtLink :to="item.link" :id="'nav' + index" @click="menuDepth($event, index)" :class="{ selected: item.isOpen }">
                            {{ t(item.title) }}
                        </NuxtLink>
                    </div>
                    <ul v-if="item.submenu" :id="'nav' + index + '_s'" class="nav_2depth" v-show="item.isOpen">
                        <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                            <NuxtLink :to="subItem.link">{{ t(subItem.title) }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { t } from '@/plugins/i18n'

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
        title: 'menu.1.name',
        link: '',
        submenu: [
            { title: 'menu.1.2depth.1.name', link:'/' },
            { title: 'menu.1.2depth.2.name', link:'/' },
            { title: 'menu.1.2depth.3.name', link:'/' },
            { title: 'menu.1.2depth.4.name', link:'/' },
        ],
    },
    {
        title: 'menu.2.name',
        link: '',
        submenu: [
            { title: 'menu.2.2depth.1.name', link:'/' },
            { title: 'menu.2.2depth.2.name', link:'/' },
        ],
    },
    {
        title: 'menu.3.name',
        link: '',
        submenu: [
            { title: 'menu.3.2depth.1.name', link:'/' },
            { title: 'menu.1.2depth.2.name', link:'/' },
        ],
    },
    {
        title: 'menu.6.name',
        link: '',
        submenu: [
            { title: 'menu.6.2depth.1.name', link:'/' },
            { title: 'menu.6.2depth.2.name', link:'/' },
            { title: 'menu.6.2depth.3.name', link:'/' },
            { title: 'menu.6.2depth.4.name', link:'/' },
        ],
    },
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