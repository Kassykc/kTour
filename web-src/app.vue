<template>
    <div class="MainView">
        <NuxtLayout>
            <NuxtPage />
            <LayerPopup />
            <CommonSysAlert :show="sysAlert.show" :message="sysAlert.message" :okText="sysAlert.okText"
                :cancelText="sysAlert.cancelText" @close="sysAlert.hideAlert" @ok="handleOk" @cancel="handleCancel" />
        </NuxtLayout>
    </div>
</template>

<script lang="ts" setup>
import { useSysAlertStore } from "@/stores/common/sysAlertStore";
import { useHistoryStore } from '@/stores/common/historyStore';
import { useRouter } from 'vue-router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { onMounted, nextTick } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

const router = useRouter();
const route = useRoute();
const historyStore = useHistoryStore();
const isBackNavigation = ref(false);

const sysAlert = useSysAlertStore();

useHead({
    title: "K-Medi ART SERVICE",
    titleTemplate: "%s",
    meta: [
        {
            name: "viewport",
            content:
                "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
        },
        {
            name: "description",
            content: "K-Art, a Valuable Choice for an Elegant Space ",
        },
        {
            name: "keywords",
            content:
                "K-MEDI, k-medi, k medi, medi, MEDI, (주)메디씨티, MEDI-CITY, MEDICITY, medicity, medical, medical video, e-Learning",
        },
        { property: "og:title", content: "K-Medi ART SERVICE" },
        {
            property: "og:description",
            content: "K-Art, a Valuable Choice for an Elegant Space",
        },
        {
            property: "og:image",
            content: "/img/common/art_thumbnail.png",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://art.global-medicity.com" },
        {
            name: "naver-site-verification",
            content: "0c45b8f31f79b3c1f4765da975406015cc05ac56",
        },
    ],
});

const handleBackup = () => {
    const routePath = router.currentRoute.value.fullPath;  // 현재 페이지의 fullPath
    const customData = sessionStorage.getItem('customData') || null;
    const data = {
        path: routePath,
        data: customData,
    }
    if (isBackNavigation.value == false) {
        historyStore.saveHistory(data);
    }
    if (customData) {
        sessionStorage.removeItem('customData')
    }
    isBackNavigation.value = false;
};

const handleBackNavigation = () => {
    historyStore.gobackProcess();
};

onMounted(() => {
    router.beforeEach((to, from, next) => {
        common.setCookie('to', to.path);
        common.setCookie('from', from.path);
        if (from.path.includes('no-auth') && !(to.path.includes('/login') || to.path.includes('/signup') || to.path.includes('/promotion') || to.path == '/')) {
            next('/no-auth');
        } else {
            isBackNavigation.value = false;
            common.setCookie('isBack', isBackNavigation.value);
            handleBackup();
            next();
        }
    });

    document.addEventListener(
        "touchmove",
        (event) => {
            if (window.scrollY === 0) {
                event.preventDefault();
            }
        },
        { passive: false }
    );

    // 뒤로 가기 처리
    window.addEventListener('popstate', () => {
        const to = common.getCookie('to');
        const from = common.getCookie('from');
        const isLogin = common.getCookie('user');
        if (from != null && to != null && isLogin != null && (from.includes('no-auth') || to.includes('no-auth'))) {
            router.replace('/no-auth');
        } else {
            isBackNavigation.value = true;
            handleBackNavigation();
            common.setCookie('isBack', isBackNavigation.value);
        }
    });

    window.addEventListener('beforeunload', function (event) {
        // event.preventDefault();
        if (route.path.includes('no-auth')) {
            router.replace('/no-auth');
        } else {
            router.replace(route.path);
        }
    });

    window.addEventListener('keydown', function (event) {
        if ((event.key === 'F5') || (event.ctrlKey && event.key === 'r')) {
            // event.preventDefault();
            router.replace(route.fullPath);
        }
    });

    nextTick(() => {

        AOS.init({
            duration: 1000, // 애니메이션 지속 시간 (ms)
            once: true, // 애니메이션이 한 번만 실행되도록 설정
            easing: "ease-in-out", // 애니메이션 이징 설정
        });
    });
});

onUnmounted(() => {
    window.removeEventListener('popstate', handleBackNavigation);
});

// Alert 버튼 핸들러
const handleOk = () => {
    if (sysAlert.callback) {
        sysAlert.callback();
    }
    sysAlert.hideAlert();
};

const handleCancel = () => {
    sysAlert.hideAlert();
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
// @import "@/assets/css/aos.css";
@import "@/assets/css/board.css";
@import "@/assets/css/style.css";
@import "@/assets/css/default.css";

.MainView {
    width: 100%;
    min-width: 100%;
    min-height: -webkit-fill-available;
    font-size: 16px;
    position: relative;
    // overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: none;
    touch-action: none;
}
</style>
