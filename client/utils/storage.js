const setStorage = (key, data, time) => {
  wx.setStorageSync(key, data)
}
const setStorageSync = (key, data, time) => {
  try {
    wx.setStorageSync(key, data)
  } catch (e) {
    return e
  }
}

const getStorage = (key) => {
  return wx.getStorage(key)
}

const getStorageSync =  (key) => {
  try {
    return wx.getStorageSync(key)
  } catch (e) {
    return e
  }
}

const removeStorage = (key) => {
  wx.removeStorage(key)
}
const removeStorageSync = (key) => {
  try {
    wx.removeStorageSync(key)
  } catch (e) {
    return e
    // Do something when catch error
  }
}

const clearStorage = () => {
  wx.clearStorage()
}
const clearStorageSync = () => {
  try {
    wx.clearStorageSync()
  } catch (e) {
    console.warn(e)
  }
}

module.exports = {
  setStorage, 
  setStorageSync,
  getStorage,
  getStorageSync,
  removeStorage,
  removeStorageSync,
  clearStorage,
  clearStorageSync
}