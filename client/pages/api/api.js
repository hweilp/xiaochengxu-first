// pages/api.js
//compontents.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var Storage = require('../../utils/storage.js')

Page({
  data: {
    name: '欢迎使用 小程序 api',
    userInfo: {},
    animationData: {}
  },
  onLoad() {
  },
  onPullDownRefresh: function () {
    util.showBusy('请稍后...')
    setTimeout(function () { wx.stopPullDownRefresh()}, 1000)
  },
  onReady () {
  },
  onShow () {
  },
  getData() {
  },
  openScanCode() {
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
      success: function (res) {
        wx.navigateTo({
          url: '/pages/api/apilist/list?id=2&result=' + res.result
        })
      },
      fail: function (err) {
      }
    })
  },
  gotoRecordSound () {
  },
  captureScreen () {
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
      util.showSuccess('用户截屏了')
    })
  },
  refresh () {
    wx.startPullDownRefresh({
      success: function () {
        util.showBusy('请稍后...')
      }
    })
  },
  beignS () {
    var animation = wx.createAnimation({
      transformOrigin: '25% 25% 25% 25% 0',
      duration: 1000,
      timingFunction: 'ease-in-out',
      delay: 10
    })
    this.animation = animation
    var that = this
    animation.translate(10, -30).step()
    animation.scale(1.5,1.5).step()
    animation.opacity(.6).step()
    animation.backgroundColor('#F56C6C')
    animation.rotate(45).step()
    setTimeout(function () {
      that.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  }
})