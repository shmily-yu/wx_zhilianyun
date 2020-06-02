App({
  // 小程序初始化
  onLaunch() {
    wx.getStorage({
      key: 'token',
      success: res => {
        this.globalData.token = res.data
      }
    })
    wx.getStorage({
      key: 'mobile_phone',
      success: res => {
        this.globalData.mobile_phone = res.data;
        // 解决页面onload比app.js onlaunch请求快 设置回调
        // callback 那个单词是自己命名就可以，但是需要和页面page里名字一致。
        if (this.mobile_phone_callback) {
          this.mobile_phone_callback(res.data)
        }
      }
    })
  },
  // 全局data
  globalData: {
    host: "http://crm.zjzhilianyun.com/api.php/Main",
    token: '',
    mobile_phone: ''
  },
  // 存储token
  set_token(val) {
    wx.removeStorage({
      key: 'token'
    }),
      wx.setStorage({
        key: "token",
        data: val
      })
  },
  // 存储手机号
  set_phone(val) {
    wx.removeStorage({
      key: 'mobile_phone'
    }),
      wx.setStorage({
        key: "mobile_phone",
        data: val
      })
  },

})