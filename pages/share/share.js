// pages/share/share.js
Page({
  /**
   * 页面的初始数据
   */

  data: {
    template: {},
    image: ''
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onImgOK(e) {
    this.setData({
      image: e.detail.path
    })

  },
  // 长按保存图片
  previewImg(e) {
    let url = e.currentTarget.dataset.url
    //用户需要授权
    wx.getSetting({
      success: (res) => {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: () => {
              // 同意授权
              this.saveImg(url);
            },
            fail: (res) => {
              console.log(res);
            }
          })
        } else {
          // 已经授权了
          this.saveImg(url);
        }
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  saveImg(url) {
    console.log(url);
    wx.saveImageToPhotosAlbum({
      filePath: url,
      success: (res) => {
        console.log(res);
      },
      fail(res) {
        console.log(res);
      }
    })
  },

  onLoad: function (e) {
    let url = decodeURIComponent(e.url)//字符串转义
    this.setData({
      template: {
        "width": "750rpx",
        "height": "1200rpx",
        "background": "",
        "views": [
          {
            "type": "rect",
            "css": {
              "background": "#fff",
              "width": "710rpx",
              "height": "1160rpx",
              "top": "20rpx",
              "left": "20rpx",
              "rotate": "",
              "borderRadius": "",
              "borderWidth": "20rpx",
              "borderColor": "#0081fa",
              "shadow": "",
              "color": "#fff"
            }
          },
          {
            "type": "text",
            "text": "您的邀请码为",
            "css": {
              "color": "#000000",
              "background": "rgba(0,0,0,0)",
              "width": "750rpx",
              "height": "57.2rpx",
              "top": "100rpx",
              "left": "0",
              "rotate": "",
              "borderRadius": "",
              "borderWidth": "",
              "borderColor": "#000000",
              "shadow": "",
              "padding": "",
              "fontSize": "50rpx",
              "fontWeight": "bold",
              "maxLines": "2",
              "lineHeight": "57.72rpx",
              "textStyle": "fill",
              "textDecoration": "none",
              "fontFamily": "",
              "textAlign": "center"
            }
          },

          {
            "type": "rect",
            "css": {
              "background": "#e5f2fe",
              "width": "350rpx",
              "height": "100rpx",
              "top": "200rpx",
              "left": "200rpx",
              "rotate": "",
              "borderRadius": "10rpx",
              "shadow": "",
              "color": "#e5f2fe"
            }
          },
          {
            "type": "text",
            "text": e.code,
            "css": {
              "color": "#000000",
              "background": "rgba(0,0,0,0)",
              "width": "750rpx",
              "height": "100rpx",
              "top": "215rpx",
              "left": "0",
              "rotate": "",
              "borderRadius": "",
              "borderWidth": "",
              "borderColor": "#000000",
              "shadow": "",
              "padding": "",
              "fontSize": "50rpx",
              "fontWeight": "normal",
              "maxLines": "2",
              "lineHeight": "63.492rpx",
              "textStyle": "fill",
              "textDecoration": "none",
              "fontFamily": "",
              "textAlign": "center"
            }
          },
          {
            "type": "text",
            "text": "好友可在注册时直接填写邀请码",
            "css": {
              "color": "#000000",
              "background": "rgba(0,0,0,0)",
              "width": "750rpx",
              "height": "30rpx",
              "top": "340rpx",
              "left": "0rpx",
              "rotate": "",
              "borderRadius": "",
              "borderWidth": "",
              "borderColor": "#000000",
              "shadow": "",
              "padding": "",
              "fontSize": "30rpx",
              "fontWeight": "normal",
              "maxLines": "2",
              "lineHeight": "30rpx",
              "textStyle": "fill",
              "textDecoration": "none",
              "fontFamily": "",
              "textAlign": "center"
            }
          },
          {
            "type": "qrcode",
            "content": url,
            "css": {
              "color": "#000000",
              "background": "#ffffff",
              "width": "400rpx",
              "height": "400rpx",
              "top": "460rpx",
              "left": "175rpx",
              "rotate": "",
              "borderRadius": ""
            }
          },
          {
            "type": "text",
            "text": "扫描二维码完成邀请注册",
            "css": {
              "color": "#000000",
              "background": "rgba(0,0,0,0)",
              "width": "750rpx",
              "height": "30.6rpx",
              "top": "900rpx",
              "left": "0",
              "rotate": "",
              "borderRadius": "",
              "borderWidth": "",
              "borderColor": "#000000",
              "shadow": "",
              "padding": "",
              "fontSize": "20rpx",
              "fontWeight": "normal",
              "maxLines": "2",
              "lineHeight": "20rpx",
              "textStyle": "fill",
              "textDecoration": "none",
              "fontFamily": "",
              "textAlign": "center"
            }
          },
          {
            "type": "text",
            "text": "长按保存图片",
            "css": {
              "color": "#000000",
              "background": "rgba(0,0,0,0)",
              "width": "750rpx",
              "height": "30.6rpx",
              "top": "1150rpx",
              "left": "0",
              "rotate": "",
              "borderRadius": "",
              "borderWidth": "",
              "borderColor": "#000000",
              "shadow": "",
              "padding": "",
              "fontSize": "16rpx",
              "fontWeight": "normal",
              "maxLines": "2",
              "lineHeight": "16rpx",
              "textStyle": "fill",
              "textDecoration": "none",
              "fontFamily": "",
              "textAlign": "center"
            }
          }

        ]
      }
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

  }
})