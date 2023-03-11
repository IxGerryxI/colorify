<template>
    <div class="py-5 px-7">
        <h1>Generate a Color Scheme</h1>
        <v-card class="mb-5 pa-4">
            <h2>Light or Dark Theme</h2>
            <div class="d-flex justify-space-around pa-15">
                <v-btn theme="light" @click="setTheme('light')">Light</v-btn>
                <v-btn theme="dark" @click="setTheme('dark')">Dark</v-btn>
            </div>
        </v-card>
        <v-card class="mb-5 pa-4">
            <h2>Pick your Primary Base Color</h2>
            <div class="d-flex">
                <HslColorpicker :hsl="primaryBaseColor" style="flex: 1 0 50%"></HslColorpicker>
                <div style="flex: 1 0 50%" class="text-center">
                    <div class="mb-3">
                        <v-icon icon="mdi-information"></v-icon>
                        choose a color that makes the button look good
                    </div>
                    <button :style="buttonStyle" class="btn">Do I look ok?</button>
                </div>
            </div>
        </v-card>
    </div>
</template>
<script setup>
import { useTheme } from 'vuetify'
const primaryBaseColor = ref({
    hue: 180,
    saturation: 50,
    lightness: 50,
})

const buttonStyle = computed(() => {
    const hue = primaryBaseColor.value.hue;
    const sat = primaryBaseColor.value.saturation + '%';
    const lght = primaryBaseColor.value.lightness + '%';
    const bgColor = `hsl(${hue}, ${sat}, ${lght})`;
    const h = primaryBaseColor.value.hue / 360;
    const s = primaryBaseColor.value.saturation / 100;
    const l = primaryBaseColor.value.lightness / 100;
    const rgb = HSLToRGB(h, s, l);

    const blackRGB = [18, 18, 18];
    const whiteRGB = [239, 239, 239];
    const contrastRatioBlack = getRGBContrastRatio(rgb, blackRGB);
    const contrastRatioWhite = getRGBContrastRatio(rgb, whiteRGB);

    console.log(contrastRatioBlack, ' > ', contrastRatioWhite, ' = ', contrastRatioBlack > contrastRatioWhite)
    const fontColor = contrastRatioBlack > contrastRatioWhite ? blackRGB : whiteRGB;
    return `background-color: ${bgColor};color: rgb(${fontColor.join(',')})`
})

const theme = useTheme()
function setTheme(themeName) {
    theme.global.name.value = themeName;
}

</script>
<style scoped>
.btn {
    font-size: 14px;
    border: 1px solid #aaa;
    border-radius: 4px;
    outline: none;
    padding: 10px 15px;
    font-weight: 700;
}
</style>