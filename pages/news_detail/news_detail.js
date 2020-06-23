// pages/news_detail/news_detail.js
import $api from '../../request/api'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: Boolean,
    createcode: '',
    mobile_phone: '',
    obj: {},
    list: [],
    content: ''
  },
  getData(e) {
    $api.getDetailData(e).then(res => {
      this.setData({
        obj: res.Response.news_info,
        list: res.Response.rand_news,
        /**
       * 此代码段处理目的为，匹配富文本代码中的 <img> 标签，并将其图片的宽度修改为适应屏幕
       * max-width:100%       --- 图片宽度加以限制，避免超出屏幕
       * height:auto          --- 高度自适应
       * display:block        --- 此代码，可以去掉图片之间的空白间隔
       */
        content: res.Response.news_info.content.replace(/<img/gi, '<img style="max-width:100%;height:auto;display:block" ')
      })
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      createcode: e.createcode,
      mobile_phone: e.mobile_phone
    })
    this.getData(e)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'mobile_phone',
      success: () => {
        this.setData({ flag: false })
        console.log('已登');
      },
      fail: () => {
        this.setData({ flag: true })
        console.log('未登');
      },
    });



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