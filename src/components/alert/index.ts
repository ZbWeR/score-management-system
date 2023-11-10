import { createApp, h, type App } from 'vue'
import MessageAlert from './MessageAlert.vue'

export interface MessageOption {
  message: string // 提示信息
  duration?: number // 持续时间
  type?: 'default' | 'success' | 'error' // 提示类型
}

interface MessageInstance {
  instance: App<Element>
  top: number // 位置
  el: HTMLElement // 挂载点
  timer: number | null // 计时器

  options: MessageOption
}

class MessageManager {
  queue: MessageInstance[]
  container: HTMLElement | null
  baseHeight: number = 56 // 组件固定高度

  constructor() {
    this.queue = []
    this.container = null
  }

  /**
   * 创建一个消息提示组件
   * @param config - 组件配置
   */
  showMessage(config: MessageOption) {
    const { duration = 3000 } = config

    // 创建组件实例
    const messageInstance = createApp({
      render() {
        return h(MessageAlert, config)
      }
    })

    // 创建挂载点并设置样式
    const mountNode = document.createElement('div')
    mountNode.className = 'absolute top-2 left-1/2 -translate-x-1/2 transition-all duration-700'
    const top = (this.baseHeight + 20) * this.queue.length + 20
    mountNode.style.top = `${top}px`

    // (创建容器并)挂载
    if (!this.container) {
      this.container = document.createElement('div')
      this.container.className = 'absolute top-0 w-screen z-50'
      document.body.appendChild(this.container)
    }
    this.container.appendChild(mountNode)
    messageInstance.mount(mountNode)

    // 记录相关信息
    const messageData: MessageInstance = {
      instance: messageInstance,
      top,
      el: mountNode,
      timer: null,
      options: config
    }
    this.queue.push(messageData)

    // 过期移除
    messageData.timer = window.setTimeout(() => {
      this.hideMessage(messageData)
    }, duration)
    mountNode.addEventListener('mouseenter', () => {
      messageData.timer && window.clearTimeout(messageData.timer)
    })
    mountNode.addEventListener('mouseleave', () => {
      messageData.timer && window.clearTimeout(messageData.timer)
      messageData.timer = window.setTimeout(() => {
        this.hideMessage(messageData)
      }, duration)
    })
  }

  /**
   * 销毁已创建的组件，并调整其他组件位置
   * @param messageData - 组件相关上下文
   */
  hideMessage(messageData: MessageInstance) {
    const { instance, el, top } = messageData

    // 卸载
    window.setTimeout(() => {
      instance.unmount()
      this.container?.removeChild(el)
    }, 500)
    this.queue = this.queue.filter((item) => item !== messageData)

    // 重新计算位置
    let lastOffsetTop = top
    this.queue.forEach((item) => {
      if (item.top > top) {
        const nowTop = item.top
        item.el.style.top = `${lastOffsetTop}px`
        item.top = lastOffsetTop
        lastOffsetTop = nowTop
      }
    })
  }
}

export const messageManager = new MessageManager()
