// 检测html文件有没有正常生成
const glob = require('glob-all');

describe('Checking generated html files', () => {
  it('Should generate html files', (done) => {
    const files = glob.sync([
      './dist/index.html',
      './dist/search.html',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no html files generated');
    }
  });
});
