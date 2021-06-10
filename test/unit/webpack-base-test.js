// 编写webpack.base.js的测试用例
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  it('entry', () => {
    assert.ok(baseConfig.entry.index, '/mnt/d/lyCode/jike-webpack/builder-webpack/test/smoke/template/src/index/index.js');
    assert.ok(baseConfig.entry.search, '/mnt/d/lyCode/jike-webpack/builder-webpack/test/smoke/template/src/search/index.js');
  });
});
 