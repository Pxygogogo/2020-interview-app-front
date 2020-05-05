// pages/info/index.js
const app = getApp();
Page({
  data: {
    model: {
      createTime: Number,
    },
    content: '',
  },
  methods: {
    handleShare() {},
    handleMore() {},
  },
  goToIndex() {
    wx.switchTab({
      url: '/pages/index/index',
    });
  },
  async fetchDiscussInfo(discussId) {
    const res = await app.curl.get('/api/discuss-info', { discussId });
    this.setData({
      model: res.data,
      'model.createTime':
        new Date(res.data.createTime).toLocaleDateString() + ' ' + new Date(res.data.createTime).toLocaleTimeString(),
    });
  },

  onLoad({ discussId }) {
    this.fetchDiscussInfo(discussId);
  },
});
