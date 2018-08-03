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
  },
  {
    title: '基础内容',
    type: 0,
    list: [
      {
        name: 'icon',
        nameStr: '图标',
        attr: [
          {
            name: 'type',
            type: 'String',
            default: '',
            explain: 'icon的类型'
          },
          {
            name: 'size',
            type: 'Number',
            default: '23',
            explain: 'icon的大小，单位px'
          },
          {
            name: 'color',
            type: 'Color',
            default: '',
            explain: 'icon的颜色，同css的color'
          }
        ]
      },
      {
        name: 'text',
        nameStr: '文本',
        attr: [
          {
            name: 'selectable',
            type: 'Boolean',
            default: 'false',
            explain: '文本是否可选'
          },
          {
            name: 'space',
            type: 'String',
            default: 'false',
            explain: '显示连续空格'
          },
          {
            name: 'decode',
            type: 'Boolean',
            default: 'false',
            explain: '是否解码'
          }
        ]
      },
      {
        name: 'rich-text',
        nameStr: '富文本',
        attr: [
          {
            name: 'nodes',
            type: 'Array/String',
            default: '[]',
            explain: '节点列表/HTML String'
          }
        ]
      },
      {
        name: 'progress',
        nameStr: '进度条',
        attr: [
          {
            name: 'percent',
            type: 'Float',
            default: '',
            explain: '百分比0~100'
          },
          {
            name: 'show-info',
            type: 'Boolean',
            default: 'false',
            explain: '在进度条右侧显示百分比'
          },
          {
            name: 'color',
            type: 'Color',
            default: '#09BB07',
            explain: '进度条颜色'
          },
          {
            name: 'activeColor',
            type: 'Color',
            default: '',
            explain: '已选择的进度条的颜色'
          }
        ]
      }
    ]
  },
  {
    title: '表单组件',
    type: 0,
    list: [
      {
        name: 'button',
        nameStr: '按钮',
        attr: [
          {
            name: 'size',
            type: 'String',
            default: 'default',
            explain: '按钮的大小'
          },
          {
            name: 'type',
            type: 'String',
            default: 'default',
            explain: '按钮的样式类型'
          },
          {
            name: 'plain',
            type: 'Boolean',
            default: 'false',
            explain: '按钮是否镂空，背景色透明'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            explain: '是否禁用'
          },
          {
            name: 'loading',
            type: 'Boolean',
            default: 'false',
            explain: '名称前是否带 loading 图标'
          },
          {
            name: 'hover-class',
            type: 'String',
            default: 'button-hover',
            explain: '指定按钮按下去的样式类'
          },
          {
            name: 'hover-stop-propagation',
            type: 'Boolean',
            default: 'false',
            explain: '阻止本节点的祖先节点出现点击态'
          }
        ]
      },
      {
        name: 'checkbox-group',
        nameStr: '多项选择器',
        attr: [
          {
            name: 'bindchange',
            type: 'EventHandle',
            default: '',
            explain: '选中项发生改变是触发'
          }
        ]
      },
      {
        name: 'checkbox',
        nameStr: '多选项目',
        attr: [
          {
            name: 'value',
            type: 'String',
            default: '',
            explain: '标识值'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            explain: '是否禁用'
          },
          {
            name: 'checked',
            type: 'Boolean',
            default: 'false',
            explain: '设置默认选中'
          },
          {
            name: 'color',
            type: 'Color',
            default: '',
            explain: 'checkbox的颜色，同css的color'
          }
        ]
      },
      {
        name: 'form',
        nameStr: '表单',
        attr: [
          {
            name: 'report-submit',
            type: 'Boolean',
            default: '',
            explain: '是否返回 formId 用于发送模板消息'
          },
          {
            name: 'bindsubmit',
            type: 'EventHandle',
            default: '',
            explain: '携带 form 中的数据触发 submit 事件'
          },
          {
            name: 'bindreset',
            type: 'EventHandle',
            default: '',
            explain: '表单重置时会触发 reset 事件'
          }
        ]
      },
      {
        name: 'input',
        nameStr: '输入框',
        attr: [
          {
            name: 'value',
            type: 'String',
            default: '',
            explain: '输入框的初始内容'
          },
          {
            name: 'type',
            type: 'String',
            default: '"text"',
            explain: 'input 的类型'
          },
          {
            name: 'disabled',
            type: 'Boolean',
            default: 'false',
            explain: '是否禁用'
          },
          {
            name: 'adjust-position',
            type: 'Boolean',
            default: 'true',
            explain: '键盘弹起时，是否自动上推页面'
          },
          {
            name: 'bindinput',
            type: 'EventHandle',
            default: '',
            explain: '键盘输入时触发'
          },
          {
            name: 'bindfocus',
            type: 'EventHandle',
            default: '',
            explain: '输入框聚焦时触发'
          },
          {
            name: 'bindblur',
            type: 'EventHandle',
            default: '',
            explain: '输入框失去焦点时触发'
          },
          {
            name: 'bindconfirm',
            type: 'EventHandle',
            default: '',
            explain: '点击完成按钮时触发'
          }
        ]
      },
      {
        name: 'label',
        nameStr: 'label',
        attr: [
          {
            name: 'for',
            type: "String",
            default: '',
            explain: '绑定控件的 id'
          }
        ]
      },
      {
        name: 'picker',
        nameStr: '从底部弹起的滚动选择器',
        attr: [
          {
            name: 'mode',
            type: "String",
            default: 'selector',
            explain: '选择器类型'
          },
          {
            name: 'range',
            type: "Array/Object Array",
            default: '[]',
            explain: ''
          },
          {
            name: 'value',
            type: "",
            default: '',
            explain: ''
          },
          {
            name: 'bindchange',
            type: "EventHandle",
            default: '',
            explain: '改变时触发change事件'
          },
          {
            name: 'bindcancel',
            type: "EventHandle",
            default: '',
            explain: '取消选择时触发'
          }, 
          {
            name: 'disabled',
            type: "Boolean",
            default: 'false',
            explain: '是否禁用'
          }
        ]
      },
      {
        name: 'radio-group',
        nameStr: '单项选择器',
        attr: [
          {
            name: 'bindchange',
            type: "EventHandle",
            default: '',
            explain: '选中项发生变化时触发 change 事件'
          }
        ]
      },
      {
        name: 'radio',
        nameStr: '单选项目',
        attr: [
          {
            name: 'value',
            type: "String",
            default: '',
            explain: '<radio/> 标识'
          },
          {
            name: 'checked',
            type: "Boolean",
            default: 'false',
            explain: '当前是否选中'
          },
          {
            name: 'disabled',
            type: "Boolean",
            default: 'false',
            explain: '是否禁用'
          },
          {
            name: 'color',
            type: "Color",
            default: '',
            explain: 'radio的颜色，同css的color'
          }
        ]
      },
      {
        name: 'slider',
        nameStr: '滑动选择器',
        attr: [
          {
            name: 'value',
            type: "Number",
            default: '0',
            explain: '当前取值'
          },
          {
            name: 'step',
            type: "Number",
            default: '1',
            explain: '步长，取值必须大于 0'
          },
          {
            name: 'disabled',
            type: "Boolean",
            default: 'false',
            explain: '是否禁用'
          },
          {
            name: 'backgroundColor',
            type: "Color",
            default: '#e9e9e9',
            explain: '背景条的颜色'
          },
          {
            name: 'activeColor',
            type: "Color",
            default: '#1aad19',
            explain: '已选择的颜色'
          }, {
            name: 'block-size',
            type: "Number",
            default: '28',
            explain: '滑块的大小，取值范围为 12 - 28'
          }, {
            name: 'block-color',
            type: "Color",
            default: '#ffffff',
            explain: '滑块的颜色'
          },
          {
            name: 'bindchange',
            type: "EventHandle",
            default: '',
            explain: '完成一次拖动后触发的事件'
          },
          {
            name: 'bindchanging',
            type: "EventHandle",
            default: '',
            explain: '拖动过程中触发的事件'
          }
        ]
      },
      {
        name: 'switch',
        nameStr: '开关选择器',
        attr: [
          {
            name: 'checked',
            type: "Boolean",
            default: 'false',
            explain: '是否选中'
          },
          {
            name: 'type',
            type: "String",
            default: 'switch(switch,checkbox)',
            explain: '是否选中'
          },
          {
            name: 'bindchange',
            type: "EventHandle",
            default: 'false',
            explain: 'checked 改变时触发 change 事件'
          },
          {
            name: 'color',
            type: "Color",
            default: '',
            explain: 'switch 的颜色'
          }
        ]
      },
      {
        name: 'textarea',
        nameStr: '多行输入框',
        attr: [
          {
            name: 'value',
            type: "String",
            default: '',
            explain: '输入框的内容'
          },
          {
            name: 'auto-height',
            type: 'Boolean',
            default: 'false',
            explain: '是否自动增高'
          }
        ]
      }
    ]
  },
  {
    title: '导航',
    type: 0,
    list: [
      {
        name: 'navigator',
        nameStr: '页面链接',
        attr: [
          {
            name: 'target',
            type: 'String',
            default: '',
            explain: '在哪个目标上发生跳转，默认当前小程序'
          },
          {
            name: 'url',
            type: 'String',
            default: '',
            explain: '当前小程序内的跳转链接'
          },
          {
            name: 'open-type',
            type: 'String',
            default: 'navigate',
            explain: '跳转方式'
          }
        ]
      },
      {
        name: 'functional-page-navigator',
        nameStr: '用于跳转到插件功能页',
        attr: [
          {
            name: 'name',
            type: 'String',
            default: '',
            explain: '要跳转到的功能页'
          },
          {
            name: 'args',
            type: 'Object',
            default: 'Null',
            explain: '功能页参数'
          },
          {
            name: 'bindsuccess',
            type: 'EventHandle',
            default: '',
            explain: '功能页返回，且操作成功时触发'
          },
          {
            name: 'bindfail',
            type: 'EventHandle',
            default: '',
            explain: '功能页返回，且操作失败时触发'
          }
        ]
      }
    ]
  },
  {
    title: '媒体组件',
    type: 0,
    list: [
      {
        name: 'audio',
        nameStr: '音频',
        attr: [
          {
            name: 'id',
            type: 'String',
            default: '',
            explain: 'audio 组件的唯一标识符'
          },
          {
            name: 'src',
            type: 'String',
            default: '',
            explain: '要播放音频的资源地址'
          },
          {
            name: 'loop',
            type: 'Boolean',
            default: 'false',
            explain: '是否循环播放'
          },
          {
            name: 'controls',
            type: 'Boolean',
            default: 'false',
            explain: '是否显示默认控件'
          },
          {
            name: 'name',
            type: 'String',
            default: '未知音频',
            explain: '默认控件上的音频名字'
          },
          {
            name: 'author',
            type: 'String',
            default: '未知音频',
            explain: '默认控件上的作者名字'
          },
          {
            name: 'bindpause',
            type: 'EventHandle',
            default: '',
            explain: '当暂停播放时触发'
          },
          {
            name: 'bindtimeupdate',
            type: 'EventHandle',
            default: '',
            explain: '播放进度改变时触发'
          },
          {
            name: 'bindended',
            type: 'EventHandle',
            default: '',
            explain: '当播放到末尾时触发 ended 事件'
          }
        ]
      },
      {
        name: 'image',
        nameStr: '图片',
        attr: [
          {
            name: 'src',
            type: 'String',
            default: '',
            explain: '图片资源地址'
          },
          {
            name: 'mode',
            type: 'String',
            default: 'scaleToFill',
            explain: '图片裁剪、缩放的模式'
          },
          {
            name: 'lazy-load',
            type: 'Boolean',
            default: 'false',
            explain: '图片懒加载'
          },
          {
            name: 'binderror',
            type: 'HandleEvent',
            default: '',
            explain: '当错误发生时'
          },
          {
            name: 'bindload',
            type: 'HandleEvent',
            default: '',
            explain: '当图片载入完毕时'
          }
        ]
      },
      {
        name: 'video',
        nameStr: '视频',
        attr: [
          {
            name: 'src',
            type: 'String',
            default: '',
            explain: '视频的资源地址'
          },
          {
            name: 'initial-time',
            type: 'Number',
            default: '',
            explain: '指定视频初始播放位置'
          },
          {
            name: 'duration',
            type: 'Number',
            default: '',
            explain: '指定视频时长'
          },
          {
            name: 'controls',
            type: 'Boolean',
            default: 'true',
            explain: '显示默认播放控件'
          },
          {
            name: 'danmu-list',
            type: 'Object Array',
            default: '',
            explain: '弹幕列表'
          },
          {
            name: 'danmu-btn',
            type: 'Boolean',
            default: 'false',
            explain: '显示弹幕按钮'
          },
          {
            name: 'enable-danmu',
            type: 'Boolean',
            default: 'false',
            explain: '展示弹幕'
          },
          {
            name: 'autoplay',
            type: 'Boolean',
            default: 'false',
            explain: '是否自动播放'
          },
          {
            name: 'loop',
            type: 'Boolean',
            default: 'false',
            explain: '是否循环播放'
          },
          {
            name: 'muted',
            type: 'Boolean',
            default: 'false',
            explain: '是否静音播放'
          },
          {
            name: 'direction',
            type: 'Number',
            default: '',
            explain: '设置全屏时视频的方向'
          },
          {
            name: 'autoplay',
            type: 'Boolean',
            default: 'false',
            explain: '是否自动播放'
          },
          {
            name: 'show-fullscreen-btn',
            type: 'Boolean',
            default: 'false',
            explain: '是否显示全屏按钮'
          },
          {
            name: 'show-center-play-btn',
            type: 'Boolean',
            default: 'false',
            explain: '是否显示视频中间的播放按钮'
          },
          {
            name: 'autoplay',
            type: 'Boolean',
            default: 'false',
            explain: '是否自动播放'
          },
          {
            name: 'bindplay',
            type: 'EventHandle',
            default: '',
            explain: '当开始/继续播放时触发play事件'
          },
          {
            name: 'bindpause',
            type: 'EventHandle',
            default: '',
            explain: '当暂停播放时触发 pause 事件'
          },
          {
            name: 'bindended',
            type: 'EventHandle',
            default: '',
            explain: '当播放到末尾时触发 ended 事件'
          }
        ]
      },
      {
        name: 'camera',
        nameStr: '系统相机',
        attr: [
          {
            name: 'mode',
            type: 'String',
            default: 'String',
            explain: '有效值为 normal, scanCode'
          },
          {
            name: 'device-position',
            type: 'String',
            default: 'back',
            explain: '前置或后置，值为front, back'
          },
          {
            name: 'flash',
            type: 'String',
            default: 'auto',
            explain: '闪光灯，值为auto, on, off	'
          },
          {
            name: 'scan-area',
            type: 'Array',
            default: '',
            explain: '扫码识别区域，'
          },
          {
            name: 'bindstop',
            type: 'EventHandle',
            default: '',
            explain: '摄像头在非正常终止时触发'
          },
          {
            name: 'binderror',
            type: 'EventHandle',
            default: '',
            explain: '用户不允许使用摄像头时触发'
          },
          {
            name: 'bindscancode',
            type: 'EventHandle',
            default: '',
            explain: '在成功识别到一维码时触发'
          }
        ]
      }
    ]
  },
  {
    title: '地图',
    type: 0,
    list: [
      {
        name: 'map',
        nameStr: '地图',
        attr: [
          {
            name: 'longitude',
            type: 'Number',
            default: '',
            explain: '中心经度'
          },
          {
            name: 'latitude',
            type: 'Number',
            default: '',
            explain: '中心纬度'
          },
          {
            name: 'scale',
            type: 'Number',
            default: '16',
            explain: '缩放级别，取值范围为5-18'
          },
          {
            name: 'markers',
            type: 'Array',
            default: '',
            explain: '标记点'
          },
          {
            name: 'controls',
            type: 'Array',
            default: '',
            explain: '控件'
          },
          {
            name: 'show-location',
            type: 'Boolean',
            default: '',
            explain: '显示带有方向的当前定位点'
          },
          {
            name: 'bindmarkertap',
            type: 'EventHandle',
            default: '',
            explain: '点击标记点时触发，会返回marker的id'
          },
          {
            name: 'bindcallouttap',
            type: 'EventHandle',
            default: '',
            explain: '点击标记点对应的气泡时触发'
          },
          {
            name: 'bindcontroltap',
            type: 'EventHandle',
            default: '',
            explain: '点击控件时触发，会返回control的id'
          },
        ]
      }
    ]
  },
  {
    title: '画布',
    type: 0,
    list: [
      {
        name: 'canvas',
        nameStr: '画布',
        attr: [
          {
            name: 'canvas-id',
            type: 'String',
            default: '',
            explain: 'canvas 组件的唯一标识符'
          },
          {
            name: 'disable-scroll',
            type: 'Boolean',
            default: 'false',
            explain: '当在canvas中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新'
          },
          {
            name: 'bindtouchstart',
            type: 'EventHandle',
            default: '',
            explain: '手指触摸动作开始'
          },
          {
            name: 'bindtouchmove',
            type: 'EventHandle',
            default: '',
            explain: '手指触摸后移动'
          },
          {
            name: 'bindtouchend',
            type: 'EventHandle',
            default: '',
            explain: '手指触摸动作结束'
          },
          {
            name: 'bindtouchcancel',
            type: 'EventHandle',
            default: '',
            explain: '手指触摸动作被打断，如来电提醒，弹窗'
          },
          {
            name: 'bindlongtap',
            type: 'EventHandle',
            default: '',
            explain: '手指长按 500ms 之后触发，'
          },
          {
            name: 'binderror',
            type: 'EventHandle',
            default: '',
            explain: '当发生错误时触发 error 事件'
          }
        ]
      }
    ]
  }
]

module.exports = {dataList}