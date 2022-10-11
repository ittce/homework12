const { createBrowserHistory } = require('./history');

const history = createBrowserHistory();

function someAction() {
  history.push('/home');

  return {
    type: 'NAVIGATE_HOME',
  };
}
module.exports = {
  someAction
}