import questions from './md';
import { validateAnswer, showToast, navigateBack, redirectTo } from '../../utils';
Page({
  data: {
    completed: false,
    analyzed: false,
    tag: 0, // question index
    questions,
    charMap: {
      0: 'A',
      1: 'B',
      2: 'C',
      3: 'D',
    },
    answer: [],
    complete_answer: '',
    complete_result: '',
  },

  onLoad: function ({ analyzed = false, answer = '', result, completed = false }) {
    this.setData({
      complete_answer: answer || '',
      complete_result: result || '',
      answer: answer.split(''),
      analyzed,
      completed,
    });
  },

  go({ currentTarget }) {
    let { direction } = currentTarget.dataset;
    let { tag } = this.data;
    if (~direction && tag < questions.length - 1)
      this.setData({
        tag: tag + 1,
      });
    else if (!~direction && tag > 0)
      this.setData({
        tag: tag - 1,
      });
  },

  confirm({ currentTarget }) {
    let { tag, answer, analyzed } = this.data;
    let { index } = currentTarget.dataset;
    answer[tag] = index;
    let that = this;
    if (!analyzed) {
      this.setData({
        answer,
      });
      setTimeout(() => {
        that.setData({
          tag: tag < questions.length - 1 ? tag + 1 : tag,
        });
      }, 400);
    }
  },

  submit() {
    let { answer, questions } = this.data;
    let msg = validateAnswer(answer, questions.length);
    let result = [];
    if (msg === true) {
      for (let question of questions) result.push(question.answerIndex);

      showToast('提交成功', 'success', 500).then(() => {
        this.setData({
          complete_answer: answer.join(''),
          complete_result: result.join(''),
          completed: true,
        });
      });
    } else showToast(msg, 'none');
  },

  back() {
    navigateBack();
  },

  reTo({ currentTarget }) {
    let { url } = currentTarget.dataset;
    let { complete_answer, complete_result } = this.data;

    redirectTo(`${url}?answer=${complete_answer}&result=${complete_result}&analyzed=true&completed=true`);
  },
});
