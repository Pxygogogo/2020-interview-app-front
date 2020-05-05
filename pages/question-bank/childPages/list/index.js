Page({
  data: {
    bct: null,
  },

  onLoad: function ({ keyword }) {
    this.setData({
      bct: require(`./list`)[keyword],
    });
  },
});
