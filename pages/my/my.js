// pages/my/my.js
var app = getApp();
import $api from '../../request/api'


Page({
  /**
   * 页面的初始数据
   */
  data: {
    obj: {},
    list: [
      {
        img: "icon iconfont icon-tuijian",
        part: "我的推荐",
        info: "count",
        path: "/recommend"
      },
      {
        img: "icon iconfont icon-xiazai",
        part: "我的专属讲师",
        info: " ",
        path: "/teacher"
      },
      {
        img: "icon iconfont icon-13",
        part: "分享",
        info: "dot",
        path: "/share"
      },
      {
        img: "icon iconfont icon-mimasuo",
        part: "密码",
        info: "",
        path: "/change"
      },
      {
        img: "icon iconfont icon-guanyu",
        part: "关于我们",
        info: "",
        path: "/about"
      },
      {
        img: "icon iconfont icon-tuichu",
        part: "退出账户",
        info: { info: "exit" },
        path: "/acc"
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: () => {
    if (app.globalData.mobile_phone) {
      console.log(123);
    } else {
      app.mobile_phone_callback = res => {
        console.log(res);
      }
    }
    // $api.getMyInfo({ mobile_phone: app.globalData.mobile_phone }).then(res => {
    //   console.log(res);
    // });

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