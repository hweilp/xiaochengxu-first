// components/soundRecord/soundRecord.js
var util = require('../../utils/util.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isRecordIng: false,
    iconImg: './soundRecord.png',
    time: '00:00:00',
    list:[],
    voice: {
      isPlay: false,
      filePath: ''
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    soundRecord (e) {
      var type = e.currentTarget.dataset.type
      const recorderManager = wx.getRecorderManager()
      recorderManager.onFrameRecorded((res) => {
        const { frameBuffer } = res
      })

      const options = {
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 192000,
        format: 'mp3',
        frameSize: 50
      }
      switch (type) {
        case '0':
          this.setData({
            isRecordIng: true
          })
          recorderManager.start(options)
          break
        case '1':
          this.setData({
            isRecordIng: false
          })
          recorderManager.pause()
          break
        case '2': 
          this.setData({
            isRecordIng: true
          })
          recorderManager.resume()
          break
        case '3':
          this.setData({
            isRecordIng: false
          })
          recorderManager.stop()
          recorderManager.onStop((res) => {
            const { tempFilePath } = res
            var resData = res
            var list = this.data.list
            list.push(res)
            this.setData({
              list: list
            })
          })
          break
        default: 
          return false
      }
    },
    play (e) {
      var fileUrl = e.currentTarget.dataset.fileurl
      var that = this
      that.startRecord('play', fileUrl)
      util.showCustomBox('正在播放', fileUrl, '结束播放', '暂停', function (res) {
        if (res.confirm) {
          // 暂停
          that.startRecord('pause', fileUrl)
        } else if (res.cancel) {
          // 结束
          that.startRecord('stop', fileUrl)
        }
      })
    },
    startRecord(type, fileUrl) {
      wx.startRecord({
        filePath: fileUrl,
        success: function (res) {
          var tempFilePath = res.tempFilePath
          if (type === 'play') {
            wx.playVoice({
              filePath: tempFilePath,
              complete: function () {
              }
            })
          }
          if (type === 'pause') {
            wx.pauseVoice()
          }
          if (type === 'stop') {
            wx.stopVoice()
          }
        }
      })
    }
  }
})
