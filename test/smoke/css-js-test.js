// 检测html文件有没有正常生成
const glob = require('glob-all');

describe('Checking generated css js files', () => {
  it('Should generate css js files', (done) => {
    const files = glob.sync([
      './dist/index_*.css',
      './dist/search_*.css',
      './dist/index_*.js',
      './dist/search_*.js',
    ]);

    if (files.length > 0) {
      done();
    } else {
      throw new Error('no css js files generated');
    }
  });
});
