var app = getApp()

Page({
  data: {
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [
    {
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.3245200,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 3,
      dottedLine: true
    }, {
      points: [{
        longitude: 113.3245200,
        latitude: 23.21229
      }, {
        longitude: 113.3345110,
        latitude: 23.15509
      }],
      color: "#0000ffDD",
      width: 3,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },


  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down
  },
  // Event handler.
  onGetUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
    wx.switchTab({
      url: '../list/list',
    });
  },
  gtPhoneNumber(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
})