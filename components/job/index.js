// components/job/index.js
const app = getApp();
Component({

  properties: {
    hotJobUri:{
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        this.fetchJob(newVal, oldVal);
      }
    }
  },

  data: {
    model: [],
    showId:0
  },
  methods: {
    async fetchJob(newVal, oldVal){
      const res = await app.curl.get(newVal);
      this.setData({
        'model':res.data.jobTags
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