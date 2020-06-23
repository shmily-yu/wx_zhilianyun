// pages/cust_info/cust_info.js
import $api from '../../request/api';
var appInst = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj: {},
    list: [
      { name: "手机号", info: "mobile_phone" },
      { name: "注册时间", info: "reg_time" },
      { name: "初步沟通", info: "is_talk" },
      { name: "讲师姓名", info: "teacher_true_name" },
      { name: "讲师培训", info: "is_teachering" },
      { name: "讲师成交状态", info: "is_teachering_end" },
      { name: "踢单员姓名", info: "ti_true_name" },
      { name: "踢单员成交状态", info: "ti_status_msg" },
      { name: "合同", info: "ht_count" }
    ]
  },
  getUser(e) {
    let data = {
      user_id: e,
      mobile_phone: appInst.globalData.mobile_phone
    };
    $api.getUserInfo(data).then(res => {
      console.log(res);

      this.setData({
        obj: res.Response
      })
      let obj = this.data.obj
      let list = this.data.list
      for (let key in obj) {
        for (let item of list) {
          if (item.info == key) {
            item.info = obj[key]; //注意:拿对象的value用obj[]
          }
        }
      }
      this.setData({
        list: list
      })

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e);
    this.getUser(e.id)

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