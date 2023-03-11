<template>
    <div class="fill-height">
        <v-navigation-drawer v-model="drawer" app>
            <v-list density="compact" nav>
                <v-list-item v-for="page of pages" :key="page.title" :title="page.title" :to="page.path"
                    :prepend-icon="page.icon">
                    <!-- <NuxtLink to="/" class="ml-5">{{ page.title }}</NuxtLink> -->
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Colorify</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-main class="fill-height">
            <slot></slot>
        </v-main>
    </div>
</template>
<script setup>
const drawer = ref(true);
const pageStore = usePageStore();
const pages = pageStore.pages;
</script>
<style scoped></style>