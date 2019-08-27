<template>
    <div class="menu">
        <h1>Guitar fretboard for begineers</h1>
        <div class="options">
            <span class="title">Fret</span>
            <div class="option" :class="{'active': length === 22}" @click="changeFret(22)">22</div>
            <div class="option" :class="{'active': length === 24}" @click="changeFret(24)">24</div>
        </div>
        <div class="options">
            <span class="title">Key</span>
            <div class="option" :class="{'active': key === item}" v-for="(item, i) in keyMap" :key="i" @click="changeKey(item)">{{item}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Menu',
    computed: {
        ...mapGetters([
            'key',
            'length',
            'keyMap'
        ])
    },
    methods: {
        changeKey(key) {
            this.$store.dispatch('ChangeKey', key)
        },
        changeFret(num) {
            this.$store.dispatch('ChangeFret', num)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.menu {
    h1 {
        margin-bottom: 20px;
    }
    .options {
        font-weight: bold;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        .title {
            display: inline-block;
            width: 42px;
        }
        .option {
            display: inline-block;
            font-weight: 400;
            cursor: pointer;
            min-width: 40px;
            text-align: center;
            margin-left: 10px;
            border: 1px solid $d;
            box-sizing: border-box;
            transition: .5s;
            position: relative;
            overflow: hidden;
            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                background-color: $d;
                position: absolute;
                top: 0;
                left: -100%;
                transition: .5s;
                z-index: -1;
            }
            &:hover,
            &.active {
                color: #FFF;
                &:after {
                    left: 0;
                }
            }
        }
    }
}
</style>