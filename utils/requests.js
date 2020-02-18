import { BASE_URL } from '../config.js';

const request = (method, uri, data) => {
  const token = wx.getStorageSync('token');
  // console.log('get token', token);
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${uri}`,
      data,
      header: {
        Authorization: `Bearer ${token}`
      },
      method,
      success(res) {
        resolve(res.data);
      },
      fail: resolve,
    });
  });
}

export default {
  get: (uri, data) => request('GET', uri, data),
  post: (uri, data) => request('POST', uri, data),
  put: (uri, data) => request('PUT', uri, data),
  delete: (uri, data) => request('DELETE', uri, data),
};
