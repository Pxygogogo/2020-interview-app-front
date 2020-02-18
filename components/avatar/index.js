// components/avater/index.js
const app = getApp();
Component({

  properties: {
    uri: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        this.propertiesChange(newVal, oldVal);
      }
    },
    isTotal: Boolean,
  },

  data: {
    model: [],
    showId:0
  },
  methods: {
    async propertiesChange(newVal, oldVal) {
      const res = await app.curl.get(newVal)
      const isTotal = this.properties.isTotal;
      //判断是否过期
      if(res.code===-1){
        wx.removeStorageSync('token')
        wx.showModal({
          title: '登录过期',
          content: '您的登录信息已过期，请重新登录',
          success(res){
            if(res.confirm){
              wx.redirectTo({
                url: '/pages/login/index',
              })
            }else{
              
            }
          }
        }) 
      }
      //判断是否过期完成
      this.setData({
        'model': isTotal ? res.data.data.planCommunitys : res.data.data.planCommunitys.slice(0, 9),
      })
    },
  },

  lifetimes: {
    created() {

    },

    attached() {

    },
    ready() {

    },
  },



})