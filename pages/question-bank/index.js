import { navigateTo, showToast } from './utils';

Page({
  data: {
    items: [
      {
        name: '选择题',
        type: 'radio',
        keyword: 'xzt',
      },
      {
        name: '编程题',
        type: 'list',
        keyword: 'bct',
      },
      {
        name: '算法题',
        type: 'list',
        keyword: 'sft',
      },
      {
        name: 'JS基础',
        type: 'list',
        keyword: 'js',
      },
      {
        name: 'Vue',
        type: 'list',
        keyword: 'vue',
      },
      {
        name: 'React',
        type: 'list',
        keyword: 'react',
      },
    ],
    clock: false,
    touched: false,
    tommorrow: new Date().setHours(24),
    hour: '',
    min: '',
    sec: '',
  },
  onLoad() {
    this.calcTime();
    setInterval(this.calcTime, 1000);
  },
  calcTime() {
    let tommorrow = this.data.tommorrow;
    let time = tommorrow - Date.now();
    let hour = time / 1000 / 60 / 60;
    let min = (hour % 1) * 60;
    let sec = (min % 1) * 60;
    this.setData({
      hour: hour | 0,
      min: min | 0,
      sec: sec | 0,
    });
  },
  log() {
    const that = this;
    let { clock } = this.data;
    if (!clock) {
      showToast('打卡成功', 'success', 700).then(() => {
        that.setData({
          touched: false,
          clock: true,
        });
      });
    }
  },
  linkTo({ target }) {
    const { dataset } = target;
    const { type, keyword } = dataset;
    navigateTo(`./childPages/${type}/index?keyword=${keyword}`).catch((e) => {
      console.log(e);
      showToast('先试试其他的题？', 'none');
    });
  },
  touchStart() {
    const that = this;
    let { touched } = this.data;
    that.setData({
      touched: !touched,
    });
  },
});
