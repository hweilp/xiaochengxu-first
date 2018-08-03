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
  onLoad () {
  },
  onReady () {
    var userInfo = Storage.getStorageSync('userInfo');
    this.setData({
      userInfo: userInfo
    })
  },
  getData() {
  }
})