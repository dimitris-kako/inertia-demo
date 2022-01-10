<template>
    <h1>Hello, {{ name }}!</h1>

    <Nav></Nav>
</template>

<script>
import Nav from "../Shared/Nav";

export default {
    name: "Welcome",
    components: { Nav },
    props: {
        name: String,
        frameworks: Array
    }
}
</script>

<style scoped>

</style>
