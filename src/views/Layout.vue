<template>
    <div class="layout-wrapper">
        <Menu/>
        <router-view/>
    </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
    name: 'Layout',
    components: {
        Menu
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.layout-wrapper {
    font-size: 18px;
    padding: 15px;
    max-width: 1300px;
    margin: 0 auto;
}
</style>