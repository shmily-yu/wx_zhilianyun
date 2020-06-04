App({
  // 小程序初始化
  onLaunch() {
    wx.getStorage({
      key: 'token',
      success: res => {
        this.globalData.token = res.data;
      },
      fail: err => {
        console.log(err);
        // wx.reLaunch({
        //   url: '/pages/acc/acc'
        // })
      }
    })
    wx.getStorage({
      key: 'mobile_phone',
      success: res => {
        this.globalData.mobile_phone = res.data;
        if (this.mobile_phone_callback) {
          this.mobile_phone_callback(res.data)
        }
      },
      fail: err => {
        console.log(err);
        wx.reLaunch({
          url: '/pages/acc/acc'
        })
      }
    })
  },
  // 全局data
  globalData: {
    host: "http://crm.zjzhilianyun.com/api.php/Main",
    token: '',
    mobile_phone: '',
    createcode: ''
  },
  // 存储token
  set_token(val) {
    this.globalData.token = val;
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
    this.globalData.mobile_phone = val;
    wx.removeStorage({
      key: 'mobile_phone'
    }),
      wx.setStorage({
        key: "mobile_phone",
        data: val
      })
  },

})