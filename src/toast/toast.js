import Toasts from './Toasts.vue'

const Toast = {
  install: function (Vue) {
    // 创建一个Vue的“子类”组件
    const ToastConstructor = Vue.extend(Toasts)

    // 创建一个该子类的实例,并挂载到一个元素上
    let instance

    // 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
    // instance.$mount(document.createElement('div'))
    // document.body.appendChild(instance.$el)

    // 在Vue的原型链上注册方法，控制组件
    Vue.prototype.$toast = (options = {}) => {
      if (!instance) {
        instance = new ToastConstructor()
        instance.$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)
        console.log('11', instance)
      }
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }
      instance.message = options.message
      instance.visible = true
      instance.type = options.type
      if (options.duration !== undefined) {
        instance.duration = options.duration // 用户自定义时间
      } else {
        instance.duration = 1800 // 采用默认值
      }
      if (options.type !== undefined) {
        instance.type = options.type // 自定义type类型
      } else {
        instance.type = 'default' // 采用默认值
      }
      if (options.icon !== undefined) {
        instance.icon = options.icon // 自定义icon
        instance.showIcon = true
      } else {
        instance.showIcon = false
      }
      setTimeout(() => {
        instance.visible = false
      }, instance.duration)
    }
  }
}

export default Toast