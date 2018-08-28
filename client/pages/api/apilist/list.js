// pages/api/apilist/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    webUrl: '',
    systemInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id === "1") {
      this.getSystemInfo()
    } else if (options.id === "2") {
      this.setData({
        webUrl: options.result
      })
    }
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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

  getSystemInfo () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          systemInfo: res
        })
      },
      fail: function (err){
        console.log(err)
      }
    })
  },

  openScanCode () {
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }
})