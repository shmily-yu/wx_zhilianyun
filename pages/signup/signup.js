// pages/signup/signup.js
import $api from '../../request/api';
var app = getApp();

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
        name: 'mobile_phone',
        rules: [{ required: true, message: '手机号必填' }, { mobile: true, message: '手机号格式不对' }]
      },
      {
        name: 'code',
        rules: { required: true, message: '验证码必填' },
      },
      {
        name: 'password',
        rules: { required: true, message: '密码必填' },
      },
      {
        name: 'inviter_id',
        rules: { required: true, message: '邀请码必填' },
      },
      {
        name: 'true_name',
        rules: { required: true, message: '姓名必填' },
      },
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
        $api.getSign(this.data.formData).then(res => {
          if (res.Code === '200') {
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000
            })
            $api.getLogin(
              {
                mobile_phone: this.data.formData.mobile_phone,
                password: this.data.formData.password
              }
            ).then(res => {
              if (res.Code === '200') {
                // 在本地存入手机号和token
                app.set_token(res.Response)
                app.set_phone(this.data.formData.mobile_phone)
                wx.switchTab({
                  url: '../../pages/index/index'
                });
              }
            })
          } else {
            this.setData({
              error: '注册失败！'
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      formData: {
        inviter_id: e.id
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