// pages/more/more.js
var appInst = getApp();
import $api from '../../request/api'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    zx_type: '',
    tabList: [],
    list: [],
    mobile_phone: appInst.globalData.mobile_phone,
    createcode: appInst.globalData.createcode
  },
  onChange(e) {
    this.getData(e.detail.name)
  },
  getType() {
    let data = { mobile_phone: appInst.globalData.mobile_phone }
    $api.getNewType(data).then(res => {
      this.setData({ tabList: res.Response, zx_type: res.Response[0].id })
      this.getData(res.Response[0].id)
    })
  },
  getData(e) {
    let data = { mobile_phone: appInst.globalData.mobile_phone, zx_type: e }
    $api.getListData(data).then(res => {
      this.setData({ list: res.Response })
      if (res.Response.length === 0) {
        wx.showToast({
          title: '暂时没有相关资讯哦',
          icon: 'none',
          duration: 1500,
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getType()
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
      duration: 1500,
    });

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})