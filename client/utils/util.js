// 工具函数
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})
// 显示失败提示
var showFail = text => wx.showToast({
  title: text,
  icon: 'loading',
  image: '../../vendor/images/icon/fail.png',
  mask: false  //是否显示透明蒙层，防止触摸穿透，
})

// 显示确认提示
var showModel = (title, content, showCancel, callback) => {
  // showCancel 取消按钮是否显示
  callback = callback || function () {}
  wx.hideToast();
  wx.showModal({
      title,
      content: content,
      showCancel: showCancel || false,
      success: function (res) {
        if (res.confirm) {
          callback(res)
        } else if (res.cancel) {
          callback(res)
        }
      }
  })
}

module.exports = { formatTime, showBusy, showSuccess, showFail, showModel }
