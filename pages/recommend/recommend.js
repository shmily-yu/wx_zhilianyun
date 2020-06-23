// pages/recommend/recommend.js
var app = getApp();
import $api from '../../request/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums_all: "",
    talk_nums_all: "",
    typeIndex: 0,
    type: ["全部", "已沟通", "未沟通"],
    list: []
  },
  // 修改状态
  changeStatus(e) {
    let data = { mobile_phone: this.mobile_phone, user_id: id };
    this.$api.getStatus(data).then(res => {
      if (res) {
        this.$toast.success("已沟通");
        this.getData();
      }
    });
  },
  // tab切换
  changType(e) {
    this.setData({
      typeIndex: e.currentTarget.dataset.index
    })
  },
  getData(val) {
    let data = { mobile_phone: val };
    $api.getMyInvite(data).then(res => {
      this.setData({
        nums_all: res.Response.nums_all,
        talk_nums_all: res.Response.nums_all,
        list: [
          { name: "all_infos", list: res.Response.all_infos },//全部
          { name: "no_talk_infos", list: res.Response.no_talk_infos },//未沟通
          { name: "in_talk_infos", list: res.Response.in_talk_infos }//已沟通
        ]
      })
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(app.globalData.mobile_phone)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this);

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