<template>
<div>
  <div class="btn" @click="useToast">点击提示toast1</div>
  <div class="btn" @click="useToast2">点击提示toast2</div>
</div>
</template>

<script>
export default {
  methods: {
    useToast () {
      // 根据需求，传不同的参数
      // 第一种
      this.$toast({
        message: '我是toast1啦',
        icon: require('../assets/images/arrow-left.png'),
        duration: 10000
        // type: 'default' // 默认样式
      })
      // 第二种
      // this.$toast('我是toast2啦')
    },
    useToast2 () {
      this.$toast('我是toast2啦')
    }
  }
}
</script>


<style lang="less" scoped>
.btn {
  height: 100px;
  width: 200px;
  background-image: linear-gradient(-45deg, #76B8FF 0%, #2681FF 100%);
  border-radius: 20px;
  line-height: 100px;
  font-size: 36px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  margin: 100px;
}
</style>
