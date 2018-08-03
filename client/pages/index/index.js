//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var Storage = require('../../utils/storage.js')
Page({
  data: {
    imgUrls:[
      "http://pic9.photophoto.cn/20081128/0033033999061521_b.jpg",
      "http://pic21.photophoto.cn/20111106/0020032891433708_b.jpg",
      "http://pic.58pic.com/58pic/13/86/80/95h58PIC5jK_1024.jpg"
    ],
    indicatorDots: true,
    indicatorColor:'#007AFF',
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    address: {},
    getAddressEd: false,
    imgs:[],
    imgUrl:'',
    mapCtx: {}
  },
  onLoad: function () {
    // 用户首次打开小程序，触发 onLaunch（全局只触发一次）。
    var that = this
    util.showModel('是否授权获取微信信息', '', true, function (val) {
      if (val.cancel) return;
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            userInfo: res.userInfo,
            logged: true
          })
          Storage.setStorage('userInfo', res.userInfo)
        }
      })
    })
  },
  onReady (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
    this.getAddres()

  },
  // 选取图片
  chooseImage () {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        var Images = that.data.imgs
        for (var i = 0; i < tempFilePaths.length; i++) {
          Images.push(tempFilePaths[i])
        }
        that.setData({
          imgs: Images
        })

      }
    })
  },
  // 图片点击放大
  imgClick(target) {
    var targetSrc = target.currentTarget.dataset.imgurl
    var imgList = this.data.imgs
    wx.previewImage({
      current: targetSrc,
      urls: imgList
    })
  },
  // 图片长按操作
  oprImg (target) {
    var index = target.currentTarget.dataset.index
    var imgSrc = target.currentTarget.dataset.imgurl
    var that = this
    wx.showActionSheet({
      itemList: ['删除该图片', '保存图片到手机'],
      success (res) {
        switch (res.tapIndex) {
          case 0 :
            that.data.imgs.splice(index, 1)
            that.setData({
              imgs: that.data.imgs
            })
          case 1 :
            wx.downloadFile({
              url: imgSrc,
              success (res) {
                wx.saveImageToPhotosAlbum({
                  filePath: imgSrc,
                  success: (res) => {
                    util.showSuccess('保存成功')
                  },
                  fail: (err) => {
                    util.showFail('保存失败')
                  }
                })
                
              }
            }) 
          default :
            break
        }
      },
      fail (res) {
      }
    })
  },
  // 获取地址
  getAddres: function () {
    var that = this;
    wx.getLocation({
      type: "gcj02",
      success: function (res) {
        that.setData({
          address: res,
          getAddressEd: true
        })
        // 定位
        that.mapCtx.moveToLocation()
      }
    })
  },
  // 分享
  onShareAppMessage (res) {
    this.showShareMenu()
  },
  // 分享目录
  showShareMenu(){
    wx.showShareMenu({
      withShareTicket: true
    })

  }
})
