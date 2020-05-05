// components/article/index.js
const app = getApp();
Component({
  properties: {
    articleUri: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        this.fetchDiscussMsg(newVal, oldVal);
      },
    },
    page: Number,
  },

  data: {
    model: [],
    showId: 0,
  },

  methods: {
    async fetchDiscussMsg(newVal, oldVal) {
      const res = await app.curl.get(newVal);
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
  },

  lifetimes: {
    created() {},

    attached() {},
    ready() {},
  },
});
