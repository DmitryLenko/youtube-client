import * as assert from 'assert';
import youToobeRequest from './js/services/search-service';
import 'babel-polyfill';

describe(('youToobeRequest chalenge'), () => {
  it('get api object', () => {
    const handler = 'test';
    const secondrequestpermision = false;

    function foo(data) {
      assert.equal(typeof data, 'object');
      assert.notEqual(typeof data, null);
    }

    const callback = async (responsedata) => {
      foo(responsedata);
    };
    youToobeRequest(handler, secondrequestpermision, callback);
  });
});
