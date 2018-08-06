//compontents.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    name: '微信小程序 组件',
    list: [],
    x: 100,
    y: 0
  },
  getData () {
  },
  movableChange (event) {
  },
  deleteItem () {
    util.showSuccess('删除成功')
  }
})