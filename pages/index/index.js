Page({
  data: {
    value: ''
  },
  onLoad: function () {
    wx.request({
      url: 'http://crm.zjzhilianyun.com/api.php/Main/login',
      data: {
        mobile_phone: "13586401416",
        password: "111111",
        get_type: 0
      },
      success: function (res) {
        console.log(res.data.result.Response);
        // wx.setStorage({
        //   key: "token",
        //   data: res.data.result.Response
        // })
        // wx.getStorage({
        //   key: 'token',
        //   success(res) {
        //     console.log(res);
        //   }
        // })

      }
    })
  },
  onSearch() {
    console.log(this.data.value);
  },
})
