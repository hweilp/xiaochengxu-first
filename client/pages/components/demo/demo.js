// pages/components/demo/demo.js
var util = require('../../../utils/util.js')
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  inputValue: '',
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://pic9.photophoto.cn/20081128/0033033999061521_b.jpg",
      "http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
      "http://pic.58pic.com/58pic/13/86/80/95h58PIC5jK_1024.jpg"
    ],
    indicatorDots: true,
    indicatorColor: '#007AFF',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    x: 0,
    y: 0,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    index: 0,
    array: ['美国', '中国', '巴西', '日本'],
    date: '2018-08-07',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',

    src: '',
    danmuList: [
    {
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
    {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
    openCameraFlag: false,
    cameraBtnTitle: '打开相机',
    imgSrc: '',
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      iconPath: "/vendor/images/icon/address.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    controls: [{
      id: 1,
      iconPath: "/vendor/images/icon/address.png",
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.videoContext = wx.createVideoContext('myVideo')
    var context = wx.createCanvasContext('firstCanvas')

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  tap() {
    util.showSuccess('点击了')
    console.log('tap')
  },
  btnClick (e) {
    util.showSuccess(e.target.dataset.text)
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  checkboxChange: function (e) {
    var Val = e.detail.value
    var tips = ''
    Val.forEach((item, index) => {
      if (index + 1 === Val.length) {
        tips = tips + item
      } else {
        tips = tips + item + ','
      }
    })
    console.log(tips)
    util.showModel('选择结果', tips)
  },
  bindPickerChange: function (e) {
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  radioChange: function (e) {
    util.showModel('选择结果', e.detail.value)
  },
  slider4change (e) {
    util.showModel('选择结果', e.detail.value.toString())
  },
  switch1Change: function (e) {
    util.showModel('选择结果', e.detail.value.toString())
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  bindButOpenCamera () {
    var that = this
    var openCameraFlag = that.data.openCameraFlag
    if (openCameraFlag) {
      that.setData({
        openCameraFlag: false,
        cameraBtnTitle: '打开相机'
      })
    } else {
      that.setData({
        openCameraFlag: true,
        cameraBtnTitle: '关闭相机'
      })
    }
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          imgSrc: res.tempImagePath
        })
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})