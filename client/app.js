//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
App({
  onLaunch: function () {
    // 用户首次打开小程序，触发 onLaunch（全局只触发一次）。
    qcloud.setLoginUrl(config.service.loginUrl)
  },
  onLoad () {
    // 一个页面只会调用一次。
    // 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。
  },
  onReady() {
    // 小程序初始化完成后，data数据渲染，触发onShow方法，监听小程序显示。
    // console.log('onReady')
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    // console.log("test onShow");
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
    // console.log("test onHide");
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
    console.log("test onUnload");
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("test onPullDownRefresh");
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    console.log("test onReachBottom");
  },
})