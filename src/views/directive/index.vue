<template>
    <div class="content-box">
        <div class="tab-box margin-box"
             v-directive="{
                curIndex,
                className: 'tab-name',
                activeClass: 'active'
             }"
        >
            <p class="tab-name"
               v-for="(item, index) in tabList"
               :key="index"
               @click="curIndex = index"
            >
                {{item}}
            </p >
        </div>
        <input class="margin-box" v-focus/>
        <p class="margin-box" v-text-color="{
            color: 'white',
            background: 'black',
            text: '测试文字颜色背景色'
        }"></p >
    </div>
</template>

<script>
import directive from './directive.js'
import focus from './focus.js'
import textColor from './text-color.js'
export default {
  name: 'Directive',
  directives: {
    directive,
    focus,
    textColor
  },
  data () {
    return {
      tabList: ['选项一', '选项二', '选项三', '选项四'],
      curIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.margin-box {
    display: block;
    margin: 10px auto;
}
.tab-box {
    width: 400px;
    border: 1px solid #cccccc;
    display: flex;
    justify-content: flex-start;
    margin: 10px auto;
}
.tab-name {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border: 1px solid #cccccc;
    border-collapse: collapse;
    &:hover {
        cursor: pointer;
    }
}
.active {
    background: #000000;
    color: #ffffff;
}
</style>
