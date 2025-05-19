<template>
    <div class="admin-layout h-[100vh]">
        <aside 
        :class="[
            'gnb flex flex-col justify-start items-center absolute top-0 w-[140px] h-[100vh] bg-[#424242] text-white !pt-[54px] transition-[left] duration-500 ease-in-out z-[2]',
            isOpen ? 'left-0' : 'left-[-130px]'
        ]"
        >
            <div class="page_title text-[14px] font-[500] text-center !mb-[34px] !px-[14px] !py-0">외국인환자유치 관리자 페이지</div>

            <div class="admin_name w-full text-[14px] font-[500] text-center !mb-[14px] !px-[14px] !py-0">
                관리자 :<br />
                {{ adminNm }}
            </div>

            <div @click="goHome" class="homepage_btn flex flex-col items-center justify-center gap-[4px] w-full h-[40px] text-[12px] text-[#818181] cursor-pointer text-center">
                <img src="@/assets/images/admin/home.png" alt="홈페이지 아이콘" class="home_icon">
                <span>Homepage</span>
            </div>
            <div @click="logout" class="logout_btn flex flex-col items-center justify-center !mb-[18px] w-full h-[40px] text-[12px] text-[#818181] cursor-pointer text-center">로그아웃</div>
            <nav class="nav w-full">
                <!-- 사이드바 영역 -->
                <AdminCommonSidebar @update-title="updatePageTitle" v-if="true"/>
            </nav>
            <div class="sidebar_btn" @click="toggleSidebar"
            :class="[
                'absolute top-[50%] left-[139px] w-[15px] h-[38px] cursor-pointer transition-[left] duration-500 ease-in-out z-[1] translate-y-[-50%]',
                isOpen
                    ? 'bg-[url(@/assets/images/admin/menu_close.png)]'
                    : 'bg-[url(@/assets/images/admin/menu_open.png)]'
                ]"
            ></div>
        </aside>
        <div :class="['admin-content transition-[padding] duration-500 ease-in-out',
            isOpen
                ? '!pl-[140px]'
                : '!pl-0'
        ]">
            <header class="current_page_name text-[12px] md:text-[20px] font-[600] !pt-[80px] !pb-[16px] !pl-[20px]">{{ currentPageTitle }}</header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from "@/stores/admin/common/loginStore";

const isOpen = ref(true); // 사이드바 상태

const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};

const router = useRouter();
const logoutStore = useLoginStore('logout');

const adminNm = ref('');
const currentPageTitle = ref("Administration");
const isSidebarOpen = ref(true);

const logout = async () => {
    const response = await logoutStore.goLogout();
    if (response) {
        document.cookie.split(";").forEach(cookie => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        });

        SysAlert({
            type: 'alert',
            message: '로그아웃되었습니다.',
            callback: () => router.push('/admin'),
        });
    }
};

const goHome = () => router.push('/');

const updatePageTitle = (title: string) => {
    currentPageTitle.value = title;
};

onMounted(() => {
    const storedMenu = sessionStorage.getItem('nowMenu');
    if (storedMenu) {
        currentPageTitle.value = storedMenu;
    }

    const isLogin = common.getCookie('medicalIsLogin');
    if (isLogin === 'Y') {
        adminNm.value = common.getCookie('medicalUserNm');
    }
});
</script>
<style lang="scss" scoped>
</style>
