<template>
    <a :href="url" :title="name" target="_blank">
        <img :src="icon" :alt="`Icon for ${url}`" />
    </a>
</template>

<script>
export default {
    name: 'SocialIcon',
    props: {
        icon: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
img {
    width: 32px;
    height: 32px;
    margin-left: 10px;
}
</style>