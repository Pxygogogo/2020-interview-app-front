// pages/company-info/index.js
const app = getApp();

Page({
  data: {
    companyUri: '/api/company-expierence',
    model: [],
    companyName: '',
  },

  async fetchCompanyInfo(id, page = 1) {
    const res = await app.curl.get('/api/company-expierence', { id, page: page || '' });
    this.setData({
      model: res.data.postVos,
      companyName: res.data.name,
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

  onLoad({ id }) {
    this.fetchCompanyInfo(id);
  },
});
