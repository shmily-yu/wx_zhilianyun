import http from './http.js';
const app = getApp();
const URL = app.globalData.host;
const api = {

    // 首页信息
    getHome(params) {
        return http.post(`${URL}/indexshow`, params);
    },
    // 资讯类型
    getNewType(params) {
        return http.post(`${URL}/newtype`, params);
    },
    // 资讯列表
    getListData(params) {
        return http.post(`${URL}/grtNews`, params);
    },
    // 新闻详情页
    getDetailData(params) {
        return http.post(`${URL}/newsditel`, params);
    },
    // 注册
    getSign(params) {
        return http.post(`${URL}/register`, params);
    },
    // 获取验证码
    getPhoneCode(params) {
        return http.post(`${URL}/registerphonecode`, params);
    },
    // 登录接口
    getLogin(params) {
        return http.post(`${URL}/login`, params);
    },
    // 修改登录密码
    getPwd(params) {
        return http.post(`${URL}/save_pwd`, params);
    },
    // 我的专属讲师
    getTeacher(params) {
        return http.post(`${URL}/myownteacher`, params);
    },
    // 客户信息
    getUserInfo(params) {
        return http.post(`${URL}/userinfo`, params);
    },
    // 我的推荐
    getMyInvite(params) {
        return http.post(`${URL}/myinviter`, params);
    },
    // 分享
    getShare(params) {
        return http.post(`${URL}/sharecode`, params);
    },
    // 我的信息
    getMyInfo(params) {
        return http.post(`${URL}/mypersonalinfo`, params);
    },
    // 关于我们
    getAboutUs(params) {
        return http.post(`${URL}/aboutus`, params);
    },
    //修改沟通状态
    getStatus(params) {
        return http.post(`${URL}/change_status`, params);
    },
    //搜索
    getSearch(params) {
        return http.post(`${URL}/grtNews_search`, params);
    },
    //公告
    getNoticeId(params) {
        return http.post(`${URL}/norcieinfo`, params);
    }

}
export default api;