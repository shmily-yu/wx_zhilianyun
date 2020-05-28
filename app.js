App({
  onLaunch() {
    wx.getStorage({
      key: 'token',
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
        wx.navigateTo({
          url: "/pages/acc/acc"
        })

      }
    })
  },
  globalData: {
    host: "http://crm.zjzhilianyun.com/api.php/Main",
    token: '',
    mobile_phone: ''

  }
})