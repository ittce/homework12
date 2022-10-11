
const Router = require('../router');


describe('history校验', () => {
  it('should pass', () => {
    //路由表
    var routes = [{
      id: ''
    }, {
      id: 'index',
      title: '首页'
    }, {
      id: 'next',
      title: '下一页'
    }]

    //路由器
    var router = new Router(routes, 'next');
    expect(router.currentRoute).toBe('next')
  });
});

