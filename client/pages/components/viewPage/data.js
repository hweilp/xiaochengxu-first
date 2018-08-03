var dataList = [
  {
    title: '视图容器',
    type: 0,
    list: [
      {
        name: 'view',
        nameStr: '视图容器',
        attr: [
          {
            name: 'hover-class',
            type: 'String',
            default: 'none',
            explain: '指定按下去的样式类。当 hover-class="none" 时，没有点击态效果'
          },
          {
            name: 'hover-stop-propagation',
            type: 'Boolean',
            default: 'false',
            explain: '指定是否阻止本节点的祖先节点出现点击态'
          },
          {
            name: 'hover-start-time',
            type: 'Number',
            default: '50',
            explain: '按住后多久出现点击态，单位毫秒'
          },
          {
            name: 'hover-stay-time	',
            type: 'Number',
            default: '400',
            explain: '手指松开后点击态保留时间，单位毫秒'
          }
        ]
      },
      {
        name: 'scroll-view',
        nameStr: '可滚动视图区域',
        attr: [
          {
            name: 'scroll-x',
            type: 'Boolean',
            default: 'false',
            explain: '允许横向滚动'
          },
          {
            name: 'scroll-y',
            type: 'Boolean',
            default: 'false',
            explain: '允许纵向滚动'
          },
          {
            name: 'bindscroll',
            type: 'EventHandle',
            default: '',
            explain: '滚动时触发'
          },
        ]
      },
      {
        name: 'swiper',
        nameStr: '滑块视图容器',
        attr: [
          {
            name: 'indicator-dots',
            type: 'Boolean',
            default: 'false',
            explain: '是否显示面板指示点'
          },
          {
            name: 'indicator-color',
            type: 'Color',
            default: 'rgba(0, 0, 0, .3)',
            explain: '指示点颜色'
          },
          {
            name: 'indicator-active-color',
            type: 'Color',
            default: '#000000',
            explain: '当前选中的指示点颜色'
          },
          {
            name: 'autoplay',
            type: 'Boolean',
            default: 'false',
            explain: '是否自动切换'
          },
          {
            name: 'interval',
            type: 'Number',
            default: '5000',
            explain: '自动切换时间间隔'
          },
          {
            name: 'circular',
            type: 'Boolean',
            default: 'false',
            explain: '是否采用衔接滑动'
          },
          {
            name: 'vertical',
            type: 'Boolean',
            default: 'false',
            explain: '滑动方向是否为纵向'
          },
          {
            name: 'bindchange',
            type: 'EventHandle',
            default: '',
            explain: 'current 改变时会触发 change 事件'
          }
        ]
      },
      {
        name: 'movable-view',
        nameStr: '可移动的视图容器',
        attr: [
          {
            name: 'direction',
            type: 'String',
            default: 'none(all、vertical、horizontal、none)',
            explain: 'movable-view的移动方向'
          },
          {
            name: 'inertia',
            type: 'Boolean',
            default: 'false',
            explain: 'movable-view是否带有惯性'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            explain: '是否禁用'
          },
          {
            name: 'scale',
            type: 'Boolean',
            default: 'false',
            explain: '是否支持双指缩放'
          },
          {
            name: 'animation',
            type: 'Boolean',
            default: 'false',
            explain: '是否使用动画'
          },
          {
            name: 'bindchange',
            type: 'EventHandle',
            default: '',
            explain: '拖动过程中触发的事件'
          },
          {
            name: 'bindscale',
            type: 'EventHandle',
            default: '',
            explain: '缩放过程中触发的事件'
          }
        ]
      },
      {
        name: 'cover-view',
        nameStr: '覆盖在原生组件之上的文本视图',
        attr: [
          {
            name: 'scroll-top',
            type: 'Number',
            default: '',
            explain: '设置顶部滚动偏移量'
          }
        ]
      },
      {
        name: 'cover-image',
        nameStr: '覆盖在原生组件之上的图片视图',
        attr: [
          {
            name: 'src',
            type: 'String',
            default: '',
            explain: '图标路径，'
          },
          {
            name: 'bindload',
            type: 'EventHandle',
            default: '',
            explain: '图片加载成功时触发'
          },
          {
            name: 'binderror',
            type: 'EventHandle',
            default: '',
            explain: '图片加载失败时触发'
          }
        ]
      }
    ]
  }
]

module.exports = {dataList}