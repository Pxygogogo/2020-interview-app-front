import { BASE_URL } from '../config.js';

const request = (method, uri, data) => {
  const token = wx.getStorageSync('token');
  // console.log('get token', token);
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${uri}`,
      data,
      header: {
        Authorization: `Bearer ${token}`,
      },
      method,
      success(res) {
        resolve(res.data);
      },
      fail: resolve,
    });
  });
};
export const get = (uri, data) => request('GET', uri, data);
export const post = (uri, data) => request('POST', uri, data);
export const put = (uri, data) => request('PUT', uri, data);
export const del = (uri, data) => request('DELETE', uri, data);

