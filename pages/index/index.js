import api from '../../request/api.js'
Page({
  data: {
    value: '',
    d: {
      mobile_phone: "13586401416",
      password: "111111",
      get_type: 0
    },
  },
  onLoad: function () {
    api.getLogin({
      mobile_phone: "13586401416",
      password: "111111",
      get_type: 0
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })

  },
  onSearch() {
    console.log(this.data.value);
  },
})
