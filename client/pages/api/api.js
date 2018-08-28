// pages/api.js
//compontents.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var Storage = require('../../utils/storage.js')

Page({
  data: {
    name: '欢迎使用 小程序 api',
    userInfo: {}
  },
  onLoad() {
  },
  onReady () {
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
  }
})