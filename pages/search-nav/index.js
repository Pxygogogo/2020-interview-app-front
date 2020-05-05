const app = getApp();

Page({
  data: {
    uri: '/api/hot-company',
    isTotal: true,
    hotJobUri: '/api/hot-job',
  },
  methods: {},

  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/index',
    });
  },
});
