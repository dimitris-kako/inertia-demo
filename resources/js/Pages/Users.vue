<template>
    <h1>Users</h1>

    <Nav/>

    <div style="margin-top: 1400px">
        <p>Current time: {{ time }}</p>
        <Link
            href="/users"
            class="text-blue-500"
            preserve-scroll
        >Refresh
        </Link>
    </div>
</template>

<script>
import Nav from "../Shared/Nav";
import {Link} from "@inertiajs/inertia-vue3";

export default {
    name: "Users",
    components: {Nav, Link},
    props: {
        time: String,
    }

}
</script>

<style scoped>

</style>
