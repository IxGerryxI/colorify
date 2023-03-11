<template>
    <div id="color-picker">
        <div class="color-sliders">
            <div class="sliders">
                <div class="hue">
                    <input type="range" min="0" max="360" class="slider" id="hueRange" v-model="hsl.hue"
                        @input="hslChanged">
                    <div class="range-thumb" :style="'left: ' + (hsl.hue / 360) * 100 + '%;'"></div>
                </div>

                <div class="saturation" :style="saturationBackgroundStyle">
                    <input type="range" min="0" max="100" class="slider" id="saturationRange" v-model="hsl.saturation"
                        @input="hslChanged">
                    <div class="range-thumb" :style="'left: ' + (hsl.saturation / 100) * 100 + '%;'"></div>
                </div>

                <div class="lightness" :style="lightnessBackgroundStyle">
                    <input type="range" min="0" max="100" class="slider" id="lightnessRange" v-model="hsl.lightness"
                        @input="hslChanged">
                    <div class="range-thumb" :style="'left: ' + (hsl.lightness / 100) * 100 + '%;'"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    hsl: {
        type: Object,
        default: () => ({
            hue: 180,
            saturation: 50,
            lightness: 50,
        })
    }
})

const emit = defineEmits(['update:hsl'])
const hsl = ref(props.hsl);

function hslChanged(event) {
    emit('update:hsl', hsl)
}

const lightnessBackgroundStyle = computed(() => {
    return 'background: linear-gradient(to right, #000000 0%, ' + getHueOutput() + ' 50%, #ffffff 100%)';
});

const saturationBackgroundStyle = computed(() => {
    return 'background: linear-gradient(to right, ' + getDesaturatedOutput() + ' 0%, ' + getHueOutput() + ' 100%)';
});

function getHueOutput() {
    return "hsl(" + hsl.value.hue + ", 100%, 50%)";
}

function getDesaturatedOutput() {
    return "hsl(" + hsl.value.hue + ", 0%, 50%)";
}
</script>
<style scoped>
#color-picker .color-sliders {
    width: 100%;
    padding: 0.75rem 0.75rem 0;
}

#color-picker .color-sliders .inputs {
    width: 4rem;
    padding-left: 0.75rem;
}

#color-picker .color-sliders .inputs input {
    height: 1.5rem;
    width: 100%;
    margin-bottom: 0.75rem;
}

#color-picker .color-sliders .inputs input:last-child {
    border-bottom: none;
}

#color-picker .hue,
#color-picker .saturation,
#color-picker .lightness,
#color-picker .alpha {
    width: 100%;
    height: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;
    border-radius: 5px;
}

#color-picker .hue:last-child,
#color-picker .saturation:last-child,
#color-picker .lightness:last-child,
#color-picker .alpha:last-child {
    border-bottom: none;
}

#color-picker .hue input[type=range].slider,
#color-picker .saturation input[type=range].slider,
#color-picker .lightness input[type=range].slider,
#color-picker .alpha input[type=range].slider {
    -webkit-appearance: none;
    position: absolute;
    width: 100%;
    height: 1.5rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    cursor: pointer;
    outline: none;
    z-index: 2;
}

#color-picker .hue input[type=range].slider::-webkit-slider-thumb,
#color-picker .saturation input[type=range].slider::-webkit-slider-thumb,
#color-picker .lightness input[type=range].slider::-webkit-slider-thumb,
#color-picker .alpha input[type=range].slider::-webkit-slider-thumb {
    -webkit-appearance: none;
}

#color-picker .hue input[type=range].slider::-webkit-slider-thumb,
#color-picker .saturation input[type=range].slider::-webkit-slider-thumb,
#color-picker .lightness input[type=range].slider::-webkit-slider-thumb,
#color-picker .alpha input[type=range].slider::-webkit-slider-thumb {
    width: 12px;
    height: 1.5rem;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
}

#color-picker .hue input[type=range].slider::-moz-range-thumb,
#color-picker .saturation input[type=range].slider::-moz-range-thumb,
#color-picker .lightness input[type=range].slider::-moz-range-thumb,
#color-picker .alpha input[type=range].slider::-moz-range-thumb {
    width: 12px;
    height: 1.5rem;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

