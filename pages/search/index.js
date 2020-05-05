// pages/search/index.js
const app = getApp();
Page({
  data: {
    model: [],
    showId: Number,
  },

  async handleSearch(e) {
    const res = await app.curl.get('/api/search', { query: e.detail.value, order: 'hot', page: 1 });
    this.setData({
      model: res.data.discussPosts,
    });
  },
  async fetchDiscussMsg(api) {
    const res = await app.curl.get(api);
    this.setData({
      model: res.data.discussPosts,
    });
  },
  handleDiscussInfo(e) {
    const that = this;
    this.setData({
      showId: e.currentTarget.dataset.id,
    });
    wx.navigateTo({
      url: `/pages/discuss-info/index?discussId=${e.currentTarget.dataset.id}`,
      success(res) {
        that.setData({
          showId: 0,
        });
      },
    });
  },
  onLoad() {
    this.fetchDiscussMsg('/api/discuss');
  },
});
