// pages/search/search.js
import $api from '../../request/api'
var appInst = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    list: [],
    createcode: appInst.globalData.createcode,
    mobile_phone: appInst.globalData.mobile_phone
  },
  onSearch(e) {
    this.setData({
      value: e.detail,
      list: []
    })
    this.getData()
  },
  getData() {
    let data = { mobile_phone: appInst.globalData.mobile_phone, new_title: this.data.value }
    $api.getSearch(data).then(res => {
      console.log(res);
      this.setData({ list: res.Response })
      if (res.Response.length === 0) {
        wx.showToast({
          title: '没有相关资讯',
          icon: 'none',
          duration: 1500
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (val) {
    this.setData({
      value: val.id
    })
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
    wx.showToast({
      title: '没有更多了',
      icon: 'none',
      duration: 1000
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})