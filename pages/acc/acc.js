import $api from '../../request/api';
var app = getApp();
Page({
  data: {
    error: '',
    formData: {
      get_type: 0
    },
    rules: [
      {
        name: 'mobile_phone',
        rules: [{ required: true, message: '手机号必填' }, { mobile: true, message: '手机号格式不对' }]
      },
      {
        name: 'password',
        rules: { required: true, message: '密码必填' },
      }
    ]
  },
  // 键盘输入时触发
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
  },
  // 表单提交
  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        $api.getLogin(this.data.formData).then(res => {
          console.log(res);
          if (res.Code === '200') {
            // 在本地存入手机号和token
            app.set_token(res.Response)
            app.set_phone(this.data.formData.mobile_phone)
            // 修改app.js里公共数据
            app.globalData.token = res.Response
            app.globalData.mobile_phone = this.data.formData.mobile_phone
            // 登录成功
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            })
            //关闭所有页面，打开到应用内的某个页面
            wx.reLaunch({
              url: '/pages/index/index'
            })
            // 显示 tabBar
            wx.showTabBar()
          } else {
            wx.showToast({
              title: res.Msg,
              icon: 'none',
              duration: 2000
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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