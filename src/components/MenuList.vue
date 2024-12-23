<script lang="ts" setup>
import { ref, watch } from "vue";

const selected = ref("Kue Basah");

const menus = ref([
    {
        category: "Kue Basah",
        items: [
            {
                image: "https://example.com/images/lemper.jpg",
                label: "Lemper",
                description:
                    "Kue basah berisi ayam suwir yang dibungkus daun pisang.",
                link: "https://example.com/lemper",
            },
            {
                image: "https://example.com/images/arem-arem.jpg",
                label: "Arem-Arem",
                description:
                    "Kue basah berbentuk lonjong berisi isian seperti ayam atau sambal goreng.",
                link: "https://example.com/arem-arem",
            },
            {
                image: "https://example.com/images/nagasari.jpg",
                label: "Nagasari Bandung",
                description:
                    "Kue basah khas Bandung berisi pisang dan terbuat dari tepung beras.",
                link: "https://example.com/nagasari-bandung",
            },
            {
                image: "https://example.com/images/martabak-mini.jpg",
                label: "Martabak Mini",
                description:
                    "Martabak manis dengan ukuran kecil dan beragam topping.",
                link: "https://example.com/martabak-mini",
            },
        ],
    },
    {
        category: "Roti",
        items: [
            {
                image: "https://example.com/images/donat.jpg",
                label: "Donat",
                description:
                    "Roti berbentuk cincin dengan aneka topping atau taburan gula.",
                link: "https://example.com/donat",
            },
            {
                image: "https://example.com/images/bolu.jpg",
                label: "Bolu",
                description:
                    "Roti manis yang lembut dan cocok untuk berbagai acara.",
                link: "https://example.com/bolu",
            },
            {
                image: "https://example.com/images/bolu-zebra.jpg",
                label: "Bolu Zebra",
                description:
                    "Bolu dengan motif zebra dari adonan cokelat dan vanilla.",
                link: "https://example.com/bolu-zebra",
            },
            {
                image: "https://example.com/images/bolu-kukus.jpg",
                label: "Bolu Kukus",
                description:
                    "Bolu yang dikukus sehingga memiliki tekstur lembut dan mekar.",
                link: "https://example.com/bolu-kukus",
            },
        ],
    },
    {
        category: "Gorengan",
        items: [
            {
                image: "https://example.com/images/sosis-solo.jpg",
                label: "Sosis Solo",
                description:
                    "Sosis khas Solo yang diisi daging dan dibalut kulit tipis.",
                link: "https://example.com/sosis-solo",
            },
            {
                image: "https://example.com/images/risol-mayo.jpg",
                label: "Risol Mayo",
                description:
                    "Gorengan dengan isi mayones, sosis, dan telur yang creamy.",
                link: "https://example.com/risol-mayo",
            },
            {
                image: "https://example.com/images/risol-ragout.jpg",
                label: "Risol Ragout",
                description:
                    "Risol dengan isian ragout sayur atau daging yang gurih.",
                link: "https://example.com/risol-ragout",
            },
        ],
    },
]);

</script>

<template>
    <div class="flex gap-1 md:gap-3 mt-14">
        <button
            v-for="category in menus"
            :key="category.category"
            @click="selected = category.category"
            :id="category.category"
            :class="{
                'border-b-2 border-secondary': selected === category.category,
                'border-b-2 border-transparent': selected !== category.category,
            }"
            class="px-4 py-2 text-sn md:text-base"
        >
            <h3>{{ category.category }}</h3>
        </button>
    </div>

    <div class="flex flex-wrap gap-6 justify-center md:gap-12 items-start pt-12">
        <div
            v-for="item in menus.find((menu) => menu.category === selected)?.items"
            :key="item.label"
            class="max-w-[100px] md:max-w-[200px] flex flex-col justify-center items-center"
        >
            <img
                :src="item.image"
                :alt="item.label"
                class="aspect-square w-[100px] md:w-[150px] rounded-full bg-slate-400"
            />
            <h1 class="text-lg text-center font-bold mt-2">{{ item.label }}</h1>
            <p class="md:text-sm text-xs text-gray-600 text-center">{{ item.description }}</p>
        </div>
    </div>
</template>
