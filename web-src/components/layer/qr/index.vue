<template>
    <div class="layer_qr">
        <div class="qr_wrap">
            <div class="qr" v-html="data"></div>
            <div class="name">{{ $t("LayerQR.name") }} {{ name }}</div>
        </div>
        <div class="button" @click="$emit('close')">
            {{ $t("LayerQR.close") }}
        </div>
    </div>
</template>

<script setup lang="ts">
import QRCode from "qrcode";

const props = defineProps<{
    qrlink: string;
    name: string;
}>();

const data = ref("");
let isMounted = true;

onMounted(() => {
    QRCode.toString(props.qrlink, {
        type: "svg",
        width: 200,
        margin: 1,
    })
        .then((result) => {
            if (isMounted) {
                data.value = result;
            }
        })
        .catch((error) => {
            console.error("QR Code generation failed:", error);
        });
});

onBeforeUnmount(() => {
    isMounted = false;
});

</script>

<style lang="scss" scoped>
.layer_qr {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 4rem 2rem 2.5rem;

    .qr_wrap {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .qr {
            text-align: center;
        }

        .name {
            margin-top: 25px;
            margin-bottom: 20%;
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            color: #505050;
            text-align: center;
        }
    }

    .button {
        @include flexCenter;
        margin-top: auto;
        width: 100%;
        height: 50px;
        border-radius: 25px;
        background: #0047a0;
        font-size: 0.85em;
        font-weight: 700;
        color: #fff;
        cursor: pointer;
    }
}
</style>