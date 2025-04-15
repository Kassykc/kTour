<template>
    <div class="admin-layout">
        <aside class="gnb open">
            <div class="page_title">Art Medi 관리자 페이지</div>

            <div class="admin_name">
                관리자 :<br />
                {{ adminNm }}
            </div>

            <div @click="goHome" class="homepage_btn">
                <img src="@/assets/images/admin/home.png" alt="홈페이지 아이콘" class="home_icon">
                <span>Homepage</span>
            </div>
            <div @click="logout" class="logout_btn">로그아웃</div>
            <nav class="nav">
                <!-- 사이드바 영역 -->
                <AdminCommonSidebar @update-title="updatePageTitle" v-if="true"/>
            </nav>
            <div class="sidebar_btn"></div>
        </aside>
        <div class="admin-content">
            <header class="current_page_name">{{ currentPageTitle }}</header>
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useLoginStore } from "@/stores/admin/common/loginStore";

const router = useRouter();
const logoutStore = useLoginStore('logout');

const adminNm = ref('');

const goto = (route: string) => {
    router.push('/admin/' + route);
};

const logout = async () => {
    const response = await logoutStore.goLogout();
    if (response) {
        common.setCookie('userNm', '');
        common.setCookie('artToken', '');
        common.setCookie('isLogin', 'N');

        SysAlert({
            type: 'alert',
            message: '로그아웃되었습니다.',
            callback: () => router.push('/admin'),
        })
    }
};

const goHome = () => {
    router.push('/');
};

const currentPageTitle = ref("Administration");

const updatePageTitle = (title: string) => {
    currentPageTitle.value = title;
};

onMounted(() => {
    const gnb = document.querySelector('.gnb');
    const sidebar_btn = document.querySelector('.sidebar_btn');
    const content = document.querySelector('.admin-content');

    if (sidebar_btn && gnb) { // 요소가 존재하는지 확인
        sidebar_btn.addEventListener('click', () => {
            if (gnb.classList.contains('open')) {
                gnb.classList.remove('open');
                content.classList.add('wide');
            } else {
                gnb.classList.add('open');
                content.classList.remove('wide');
            }
        });
    }

    if (sessionStorage.getItem('nowMenu') != null || sessionStorage.getItem('nowMenu') != '') {
        currentPageTitle.value = sessionStorage.getItem('nowMenu');
    }


    const islogin = common.getCookie('isLogin');
    if (islogin == 'Y') {
        adminNm.value = common.getCookie('userNm')
    }
});
</script>
<style lang="scss" scoped>
.admin-layout {

    .gnb {
        @include flexbox(center, flex-start);
        flex-direction: column;
        position: absolute;
        top: 0;
        left: -130px;
        width: 140px;
        height: 100vh;
        background: $color_admin_bg;
        color: $color_white_000;
        padding-top: 54px;
        transition: left 0.5s ease-in-out;
        z-index: 2;

        &.open {
            left: 0;

            .sidebar_btn {
                background: url('@/assets/images/admin/menu_close.png') 0 0 no-repeat;
            }
        }


        .page_title {
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 34px;
            padding: 0 14px;
        }

        .admin_name {
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            margin-bottom: 14px;
            padding: 0 14px;
        }

        .logout_btn,
        .homepage_btn {
            width: 100%;
            height: 40px;
            font-size: 12px;
            color: $color_admin_txt_1;
            cursor: pointer;
            text-align: center;
        }

        .homepage_btn {
            @include flexCenter;
            flex-direction: column;
            gap: 4px;
        }

        .logout_btn {
            @include flexCenter;
            flex-direction: column;
            margin-bottom: 18px;
        }

        .nav {
            width: 100%;
        }

        .sidebar_btn {
            position: absolute;
            top: 50%;
            left: 139px;
            transform: translateY(-50%);
            width: 15px;
            height: 38px;
            background: url('@/assets/images/admin/menu_open.png') 0 0 no-repeat;
            cursor: pointer;
            transition: left 0.5s ease-in-out;
            z-index: 1;
        }

    }

    .admin-content {
        padding-left: 140px;
        transition: padding 0.5s ease-in-out;

        &.wide {
            padding-left: 0;
        }

        .current_page_name {
            font-size: 22px;
            font-weight: 600;
            padding: 88px 0 16px 20px;
        }
    }
}
</style>