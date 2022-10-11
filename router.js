function Router(routes, defaultRoute) {
  //TODO
}

//初始化，可多次初始化
Router.prototype.init = function(routes, defaultRoute) {
  //TODO
  this.currentRoute
  this.oldRoute
}

//切换路由
Router.prototype.push = function(route, callback) {
  //TODO
}

//前进
Router.prototype.forward = function () {
  history.forward();
}

//后退
Router.prototype.back = function () {
  history.back();
}

//切换页面：route为字符串，为空则隐藏所有路由
Router.prototype.changePage = function(route) {
  //TODO
}

module.exports = Router