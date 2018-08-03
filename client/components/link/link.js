// components/link/link.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    href: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    imageUrl: {
      type: String,
      value: '../../vendor/images/icon/right.png',
    }, 
    className: {
      type: String,
      value: '',
    },
    hoverClass: {
      type: String,
      value: 'navigator-hover',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
