const generate = (question, test = null, lang = 'text') => ({
  question,
  test: test ? (lang ? `\`\`\`${lang}\n${test}\n\`\`\`` : test) : null,
});

let bct = [
  generate(
    '将数组扁平化并取出其中重复数据，最终得到一个升序且不重复数组',
    'var arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[14]]],10]',
    'javascript'
  ),
  generate('介绍下深度优先遍历和广度优先遍历，如何实现'),
  generate('请分别用深度优先思想和广度优先思想实现一个拷贝函数'),
  generate('情人节福利题，如何实现一个new'),
  generate(
    '改造下面的代码，使之输出0-9，写出你能想到的所有解法',
    'for(var i = 0; i < 10;i ++){\n\t setTimeout(()=>{\n\t\tconsole.log(i);\n\t},1000)\n}',
    'javascript'
  ),
];

export { bct };
