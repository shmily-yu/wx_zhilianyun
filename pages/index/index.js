import $api from '../../request/api'
var app = getApp();

Page({
    data: {
        value: '',
        imgList: [],
        text: '',
        list: [],
        mobile_phone: '',
        createcode: ''
    },
    toNotice() {
        wx.navigateTo({
            url: '../notice/notice'
        });
    },
    onSearch(e) {
        console.log(e.detail);
        wx.navigateTo({
            url: '../search/search'
        });
    },

    getData(data) {
        // 获取首页数据
        $api.getHome({ mobile_phone: data }).then(res => {
            this.setData({
                imgList: res.Response.lunbos,//轮播图
                text: res.Response.content_text,
                list: res.Response.news,
                mobile_phone: data
            })
        })
        // 获取邀请码
        $api.getShare({ mobile_phone: data }).then(res => {
            app.globalData.createcode = res.Response.createcode
            // 存入邀请码
            this.setData({
                createcode: res.Response.createcode
            })
        })
    },
    onLoad() {
        if (app.globalData.mobile_phone) {
            console.log('已存在');
            this.getData(app.globalData.mobile_phone)
        } else {
            console.log('不存在，再拿');
            app.mobile_phone_callback = res => {
                this.getData(res)
            }
        }

    },
    onReady: function () {
    },
    onShow: function () {



    },
    onHide: function () {


    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },
    onPageScroll: function () {

    },
    //item(index,pagePath,text)
    onTabItemTap: function (item) {

    }
});