#color-picker .hue input[type=range]::-webkit-slider-runnable-track,
#color-picker .saturation input[type=range]::-webkit-slider-runnable-track,
#color-picker .lightness input[type=range]::-webkit-slider-runnable-track,
#color-picker .alpha input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 1.5rem;
    cursor: pointer;
    background: transparent;
    border-radius: 0;
    border: none;
}

#color-picker .hue input[type=range]:focus::-webkit-slider-runnable-track,
#color-picker .saturation input[type=range]:focus::-webkit-slider-runnable-track,
#color-picker .lightness input[type=range]:focus::-webkit-slider-runnable-track,
#color-picker .alpha input[type=range]:focus::-webkit-slider-runnable-track {
    background: transparent;
}

#color-picker .hue input[type=range]::-moz-range-track,
#color-picker .saturation input[type=range]::-moz-range-track,
#color-picker .lightness input[type=range]::-moz-range-track,
#color-picker .alpha input[type=range]::-moz-range-track {
    width: 100%;
    height: 1.5rem;
    cursor: pointer;
    background: transparent;
    border-radius: 0;
    border: none;
}

#color-picker .hue input[type=range]::-ms-track,
#color-picker .saturation input[type=range]::-ms-track,
#color-picker .lightness input[type=range]::-ms-track,
#color-picker .alpha input[type=range]::-ms-track {
    width: 100%;
    height: 1.5rem;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
}

#color-picker .hue input[type=range]::-ms-fill-lower,
#color-picker .saturation input[type=range]::-ms-fill-lower,
#color-picker .lightness input[type=range]::-ms-fill-lower,
#color-picker .alpha input[type=range]::-ms-fill-lower {
    background: transparent;
    border: none;
}

#color-picker .hue input[type=range]:focus::-ms-fill-lower,
#color-picker .saturation input[type=range]:focus::-ms-fill-lower,
#color-picker .lightness input[type=range]:focus::-ms-fill-lower,
#color-picker .alpha input[type=range]:focus::-ms-fill-lower {
    background: transparent;
}

#color-picker .hue input[type=range]::-ms-fill-upper,
#color-picker .saturation input[type=range]::-ms-fill-upper,
#color-picker .lightness input[type=range]::-ms-fill-upper,
#color-picker .alpha input[type=range]::-ms-fill-upper {
    background: transparent;
    border: none;
}

#color-picker .hue input[type=range]:focus::-ms-fill-upper,
#color-picker .saturation input[type=range]:focus::-ms-fill-upper,
#color-picker .lightness input[type=range]:focus::-ms-fill-upper,
#color-picker .alpha input[type=range]:focus::-ms-fill-upper {
    background: transparent;
}

#color-picker .hue .range-thumb,
#color-picker .saturation .range-thumb,
#color-picker .lightness .range-thumb,
#color-picker .alpha .range-thumb {
    position: absolute;
    height: 1.5rem;
    width: 1px;
    background-color: #1f2020;
    bottom: 0;
    z-index: 1;
}

#color-picker .hue .range-thumb::before,
#color-picker .hue .range-thumb::after,
#color-picker .saturation .range-thumb::before,
#color-picker .saturation .range-thumb::after,
#color-picker .lightness .range-thumb::before,
#color-picker .lightness .range-thumb::after,
#color-picker .alpha .range-thumb::before,
#color-picker .alpha .range-thumb::after {
    position: absolute;
    content: "";
    bottom: 0;
}

#color-picker .hue .range-thumb::before,
#color-picker .saturation .range-thumb::before,
#color-picker .lightness .range-thumb::before,
#color-picker .alpha .range-thumb::before {
    margin-left: -6px;
    border-top: 4px solid transparent;
    border-right: 3px solid #1f2020;
    border-bottom: 4px solid #1f2020;
    border-left: 3px solid transparent;
}

#color-picker .hue .range-thumb::after,
#color-picker .saturation .range-thumb::after,
#color-picker .lightness .range-thumb::after,
#color-picker .alpha .range-thumb::after {
    margin-left: 1px;
    border-top: 4px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 4px solid #1f2020;
    border-left: 3px solid #1f2020;
}

#color-picker .color-sliders {
    display: flex;
}

#color-picker .sliders {
    flex: 1;
}

#color-picker .inputs {
    display: flex;
    flex-direction: column;
}

#color-picker .hue {
    background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
}
</style>