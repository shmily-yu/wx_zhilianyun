import $api from '../../request/api'

Page({
    data: {
        value: '',
        flag: false,//没有登录则显示遮罩
        imgList: [],
        text: '',
        list: []
    },
    toNotice() {
        console.log(123);
    },
    onLoad() {
        wx.getStorage({
            key: 'mobile_phone',
            success: res => {
                $api.getHome({ mobile_phone: res.data }).then(res => {
                    this.setData({
                        imgList: res.Response.lunbos,//轮播图
                        text: res.Response.content_text,
                        list: res.Response.news

                    })
                })
            },
            fail: res => {
                console.log(res);
                this.setData({
                    flag: true
                })

            }
        })
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