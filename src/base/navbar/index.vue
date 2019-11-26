<template>
    <div class="mine-navbar">
        <div class="mine-navbar-left" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="mine-navbar-center" v-if="$slots.center">
            <slot name="center"></slot>
        </div>
        <div class="mine-navbar-right" v-if="$slots.right">
            <slot name="right"></slot>
        </div>
        <h1 class="mine-navbar-title" v-if="title">
            <!-- 添加span解决flex布局和字符溢出省略号替换冲突 -->
            <span class="mine-navbar-text" v-text="title"></span>
        </h1>
    </div>
</template>
<script>
export default {
    name:'MeNavBar',
    props:{
        title:{
            type:String,
            default:""
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '~assets/scss/mixins';

    .mine-navbar{
        position: relative;
        @include flex-between();
        height: 50px;
        background-color: #fff;
        &-left{
            margin-left: 10px;
            ~ .mine-navbar-right{
                position: static;
            }
        }
        &-center{
            flex: 1;
            margin: 0 10px;
            ~ .mine-navbar-right{
                position: static;
            }
        }
        &-right{
            margin-right: 10px;
            // 解决其两个兄弟元素不存在时，移动至导航栏最左侧问题
            position: absolute;
            right: 0;
            height: 100%;
            @include flex-center();
        }
        &-title{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 20%;
            right: 20%;
            @include flex-center();
            text-align: center;
        }
        &-text{
            font-size: 18px;
            @include ellipsis();
            // 解决字符部分被遮盖
            line-height: 1.5;
            width: 100%;
        }
    }
</style>