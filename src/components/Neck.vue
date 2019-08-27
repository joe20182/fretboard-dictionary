<template>
    <div class="neck">
        <ul class="string hE">
            <li v-for="i in length + 1" :key="i" :class="{'rootNote': isRootNote(i + baseNotes[0] - 1)}">
                <span v-show="isInKey(i + baseNotes[0] - 1)">{{cvtName(i + baseNotes[0] - 1)}}</span>
            </li>
        </ul>
        <ul class="string B">
            <li v-for="i in length + 1" :key="i" :class="{'rootNote': isRootNote(i + baseNotes[1] - 1)}">
                <span v-show="isInKey(i + baseNotes[1] - 1)">{{cvtName(i + baseNotes[1] - 1)}}</span>
            </li>
        </ul>
        <ul class="string G">
            <li v-for="i in length + 1" :key="i" :class="{'rootNote': isRootNote(i + baseNotes[2] - 1)}">
                <span v-show="isInKey(i + baseNotes[2] - 1)">{{cvtName(i + baseNotes[2] - 1)}}</span>
            </li>
        </ul>
        <ul class="string D">
            <li v-for="i in length + 1" :key="i" :class="{'rootNote': isRootNote(i + baseNotes[3] - 1)}">
                <span v-show="isInKey(i + baseNotes[3] - 1)">{{cvtName(i + baseNotes[3] - 1)}}</span>
            </li>
        </ul>
        <ul class="string A">
            <li v-for="i in length + 1" :key="i" :class="{'rootNote': isRootNote(i + baseNotes[4] - 1)}">
                <span v-show="isInKey(i + baseNotes[4] - 1)">{{cvtName(i + baseNotes[4] - 1)}}</span>
            </li>
        </ul>
        <ul class="string lE">
            <li v-for="i in length + 1" :key="i" :class="{'rootNote': isRootNote(i + baseNotes[5] - 1)}">
                <span v-show="isInKey(i + baseNotes[5] - 1)">{{cvtName(i + baseNotes[5] - 1)}}</span>
            </li>
        </ul>
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
        <div class="dot dot4"></div>
        <div class="dot dot5"></div>
        <div class="dot dot6"></div>
        <div class="dot dot7"></div>
        <div class="dot dot8"></div>
        <div class="dot dot9"></div>
        <div class="dot dot10"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Neck',
    data() {
        return {
            baseNotes: [4, 11, 7, 2, 9, 4]
        }
    },
    computed: {
        ...mapGetters([
            'key',
            'length',
            'keyMap'
        ])
    },
    methods: {
        cvtName(num) {
            // 音名轉換
            return this.keyMap[num % 12];
        },
        isInKey(num) {
            // 算出調內音
            if (!this.key) {
                return true;
            }
            switch ((num - this.keyMap.indexOf(this.key)) % 12) {
                case 0:
                case 2:
                case 4:
                case 5:
                case 7:
                case 9:
                case 11:
                    return true;
                    break;
                default:
                    return false;
                    break;
            }
        },
        isRootNote(num) {
            if (!this.key) {
                return false;
            } else {
                return (num - this.keyMap.indexOf(this.key)) % 12 === 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.neck {
    position: relative;
    background-image: linear-gradient(45deg, #826132, #987D55);
    overflow: hidden;
    ul {
        list-style: none;
        @include clearfix();
        color: #FFF;
        font-weight: bold;
        position: relative;
        text-align: center;
        text-shadow: 1px 1px 0px #000;
        height: 32px;
        overflow: hidden;
        li {
            float: left;
            border-right: 3px solid #CCC;
            width: 50px;
            height: 32px;
            line-height: 32px;
            position: relative;
            &:first-child {
                width: 26px;
                background-color: $d;
                border-right: 2px solid #666;
                box-shadow: 2px 0px 0px rgba(black, .4);
            }
            &.rootNote {
                color: #f00;
            }
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 26px;
            width: calc(100% - 26px);
        }
        &.hE {
            &:before {
                top: 16px;
                height: 1px;
                background-color: #CCC;
            }
        }
        &.B {
            &:before {
                top: 16px;
                height: 1px;
                background-color: #CCC;
            }
        }
        &.G {
            &:before {
                top: 15px;
                height: 2px;
                background-color: rgba(#CCC, .6);
            }
        }
        &.D {
            &:before {
                top: 15px;
                height: 2px;
                background-color: rgba(#CCC, .6);
            }
        }
        &.A {
            &:before {
                top: 15px;
                height: 3px;
                background-color: rgba(#EEE, .5);
            }
        }
        &.lE {
            &:before {
                top: 15px;
                height: 3px;
                background-color: rgba(#EEE, .5);
            }
        }
    }
    .dot {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #1D1B1B;
        opacity: .6;
        &.dot1 {
            top: 85px;
            left: 140px;
        }
        &.dot2 {
            top: 85px;
            left: 240px;
        }
        &.dot3 {
            top: 85px;
            left: 340px;
        }
        &.dot4 {
            top: 85px;
            left: 440px;
        }
        &.dot5 {
            top: 54px;
            left: 590px;
        }
        &.dot6 {
            top: 119px;
            left: 590px;
        }
        &.dot7 {
            top: 85px;
            left: 740px;
        }
        &.dot8 {
            top: 85px;
            left: 840px;
        }
        &.dot9 {
            top: 85px;
            left: 940px;
        }
        &.dot10 {
            top: 85px;
            left: 1040px;
        }
    }
}
</style>