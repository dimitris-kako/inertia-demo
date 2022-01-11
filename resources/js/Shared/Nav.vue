<template>
    <nav>
        <ul>
            <li>
                <NavLink href="/" :active="$page.component === 'Home'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component === 'Users'">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component === 'Settings'">
                    Settings
                </NavLink>
            </li>
            <li>
                <Link href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Log Out</Link>
            </li>

        </ul>
    </nav>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";
import NavLink from "./NavLink";

export default {
    name: "Nav",
    components: {Link, NavLink},
}
</script>

<style scoped>

</style>
