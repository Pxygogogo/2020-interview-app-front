// components/avater/index.js
const app = getApp();
Component({

  properties: {
    uri: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        this.propertiesChange(newVal, oldVal);
      }
    }
  },

  data: {
    model: [],
  },
  methods: { 
    async propertiesChange(newVal, oldVal) {
      const res = await app.curl.get(newVal)
      console.log(res)
      // let data = res.data.planCommunitys.slice(0, 6);
      this.setData({
        'model': res.data.planCommunitys.slice(0, 9),
      })
    },
  },
  
  lifetimes: {
    created(){
      console.log(this.properties.uri)

      // this.fetchCompany();
    },

    attached() {
      
    },
    ready() {
   
    },
  },
 
  
  
})