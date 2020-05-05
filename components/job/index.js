// components/job/index.js
const app = getApp();
Component({
  properties: {
    hotJobUri: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        this.fetchJob(newVal, oldVal);
      },
    },
  },

  data: {
    model: [],
    showId: 0,
  },
  methods: {
    async fetchJob(newVal, oldVal) {
      const res = await app.curl.get(newVal);
      this.setData({
        model: res.data.jobTags,
      });
    },
    handleJobInfo(e) {
      const id = e.currentTarget.dataset.id;
      const that = this;
      this.setData({
        showId: e.currentTarget.dataset.id,
      });
      wx.navigateTo({
        url: `/pages/company-info/index?id=${id}`,
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
