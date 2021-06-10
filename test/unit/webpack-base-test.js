// 编写webpack.base.js的测试用例
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  it('entry', () => {
    assert.ok(baseConfig.entry.index.indexOf('webpack-builder-demo/test/smoke/template/src/index/index.js') > -1, true);
    assert.ok(baseConfig.entry.search.indexOf('webpack-builder-demo/test/smoke/template/src/search/index.js') > -1, true);
  });
});
 