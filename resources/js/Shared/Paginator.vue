<template>
    <div>
        <Component v-for="link in links">
            <Link
                class="p-2"
                v-if="link.url"
                v-html="link.label"
                :href="link.url"/>
        </Component>
    </div>
</template>

<script setup>

import {defineProps} from "vue";

defineProps({
    links: Array,
});
</script>
