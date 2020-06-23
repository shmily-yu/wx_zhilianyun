// pages/password_one/password_one.js
var appInst = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    error: '',
    formData: {
      mobile_phone: '',
      get_type: 2//修改密码
    },
    rules: [
      {
        name: 'code',
        rules: { required: true, message: '验证码必填' },
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
        let data = JSON.stringify(this.data.formData)
        wx.navigateTo({
          url: `/pages/password_two/password_two?id=${data}`,
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 存入手机号
    this.setData({
      ['formData.mobile_phone']: appInst.globalData.mobile_phone
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