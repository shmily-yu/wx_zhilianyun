// component/phone_code/phone_code.js
import $api from '../../request/api'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    phone: {
      type: String
    },
    type: {
      type: Number
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    msg: "获取验证码",
    wait: false,
    clock: 30
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //获取验证码
    getCode() {
      if (this.data.phone.length === 11) {
        $api.getPhoneCode({ mobile_phone: this.data.phone, get_type: this.data.type }).then(() => {
          this.countdown();
          wx.showToast({
            title: '发送成功'
          });
        });
      } else {
        wx.showToast({
          title: '发送失败',
          icon: 'none',
        });

      }
    },
    // 重置倒计时
    countdown() {
      let timer = setInterval(() => {
        this.setData({
          wait: true,
          msg: this.data.clock + '秒后重新获取',
          clock: this.data.clock - 1
        })
        if (this.data.clock <= 0) {
          clearInterval(timer);
          this.setData({
            clock: 30,
            wait: false,
            msg: "重新获取"
          })
        }
      }, 1000);
    }
  },
  created() {
  },

})
