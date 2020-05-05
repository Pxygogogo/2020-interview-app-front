function generateMD(type = 'single', title, question, answerIndex, choice, analyze) {
  return {
    type,
    title,
    question,
    answerIndex,
    choice,
    analyze,
  };
}

let result = (function () {
  let result = [
    generateMD(
      'single',
      '下面的代码输出是什么？',
      `\`\`\` javascript \n [[0,1],[2,3]]\n\t.reduce(\n\t\t(acc,cur)=>\n\t\t\tacc.concat(cur)\n\t,[1,2]\n\t); \n \`\`\``,
      2,
      ['[0,1,2,3,1,2]', '[6,1,2]', '[1,2,0,1,3]', '[1,2,6]'],
      'reduce 方法接受两个参数，第一个是函数，第二个是acc的初始值，不传入该参数，acc将为数组元素第一个值'
    ),
    generateMD(
      'single',
      '输出是什么？',
      `\`\`\` javascript \nconst person = {name:'Lydia'};\nObject.defineProperty(person,'age',{value:21});\nconsole.log(person);\nconsole.log(Object.keys(person));\n\`\`\`
    `,
      0,
      [
        '{name:"Lydia",age:21},["name","age"]',
        '{name:"Lydia",age:21},["name"]',
        '{name:"Lydia"},["name","age"]',
        '{name:"Lydia"},["age"]',
      ],
      'Object.defineProperty 设置的属性值，默认可遍历，可读，可写，可配置'
    ),
    generateMD(
      'single',
      '哪些方法修改了原数组？',
      `\`\`\` javascript \n["map","filter","find","reduce","slice","splice"]\n\`\`\``,
      3,
      ['All of them', 'map redudce slice splice', 'map slice splice', 'splice'],
      '修改数组元素的方法为 splice'
    ),
    generateMD(
      'single',
      '输出什么',
      `\`\`\` javascript\nclass Bird {\n\tconstructor(){\n\t\tconsole.log("I\'m a bird.")\n\t}\n}\nclass Flamingo extends Brid{\n\tconstructor(){\n\t\tconsole.log("I\'m pink.");\n\t\tsuper();\n\t}\n}\nconst pet = new Flamingo();\n`,
      1,
      ["I'm pink.", "I'm pink. I'm bird.", "I'm bird. I'm pink.", "Nothing , we didn't call any method."],
      '父类构造器的调用晚于 "pink" 的输出'
    ),
    generateMD(
      'single',
      '输出什么？',
      `\`\`\` javascript \nconst add = x => x + x;\nfunction myFunc(num = 2,value = add(num)){\n\tconsole.log(num,value);\n}\nmyFunc();\nmuFunc(3);\n\`\`\` `,
      0,
      ['2 4 and 3 6', '2 Error and 3 Error', '2 4 and 3 4', '2 4 and Error Error'],
      '函数可以指定默认值，如果对应位置没有收到参数，则使用默认值，原理是检测该参数是否严格等于void(0)'
    ),
  ];
  return result;
})();
export default result;
