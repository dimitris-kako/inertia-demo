<template>
    <Link
        class="text-blue-500 hover:underline"
        :class="{'font-bold underline': active}"
    >
        <slot></slot>
    </Link>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";

export default {
    name: "Nav",
    components: { Link },
    props: {
        active: Boolean,
    }
}
</script>

<style scoped>

</style>
