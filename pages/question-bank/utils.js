export function navigateTo(url) {
  return new Promise((resolve, reject) => {
    wx.navigateTo({
      url,
      success: resolve,
      fail: reject,
    });
  });
}
export function navigateBack() {
  return new Promise((resolve, reject) => {
    wx.navigateBack({
      fail: reject,
      success: resolve,
    });
  });
}
export function redirectTo(url) {
  return new Promise((resolve, reject) => {
    wx.redirectTo({
      url,
      fail: reject,
      success: resolve,
    });
  });
}
export function showToast(title, icon = 'success', duration = 1400) {
  return new Promise((resolve) => {
    wx.showToast({
      title,
      icon,
      duration,
    });
    setTimeout(resolve, duration);
  });
}
/**
 *
 * @param {array} answer
 * @param {number} length
 */
export function validateAnswer(answer, length) {
  if (answer.length !== length) return '请回答完全';
  for (let value of answer) if (value < 0 || value > 4) return '开发错误';
  return true;
}
