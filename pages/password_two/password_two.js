// pages/password_two/password_two.js
import $api from '../../request/api';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    error: '',
    formData: {



    },
    rules: [
      {
        name: 'password',
        rules: { required: true, message: '密码必填' },
      },
      {
        name: 'password_again',
        rules: [{ required: true, message: '请确认密码' }, { equalTo: 'password', message: '密码不一致' }],
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
        $api.getPwd(this.data.formData).then(res => {
          console.log(res);
          if (res.Code === '200') {
            // 登录成功
            wx.showToast({
              title: '修改成功',
              icon: 'success',
              duration: 2000,
            })
            // 设置定时器
            setTimeout(() => {
              // 2秒后跳转到tabbar页面
              wx.switchTab({
                url: '../../pages/my/my',
              });
            }, 2000);

          } else {
            this.setData({
              error: '修改失败'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (val) {
    // 存入手机号和验证码
    this.setData({
      formData: { ...JSON.parse(val.id), get_type: 2 }
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