const app = getApp();

Page({
  data: {
    uri: '/api/hot-company'
  },


  showTab(e) {
    console.log('this i s ');
    console.log(e.detail)
  },

  handleLogin({ detail }) {
    if (!~detail.errMsg.indexOf(':ok')) {
      wx.showModal({
        title: '错误',
        content: '请允许获取用户信息',
        showCancel: false
      });
      return;
    }
    wx.login({
      async success({ code }) {
        const res = await app.curl.post('/auth/login', { code, userInfo: detail.userInfo });
        console.log(res)
        if (res.code === 0) {console.log(res)
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
          const { token, user } = res.data;
          app.user = user;
          wx.setStorageSync('token', token);
        } else {
          wx.showModal({
            title: '错误',
            content: '登录失败',
            showCancel: false
          });
        }
      },
    });
  },

  async handleFetchUserInfo() {
    const res = await app.curl.get('/users/current-user');
    console.log(res);
  },
  onLoad(){
    
  }
})