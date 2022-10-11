const { someAction } = require('../action');
const { createBrowserHistory, History } =  require('history');

jest.mock('history', () => {
  const mHistory = ({ push: jest.fn() });
  return {
    createBrowserHistory: jest.fn(() => mHistory),
  };
});
const mCreateBrowserHistory = createBrowserHistory;

describe('history校验', () => {
  it('should pass', () => {
    const mHistory = mCreateBrowserHistory();
    const actual = someAction();
    expect(actual).toEqual({ type: 'NAVIGATE_HOME' });
    expect(createBrowserHistory).toBeCalledTimes(2);
    expect(mHistory.push).toBeCalledWith('/home');
  });
});