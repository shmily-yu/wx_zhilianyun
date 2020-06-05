// pages/notice/notice.js
import $api from '../../request/api'
var appInst = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice_id: '',
    mobile_phone: appInst.globalData.mobile_phone,
    obj: {},
    content: ''
  },
  getData() {
    let data = {
      notice_id: this.data.notice_id,
      mobile_phone: appInst.globalData.mobile_phone
    }
    $api.getNoticeId(data).then(res => {
      this.setData({
        obj: res.Response,
        content: res.Response.content.replace(/<img/gi, '<img style="max-width:100%;height:auto;display:block" ')
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opt) {
    this.setData({ notice_id: opt.id })
    this.getData()

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