<template>
  <transition name="fade">
    <div class="tip" v-show="visible">
      <div class="toast-default" v-if="type === 'default'">
        <div class="img" v-if="showIcon">
          <img :src="icon" alt="">
        </div>
        <div class="msg">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  data () {
    return {
      visible: false,
      message: '', // toast提示文本
      icon: '', // 自定义显示图标
      showIcon: false, // 是否显示toast提示图标
      duration: 1800, // toast显示时间, 可自定义
      type: 'default' // 默认样式
    }
  }
}
</script>
<style lang="less" scoped>
.fade-enter-active,
  .fade-leave-active {
    transition: 0.3s ease-out;
  }
  .fade-enter {
    opacity: 0;
    transform: scale(1.2);
  }
  .fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }
  .tip {
    width: 100%;
    padding: 0 5%;
    position: fixed;
    left: 0;
    top: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .toast-default {
      padding: 38px 60px;
      border-radius: 25px;
      background: rgba(0, 0, 0, 0.7);
      color: #ffffff;
      font-size: 32px;
      .img {
        height: 50px;
        width: 50px;
        margin: 0 auto;
        img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
</style>
