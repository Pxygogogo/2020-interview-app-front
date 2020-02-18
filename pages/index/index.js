const app = getApp();

Page({
  data: {
    // uri: '\/hot-company',
    uri: '/api/hot-company',
    isTotal:false,
    articleUri:'/api/discuss',
    page:1
  },

  methods:{
    
  },

  
  goToMore() {
    wx.switchTab({
      url: '/pages/search-nav/index',
    })
  },
  
  // onLoad(){
  //   this.fetchDiscussMsg(1);
  // }
})